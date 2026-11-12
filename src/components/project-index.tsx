"use client";

import { useEffect, useRef, useState } from "react";
import { LedgerRow } from "@/components/project-views";
import { tone } from "@/components/ui";
import { gust } from "@/lib/dust";

export type IndexRow = {
  key: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  year: number;
  href: string;
  external: boolean;
  pinned: boolean;
  group: string;
  color: string;
  iconId: string;
};

type ProjectIndexProps = {
  rows: IndexRow[];
  filters: Array<{ key: string; label: string; color?: string }>;
};

/** The whole catalogue as one ledger. Changing the filter lets the new rows settle out of loose grains. */
export function ProjectIndex({ rows, filters }: ProjectIndexProps) {
  const [filter, setFilter] = useState("all");
  const list = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  const visible = rows.filter((row) => {
    if (filter === "all") return true;
    if (filter === "pinned") return row.pinned;
    return row.group === filter;
  });

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (list.current) gust(list.current);
  }, [filter]);

  return (
    <div>
      <div aria-label="Filter the index" className="seg" role="group">
        {filters.map((item) => {
          const active = item.key === filter;
          const count =
            item.key === "all"
              ? rows.length
              : rows.filter((row) => (item.key === "pinned" ? row.pinned : row.group === item.key)).length;
          return (
            <button
              aria-pressed={active}
              key={item.key}
              onClick={() => setFilter(item.key)}
              type="button"
            >
              {item.color ? <span className="dot" style={tone(item.color)} /> : null}
              {item.label}
              <span className="num text-ink-muted">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="frame mt-3" ref={list}>
        {visible.map((row) => (
          <LedgerRow
            category={row.category}
            color={row.color}
            external={row.external}
            href={row.href}
            iconId={row.iconId}
            index={row.index}
            key={row.key}
            pinned={row.pinned}
            summary={row.summary}
            title={row.title}
            year={row.year}
          />
        ))}
      </div>
    </div>
  );
}
