"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GitHubMark } from "@/components/social-icons";

/** [date, contributionCount, level 0-4, weekday 0-6] */
export type CompactDay = [string, number, number, number];
export type CompactWeek = CompactDay[];

export type ContributionRange = {
  key: string;
  label: string;
  rangeLabel: string;
  totalContributions: number;
  activeDays: number;
  longestStreak: number;
  weeks: CompactWeek[];
};

type GitHubActivityPanelProps = {
  login: string;
  ranges: ContributionRange[];
  updatedLabel: string;
};

const levelClassNames = [
  "bg-[#1a1a1a]",
  "bg-[#343434]",
  "bg-[#5a5a5a]",
  "bg-[#949494]",
  "bg-[#d6d6d6]"
];

export function GitHubActivityPanel({
  login,
  ranges,
  updatedLabel
}: GitHubActivityPanelProps) {
  const [selectedKey, setSelectedKey] = useState(ranges[0]?.key ?? "");
  const selectedRange =
    ranges.find((range) => range.key === selectedKey) ?? ranges[0];

  if (!selectedRange) return null;

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
                Contribution calendar for @{login}.
              </p>
            </div>
          </div>

          <label className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6f6f6f]">
              Range
            </span>
            <span className="relative">
              <select
                className="h-9 w-full appearance-none rounded-md border border-[#303030] bg-[#1b1b1b] pl-2.5 pr-8 font-mono text-[11px] text-[#d7d7d7] outline-none transition-colors hover:border-[#444] focus-visible:border-[#666]"
                onChange={(event) => setSelectedKey(event.target.value)}
                style={{ colorScheme: "dark" }}
                value={selectedRange.key}
              >
                {ranges.map((range) => (
                  <option key={range.key} value={range.key}>
                    {range.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-2.5 top-1/2 size-3 -translate-y-1/2 text-[#8a8a8a]"
              />
            </span>
          </label>
        </div>

        <div className="px-4 py-4">
          <ContributionGrid range={selectedRange} />
          <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-md border border-[#252525] bg-[#181818]">
            <ActivityStat
              label="contributions"
              value={selectedRange.totalContributions}
            />
            <ActivityStat label="active days" value={selectedRange.activeDays} />
            <ActivityStat
              label="longest streak"
              value={selectedRange.longestStreak}
            />
          </div>
        </div>

        <div className="border-t border-[#252525] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6f6f6f]">
          {selectedRange.rangeLabel} / Updated {updatedLabel}
        </div>
      </div>
    </section>
  );
}

function ContributionGrid({ range }: { range: ContributionRange }) {
  return (
    <div
      aria-label={`${range.totalContributions} contributions on ${range.activeDays} active days, ${range.rangeLabel}`}
      className="grid gap-[3px]"
      role="img"
      style={{
        gridTemplateColumns: `repeat(${range.weeks.length}, minmax(0, 1fr))`
      }}
    >
      {range.weeks.map((week, weekIndex) => (
        <div
          className="grid grid-rows-7 gap-[3px]"
          key={week[0]?.[0] ?? weekIndex}
        >
          {week.map(([date, count, level, weekday]) => (
            <span
              className={`aspect-square w-full rounded-[2px] border border-[#242424] ${
                levelClassNames[level] ?? levelClassNames[0]
              }`}
              key={date}
              style={{ gridRow: weekday + 1 }}
              title={`${date}: ${count} contributions`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function ActivityStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-r border-[#242424] p-3 last:border-r-0">
      <p className="font-mono text-xl text-[#e6e6e6]">{value}</p>
      <p className="mt-1 text-[11px] text-[#7d7d7d]">{label}</p>
    </div>
  );
}
