import contributionData from "@/data/github-contributions.json";
import { GitHubMark } from "@/components/social-icons";

const levelClassNames: Record<string, string> = {
  NONE: "bg-[#1a1a1a]",
  FIRST_QUARTILE: "bg-[#343434]",
  SECOND_QUARTILE: "bg-[#5a5a5a]",
  THIRD_QUARTILE: "bg-[#949494]",
  FOURTH_QUARTILE: "bg-[#d6d6d6]"
};

export function GitHubActivity() {
  const updatedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(new Date(contributionData.updatedAt));

  return (
    <section className="py-8" id="activity">
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_260px]">
        <div className="overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#171717]">
          <div className="flex flex-col gap-3 border-b border-[#252525] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-8 items-center justify-center rounded-md border border-[#303030] bg-[#202020] text-[#d7d7d7]">
                <GitHubMark className="size-3.5" />
              </span>
              <div>
                <h2 className="text-base font-medium text-[#e6e6e6]">
                  GitHub Activity
                </h2>
                <p className="mt-0.5 text-[12px] text-[#7d7d7d]">
                  Public-safe contribution calendar for @{contributionData.login}.
                </p>
              </div>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6f6f6f]">
              Updated {updatedDate}
            </p>
          </div>

          <div className="activity-scroll overflow-x-auto px-4 py-4">
            <div className="grid w-max grid-flow-col grid-rows-7 gap-1">
              {contributionData.weeks.flatMap((week) =>
                week.contributionDays.map((day) => (
                  <span
                    aria-label={`${day.date}: ${day.contributionCount} contributions`}
                    className={`size-2.5 rounded-[2px] border border-[#242424] ${
                      levelClassNames[day.contributionLevel] ??
                      levelClassNames.NONE
                    }`}
                    key={day.date}
                    title={`${day.date}: ${day.contributionCount} contributions`}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#171717] md:grid-cols-1">
          <ActivityStat
            label="contributions"
            value={contributionData.totalContributions}
          />
          <ActivityStat label="active days" value={contributionData.activeDays} />
          <ActivityStat
            label="longest streak"
            value={contributionData.longestStreak}
          />
        </div>
      </div>
    </section>
  );
}

function ActivityStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-r border-[#242424] p-3 last:border-r-0 md:border-b md:border-r-0 md:last:border-b-0">
      <p className="font-mono text-xl text-[#e6e6e6]">{value}</p>
      <p className="mt-1 text-[11px] text-[#7d7d7d]">{label}</p>
    </div>
  );
}
