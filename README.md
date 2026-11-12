# Codexsha

Portfolio of Yusuf (Codexsha): an index of shipped products, desktop tools, browser extensions and
onchain apps, where every word and frame turns to dust under the cursor. Live at
https://codexsha.dev.

## What it does

- Lists every project as a case study with what it does, how it is built, its stack, status and
  links, plus an archive of older public repositories.
- Pins the most recently added projects on the home page.
- Draws GitHub contributions as a sediment calendar: the busier the day, the more grains settle in
  its tray.
- Turns text, card frames and the calendar into grains that scatter around the pointer and settle
  back. The effect can be switched off in the header and follows the reduced-motion setting by
  default.
- Shows the catalogue as a segmented pixel bar by group and the stack as a node graph of groups
  and tools, both counted from the project data.
- Light and dark theme. Greys carry the layout; colour marks a project's group or a state.
- A share card for the site and for every case study, a sitemap, `robots.txt` and `llms.txt`.

## Stack

Next.js 15 (App Router, fully static), React 19, TypeScript, Tailwind CSS 4, lucide-react. Fonts:
Geist and Geist Mono. No runtime services: all data is committed to the repository.

## Quick start

```bash
npm install
```

```bash
npm run dev
```

No environment variables are needed to run or build the site.

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint with zero warnings allowed |
| `npm run check` | Typecheck, lint and build in one go |
| `npm run update:github` | Refresh `src/data/github-activity.json` and `src/data/github-repos.json` |

`update:github` reads a token from `GITHUB_TOKEN` or from `gh auth token`. Private repositories
contribute a count only; none of their names or details are written to the data files.

## Content

| File | Holds |
|---|---|
| `src/data/desktop.ts` | Desktop apps, the mobile app and browser extensions |
| `src/data/games.ts` | Games; store links instead of repository links |
| `src/data/onchain.ts` | Onchain apps, name services and developer kits |
| `src/data/mini-apps.ts` | Farcaster and Base mini apps |
| `src/data/tools.ts` | AI apps and the UI library |
| `src/data/archive.ts` | One-line entries for public repositories without a case study |
| `src/data/icons.ts` | Icon file per project, in `public/project-icons` |
| `src/data/portfolio.ts` | Catalogue order, numbering, stats and the stack tally |

The five flagship projects and their order are the `FLAGSHIP` list in `src/data/portfolio.ts`;
they open the catalogue, so their numbers are 01 to 05.

To add a project, append an entry to the matching file. Set `pinned: true` to show it in the
pinned section, and `repo` to the repository name so its stars are read from the snapshot. The
entry gets its number, its page, its share card and its sitemap line from the build.

## Design

See `docs/design-system.md` for tokens, frames and buttons, the colour rules and how to mark
elements for the dust engine. The frame language follows Crewyard's design system.

## Deploy

The site is a static Next.js build and deploys to Vercel with the default settings. There are no
environment variables to configure.
