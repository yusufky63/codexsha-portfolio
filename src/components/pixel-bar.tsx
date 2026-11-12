"use client";

import { useEffect, useRef } from "react";
import { THEME_EVENT } from "@/components/dust/theme-toggle";

export type PixelSegment = {
  key: string;
  label: string;
  count: number;
  /** A CSS colour, usually `var(--g-…)`. */
  color: string;
};

type PixelBarProps = {
  segments: PixelSegment[];
  /** Sentence for screen readers: the canvas itself carries no text. */
  summary: string;
};

const CELL = 6;
const GAP = 2;
const ROWS = 9;
const PAD = 5;
const SEGMENT_GAP = 3;

// Small seeded generator: the same catalogue always draws the same pixels.
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
 * Segmented pixel bar: one framed segment per group, as wide as the group's
 * share. Lit pixels are drawn on a canvas that the dust engine can pick up, so
 * the colours scatter with everything else. The legend beside it carries the
 * numbers; the bar never stands alone.
 */
export function PixelBar({ segments, summary }: PixelBarProps) {
  const frame = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const node = canvas.current;
    const box = frame.current;
    if (!node || !box) return;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      // Whole device pixels throughout, so the engine can copy the canvas one to one.
      const cell = Math.round(CELL * dpr);
      const gap = Math.round(GAP * dpr);
      const pad = Math.round(PAD * dpr);
      const between = Math.round(SEGMENT_GAP * dpr);
      const line = Math.max(1, Math.floor(dpr));
      const pitch = cell + gap;

      const available = Math.floor(box.clientWidth * dpr);
      const chrome = segments.length * (2 * pad - gap) + (segments.length - 1) * between;
      const columns = Math.max(segments.length * 3, Math.floor((available - chrome) / pitch));
      const total = segments.reduce((sum, segment) => sum + segment.count, 0);

      // Largest-remainder split, so the columns add up exactly and no group drops below three.
      const exact = segments.map((segment) => (segment.count / total) * columns);
      const widths = exact.map((value) => Math.max(3, Math.floor(value)));
      let spare = columns - widths.reduce((sum, value) => sum + value, 0);
      const order = exact.map((value, position) => ({ position, rest: value - Math.floor(value) }));
      order.sort((a, b) => b.rest - a.rest);
      for (let step = 0; spare > 0 && step < order.length * 4; step += 1, spare -= 1) {
        widths[order[step % order.length].position] += 1;
      }

      const height = ROWS * pitch - gap + 2 * pad;
      const width = widths.reduce((sum, value) => sum + value * pitch - gap + 2 * pad, 0) + (segments.length - 1) * between;
      node.width = width;
      node.height = height;
      node.style.width = `${width / dpr}px`;
      node.style.height = `${height / dpr}px`;

      const ctx = node.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const rootStyle = getComputedStyle(document.documentElement);
      const random = mulberry(total * 7919 + segments.length);
      let x = 0;

      segments.forEach((segment, position) => {
        // Read the custom property itself. Setting it on a probe element and reading the computed
        // colour back returns a stale value whenever a transition applies, as under reduced motion.
        const token = /^var\((--[\w-]+)\)$/.exec(segment.color);
        const color = token ? rootStyle.getPropertyValue(token[1]).trim() : segment.color;
        const span = widths[position] * pitch - gap + 2 * pad;

        ctx.globalAlpha = 0.1;
        ctx.fillStyle = color;
        ctx.fillRect(x, 0, span, height);
        ctx.globalAlpha = 1;
        ctx.fillRect(x, 0, span, line);
        ctx.fillRect(x, height - line, span, line);
        ctx.fillRect(x, 0, line, height);
        ctx.fillRect(x + span - line, 0, line, height);

        const dot = Math.max(1, Math.round(cell / 3));
        for (let column = 0; column < widths[position]; column += 1) {
          for (let row = 0; row < ROWS; row += 1) {
            const edge = row === 0 || row === ROWS - 1;
            const lit = edge ? (column + row) % 2 === 0 : random() < 0.2;
            const left = x + pad + column * pitch;
            const top = pad + row * pitch;
            if (lit) {
              ctx.globalAlpha = 1;
              ctx.fillRect(left, top, cell, cell);
            } else {
              ctx.globalAlpha = 0.38;
              ctx.fillRect(left + Math.floor((cell - dot) / 2), top + Math.floor((cell - dot) / 2), dot, dot);
            }
          }
        }
        ctx.globalAlpha = 1;
        x += span + between;
      });

    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(box);
    window.addEventListener(THEME_EVENT, draw);
    return () => {
      observer.disconnect();
      window.removeEventListener(THEME_EVENT, draw);
    };
  }, [segments]);

  return (
    <div ref={frame}>
      <canvas aria-label={summary} className="block" data-dust-image="" ref={canvas} role="img" />
    </div>
  );
}
