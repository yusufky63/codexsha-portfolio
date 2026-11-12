# Design system

This file is the source of truth for how the site looks and moves. It overrides the house style
where the two differ.

## Idea

Two things meet here.

- **Everything on the page is dust.** Text, frame borders, the contribution calendar and the pixel
  bar are drawn by the browser as usual, and the moment something moves through them they turn
  into grains, scatter and settle back.
- **The surface is a blueprint instrument panel**, taken from Crewyard's design system: square
  hairline frames with four corner ticks, mono uppercase labels, an inverted primary button,
  greys for layout and colour only where it says something.

## Tokens

All colour comes from CSS variables in `src/app/globals.css`, exposed to Tailwind through
`@theme inline`. Components never use raw palette classes, hex values or `dark:` variants.

| Role | Class | Light | Dark |
|---|---|---|---|
| Canvas / surface / raised / sunken | `bg-canvas` `bg-surface` `bg-raised` `bg-sunken` | `#f6f6f7` `#ffffff` `#f0f0f2` `#f3f3f5` | `#0e0e10` `#151517` `#1c1c1f` `#0a0a0b` |
| Line / tick / strong | `border-line` `border-line-tick` `border-line-strong` | `#e4e4e8` `#cfcfd5` `#8a8a94` | `#26262b` `#3a3a41` `#62626c` |
| Ink / secondary / muted | `text-ink` `text-ink-secondary` `text-ink-muted` | `#111113` `#4b4b53` `#62626b` | `#ededef` `#a6a6ae` `#8c8c95` |
| Inverse | `bg-inverse` `text-inverse-fg` | `#111113` on `#ffffff` | `#ededef` on `#0e0e10` |
| Accent (+ soft) | `text-accent` `bg-accent-soft` | `#2e5bd6` | `#7aa2ff` |
| State ok / warn / bad (+ soft) | `text-ok` `text-warn` `text-bad` | `#137a50` `#935600` `#be2f28` | `#4cc38a` `#f0b44c` `#f47a72` |

The theme is chosen by `html[data-theme]`, written before first paint by the inline script in
`src/app/layout.tsx` from `localStorage["codexsha:theme"]`. Without a stored choice the system
preference applies.

### Colour is information

Greys carry the layout. A colour always means one of these, and a word or a label says it too:

| Colour | Means | Where |
|---|---|---|
| Group hue (`--g-desktop`, `--g-game`, `--g-onchain`, `--g-mini-app`, `--g-tool`, `--g-archive`) | which group a project belongs to | the dot before a category, the rail and ticks of a hovered row or card, segments of the pixel bar, curves of the stack map, filter buttons, share card ticks |
| Accent | pinned, links, focus, selection | `Pinned` badge, bracket links, focus ring, the grain counter |
| Ok | live, in stores, on | `Live` and `In stores` badges, `Dust on` |
| Warn | off | `Dust off` |

`groupColor(group)` in `src/data/portfolio.ts` returns the `var(--g-…)` for a group. Pass it to a
component through `tone(color)` from `src/components/ui.tsx`, which sets `--c`; frames, rails and
dots read `--c`.

## Type

| Role | Family | Use |
|---|---|---|
| UI and display | Geist (`.display` 600, `.display-medium` 500) | Wordmark, titles, statements, numbers, body |
| Mono | Geist Mono (`.label`, `.eyebrow`, `.num`, `.btn`, `.badge`) | Labels, indexes, hashes, stack lists, buttons |

Labels are 11 px uppercase with 0.08em tracking. Interface text stays on the scale 11, 12, 13, 14,
15, 16, 18, 20, 24. Display type is larger and fluid: the wordmark is sized in container units
(`.wordmark`) so it always spans the frame, because large type is what scatters best.

## Frames, buttons, controls

Primitives live in `@layer components` in `globals.css`, so Tailwind utilities can still override
them.

| Class | Look | Use |
|---|---|---|
| `.frame` | surface fill, hairline border, four corner ticks from one masked pseudo-element | every panel, card, table and fact sheet |
| `.frame-link` | on hover or focus the ticks take `--c` and the border darkens | a frame that is a link |
| `.btn` | Geist Mono 12 px uppercase, hairline border, corner ticks; hover fills `raised` | secondary actions, header controls (`.btn-sm`), hero (`.btn-lg`) |
| `.btn-primary` | inverse fill, ticks 4 px outside the fill | the one main action of a view |
| `.btn-ghost` | bracket text `[ LIVE ]`, no border | low-emphasis and outbound links |
| `.seg` | framed segmented control; the pressed button gets a `raised` fill and an inset line | calendar ranges, index filter |
| `.badge` (+ `-info`, `-ok`, `-warn`) | mono 10.5 px uppercase chip, soft fill for a state | Pinned, Live, licence |
| `.eyebrow` | index in ink, label, then a rule to the edge | section openers |
| `.rail` | 2 px bar in `--c` grows on the left on hover or focus | rows |
| `.dot` | 7 px round mark in `--c` | group marker next to a label |
| `.dotgrid` | drafting dots, 24 px pitch | the stack map panel; the page background uses the same dots |

Rules:

- Radius is 0 everywhere. Only `.dot` is round.
- Borders carry the design. No shadows on content, no gradients, no blur, no glow.
- One primary button per view.
- One frame: `max-w-[1320px] mx-auto px-4 md:px-7`.

## Project icons

`ProjectIcon` (`src/components/project-icon.tsx`) shows a project's own icon with nothing behind it. The
table in `src/data/icons.ts` maps a slug (or `archive-<repo>`) to a file in `public/project-icons`;
every file was copied from the project's own repository. A project without an icon shows none:
there is no stand-in mark. Icons keep their colours and scatter whole, since the picture is all there is.

## Data graphics

| Component | File | What it shows |
|---|---|---|
| `PixelBar` | `src/components/pixel-bar.tsx` | The catalogue by group: one framed segment per group, as wide as its share, filled with pixels in the group hue. Always paired with its legend. Drawn on a canvas marked `data-dust-image`, so its colours scatter. |
| `StackGraph` | `src/components/stack-graph.tsx` | Node graph: groups on the left, the eight most used tools on the right, one curve per pair that shares projects, as thick as the count. Hover or focus isolates a node's curves and prints the counts. Shown from `lg` up; the tally list under it is the full record on every width. |
| `Sediment` | `src/components/sediment.tsx` | GitHub contributions, one tray per day; more grains mean a busier day. |

Every number on these is counted from `src/data`. Nothing is drawn for decoration: if the data
changes, the picture changes.

## Dust engine

`src/lib/dust.ts`, mounted once by `DustField` in the layout.

### Marking elements

| Attribute | Effect |
|---|---|
| `data-dust-root` | The element and all text inside it can turn into grains. Keep roots small: a card, a row, a heading block. |
| `data-dust-frame` | The element's border is drawn as grains too. Needs a uniform solid border. The corner ticks stay in place. |
| `data-dust-image` | A `<canvas>` or same-origin `<img>` whose pixels become grains (calendar, pixel bar, project icons). |
| `data-dust-skip` | Text inside stays plain DOM even when its root is active. |
| `data-dust-intro` | The element stays unpainted until `assemble()` gathers it from loose grains. Falls back to plain text after 3 s without scripts. |

Rules for roots:

- Do not nest roots unless the inner one should react on its own.
- Text that changes while the pointer is over it must live outside every root. A DOM change inside
  an active root ends the effect at once, because the captured copy is stale.
- Do not put continuously animated content inside a root.
- Grains keep the colour of what they came from, so coloured pixels make coloured dust.

### How it works

1. On the first pointer move over a root, its text, frames and images are painted into one canvas
   at device resolution, in the exact positions the browser used. Truncated and line-clamped text
   is rebuilt with its ellipsis.
2. Every opaque pixel becomes a grain with a home position. The DOM stays in place and is only
   left unpainted (`data-dust-hidden`), so links, selection and screen readers are unaffected.
3. A moving pointer pushes grains within its reach, adds its own velocity as wind and charges
   them so they float for a moment. A resting pointer does nothing.
4. Grains are pulled home by springs of slightly different stiffness. When all are home and the
   pointer has been idle, the canvas is removed and the DOM paints again.

At rest the canvas is a pixel copy of the DOM, so the swap is not visible.

### Entry points

| Function | Used by |
|---|---|
| `mountDust()` | `DustField`: pointer tracking and the stir behaviour |
| `assemble(element)` | `Wordmark`: the intro on the home page and the 404 page |
| `gust(scope?)` | Theme switch, `Sweep the page`, index filter, calendar range change |
| `settleAll()` | Turning the effect off, window resize |
| `subscribeGrains(listener)` | `GrainHud`: live count of grains in motion |

### Limits

A root is skipped when its canvas would exceed 9 million device pixels or 420 000 grains.

### Motion preference

The effect follows `prefers-reduced-motion` by default. The `Dust on / off` switch in the header
lets a visitor overrule that in either direction; the choice is stored in
`localStorage["codexsha:dust"]` and applied as `html[data-dust]` before first paint. Hover
stirring needs a fine pointer; the intro and gusts also run on touch devices.

Under reduced motion every transition is cut to 0.01 ms rather than removed, so a computed style
read straight after a change still returns the old value. Canvas code therefore reads custom
properties from the root (`getPropertyValue("--g-…")`) instead of probing an element's colour.

## Share cards

`src/lib/og.tsx` holds the card kit: white surface, hairline frame, corner ticks and a drift of
grains seeded by the project's sha. Ticks and one grain in three take the project's group hue
(light-theme values, repeated in the route because Satori cannot read CSS variables). The site
card lives in `src/app/opengraph-image.tsx`; every case study has its own in
`src/app/projects/[slug]/opengraph-image.tsx` and falls back to the site card for an unknown slug.
Fonts are the Geist `.woff` files in `public/fonts`.

## Checklist for UI changes

- Light and dark theme, at 1440 and 390 px wide.
- Dust on: hover a changed element and check that the text does not shift when the grains take
  over and when they hand back.
- A new colour use says what it means in words next to it.
- `npm run check` passes.
