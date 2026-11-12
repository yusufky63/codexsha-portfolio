"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { THEME_EVENT } from "@/components/dust/theme-toggle";
import { gust } from "@/lib/dust";

export type ActivityRange = {
  key: string;
  label: string;
  from: string;
  to: string;
  total: number;
  activeDays: number;
  longestStreak: number;
  offset: number;
  counts: number[];
  levels: string;
};

type SedimentProps = {
  login: string;
  updatedAt: string;
  ranges: ActivityRange[];
};

type Layout = {
  cell: number;
  gap: number;
  weeks: number;
  dpr: number;
};

const GAP = 3;
const MIN_CELL = 11;
/** Share of a day's cell that is filled with grains, by GitHub contribution level. */
const DENSITY = [0, 0.08, 0.2, 0.38, 0.62];

const number = new Intl.NumberFormat("en-US");
const dayFormat = new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const monthFormat = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });

function dateAt(from: string, day: number) {
  const date = new Date(`${from}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + day);
  return date;
}

// Small seeded generator: a day keeps the same grains on every redraw.
function mulberry(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let mixed = Math.imul(state ^ (state >>> 15), 1 | state);
    mixed = (mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed)) ^ mixed;
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Contribution calendar drawn as sediment: each day is a small tray, and the
 * busier the day, the more grains have settled in it. The canvas is handed to
 * the dust engine like any other element, so the calendar scatters too.
 */
export function Sediment({ login, updatedAt, ranges }: SedimentProps) {
  const [selected, setSelected] = useState(ranges[0].key);
  const [readout, setReadout] = useState<string | null>(null);
  const [layout, setLayout] = useState<Layout | null>(null);
  const range = ranges.find((item) => item.key === selected) ?? ranges[0];

  const scroller = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const firstDraw = useRef(true);

  const weeks = Math.ceil((range.offset + range.counts.length) / 7);

  const months = useMemo(() => {
    const labels: Array<{ week: number; text: string }> = [];
    for (let day = 0; day < range.counts.length; day += 1) {
      const date = dateAt(range.from, day);
      if (date.getUTCDate() !== 1) continue;
      labels.push({ week: Math.floor((range.offset + day) / 7), text: monthFormat.format(date) });
    }
    return labels;
  }, [range]);

  useEffect(() => {
    const node = canvas.current;
    const frame = scroller.current;
    if (!node || !frame) return;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const available = frame.clientWidth;
      const cellCss = Math.max(MIN_CELL, Math.floor((available - (weeks - 1) * GAP) / weeks));
      // Everything is laid out in whole device pixels so the engine can copy the canvas one to one.
      const cell = Math.round(cellCss * dpr);
      const gap = Math.round(GAP * dpr);
      const width = weeks * cell + (weeks - 1) * gap;
      const height = 7 * cell + 6 * gap;

      node.width = width;
      node.height = height;
      node.style.width = `${width / dpr}px`;
      node.style.height = `${height / dpr}px`;
      setLayout({ cell: cell / dpr, gap: gap / dpr, weeks, dpr });

      const ctx = node.getContext("2d");
      if (!ctx) return;
      const style = getComputedStyle(document.documentElement);
      const ink = style.getPropertyValue("--text").trim();
      const line = style.getPropertyValue("--border").trim();
      const grain = Math.max(1, Math.round(dpr));
      const slots = Math.floor((cell - 2 * grain) / grain);
      const random = mulberry(range.from.length * 7919 + range.counts.length * 104729 + range.total);

      ctx.clearRect(0, 0, width, height);
      for (let day = 0; day < range.counts.length; day += 1) {
        const position = range.offset + day;
        const x = Math.floor(position / 7) * (cell + gap);
        const y = (position % 7) * (cell + gap);

        ctx.fillStyle = line;
        ctx.fillRect(x, y, cell, grain);
        ctx.fillRect(x, y + cell - grain, cell, grain);
        ctx.fillRect(x, y, grain, cell);
        ctx.fillRect(x + cell - grain, y, grain, cell);

        const density = DENSITY[Number(range.levels[day])] ?? 0;
        ctx.fillStyle = ink;
        for (let row = 0; row < slots; row += 1) {
          // Dust settles: the lower rows of a tray fill first.
          const chance = density * (0.55 + (0.9 * row) / Math.max(1, slots - 1));
          for (let column = 0; column < slots; column += 1) {
            if (random() < chance) ctx.fillRect(x + grain + column * grain, y + grain + row * grain, grain, grain);
          }
        }
      }

      // A new range arrives as loose grains; the first paint and plain resizes stay still.
      if (firstDraw.current) firstDraw.current = false;
      else if (body.current) gust(body.current);
    };

    draw();
    const observer = new ResizeObserver(() => {
      firstDraw.current = true;
      draw();
    });
    observer.observe(frame);
    const onTheme = () => {
      firstDraw.current = true;
      draw();
    };
    window.addEventListener(THEME_EVENT, onTheme);
    return () => {
      observer.disconnect();
      window.removeEventListener(THEME_EVENT, onTheme);
    };
  }, [range, weeks]);

  const onPointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!layout) return;
    const box = event.currentTarget.getBoundingClientRect();
    const pitch = layout.cell + layout.gap;
    const week = Math.floor((event.clientX - box.left) / pitch);
    const weekday = Math.floor((event.clientY - box.top) / pitch);
    const day = week * 7 + weekday - range.offset;
    if (weekday < 0 || weekday > 6 || day < 0 || day >= range.counts.length) {
      setReadout(null);
      return;
    }
    const count = range.counts[day];
    setReadout(`${dayFormat.format(dateAt(range.from, day))}: ${count} ${count === 1 ? "contribution" : "contributions"}`);
  };

  const pitch = layout ? layout.cell + layout.gap : 0;

  return (
    <div>
      <div aria-label="Activity range" className="seg" role="group">
        {ranges.map((item) => {
          const active = item.key === range.key;
          return (
            <button
              aria-pressed={active}
              key={item.key}
              onClick={() => setSelected(item.key)}
              type="button"
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="frame mt-3 p-4 md:p-5" ref={body}>
        <div className="overflow-x-auto pb-2" ref={scroller}>
          <div className="relative w-max pt-6" data-dust-root="">
            {layout
              ? months.map((month) => (
                  <span
                    className="absolute top-0 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted"
                    key={`${month.week}-${month.text}`}
                    style={{ left: month.week * pitch }}
                  >
                    {month.text}
                  </span>
                ))
              : null}
            <canvas
              aria-label={`Contribution calendar for ${login}: ${number.format(range.total)} contributions between ${range.from} and ${range.to}.`}
              className="block"
              data-dust-image=""
              onPointerLeave={() => setReadout(null)}
              onPointerMove={onPointerMove}
              ref={canvas}
              role="img"
            />
          </div>
        </div>

        {/* Outside every dust root on purpose: it changes with each cell and would restart the grains. */}
        <p aria-live="polite" className="mt-3 h-5 font-mono text-[12px] text-ink-secondary">
          {readout ?? "Hover a day to read it. More grains in a tray means a busier day."}
        </p>

        <dl className="mt-5 grid grid-cols-3 border-t border-line" data-dust-root="">
          {[
            { label: "contributions", value: range.total },
            { label: "active days", value: range.activeDays },
            { label: "longest streak, days", value: range.longestStreak }
          ].map((stat, position) => (
            <div className={`pt-5 ${position > 0 ? "border-l border-line pl-4 md:pl-6" : ""}`} key={stat.label}>
              <dd className="display-medium num text-[30px] leading-none text-ink md:text-[44px]">
                {number.format(stat.value)}
              </dd>
              <dt className="label mt-3">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <p className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted" data-dust-root="">
        @{login} / {range.from} to {range.to} / snapshot {updatedAt.slice(0, 10)}
      </p>
    </div>
  );
}
