import type { Project } from "@/data/types";

export const games: Project[] = [
  {
    slug: "stickfront-land-sea-and-air",
    title: "Stickfront: Land, Sea and Air",
    group: "game",
    category: "Strategy Game / iOS, Android & Web",
    year: 2026,
    summary: "Real-time stick figure strategy: pick a unit card, deploy it in your zone and break the enemy base before it breaks yours.",
    description: "Energy builds up over time, and deployed units march and fight on their own across land, sea and air maps drawn in thin pencil lines. It plays against AI bots, in a sandbox or against another player online, and bot matches and the sandbox also work offline in the app.",
    features: [
      "Land, sea and air units, defenses, missiles and air strikes played as cards",
      "AI bots at three difficulties, a sandbox and online play by quick match or room code",
      "Terrain rules: trees block shots, hills extend range, mud slows, outposts pay energy",
      "Story campaigns, an Ages mode, Zombie Night and daily challenges",
      "Light and dark themes, no ads and no in-app purchases"
    ],
    stack: [
      "TypeScript",
      "Three.js",
      "Vite",
      "Capacitor",
      "Node.js",
      "WebSocket",
      "Cloudflare Workers",
      "Vitest"
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/stickfront-land-sea-and-air/id6822508853"
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=dev.stickfront.game"
      },
      { label: "Live", href: "https://stickwars.dev/" }
    ],
    status: "Available on the App Store and Google Play and playable in the browser at stickwars.dev.",
    architecture: "A seeded TypeScript simulation steps at a fixed 20 ticks per second, in the browser for bot matches and on an authoritative server for online play, which sends ten binary delta snapshots per second over WebSocket. Three.js draws every figure stroke from one instanced line buffer, and a Capacitor shell packages the same client for Android and iOS.",
    privateNote: "The repository is private; the game is described by what it does and how it is built."
  },
  {
    slug: "stickfront-hero",
    title: "Stickfront: Hero",
    group: "game",
    category: "Action Game / iOS & Web",
    year: 2026,
    summary: "A stick figure survival action game drawn in ink on a notebook page: you steer one hero whose weapons strike on their own.",
    description: "Ink blots and enemy squads close in from every side in growing waves; whatever falls leaves ink, ink brings levels and every level offers three cards. Runs take five to ten minutes on maps such as the Village, the Forest and the Desert, and gold kept between runs buys lasting upgrades.",
    features: [
      "One-thumb control: press anywhere and drag to walk, weapons fire on their own",
      "Fourteen weapons with five steps each and two evolutions",
      "Five heroes and five companions that join as maps are held",
      "Three tiers per map, a daily run with a shared seed and an endless mode",
      "No ads, no purchases, no account; a run needs no connection"
    ],
    stack: [
      "TypeScript",
      "Three.js",
      "Vite",
      "Capacitor",
      "Cloudflare Workers",
      "Vitest"
    ],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/stickfront-hero/id6822874238" },
      { label: "Live", href: "https://hero.stickwars.dev/" }
    ],
    status: "Available on the App Store for iPhone and iPad and playable in the browser at hero.stickwars.dev.",
    architecture: "The run is a seeded TypeScript simulation at 30 ticks per second with no DOM, drawn with the Three.js stick figure renderer shared with Stickfront: Land, Sea and Air through a hash-locked verbatim copy of its code. A Cloudflare Worker serves the web build and the app's code updates, and a Capacitor shell wraps the same client for mobile.",
    privateNote: "The repository is private; the game is described by what it does and how it is built."
  },
  {
    slug: "stickfront-tower-defense",
    title: "Stickfront: Tower Defense",
    group: "game",
    category: "Tower Defense / iOS & Web",
    year: 2026,
    summary: "A stick figure tower defense drawn in ink on ruled notebook paper: build defenses, drop troops, walk a hero and cast spells.",
    description: "Spilled ink and runaway soldiers march down the lines of the page toward a castle in the margin, and every wave is shown at the entries before it comes. Defenses go on slots beside the road, troop cards are dropped inside the ring round the castle, and stars earned on each map buy headquarters upgrades.",
    features: [
      "Campaign of 3 chapters and 18 hand-made maps, rated one to three stars",
      "12 defenses with three steps each and a choice of two branches at the fourth",
      "10 troop cards, 7 heroes with one ability each and 6 spells",
      "Endless, Blot flood and Daily siege modes with leaderboards",
      "Four difficulties; no ads, no purchases, no account"
    ],
    stack: [
      "TypeScript",
      "Three.js",
      "Vite",
      "Capacitor",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Vitest"
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/stickfront-tower-defense/id6822872611"
      },
      { label: "Live", href: "https://tower-defense.stickwars.dev/" }
    ],
    status: "Available on the App Store for iPhone and iPad and playable in the browser at tower-defense.stickwars.dev.",
    architecture: "The match is a seeded TypeScript simulation at 20 ticks per second with no DOM, drawn with the Three.js renderer shared with Stickfront: Land, Sea and Air through a hash-locked verbatim copy of its code. A Cloudflare Worker serves the site and keeps the leaderboards in D1, and a Capacitor shell wraps the same client for mobile.",
    privateNote: "The repository is private; the game is described by what it does and how it is built."
  },
  {
    slug: "cube-of-empires",
    title: "Cube of Empires",
    group: "game",
    category: "3D Strategy Game / Windows",
    year: 2026,
    summary: "A stylized 3D real-time strategy game whose units and buildings are built from blocks and break apart into cubes.",
    description: "It spans ages from the Dawn to the Modern Age with fifteen civilizations and about 280 units, on smooth rather than voxel terrain. The game was first made in Godot and has been made in Unity since November 2026, where a skirmish against the AI, modern warfare and zombie survival are playable.",
    features: [
      "Ages from the Dawn to the Modern Age and fifteen civilizations",
      "About 280 units and buildings made of blocks that shatter into cubes",
      "Walls and gates, naval and air war, and a zombie survival mode",
      "Skirmish against the AI with saves and replays",
      "Scenario editor, in-game encyclopedia and developer Labs"
    ],
    stack: [
      "Unity",
      "C#",
      "Universal Render Pipeline",
      ".NET",
      "glTFast",
      "Blender",
      "Python",
      "Godot",
      "GDScript"
    ],
    links: [],
    status: "In development in Unity, with no store listing; skirmish against the AI, modern warfare and zombie survival are playable.",
    architecture: "Unity 6 with the Universal Render Pipeline draws and takes input, while every rule lives in an engine-free, deterministic C# simulation library that steps at 20 Hz. Models are authored in Blender, exported as glTF and imported with glTFast; the earlier Godot 4 version is kept frozen as the reference for rules still being ported.",
    privateNote: "The repository is private; the game is described by what it does and how it is built."
  }
];
