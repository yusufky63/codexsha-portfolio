// Refreshes the two GitHub snapshots the site is built from:
//   src/data/github-activity.json  contribution calendar, one compact range per year
//   src/data/github-repos.json     public, non-fork repositories and repository counts
// Private repositories contribute a count only; none of their names or details are written.
import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const login = process.env.GITHUB_LOGIN || "yusufky63";
const token = process.env.GITHUB_TOKEN || ghToken();
const dataDir = path.join(process.cwd(), "src", "data");

function ghToken() {
  try {
    return execFileSync("gh", ["auth", "token"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
  } catch {
    return "";
  }
}

if (!token) {
  throw new Error("Missing GITHUB_TOKEN and gh auth token is unavailable.");
}

async function graphql(query, variables) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, variables })
  });
  const payload = await response.json();
  if (!response.ok || payload.errors?.length) {
    throw new Error(JSON.stringify(payload.errors || payload, null, 2));
  }
  return payload.data;
}

const LEVELS = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4
};

const calendarQuery = `
  query Calendar($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      createdAt
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
              weekday
            }
          }
        }
      }
    }
  }
`;

function longestStreak(days) {
  let longest = 0;
  let current = 0;
  for (const day of days) {
    current = day.contributionCount > 0 ? current + 1 : 0;
    longest = Math.max(longest, current);
  }
  return longest;
}

async function range(key, label, from, to) {
  const data = await graphql(calendarQuery, {
    login,
    from: from.toISOString(),
    to: to.toISOString()
  });
  const calendar = data.user.contributionsCollection.contributionCalendar;
  const days = calendar.weeks.flatMap((week) => week.contributionDays);

  return {
    createdAt: data.user.createdAt,
    range: {
      key,
      label,
      from: days[0].date,
      to: days[days.length - 1].date,
      total: calendar.totalContributions,
      activeDays: days.filter((day) => day.contributionCount > 0).length,
      longestStreak: longestStreak(days),
      // Weekday of the first day, so the grid can start mid-week.
      offset: days[0].weekday,
      counts: days.map((day) => day.contributionCount),
      levels: days.map((day) => LEVELS[day.contributionLevel] ?? 0).join("")
    }
  };
}

const now = new Date();
const yearAgo = new Date(now);
yearAgo.setUTCDate(yearAgo.getUTCDate() - 364);

const recent = await range("recent", "Last 12 months", yearAgo, now);
const ranges = [recent.range];
const firstYear = new Date(recent.createdAt).getUTCFullYear();

for (let year = now.getUTCFullYear(); year >= firstYear; year -= 1) {
  const from = new Date(Date.UTC(year, 0, 1));
  const to = year === now.getUTCFullYear() ? now : new Date(Date.UTC(year, 11, 31, 23, 59, 59));
  const { range: yearly } = await range(String(year), String(year), from, to);
  // Years with nothing in them would only be empty grids.
  if (yearly.total > 0) ranges.push(yearly);
}

const reposQuery = `
  query Repos($login: String!, $after: String) {
    user(login: $login) {
      private: repositories(ownerAffiliations: OWNER, isFork: false, privacy: PRIVATE) {
        totalCount
      }
      repositories(
        first: 100
        after: $after
        ownerAffiliations: OWNER
        isFork: false
        privacy: PUBLIC
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          name
          description
          url
          homepageUrl
          stargazerCount
          createdAt
          pushedAt
          isArchived
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;

const repos = [];
let privateCount = 0;
let publicCount = 0;
let after = null;
do {
  const data = await graphql(reposQuery, { login, after });
  privateCount = data.user.private.totalCount;
  publicCount = data.user.repositories.totalCount;
  for (const node of data.user.repositories.nodes) {
    repos.push({
      name: node.name,
      description: node.description || null,
      url: node.url,
      homepage: node.homepageUrl || null,
      stars: node.stargazerCount,
      language: node.primaryLanguage?.name ?? null,
      createdAt: node.createdAt.slice(0, 10),
      pushedAt: node.pushedAt.slice(0, 10),
      archived: node.isArchived
    });
  }
  after = data.user.repositories.pageInfo.hasNextPage ? data.user.repositories.pageInfo.endCursor : null;
} while (after);

await mkdir(dataDir, { recursive: true });
await writeFile(
  path.join(dataDir, "github-activity.json"),
  `${JSON.stringify({ login, updatedAt: now.toISOString(), ranges })}\n`
);
await writeFile(
  path.join(dataDir, "github-repos.json"),
  `${JSON.stringify({ login, updatedAt: now.toISOString(), publicCount, privateCount, repos }, null, 2)}\n`
);

console.log(
  `activity: ${ranges.length} ranges, ${recent.range.total} contributions in the last 12 months; repos: ${publicCount} public, ${privateCount} private`
);
