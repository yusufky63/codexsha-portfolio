// Shared kit for the share cards rendered with next/og (Satori).
//
// Satori rules worth remembering here:
// - every element with more than one child needs display:"flex";
// - a text node must be the only child of its element;
// - no CSS variables and no Tailwind: colours come from the OG palette as hex;
// - fonts are read from disk (TTF or WOFF, never woff2), so these routes run on the Node runtime.
import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type OgFont = { name: string; data: Buffer; weight: 400 | 500 | 600 | 700; style: "normal" };
let fontCache: OgFont[] | null = null;

/** Same families as the site: Geist for type, Geist Mono for labels. */
export function ogFonts(): OgFont[] {
  if (fontCache) return fontCache;
  const load = (file: string, name: string, weight: 400 | 500 | 600 | 700): OgFont => ({
    name,
    data: fs.readFileSync(path.join(process.cwd(), "public/fonts", file)),
    weight,
    style: "normal"
  });
  fontCache = [
    load("Geist-400.woff", "Geist", 400),
    load("Geist-500.woff", "Geist", 500),
    load("Geist-600.woff", "Geist", 600),
    load("Geist-700.woff", "Geist", 700),
    load("GeistMono-400.woff", "Geist Mono", 400),
    load("GeistMono-500.woff", "Geist Mono", 500)
  ];
  return fontCache;
}

export const OG = {
  ink: "#111113",
  secondary: "#4b4b53",
  muted: "#62626b",
  border: "#cfcfd5",
  canvas: "#f6f6f7",
  surface: "#ffffff",
  accent: "#2e5bd6",
  size: { width: 1200, height: 630 },
  display: "Geist",
  body: "Geist",
  mono: "Geist Mono"
} as const;

export const ogDomain = site.url.replace("https://", "");

// Deterministic, so a card is byte-identical between builds and crawlers keep their cache.
function mulberry(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let mixed = Math.imul(state ^ (state >>> 15), 1 | state);
    mixed = (mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed)) ^ mixed;
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}

/** A drift of grains settling toward the lower right corner: the site's one motif, as a still. */
function Grains({ seed, color }: { seed: number; color: string }) {
  const random = mulberry(seed);
  const grains: Array<{ left: number; top: number; size: number; opacity: number; tinted: boolean }> = [];
  for (let index = 0; index < 340; index += 1) {
    // Squaring the draw crowds the grains toward the corner they are settling in.
    const across = 1 - random() ** 2;
    const down = 1 - random() ** 2.4;
    grains.push({
      left: 720 + across * 410,
      top: 130 + down * 410,
      size: random() < 0.2 ? 5 : 3,
      opacity: 0.25 + down * across * 0.75,
      // One grain in three carries the colour of the project's group.
      tinted: random() < 0.34
    });
  }

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex" }}>
      {grains.map((grain, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: grain.left,
            top: grain.top,
            width: grain.size,
            height: grain.size,
            background: grain.tinted ? color : OG.ink,
            opacity: grain.tinted ? Math.min(1, grain.opacity + 0.3) : grain.opacity
          }}
        />
      ))}
    </div>
  );
}

type OgCardProps = {
  children: ReactNode;
  /** Mono line in the top right corner, for example an index number. */
  meta?: string;
  footer?: string;
  seed?: number;
  /** Hue of the tinted grains and the corner ticks: the project's group colour. */
  color?: string;
};

/** The frame every card shares: paper canvas, hairline border, ink corner ticks, wordmark. */
export function OgCard({ children, meta, footer, seed = 7, color = OG.accent }: OgCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 22,
        background: OG.canvas,
        fontFamily: OG.body,
        color: OG.ink
      }}
    >
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "44px 56px",
          border: `1px solid ${OG.border}`,
          background: OG.surface
        }}
      >
        <Grains color={color} seed={seed} />
        <div
          style={{
            position: "absolute",
            top: -1,
            left: -1,
            width: 26,
            height: 26,
            borderTop: `2px solid ${color}`,
            borderLeft: `2px solid ${color}`
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -1,
            right: -1,
            width: 26,
            height: 26,
            borderBottom: `2px solid ${color}`,
            borderRight: `2px solid ${color}`
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontFamily: OG.display, fontSize: 32, fontWeight: 600, letterSpacing: -1.2 }}>
            {site.name}
          </div>
          {meta ? (
            <div
              style={{
                display: "flex",
                fontFamily: OG.mono,
                fontSize: 17,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: OG.muted
              }}
            >
              {meta}
            </div>
          ) : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 860 }}>{children}</div>
        {/* The footer stays on the left: the lower right corner belongs to the grains. */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 50,
              padding: "0 22px",
              background: OG.ink,
              color: OG.canvas,
              fontFamily: OG.mono,
              fontSize: 18,
              letterSpacing: 1.6,
              textTransform: "uppercase"
            }}
          >
            {ogDomain}
          </div>
          {footer ? <div style={{ display: "flex", fontSize: 18, color: OG.muted }}>{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}

export function OgLabel({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        fontFamily: OG.mono,
        fontSize: 18,
        letterSpacing: 2.4,
        textTransform: "uppercase",
        color: OG.muted
      }}
    >
      {text}
    </div>
  );
}

/**
 * Headline size fitted to the column: Geist 700 averages about 0.56em per
 * character, close enough to keep long names on the card and short ones large.
 */
export function ogHeadlineSize(text: string, maxWidth = 860, max = 124): number {
  if (!text) return max;
  return Math.max(48, Math.min(max, Math.floor(maxWidth / (text.length * 0.56))));
}

/** Cut on a word boundary so a card never ends in half a word. */
export function ogClamp(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  return `${cut.slice(0, cut.lastIndexOf(" "))}...`;
}

/** The card used for the site itself and for any route whose own card cannot be built. */
export function SiteCard() {
  return (
    <OgCard footer={`${site.owner} / ${site.role}`} meta="Index of shipped work">
      <div
        style={{
          display: "flex",
          fontFamily: OG.display,
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: -3.6,
          lineHeight: 1.02
        }}
      >
        Onchain products, desktop tools and browser extensions.
      </div>
      <div style={{ display: "flex", fontSize: 26, color: OG.secondary }}>
        Built from first commit to release. Every word on the site is dust.
      </div>
    </OgCard>
  );
}
