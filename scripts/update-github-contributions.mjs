import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const login = process.env.GITHUB_LOGIN || "yusufky63";
const token = process.env.GITHUB_TOKEN || getGhToken();
const outputPath = path.join(
  process.cwd(),
  "src",
  "data",
  "github-contributions.json",
);

function getGhToken() {
  try {
    return execFileSync("gh", ["auth", "token"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}

if (!token) {
  throw new Error("Missing GITHUB_TOKEN and gh auth token is unavailable.");
}

const query = `
  query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      login
      createdAt
      contributionsCollection(from: $from, to: $to) {
        restrictedContributionsCount
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

const to = new Date();
const from = new Date(to);
from.setUTCDate(from.getUTCDate() - 371);

const recentPayload = await fetchContributionRange(from, to);
const user = recentPayload.data.user;
const collection = user.contributionsCollection;
const calendar = collection.contributionCalendar;
const days = calendar.weeks.flatMap((week) => week.contributionDays);
const activeDays = days.filter((day) => day.contributionCount > 0).length;
const longestStreak = getLongestStreak(days);
const createdYear = new Date(user.createdAt).getUTCFullYear();
const currentYear = to.getUTCFullYear();
const yearly = [];

for (let year = createdYear; year <= currentYear; year += 1) {
  const yearFrom = new Date(Date.UTC(year, 0, 1));
  const yearTo =
    year === currentYear ? to : new Date(Date.UTC(year, 11, 31, 23, 59, 59));
  const payload = await fetchContributionRange(yearFrom, yearTo);
  const yearCollection = payload.data.user.contributionsCollection;
  const yearCalendar = yearCollection.contributionCalendar;
  const yearDays = yearCalendar.weeks.flatMap((week) => week.contributionDays);

  yearly.push({
    year,
    from: yearFrom.toISOString().slice(0, 10),
    to: yearTo.toISOString().slice(0, 10),
    totalContributions: yearCalendar.totalContributions,
    restrictedContributionsCount: yearCollection.restrictedContributionsCount,
    activeDays: yearDays.filter((day) => day.contributionCount > 0).length,
    longestStreak: getLongestStreak(yearDays),
    weeks: yearCalendar.weeks,
  });
}

const data = {
  login: user.login,
  updatedAt: to.toISOString(),
  from: from.toISOString().slice(0, 10),
  to: to.toISOString().slice(0, 10),
  totalContributions: calendar.totalContributions,
  restrictedContributionsCount: collection.restrictedContributionsCount,
  activeDays,
  longestStreak,
  yearly,
  weeks: calendar.weeks,
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(data, null, 2)}\n`);
console.log(
  `Wrote ${outputPath} (${data.totalContributions} contributions, ${data.activeDays} active days)`,
);

function getLongestStreak(days) {
  let longest = 0;
  let current = 0;

  for (const day of days) {
    if (day.contributionCount > 0) {
      current += 1;
      longest = Math.max(longest, current);
    } else {
      current = 0;
    }
  }

  return longest;
}

async function fetchContributionRange(fromDate, toDate) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        login,
        from: fromDate.toISOString(),
        to: toDate.toISOString(),
      },
    }),
  });

  const payload = await response.json();

  if (!response.ok || payload.errors?.length) {
    throw new Error(JSON.stringify(payload.errors || payload, null, 2));
  }

  return payload;
}
