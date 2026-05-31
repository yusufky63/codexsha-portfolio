"use client";

import { useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import contributionData from "@/data/github-contributions.json";
import { GitHubMark } from "@/components/social-icons";

type ContributionDay = {
  date: string;
  contributionCount: number;
  contributionLevel: string;
  weekday: number;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionRange = {
  key: string;
  label: string;
  rangeLabel: string;
  totalContributions: number;
  restrictedContributionsCount: number;
  activeDays: number;
  longestStreak: number;
  weeks: ContributionWeek[];
};

const levelClassNames: Record<string, string> = {
  NONE: "bg-[#1a1a1a]",
  FIRST_QUARTILE: "bg-[#343434]",
  SECOND_QUARTILE: "bg-[#5a5a5a]",
  THIRD_QUARTILE: "bg-[#949494]",
  FOURTH_QUARTILE: "bg-[#d6d6d6]"
};

export function GitHubActivity() {
  const ranges = useMemo<ContributionRange[]>(
    () => [
      {
        key: "recent",
        label: "Last 12 months",
        rangeLabel: `${formatMonthYear(contributionData.from)} - ${formatMonthYear(
          contributionData.to
        )}`,
        totalContributions: contributionData.totalContributions,
        restrictedContributionsCount:
          contributionData.restrictedContributionsCount,
        activeDays: contributionData.activeDays,
        longestStreak: contributionData.longestStreak,
        weeks: contributionData.weeks
      },
      ...contributionData.yearly
        .filter((year) => year.totalContributions > 0 && year.year >= 2022)
        .slice()
        .reverse()
        .map((year) => ({
          key: String(year.year),
          label: String(year.year),
          rangeLabel: String(year.year),
          totalContributions: year.totalContributions,
          restrictedContributionsCount: year.restrictedContributionsCount,
          activeDays: year.activeDays,
          longestStreak: year.longestStreak,
          weeks: year.weeks
        }))
    ],
    []
  );
  const [selectedKey, setSelectedKey] = useState(ranges[0]?.key ?? "recent");
  const [open, setOpen] = useState(false);
  const selectedRange =
    ranges.find((range) => range.key === selectedKey) ?? ranges[0];

  const updatedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(new Date(contributionData.updatedAt));

  return (
    <section className="py-8" id="activity">
      <div className="overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#171717]">
        <div className="grid gap-3 border-b border-[#252525] px-4 py-3 md:grid-cols-[minmax(0,1fr)_170px] md:items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-8 items-center justify-center rounded-md border border-[#303030] bg-[#202020] text-[#d7d7d7]">
              <GitHubMark className="size-3.5" />
            </span>
            <div>
              <h2 className="text-base font-medium text-[#e6e6e6]">
                GitHub Activity
              </h2>
              <p className="mt-0.5 text-[12px] text-[#7d7d7d]">
                Public-safe activity for @{contributionData.login}. Private work
                is counted only as totals.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6f6f6f]">
              Range
            </span>
            <button
              aria-expanded={open}
              aria-label="GitHub activity range"
              className="flex h-9 items-center justify-between rounded-md border border-[#303030] bg-[#1b1b1b] px-2.5 font-mono text-[11px] text-[#d7d7d7] outline-none transition-colors hover:border-[#444] focus:border-[#666]"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              <span>{selectedRange.label}</span>
              <ChevronDown className="size-3 text-[#8a8a8a]" />
            </button>
            {open ? (
              <div className="absolute right-0 top-full z-30 mt-1 max-h-52 w-full overflow-y-auto rounded-md border border-[#303030] bg-[#171717] shadow-2xl shadow-black/30">
                {ranges.map((range) => {
                  const selected = range.key === selectedRange.key;

                  return (
                    <button
                      className={`flex w-full items-center justify-between px-2.5 py-2 text-left font-mono text-[11px] transition-colors ${
                        selected
                          ? "bg-[#242424] text-[#e6e6e6]"
                          : "text-[#8a8a8a] hover:bg-[#202020] hover:text-[#e6e6e6]"
                      }`}
                      key={range.key}
                      onClick={() => {
                        setSelectedKey(range.key);
                        setOpen(false);
                      }}
                      type="button"
                    >
                      <span>{range.label}</span>
                      {selected ? <Check className="size-3" /> : null}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>

        <div className="px-4 py-4">
          <ContributionGrid weeks={selectedRange.weeks} />
          <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-md border border-[#252525] bg-[#181818] md:grid-cols-4">
            <ActivityStat
              label="contributions"
              value={selectedRange.totalContributions}
            />
            <ActivityStat
              label="private counted"
              value={selectedRange.restrictedContributionsCount}
            />
            <ActivityStat label="active days" value={selectedRange.activeDays} />
            <ActivityStat
              label="longest streak"
              value={selectedRange.longestStreak}
            />
          </div>
        </div>

        <div className="border-t border-[#252525] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6f6f6f]">
          {selectedRange.rangeLabel} / Updated {updatedDate}
        </div>
      </div>
    </section>
  );
}

function ContributionGrid({ weeks }: { weeks: ContributionWeek[] }) {
  const visibleWeeks = weeks
    .map((week) => ({
      contributionDays: week.contributionDays.filter(
        (day) => new Date(`${day.date}T00:00:00Z`) <= new Date()
      )
    }))
    .filter((week) => week.contributionDays.length > 0);

  return (
    <div className="self-start">
      <div
        className="grid gap-[3px]"
        style={{
          gridTemplateColumns: `repeat(${visibleWeeks.length}, minmax(0, 1fr))`
        }}
      >
        {visibleWeeks.map((week, weekIndex) => (
          <div className="grid grid-rows-7 gap-[3px]" key={weekIndex}>
            {week.contributionDays.map((day) => (
              <span
                aria-label={`${day.date}: ${day.contributionCount} contributions`}
                className={`aspect-square w-full rounded-[2px] border border-[#242424] ${
                  levelClassNames[day.contributionLevel] ??
                  levelClassNames.NONE
                }`}
                key={day.date}
                title={`${day.date}: ${day.contributionCount} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivityStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-b border-r border-[#242424] p-3 even:border-r-0 md:border-b-0 md:even:border-r md:last:border-r-0">
      <p className="font-mono text-xl text-[#e6e6e6]">{value}</p>
      <p className="mt-1 text-[11px] text-[#7d7d7d]">{label}</p>
    </div>
  );
}

function formatMonthYear(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}
