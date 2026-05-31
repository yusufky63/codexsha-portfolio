export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  index: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  links: ProjectLink[];
  status: string;
  role: string;
  architecture: string;
  privateNote?: string;
};

export type CompactProject = {
  slug: string;
  index: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  links: ProjectLink[];
  status: string;
  role: string;
  architecture: string;
};

export type CapabilityGroup = {
  title: string;
  items: string[];
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export const socialLinks: ProjectLink[] = [
  { label: "GitHub", href: "https://github.com/yusufky63" },
  { label: "X", href: "https://x.com/codexsha" },
  { label: "Telegram", href: "https://t.me/codexsha" },
  { label: "zkCodex", href: "https://zkcodex.com" }
];

export const stats: Stat[] = [
  { label: "repositories", value: 70 },
  { label: "private builds", value: 23 },
  { label: "own projects", value: 53 },
  { label: "public repos", value: 47 }
];

export const featuredProjects: Project[] = [
  {
    slug: "zkcodex",
    title: "zkCodex",
    index: "01",
    category: "Founder Project / Wallet Analytics",
    summary:
      "Multi-chain wallet analytics and DeFi tools platform for understanding wallet activity, portfolio behavior, and on-chain opportunities.",
    description:
      "zkCodex helps users analyze wallet activity across EVM networks, inspect transaction history, track asset behavior, discover airdrop-style opportunities, and use contract interaction tools from one product surface.",
    features: [
      "Wallet analytics across 35+ EVM networks",
      "Wallet scoring, transaction activity, and asset overview",
      "Airdrop opportunity discovery and eligibility-style tracking",
      "Stats API for transaction, DeFi, NFT, and scoring data",
      "Farcaster Mini App for mobile-first wallet checks"
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Wagmi",
      "Viem",
      "Ethers",
      "RainbowKit",
      "Reown AppKit",
      "Express",
      "Firebase",
      "Chart.js",
      "Redux",
      "Three.js",
      "Circle",
      "Li.Fi",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://zkcodex.com" },
      { label: "GitHub", href: "https://github.com/zkcodex/Introduction-zkCodex" }
    ],
    status: "Live platform with private app, public intro repository, API services, and Farcaster mini app work.",
    role: "Founder and product builder across product direction, frontend, backend APIs, wallet analytics flows, and deployment.",
    architecture:
      "Main React application, dedicated wallet statistics API, Farcaster mini app surface, wallet connection layer, and external on-chain data integrations."
  },
  {
    slug: "baseplay",
    title: "BasePlay",
    index: "02",
    category: "Private Product / On-chain Gaming",
    summary:
      "Base-native on-chain gaming platform with provably fair mini games, real stakes, instant payouts, and admin tooling.",
    description:
      "BasePlay is a compact gaming platform for Base mainnet. It combines a Next.js frontend, backend event handling, Supabase data, Solidity game contracts, vault logic, and Chainlink VRF randomness.",
    features: [
      "Game library with Coin Flip, Dice, Crash, Mines, Slots, Wheel, and more",
      "Base mainnet direction with small real-stake bets",
      "Vault architecture, payout logic, and game contracts",
      "Chainlink VRF randomness and Hardhat tests",
      "Backend event listener, WebSocket updates, and admin pages"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Wagmi",
      "Viem",
      "Supabase",
      "Socket.io",
      "Solidity",
      "Chainlink",
      "OpenZeppelin",
      "Hardhat",
      "WalletConnect",
      "Framer Motion",
      "Node.js",
      "Express"
    ],
    links: [{ label: "Live", href: "https://baseplay.games" }],
    status: "Private repository, public live deployment.",
    role: "Full-stack product builder across game UX, contract architecture, backend events, database flows, and deployment.",
    architecture:
      "Monorepo with frontend, backend, contracts, and shared packages. Contracts handle game settlement and vault safety while backend services coordinate events and realtime product state.",
    privateNote:
      "Private implementation details are represented by product behavior and stack only."
  },
  {
    slug: "drawcoin",
    title: "DrawCoin",
    index: "03",
    category: "AI + Creator Economy / Base",
    summary:
      "Create and trade art-backed coins on Base using hand-drawn artwork or AI-generated visuals in a Farcaster-ready product flow.",
    description:
      "DrawCoin lets creators draw or generate artwork, turn it into a tradeable coin through Zora infrastructure, and share the experience through Base and Farcaster-friendly surfaces.",
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
      { label: "Live", href: "https://drawcoin-mini.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/drawcoin" }
    ],
    status: "Public repository and live mini app deployment.",
    role: "Built the product flow, drawing/token creation UI, AI-assisted generation path, Web3 integration, and deployment.",
    architecture:
      "Next.js application with Farcaster integration, wallet/on-chain libraries, Zora SDK flows, AI generation services, Supabase persistence, and asset upload pipeline."
  },
  {
    slug: "abonely",
    title: "Abonely",
    index: "04",
    category: "Mobile App / Consumer SaaS",
    summary:
      "Privacy-first subscription tracker for managing recurring payments, reminders, spending insights, and multi-currency subscription data.",
    description:
      "Abonely is a mobile-first consumer app for tracking subscriptions without connecting bank accounts. It focuses on offline-first data, reminders, spending clarity, localization, and optional cloud sync.",
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
        href: "https://apps.apple.com/tr/app/abonely-subscription-tracker/id6762087754"
      }
    ],
    status: "Private mobile app repository with companion web deployment.",
    role: "Product builder across mobile UX, offline-first data model, sync architecture, auth, localization, and release planning.",
    architecture:
      "Expo mobile app with local WatermelonDB storage, Zustand state, Supabase Auth and sync, reminder flows, iOS widget work, and companion web presence.",
    privateNote:
      "Private repository details are summarized without exposing sensitive implementation data."
  }
];

export const miniApps: CompactProject[] = [
  {
    slug: "farsender",
    index: "05",
    title: "FarSender",
    category: "Farcaster Mini App / Multisender",
    description:
      "Farcaster Mini App for sending ETH and ERC-20 tokens to multiple recipients across Base and Optimism.",
    features: [
      "Multi-recipient ETH and ERC-20 sending",
      "Base and Optimism network support",
      "Farcaster Mini App context",
      "Mobile-first wallet action flow"
    ],
    stack: ["Next.js", "Farcaster SDK", "Neynar", "Wagmi", "Viem"],
    links: [
      { label: "Live", href: "https://farsender.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/farsender" }
    ],
    status: "Public repository and live deployment.",
    role: "Built the mini app flow, wallet integration, token action UI, and deployment.",
    architecture:
      "Next.js app using Farcaster Mini App SDK, Neynar, Wagmi, Viem, and smart contract based multisend flows."
  },
  {
    slug: "8bitminter",
    index: "06",
    title: "8bitMinter",
    category: "Farcaster Mini App / Token Creator",
    description:
      "Retro-styled token creator for Farcaster and Base with AI-assisted content and Zora SDK flows.",
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
    role: "Built token creation UX, AI-assisted generation flow, Web3 integration, and deploy pipeline.",
    architecture:
      "Next.js and TypeScript mini app with Farcaster SDK, Zora SDK, wallet libraries, AI services, and Supabase persistence."
  },
  {
    slug: "base-2048",
    index: "07",
    title: "Base 2048",
    category: "Game / Base Mini App",
    description:
      "Base-themed 2048 game with score tracking, local persistence, timer, undo, and leaderboard hooks.",
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
    role: "Built the game UI, state handling, score flow, and Farcaster/Base-ready integration points.",
    architecture:
      "Next.js game client with local state, Base design system treatment, Farcaster metadata, and placeholder on-chain score hooks."
  },
  {
    slug: "base-counter",
    index: "08",
    title: "Base Counter",
    category: "On-chain Counter / Base",
    description:
      "On-chain counter experience for Base with wallet connection, leaderboard UI, and Farcaster sharing.",
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
    role: "Built the counter UI, wallet flow, contract interaction path, leaderboard presentation, and Farcaster share action.",
    architecture:
      "Next.js app with Farcaster Mini App SDK, Wagmi/Viem/Ethers wallet tooling, contract ABI integration, and leaderboard state."
  },
  {
    slug: "frevoke",
    index: "09",
    title: "Frevoke",
    category: "Security Utility / Base",
    description:
      "Base token approval revoke mini app for inspecting and revoking approvals from a mobile-first UI.",
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
    role: "Built the approval inspection UI, revoke transaction flow, wallet integration, and Base-focused utility experience.",
    architecture:
      "Next.js mini app using OnchainKit, Wagmi, Viem, Farcaster SDK, and Blockscout API without a persistent backend."
  },
  {
    slug: "cosmic-raid",
    index: "10",
    title: "Cosmic Raid",
    category: "Arcade Game / Farcaster",
    description:
      "Farcaster arcade game experiment with wallet integration, mobile layout, and leaderboard-oriented UI.",
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
    role: "Built the game-facing UI, Farcaster initialization, wallet integration, and responsive product shell.",
    architecture:
      "Next.js and TypeScript mini app with Farcaster SDK, wallet hooks, mobile game layout, and leaderboard-oriented components."
  }
];

export const tools: CompactProject[] = [
  {
    slug: "visionz-ai",
    index: "11",
    title: "VisionZ AI",
    category: "AI + Web3 Tooling",
    description:
      "AI-powered token creation and discovery platform with generated metadata, images, market views, and trading-oriented pages.",
    features: [
      "AI token idea and metadata generation",
      "Image-assisted token creation",
      "Market discovery views",
      "Trading-oriented token pages"
    ],
    stack: [
      "Next.js",
      "Zora SDK",
      "Supabase",
      "Hugging Face",
      "Replicate",
      "Wagmi",
      "Viem",
      "Ethers",
      "ConnectKit",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://vision-z-ai.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/VisionZ-AI" }
    ],
    status: "Public repository and live deployment.",
    role: "Built the token generation UX, AI integration surface, market views, and Zora/Web3 integration.",
    architecture:
      "Next.js application with Zora SDK, Supabase, Hugging Face, Wagmi, Ethers, and trading/discovery UI modules."
  },
  {
    slug: "youtube-shorts-pipeline",
    index: "12",
    title: "YouTube Shorts Pipeline",
    category: "AI Media Automation",
    description:
      "Streamlit video pipeline for analysis, Turkish narration, ElevenLabs voiceover, ASS/SRT subtitles, and FFmpeg rendering.",
    features: [
      "Video analysis and script generation",
      "ElevenLabs voiceover",
      "ASS/SRT subtitle generation",
      "FFmpeg Shorts rendering pipeline"
    ],
    stack: ["Python", "Streamlit", "Google Gemini", "ElevenLabs", "FFmpeg"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yusufky63/youtube-shorts-video-pipeline"
      }
    ],
    status: "Public repository.",
    role: "Built the video processing workflow, AI narration path, subtitle pipeline, and render automation.",
    architecture:
      "Python and Streamlit tool that coordinates Gemini analysis, ElevenLabs TTS, subtitle generation, and FFmpeg rendering."
  },
  {
    slug: "oneclick-deployer",
    index: "13",
    title: "OneClick Deployer",
    category: "Smart Contract Deployment",
    description:
      "No-code smart contract deployment tool for launching ERC-20 tokens, ERC-721 NFTs, and simple contracts across chains.",
    features: [
      "No-code ERC-20 and ERC-721 deployment",
      "Multi-chain wallet connection",
      "Deployment history and statistics",
      "Shareable contract launch flow"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Ethers",
      "Wagmi",
      "Viem",
      "Supabase",
      "ConnectKit",
      "Radix UI",
      "Web3.js"
    ],
    links: [
      { label: "Live", href: "https://oneclickdeploy-flame.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/oneclickdeploy" }
    ],
    status: "Public repository and live deployment.",
    role: "Built the no-code deployment interface, wallet flow, contract configuration UI, and deployment tracking surface.",
    architecture:
      "Next.js and TypeScript app with Ethers, Wagmi, ConnectKit, Supabase, and contract deployment flows."
  }
];

export const capabilities: CapabilityGroup[] = [
  {
    title: "Product",
    items: [
      "Wallet analytics",
      "Farcaster Mini Apps",
      "On-chain games",
      "AI creator tools",
      "Mobile subscription tracking"
    ]
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Mobile-first UI"]
  },
  {
    title: "Web3",
    items: ["Wagmi", "Viem", "Ethers", "Zora", "OnchainKit", "Solidity"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Supabase", "Redis", "REST APIs", "Socket.io"]
  },
  {
    title: "Mobile + AI",
    items: ["Expo", "React Native", "WatermelonDB", "Gemini", "ElevenLabs"]
  }
];

export function getFeaturedProject(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export const allProjects: Project[] = [
  ...featuredProjects,
  ...miniApps.map((project) => ({
    slug: project.slug,
    title: project.title,
    index: project.index,
    category: project.category,
    summary: project.description,
    description: project.description,
    features: project.features,
    stack: project.stack,
    links: project.links,
    status: project.status,
    role: project.role,
    architecture: project.architecture
  })),
  ...tools.map((project) => ({
    slug: project.slug,
    title: project.title,
    index: project.index,
    category: project.category,
    summary: project.description,
    description: project.description,
    features: project.features,
    stack: project.stack,
    links: project.links,
    status: project.status,
    role: project.role,
    architecture: project.architecture
  }))
];
