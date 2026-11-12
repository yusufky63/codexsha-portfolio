import type { Project } from "@/data/types";

export const desktop: Project[] = [
  {
    slug: "abonely",
    title: "Abonely",
    group: "desktop",
    category: "Mobile App / Consumer SaaS",
    year: 2026,
    summary: "Privacy-first subscription tracker for managing recurring payments, reminders, spending insights, and multi-currency subscription data.",
    description: "Abonely is a mobile-first consumer app for tracking subscriptions without connecting bank accounts. It focuses on offline-first data, reminders, spending clarity, localization, and optional cloud sync.",
    features: [
      "Add, edit, archive, and analyze subscriptions",
      "Monthly and yearly spending dashboard",
      "Payment reminders with configurable offsets",
      "Multi-currency support and 50+ service catalog",
      "Offline-first storage with optional Supabase sync"
    ],
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Zustand",
      "WatermelonDB",
      "Supabase",
      "Google Sign-In",
      "Sentry",
      "FlashList"
    ],
    links: [
      { label: "Live", href: "https://abonely-web.vercel.app" },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/abonely-subscription-tracker/id6762087754"
      }
    ],
    status: "Private mobile app repository with companion web deployment.",
    architecture: "Expo mobile app with local WatermelonDB storage, Zustand state, Supabase Auth and sync, reminder flows, iOS widget work, and companion web presence.",
    role: "Product builder across mobile UX, offline-first data model, sync architecture, auth, localization, and release planning.",
    privateNote: "Private repository details are summarized without exposing sensitive implementation data."
  },
  {
    slug: "repo-intelligence",
    title: "Repo Intelligence",
    group: "desktop",
    category: "Browser Extension / GitHub",
    year: 2026,
    summary: "Chrome and Edge extension that adds a card to GitHub repository pages: what a project does, which file to download, how to install it and whether anything looks off.",
    description: "The card answers a fixed set of questions about a repository: what it is, which release file fits your system, how to install it, where to try it, what is similar and whether anything looks suspicious. Everything works without a key except AI answers, which use your own provider key and cite the README sections and files they used, pinned to a commit.",
    features: [
      "Marks the release file that fits your OS and architecture, with size and SHA-256",
      "Quotes install commands from the README word for word, linked to their source",
      "Safety checks for install hooks, hidden Unicode and tasks that run on folder open",
      "AI answers with your own key: Claude, OpenAI, DeepSeek, Gemini or OpenRouter",
      "Reads nothing until you ask; no server, no account and no telemetry"
    ],
    stack: [
      "WXT",
      "Chrome Extension",
      "React",
      "TypeScript",
      "Tailwind",
      "Claude",
      "OpenAI",
      "DeepSeek",
      "Vitest"
    ],
    links: [
      {
        label: "Download",
        href: "https://github.com/yusufky63/repo-intelligence/releases/latest"
      },
      { label: "GitHub", href: "https://github.com/yusufky63/repo-intelligence" }
    ],
    status: "Version 0.1.1; not in a browser store yet, so it is installed by loading a release zip or a source build as an unpacked extension.",
    architecture: "Built with WXT on Manifest V3: a background worker that routes requests, reads GitHub data and is the only layer holding keys, plus an in-page card and a settings page in React 19. Claude uses Anthropic's official SDK and the other providers share one OpenAI-compatible adapter.",
    repo: "repo-intelligence",
    license: "MIT",
    pinned: true
  },
  {
    slug: "x-country-withheld-viewer",
    title: "X Country Withheld Viewer",
    group: "desktop",
    category: "Browser Extension / X",
    year: 2026,
    summary: "Browser extension that shows country-withheld public posts and accounts on X in place, drawn by X's own interface like a normal post.",
    description: "When X returns a withheld notice instead of a post, the extension fills the gap from FxTwitter, with x.md as a fallback, before X's code reads the response, so X draws the post with its own components. A recovered post gets a faintly glowing edge and a small eye marker that names the country and the source.",
    features: [
      "Opens withheld posts, replies, quotes and account profiles where they are",
      "Needs no VPN, paid API or extra account",
      "Asks for consent on first run; no request is sent until you accept",
      "Only post IDs, user IDs and public usernames leave the browser, never X cookies",
      "Also runs as a userscript in Tampermonkey or Violentmonkey"
    ],
    stack: [
      "Chrome Extension",
      "TypeScript",
      "esbuild",
      "Vitest",
      "Playwright"
    ],
    links: [
      {
        label: "Download",
        href: "https://github.com/yusufky63/x-country-withheld-viewer/releases/latest"
      },
      { label: "GitHub", href: "https://github.com/yusufky63/x-country-withheld-viewer" }
    ],
    status: "Version 0.1.8 on GitHub Releases as a ZIP and a userscript; not submitted to the Chrome Web Store, and so far run only on Windows.",
    architecture: "Three scripts share the work: bridge.js finds the gaps in X's API responses, content.js relays the IDs and adds the markers, and background.js handles the cache, rate limits and the FxTwitter and x.md lookups. The same code is also built as a userscript.",
    repo: "x-country-withheld-viewer",
    license: "MIT",
    pinned: true
  },
  {
    slug: "crewyard",
    title: "Crewyard",
    group: "desktop",
    category: "Desktop App / Agent Orchestration",
    year: 2026,
    summary: "Local desktop app that plans a goal into tasks and runs crews of coding agents (Claude Code, Codex, Gemini CLI, OpenCode) on your own accounts and API keys.",
    description: "You write a goal; Crewyard plans it into tasks, proposes a crew for each and runs nothing until you approve. It watches limits and spend, hands work to a backup agent when you allow it, and keeps every push, pull request and merge behind your click.",
    features: [
      "Orchestra, Crew and Solo modes; Orchestra plans a goal into up to 8 tasks",
      "Four runners: Claude Code, Codex, OpenCode and Gemini CLI over ACP",
      "Spend caps per key and per task; figures marked Reported, Estimated or Unknown",
      "Inbox for agent questions, tool approvals and limit decisions, with risk levels",
      "Optional external access over MCP that can read and propose, never approve"
    ],
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "Node.js",
      "SQLite",
      "MCP",
      "Next.js",
      "Vite",
      "Vitest"
    ],
    links: [
      { label: "Live", href: "https://crewyard-two.vercel.app" },
      { label: "Download", href: "https://crewyard-two.vercel.app/download" },
      { label: "GitHub", href: "https://github.com/yusufky63/crewyard" }
    ],
    status: "Public repository with releases for Windows, macOS and Linux; built and tested on Windows 11, and no build carries a publisher's signature yet.",
    architecture: "A pnpm monorepo: an Electron app whose UI talks over IPC to a utility-process daemon holding the SQLite store, orchestrator, providers, GitHub and MCP, with one adapter package per runner. The website is a separate Next.js app on Vercel that reads downloads and the changelog from GitHub releases.",
    repo: "crewyard",
    license: "MIT",
    pinned: true
  },
  {
    slug: "downpipe",
    title: "Downpipe",
    group: "desktop",
    category: "Desktop App / Download Manager",
    year: 2026,
    summary: "Open-source download manager for Windows, macOS and Linux: a resumable multi-connection HTTP engine in Rust with a desktop app, a CLI and a browser extension.",
    description: "Downpipe splits a file across several HTTP connections when that makes it faster, survives pauses, restarts and crashes without starting over, and gives a file its real name only once every byte is in place. The extension hands browser downloads to the app and finds the videos a page plays, including HLS and DASH streams, while YouTube pages go through yt-dlp.",
    features: [
      "Adaptive multi-connection HTTP with dynamic segmentation and validated resume",
      "Persistent SQLite queue with speed limits, schedules and per-site rules",
      "HLS and DASH streams, YouTube through yt-dlp, and BitTorrent in the same list",
      "Chrome, Edge and Firefox extension over Native Messaging, never a network port",
      "SHA-256, SHA-512 or MD5 checksum verified before the file is renamed into place"
    ],
    stack: [
      "Rust",
      "Tauri",
      "React",
      "TypeScript",
      "SQLite",
      "Tailwind",
      "Vite",
      "Vitest",
      "Chrome Extension"
    ],
    links: [
      { label: "Download", href: "https://github.com/yusufky63/downpipe/releases" },
      { label: "GitHub", href: "https://github.com/yusufky63/downpipe" }
    ],
    status: "Early development (0.5): Windows installers, Linux packages, a universal macOS .dmg and the extension are on GitHub Releases, none of them code-signed yet.",
    architecture: "A Cargo workspace of Rust crates (HTTP engine, core queue with a SQLite catalog, CLI, native-messaging host, site providers, crawler, remote control, torrent) under a Tauri 2 and React desktop app. A Manifest V3 extension for Chrome, Edge and Firefox talks to the app through Native Messaging and a local pipe.",
    repo: "downpipe",
    license: "Apache-2.0",
    pinned: true
  },
  {
    slug: "port-pilot",
    title: "PortPilot",
    group: "desktop",
    category: "Desktop App / Local Dev Ports",
    year: 2026,
    summary: "Windows desktop app and CLI that explain each local dev port: its process, project, Git worktree, WSL distro or Docker container, and how to stop it safely.",
    description: "PortPilot shows which process listens on a port, who started it and which project it belongs to, and says whether each attribution is exact or inferred. A stop request checks the process's creation time first, tries a graceful close and treats force as a second decision; projects can opt in to managed runs and per-worktree port leases with a .portpilot.toml recipe.",
    features: [
      "Owner, bind address, exposure and parent chain for every listening port",
      "Folds WSL and Docker forwarders into the Linux process or container behind them",
      "Stop flow checks PID and creation time, then closes gracefully before any force",
      "Per-worktree port leases and trusted run recipes from .portpilot.toml",
      "portctl CLI with versioned JSON output and stable exit codes"
    ],
    stack: [
      "Rust",
      "Tauri",
      "React",
      "TypeScript",
      "Tailwind",
      "SQLite",
      "Vite",
      "Vitest",
      "Zustand",
      "i18next"
    ],
    links: [
      { label: "Download", href: "https://github.com/yusufky63/port-pilot/releases/latest" },
      { label: "GitHub", href: "https://github.com/yusufky63/port-pilot" }
    ],
    status: "Version 0.1.0-alpha.1, the first milestone, with a Windows installer and a portable zip on GitHub Releases; the executables are not code-signed with a certificate yet.",
    architecture: "A Rust workspace: portpilot-core (model, parsers and rules, no OS calls), portpilot-win (Windows APIs through windows-rs), portpilot-engine (discovery, Git, WSL, Docker, stop flow, managed runs, SQLite history) and portpilot-cli (portctl). The desktop app is Tauri 2 with React 19 on the same engine.",
    repo: "port-pilot",
    license: "MIT OR Apache-2.0",
    pinned: true
  },
  {
    slug: "unlost-recovery",
    title: "Unlost Recovery",
    group: "desktop",
    category: "Desktop App / File Recovery",
    year: 2026,
    summary: "Open-source deleted-file recovery for Windows 10 and 11 that reads drives without ever writing to them and says for every file what was actually checked.",
    description: "It offers the intact copies Windows already keeps (the Recycle Bin and existing shadow copies) before any scan, then reads the NTFS $MFT for deleted records and grades each file against the cluster bitmap and sampled content. Recovered files go to a different physical disk, are hashed with SHA-256 while written and again from disk, and come with a CSV and JSON report.",
    features: [
      "Read-only by construction: the I/O trait has no write method",
      "Recycle Bin and existing shadow copies offered before any scan",
      "NTFS deleted-file scan with rebuilt folder paths and a state and reason per file",
      "Refuses to recover onto the source disk; every file hashed and listed in a report",
      "Scans .vhdx, .img, .dd and .raw disk images without administrator rights"
    ],
    stack: [
      "Rust",
      "Tauri",
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
      "Vitest",
      "Zustand",
      "i18next"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/yusufky63/unlost-recovery" }
    ],
    status: "No release yet; version 0.1.0 builds from source, and releases are planned as an NSIS setup, MSI packages and a portable zip.",
    architecture: "A Rust workspace with a parser crate that forbids unsafe and is fuzzed, a core crate and a Tauri shell with a React UI. The window runs unelevated; a step that needs administrator rights starts the same program as a separate helper that talks to the window over a named pipe and never writes files.",
    repo: "unlost-recovery",
    license: "MIT",
    pinned: true
  },
  {
    slug: "postsight",
    title: "Postsight",
    group: "desktop",
    category: "Browser Extension / X",
    year: 2026,
    summary: "Browser extension that adds an AI button to every post on X: fact-check, research, summarize, translate and explain with your own Claude, OpenAI or DeepSeek key.",
    description: "Verify returns a verdict, a confidence score, claim-by-claim notes and the sources behind them, from live web search on Claude and OpenAI. Auto routing sends light jobs to cheap fast models and fact-checks to stronger ones, and every result shows its tokens, searches, cost and time.",
    features: [
      "Verify, Research, Summarize, Explain, Translate, Reply ideas and Ask on any post",
      "Auto model routing by task weight, or a model picked per post",
      "Cost on every result and monthly budgets per provider",
      "Optional wallet cards for 0x addresses and .eth names, from public sources",
      "Interface and answers in 12 languages; no Postsight server, analytics or tracking"
    ],
    stack: [
      "Chrome Extension",
      "TypeScript",
      "Claude",
      "OpenAI",
      "DeepSeek",
      "Viem",
      "esbuild",
      "Vitest"
    ],
    links: [
      { label: "Live", href: "https://postsight.xyz" },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/postsight-ai-fact-check-a/fhgkaalhcafnhfebmckfnbgdheekbnin"
      },
      { label: "Download", href: "https://github.com/yusufky63/postsight/releases" },
      { label: "GitHub", href: "https://github.com/yusufky63/postsight" }
    ],
    status: "Version 1.2.1, listed on the Chrome Web Store and also available as a zip from GitHub Releases.",
    architecture: "A Manifest V3 extension built with esbuild and no UI framework; the content script renders into shadow roots. It uses the Anthropic TypeScript SDK for Claude and DeepSeek, plain fetch for OpenAI's Responses API and viem for Ethereum and Base reads, and the postsight.xyz website is a static build in the same repository.",
    repo: "postsight",
    license: "MIT",
    pinned: true
  },
  {
    slug: "reclaim-cleaner",
    title: "ReClaim Cleaner",
    group: "desktop",
    category: "Desktop App / Disk Cleanup",
    year: 2026,
    summary: "Open-source disk cleaner and space analyzer for Windows 10 and 11, with a Linux beta, that ranks what it finds by how safe it is to remove and deletes nothing unreviewed.",
    description: "It shows where disk space went with a treemap and a hidden-space breakdown, and scans for junk, caches, developer build folders, AI models, downloads, large files and duplicates. Every clean runs from a list you have seen, with sizes and three risk levels, and protected locations can never be removed.",
    features: [
      "Space map: a treemap of any drive or folder, coloured by category",
      "233 known junk and cache locations, defined as JSON rules",
      "Finds node_modules, target, .next and other rebuildable folders in projects",
      "Duplicates confirmed with a full BLAKE3 hash; hard links counted once",
      "Uninstalls apps and reviews their leftovers; 14 interface languages"
    ],
    stack: [
      "Tauri",
      "Rust",
      "React",
      "TypeScript",
      "Tailwind",
      "Vite",
      "Vitest",
      "Zustand",
      "i18next"
    ],
    links: [
      {
        label: "Download",
        href: "https://github.com/yusufky63/reclaim-cleaner/releases/latest"
      },
      { label: "GitHub", href: "https://github.com/yusufky63/reclaim-cleaner" }
    ],
    status: "Public repository with Windows releases (setup, MSI and portable zip) and Linux beta packages; builds are not code-signed yet.",
    architecture: "A Tauri 2 desktop shell over a Rust engine (crates/core): a parallel directory walker on rayon, a rule engine, a cleaner, a duplicate finder (xxh3 and BLAKE3) and Win32 APIs through windows-rs. The app runs as a normal user; admin-only items are cleaned by the same exe started through UAC in a helper mode that receives rule ids, never paths.",
    repo: "reclaim-cleaner",
    license: "MIT",
    pinned: true
  },
  {
    slug: "gpt-image-studio",
    title: "GPT Image Studio",
    group: "desktop",
    category: "Desktop App / AI Imaging",
    year: 2026,
    summary: "Windows desktop app for generating, editing and outpainting images with OpenAI GPT Image models, with local history, token and cost tracking and API keys stored in Windows Credential Manager.",
    description: "Windows desktop app for generating, editing and outpainting images with OpenAI GPT Image models, with local history, token and cost tracking and API keys stored in Windows Credential Manager.",
    features: [
      "Text-to-image, edit and reference, and expand or outpaint modes",
      "Local resize, crop and stretch without API calls",
      "Quality, format, background and aspect-ratio controls including 4K presets",
      "SQLite history with token usage and USD cost tracking"
    ],
    stack: [
      "Python",
      "Qt",
      "OpenAI",
      "SQLite",
      "GitHub Actions"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/yusufky63/GPT-Image-Studio" }
    ],
    status: "Public repository released as v1.0.2 with a CI-built Windows executable.",
    architecture: "Single PySide6 desktop app split into api, db, pricing, security and validation modules, packaged with PyInstaller.",
    role: "Built the desktop UI, API client, pricing model, secure key storage and release pipeline.",
    repo: "GPT-Image-Studio"
  }
];
