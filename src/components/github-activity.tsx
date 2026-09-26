import contributionData from "@/data/github-contributions.json";
import {
  GitHubActivityPanel,
  type CompactWeek,
  type ContributionRange
} from "@/components/github-activity-panel";

// This file is a server component: the full contribution JSON stays on the
// server and only the compact ranges below reach the browser.

type RawDay = {
  date: string;
  contributionCount: number;
  contributionLevel: string;
  weekday: number;
};

type RawWeek = {
  contributionDays: RawDay[];
};

const EARLIEST_YEAR = 2022;

const levelIndex: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4
};

function compactWeeks(weeks: RawWeek[]): CompactWeek[] {
  return weeks.map((week) =>
    week.contributionDays.map((day) => [
      day.date,
      day.contributionCount,
      levelIndex[day.contributionLevel] ?? 0,
      day.weekday
    ])
  );
}

// Dates are formatted in UTC so the label never depends on the build
// machine's or the visitor's time zone.
function formatDate(value: string, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en", { ...options, timeZone: "UTC" }).format(
    new Date(value)
  );
}

const monthYear: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric"
};

const ranges: ContributionRange[] = [
  {
    key: "recent",
    label: "Last 12 months",
    rangeLabel: `${formatDate(contributionData.from, monthYear)} - ${formatDate(
      contributionData.to,
      monthYear
    )}`,
    totalContributions: contributionData.totalContributions,
    activeDays: contributionData.activeDays,
    longestStreak: contributionData.longestStreak,
    weeks: compactWeeks(contributionData.weeks)
  },
  ...contributionData.yearly
    .filter(
      (year) => year.totalContributions > 0 && year.year >= EARLIEST_YEAR
    )
    .slice()
    .reverse()
    .map((year) => ({
      key: String(year.year),
      label: String(year.year),
      rangeLabel: String(year.year),
      totalContributions: year.totalContributions,
      activeDays: year.activeDays,
      longestStreak: year.longestStreak,
      weeks: compactWeeks(year.weeks)
    }))
];

const updatedLabel = formatDate(contributionData.updatedAt, {
  month: "short",
  day: "2-digit",
  year: "numeric"
});

export function GitHubActivity() {
  return (
    <GitHubActivityPanel
      login={contributionData.login}
      ranges={ranges}
      updatedLabel={updatedLabel}
    />
  );
}
