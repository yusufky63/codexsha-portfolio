import type { Project } from "@/data/types";

export const miniApps: Project[] = [
  {
    slug: "drawcoin",
    title: "DrawCoin",
    group: "mini-app",
    category: "AI + Creator Economy / Base",
    year: 2025,
    summary: "Create and trade art-backed coins on Base using hand-drawn artwork or AI-generated visuals in a Farcaster-ready product flow.",
    description: "DrawCoin lets creators draw or generate artwork, turn it into a tradeable coin through Zora infrastructure, and share the experience through Base and Farcaster-friendly surfaces.",
    features: [
      "Interactive drawing canvas and AI art generation",
      "Tradeable art-backed coin creation through Zora infrastructure",
      "Base network support for low-cost transactions",
      "Farcaster Mini App and BaseApp compatibility",
      "Supabase-backed data layer and IPFS-style asset flow"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Farcaster",
      "Zora SDK",
      "Wagmi",
      "Viem",
      "Supabase",
      "Google Gemini",
      "Upstash Redis",
      "Ethers",
      "Tldraw",
      "Recharts"
    ],
    links: [
      { label: "Live", href: "https://drawcoin.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/drawcoin" }
    ],
    status: "Public repository and live mini app deployment.",
    architecture: "Next.js application with Farcaster integration, wallet/on-chain libraries, Zora SDK flows, AI generation services, Supabase persistence, and asset upload pipeline.",
    role: "Built the product flow, drawing/token creation UI, AI-assisted generation path, Web3 integration, and deployment.",
    repo: "drawcoin"
  },
  {
    slug: "farsender",
    title: "FarSender",
    group: "mini-app",
    category: "Farcaster Mini App / Multisender",
    year: 2025,
    summary: "Farcaster Mini App for sending ETH and ERC-20 tokens to multiple recipients across Base and Optimism.",
    description: "Farcaster Mini App for sending ETH and ERC-20 tokens to multiple recipients across Base and Optimism.",
    features: [
      "Multi-recipient ETH and ERC-20 sending",
      "Base and Optimism network support",
      "Farcaster Mini App context",
      "Mobile-first wallet action flow"
    ],
    stack: [
      "Next.js",
      "Farcaster SDK",
      "Neynar",
      "Wagmi",
      "Viem"
    ],
    links: [
      { label: "Live", href: "https://farsender.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/farsender" }
    ],
    status: "Public repository and live deployment.",
    architecture: "Next.js app using Farcaster Mini App SDK, Neynar, Wagmi, Viem, and smart contract based multisend flows.",
    role: "Built the mini app flow, wallet integration, token action UI, and deployment.",
    repo: "farsender"
  },
  {
    slug: "8bitminter",
    title: "8bitMinter",
    group: "mini-app",
    category: "Farcaster Mini App / Token Creator",
    year: 2025,
    summary: "Retro-styled token creator for Farcaster and Base with AI-assisted content and Zora SDK flows.",
    description: "Retro-styled token creator for Farcaster and Base with AI-assisted content and Zora SDK flows.",
    features: [
      "Retro-styled token creation interface",
      "AI-assisted token content and visuals",
      "Zora SDK creation flow",
      "Farcaster-ready mobile UX"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Farcaster",
      "Google Gemini",
      "Supabase",
      "Upstash Redis",
      "Zora SDK",
      "Ethers",
      "Wagmi",
      "Viem"
    ],
    links: [
      { label: "Live", href: "https://8bitminter.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/8bitminter" }
    ],
    status: "Public repository and live deployment.",
    architecture: "Next.js and TypeScript mini app with Farcaster SDK, Zora SDK, wallet libraries, AI services, and Supabase persistence.",
    role: "Built token creation UX, AI-assisted generation flow, Web3 integration, and deploy pipeline.",
    repo: "8bitminter"
  },
  {
    slug: "base-2048",
    title: "Base 2048",
    group: "mini-app",
    category: "Game / Base Mini App",
    year: 2025,
    summary: "Base-themed 2048 game with score tracking, local persistence, timer, undo, and leaderboard hooks.",
    description: "Base-themed 2048 game with score tracking, local persistence, timer, undo, and leaderboard hooks.",
    features: [
      "4x4 2048 gameplay",
      "Score, timer, undo, and local best score",
      "Base-themed visual language",
      "Leaderboard and on-chain hook preparation"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "OnchainKit",
      "Farcaster",
      "Neynar",
      "Ethers",
      "Wagmi",
      "Viem",
      "Axios"
    ],
    links: [
      { label: "Live", href: "https://base-2048.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/base-2048" }
    ],
    status: "Public repository and live deployment.",
    architecture: "Next.js game client with local state, Base design system treatment, Farcaster metadata, and placeholder on-chain score hooks.",
    role: "Built the game UI, state handling, score flow, and Farcaster/Base-ready integration points.",
    repo: "base-2048"
  },
  {
    slug: "base-counter",
    title: "Base Counter",
    group: "mini-app",
    category: "On-chain Counter / Base",
    year: 2025,
    summary: "On-chain counter experience for Base with wallet connection, leaderboard UI, and Farcaster sharing.",
    description: "On-chain counter experience for Base with wallet connection, leaderboard UI, and Farcaster sharing.",
    features: [
      "Base-only counter interaction",
      "Wallet connection and network switching",
      "Leaderboard UI",
      "Farcaster sharing flow"
    ],
    stack: [
      "Next.js",
      "Farcaster SDK",
      "Wagmi",
      "Viem",
      "Ethers",
      "React Query",
      "Ox"
    ],
    links: [
      { label: "Live", href: "https://counter-base.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/base-counter" }
    ],
    status: "Public repository and live deployment.",
    architecture: "Next.js app with Farcaster Mini App SDK, Wagmi/Viem/Ethers wallet tooling, contract ABI integration, and leaderboard state.",
    role: "Built the counter UI, wallet flow, contract interaction path, leaderboard presentation, and Farcaster share action.",
    repo: "base-counter"
  },
  {
    slug: "frevoke",
    title: "Frevoke",
    group: "mini-app",
    category: "Security Utility / Base",
    year: 2025,
    summary: "Base token approval revoke mini app for inspecting and revoking approvals from a mobile-first UI.",
    description: "Base token approval revoke mini app for inspecting and revoking approvals from a mobile-first UI.",
    features: [
      "Token approval inspection",
      "Approval revoke flow",
      "Base Blockscout data integration",
      "Mobile-first Farcaster interface"
    ],
    stack: [
      "Next.js",
      "OnchainKit",
      "Farcaster",
      "Wagmi",
      "Viem",
      "Axios",
      "Blockscout"
    ],
    links: [
      { label: "Live", href: "https://frevoke.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/frevoke" }
    ],
    status: "Public repository and live deployment.",
    architecture: "Next.js mini app using OnchainKit, Wagmi, Viem, Farcaster SDK, and Blockscout API without a persistent backend.",
    role: "Built the approval inspection UI, revoke transaction flow, wallet integration, and Base-focused utility experience.",
    repo: "frevoke"
  },
  {
    slug: "cosmic-raid",
    title: "Cosmic Raid",
    group: "mini-app",
    category: "Arcade Game / Farcaster",
    year: 2025,
    summary: "Farcaster arcade game experiment with wallet integration, mobile layout, and leaderboard-oriented UI.",
    description: "Farcaster arcade game experiment with wallet integration, mobile layout, and leaderboard-oriented UI.",
    features: [
      "Arcade shooter-style UI",
      "Wallet connect/disconnect flow",
      "Mobile Farcaster layout",
      "Leaderboard-oriented product surface"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Farcaster SDK",
      "Wagmi",
      "Viem",
      "Ethers",
      "React Query",
      "Axios"
    ],
    links: [
      { label: "Live", href: "https://cosmic-raid.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/cosmic-raid" }
    ],
    status: "Public repository and live deployment.",
    architecture: "Next.js and TypeScript mini app with Farcaster SDK, wallet hooks, mobile game layout, and leaderboard-oriented components.",
    role: "Built the game-facing UI, Farcaster initialization, wallet integration, and responsive product shell.",
    repo: "cosmic-raid"
  }
];
