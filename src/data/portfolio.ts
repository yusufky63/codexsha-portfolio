export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  index: string;
  category: string;
  /** One-line summary used in rows and cards. Falls back to `description`. */
  summary?: string;
  description: string;
  features: string[];
  stack: string[];
  links: ProjectLink[];
  status: string;
  role: string;
  architecture: string;
  privateNote?: string;
  /** Set to false to keep a project in the /projects index only. */
  homepage?: boolean;
};

export type ProjectGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  layout: "rows" | "cards";
  projects: Project[];
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
  { label: "repositories", value: 84 },
  { label: "private builds", value: 26 },
  { label: "own projects", value: 68 },
  { label: "public repos", value: 42 }
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
    slug: "bstocks",
    title: "BStocks",
    index: "02",
    category: "Base DeFi / Tokenized Stocks",
    summary:
      "Self-custodial interface for Coinbase Tokenized Stocks on Base: live markets, best-route trading across DEX aggregators, baskets, auto-invest, yield, gifting, and a fenced AI assistant.",
    description:
      "BStocks lets eligible users trade B20 tokenized stocks on Base without the app ever holding keys or funds. Every quote compares KyberSwap, Velora, the Uniswap Trading API, Aerodrome, CoW Protocol and optional 0x and OKX routes, every trade is simulated before signing, and baskets, recurring plans, Earn venues, gift links and gift pools sit on one verified activity layer.",
    features: [
      "Live DEX prices, Chainlink reference data, candles and liquidity status for 13 tokenized stocks",
      "Best-route trading across seven aggregators with exact approvals, simulation before signing and atomic Base Account batches",
      "Baskets, community templates and onchain auto-invest plans enforced by an AutoInvest contract",
      "Earn discovery across Morpho, Aave V3 and Compound v3, portfolio P&L, rebalancing and daily AI briefs",
      "Gift links, gift pools and passkey claim flows with sponsored gas, verified public stats and a Base App mini app manifest"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Wagmi",
      "Viem",
      "Base Account",
      "Reown AppKit",
      "Supabase",
      "Upstash Redis",
      "Anthropic",
      "x402",
      "Lightweight Charts",
      "Zod",
      "Vitest",
      "Playwright",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://basestocks.finance" },
      { label: "GitHub", href: "https://github.com/yusufky63/base-stocks" }
    ],
    status: "Public repository and live deployment on Base mainnet.",
    role: "Product builder across market data, DEX routing, contract integrations, the AI assistant, compliance flows, operations tooling and deployment.",
    architecture:
      "Next.js App Router app with server-side shared caches, Supabase persistence, per-aggregator route adapters, AutoInvest and gift pool contracts, cron-driven discovery and status probes, a public JSON API and an admin operations console."
  },
  {
    slug: "bstocks-launchpad",
    title: "BStocks Launchpad",
    index: "03",
    category: "Base / Token Launchpad / Uniswap v4",
    summary:
      "Stock-paired token launcher on Base: one transaction creates a zero-admin B20 token and opens a permanently locked Uniswap v4 pool against a Coinbase tokenized stock.",
    description:
      "Every token launched on the Launchpad trades against NVDAc, TSLAc, AAPLc or another tokenized stock. The full one billion supply is locked as liquidity forever, a Uniswap v4 hook charges a 1% fee in the paired stock and books 70% to the creator and 30% to the treasury, and an indexer records launches, swaps, candles, holders and fees from Base logs. There is no login: wallets sign, contracts decide.",
    features: [
      "One-transaction launch through the Base-native B20 factory, with optional creator buy, deadline and editable IPFS profile",
      "Uniswap v4 pool with a custom hook, single-sided liquidity locked forever and a Chainlink-priced 5,000 USD opening valuation",
      "1% swap fee in the paired stock split 70/30 between creator and treasury, claimable as ERC-6909",
      "Postgres indexer for launches, swaps, candles, holders, fees and stock quotes across every deployment",
      "Markets, token pages, create flow, trade panel, wallet page and a public JSON API"
    ],
    stack: [
      "Solidity",
      "Foundry",
      "Uniswap v4",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Wagmi",
      "Viem",
      "Base Account",
      "PostgreSQL",
      "Chainlink",
      "IPFS",
      "Lightweight Charts",
      "Vitest",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://launchpad.basestocks.finance" },
      { label: "GitHub", href: "https://github.com/yusufky63/bstocks-launchpad" }
    ],
    status: "Public monorepo with contracts, indexer and web app; live deployment on Base.",
    role: "Designed and built the factory, hook and router contracts, the fee model, the indexer, the web app and the deployment workflow.",
    architecture:
      "pnpm monorepo: Foundry contracts (StockPairFactory, StockPairHook, StockPairRouter) with invariant tests, a shared core package with ABIs, stock registry and price math, a Base log indexer writing to Postgres, and a Next.js web app."
  },
  {
    slug: "baseplay",
    title: "BasePlay",
    index: "04",
    category: "On-chain Gaming / Base Mainnet",
    summary:
      "Base-native on-chain gaming platform with 16 provably fair mini games, real ETH stakes, instant payouts, Chainlink VRF randomness and admin tooling.",
    description:
      "BasePlay is a compact gaming platform live on Base mainnet. It combines a Next.js frontend with Farcaster and Base Account wallet connectors, an Express and Socket.io backend, Supabase Realtime data, a shared GameVault, 18 Solidity contracts and Chainlink VRF v2.5 randomness.",
    features: [
      "16 games including Coin Flip, Dice, Crash, Mines, Slots and Wheel, all settled on-chain",
      "18 contracts live on Base mainnet with a shared GameVault, 5% house edge and 10,000-round economics simulations",
      "Chainlink VRF v2.5 randomness and an on-chain Lucky Draw prize every 10 settled rounds",
      "Leaderboards, live feed, profiles, quests, badges and referrals",
      "Backend event listener, WebSocket updates, admin panels, 39 Hardhat tests and Slither in CI"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Wagmi",
      "Viem",
      "Base Account",
      "Farcaster",
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
    links: [
      { label: "Live", href: "https://baseplay.games" },
      { label: "GitHub", href: "https://github.com/yusufky63/base-play-game" }
    ],
    status: "Public repository and live deployment on Base mainnet.",
    role: "Full-stack product builder across game UX, contract architecture, backend events, database flows, and deployment.",
    architecture:
      "npm-workspaces monorepo with Hardhat contracts, a Next.js frontend, an Express and Socket.io backend and shared types and ABIs. Contracts handle game settlement and vault safety while the backend coordinates events and realtime product state."
  },
  {
    slug: "drawcoin",
    title: "DrawCoin",
    index: "05",
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
    index: "06",
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

export const infrastructureProjects: Project[] = [
  {
    slug: "onchain-pilot",
    title: "Onchain Pilot",
    index: "07",
    category: "Base / B20 Token Console",
    description:
      "Operator console for B20 tokens on Base mainnet: create tokens, then mint, burn, freeze, pause and manage policies with simulation and review before every wallet signature. The app never holds keys.",
    features: [
      "Wallet workspace with ETH and USDC balances, sends, EIP-681 QR requests and B20 holdings",
      "B20 token creation with roles, policies, supply cap, initial mint and metadata",
      "Mint, burn, freeze-and-seize, pause, role and allowlist or blocklist operations with EIP-2612 permit",
      "Simulated and reviewed writes, Basename resolution, price, liquidity and holder analytics"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Viem",
      "Base Account",
      "Vitest",
      "Playwright"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/yusufky63/base-onchain-pilot" }
    ],
    status: "Public repository; production-candidate build with CI, unit, API and accessibility tests.",
    role: "Built the token console, wallet workspace, simulation and review flow, analytics routes and test suites.",
    architecture:
      "Single Next.js app: the browser sends writes straight to the wallet while read-only API routes fetch RPC and indexer data. No database."
  },
  {
    slug: "contour",
    title: "Contour Name Protocol",
    index: "08",
    category: "Arc / Name Service",
    description:
      ".contour name service on Arc with USDC payments: ERC-721 name NFTs, forward and reverse resolution, a fixed-price marketplace, a TypeScript SDK and a hosted MCP server for AI agents.",
    features: [
      "Register and renew names with ENSIP-15 normalization and signed permits against front-running",
      "Forward and reverse resolution with ERC-721 NFTs and SVG metadata",
      "Fixed-price USDC marketplace to list, buy and cancel",
      "Hosted MCP server, OpenAPI 3.1 spec, llms.txt, SDK and React hooks"
    ],
    stack: [
      "Solidity",
      "Foundry",
      "Next.js",
      "TypeScript",
      "Wagmi",
      "Viem",
      "Fastify",
      "PostgreSQL",
      "MCP",
      "Circle",
      "Vitest"
    ],
    links: [
      { label: "Live", href: "https://contour-arc.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/arc-name-services" }
    ],
    status: "Public monorepo with deployed, source-verified contracts and a live web app on Arc.",
    role: "Built the contracts, permit issuer, web app, SDK, MCP server and the operational documentation.",
    architecture:
      "pnpm monorepo: Foundry contracts, a Next.js web app, a permit-issuer service, config, normalization, SDK, React and MCP packages, a subgraph indexer and signed deployment manifests."
  },
  {
    slug: "sepbase",
    title: "SEPBASE",
    index: "09",
    category: "Base Sepolia / Name Service",
    description:
      "Onchain name service on Base Sepolia: names like alice.sepbase are ERC-721 tokens with lifecycle states, renewals, referrals, a marketplace, a TypeScript SDK, a React component and a read-only API.",
    features: [
      "ERC-721 names with active, grace, released and reserved states, 1 to 5 year terms and short-name pricing",
      "Primary names, public profiles and a 10% referral reward users claim themselves",
      "Fixed-price marketplace, account workspace and allowlisted admin console",
      "TypeScript SDK, React identity component, OpenAPI-documented read API and Blockscout naming hand-off"
    ],
    stack: [
      "Solidity",
      "Foundry",
      "OpenZeppelin",
      "Next.js",
      "TypeScript",
      "Wagmi",
      "Viem",
      "TanStack Query",
      "Zod",
      "Vitest"
    ],
    links: [
      { label: "Live", href: "https://sepbase.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/sepbase" }
    ],
    status: "Public monorepo with a deployed, source-verified contract on Base Sepolia and a live app.",
    role: "Built the contract, dApp, SDK, React package and the test suites across contract, SDK and web.",
    architecture:
      "pnpm monorepo with a web app and API, SDK and React packages and a Foundry contract that is the only source of truth. No database."
  },
  {
    slug: "routedust",
    title: "RouteDust",
    index: "10",
    category: "Testnet Infrastructure / Cross-chain Router",
    summary:
      "Multi-chain testnet asset router and dust consolidator: scans a wallet across 20 testnets, quotes and simulates every swap and bridge path, and consolidates balances into the chain and asset you choose.",
    description:
      "RouteDust discovers live swap and bridge capabilities at runtime instead of hardcoding them: Circle CCTP and Gateway, Uniswap v2, v3 and v4, Hyperlane warp routes, Stargate V2, Across, LI.FI intents and OP Standard Bridge deposits. It reserves source gas, scores and splits routes, handles partial fills, and executes everything from the user's own wallet with no backend and no custody.",
    features: [
      "Wallet scan and route planning across 20 EVM testnets, with watch mode for any address",
      "Runtime capability discovery across Circle CCTP and Gateway, Uniswap v2/v3/v4, Hyperlane, Stargate V2, Across, LI.FI and OP Standard Bridge",
      "Gas reserve, price-impact limits, split routes, multi-hop detours and PARTIAL plans when liquidity caps out",
      "Resumable route and batch timelines with permanent history and on-chain CCTP burn recovery",
      "Networks, protocols, coverage, faucets and liquidity pages backed by an on-chain probe and a provenance-stamped registry"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Viem",
      "Wagmi",
      "Circle CCTP",
      "Uniswap",
      "Li.Fi",
      "Zustand",
      "TanStack Query",
      "Vitest",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://routedust.xyz" },
      { label: "GitHub", href: "https://github.com/yusufky63/routedust" }
    ],
    status: "Public monorepo and live deployment, verified live against 20 testnets.",
    role: "Built the capability graph, planner and execution engine, protocol adapters, registry and probe tooling, and the web app.",
    architecture:
      "pnpm monorepo with a core planning and execution engine, a registry of chains, assets and deployments with bytecode provenance, one adapter per protocol, CLI probe and discovery scripts, and a Next.js App Router UI."
  },
  {
    slug: "batchpayarc",
    title: "BatchPayArc",
    index: "11",
    category: "Arc / Batch Payments",
    description:
      "Non-custodial bulk USDC payout tool on Arc Testnet: CSV import, simulation and gas estimates, Multicall3 batches of up to 100 payments and resumable checkpoints so nobody is paid twice.",
    features: [
      "Recipient rows or CSV import and export with validation and duplicate warnings",
      "Batches of up to 100 payments through Multicall3 aggregate3",
      "Simulation, gas estimate and balance re-check before every signature",
      "Post-transaction transfer verification, local checkpoints and history export"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Wagmi",
      "Viem",
      "TanStack Query",
      "Vitest"
    ],
    links: [
      { label: "Live", href: "https://batchpayarc.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/BatchPayArc" }
    ],
    status: "Public repository and live testnet deployment with CI and component tests.",
    role: "Built the batching engine, CSV pipeline, checkpoint logic, UI and test coverage.",
    architecture:
      "Single Next.js app with no backend: React hooks drive the batch run and history while pure library modules handle batching, CSV and checkpoints."
  },
  {
    slug: "giwa-flashkit",
    title: "GIWA FlashKit",
    index: "12",
    category: "GIWA / Developer Toolkit",
    description:
      "Developer toolkit for GIWA that surfaces ~200ms early confirmations and tracks transactions from preconfirmed to finalized, with React hooks, UI components, a mock RPC testing kit and a live portal.",
    features: [
      "Transaction tracking through preconfirmed, included, safe and finalized using two RPCs",
      "Pre-sign simulation with eth_simulateV1",
      "React hooks plus timeline and latency badge components",
      "Mock RPC testing kit, playground, inspector, benchmark and faucet portal"
    ],
    stack: [
      "TypeScript",
      "Viem",
      "React",
      "Next.js",
      "Tailwind",
      "Turborepo",
      "Vitest",
      "Foundry",
      "npm"
    ],
    links: [
      { label: "Live", href: "https://giwa-flashkit.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/giwa-flashkit" }
    ],
    status: "Public monorepo with published packages, a live portal and a funded transaction proof on GIWA Sepolia.",
    role: "Built the core tracking engine, React and UI packages, testing kit, portal and benchmark evidence.",
    architecture:
      "Turborepo monorepo with core, react, ui and testing packages, a Next.js portal, examples and demo contracts."
  },
  {
    slug: "anychain",
    homepage: false,
    title: "AnyChain",
    index: "13",
    category: "Arc / USDC Bridge Checkout",
    description:
      "Browser-only checkout that bridges testnet USDC from 23 EVM and Solana networks to a recipient on Arc through Circle CCTP v2 and the Forwarding Service, so nobody needs a destination wallet.",
    features: [
      "Source network picker with EIP-6963 EVM wallets and Phantom or Solana wallets",
      "Fee estimates and live progress through approve, burn, Circle attestation and delivery",
      "Locally saved steps so a failed transfer resumes safely and only tops up missing allowance",
      "EIP-5792 batching of approve and burn into one wallet prompt where supported"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Viem",
      "Circle",
      "Solana",
      "Vitest"
    ],
    links: [
      { label: "Live", href: "https://arc-anychain.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/arc-anychain" }
    ],
    status: "Public repository and live testnet deployment.",
    role: "Built the checkout flow, multi-wallet connection layer, recovery rules and transfer history.",
    architecture:
      "Single Next.js app with no backend: one checkout component plus pure library modules for networks, recovery, history and validation."
  }
];

export const toolProjects: Project[] = [
  {
    slug: "coremesh",
    title: "CoreMesh",
    index: "14",
    category: "AI Agents / Technocore Network",
    description:
      "Control panel for AI agents on the Technocore network: cryptographic agent identities, budgeted model workers behind a human review gate, signed verifiable posts and an MCP server that turns a coding session into an agent.",
    features: [
      "Ed25519 did:key identities encrypted in the browser with Argon2id and AES-GCM",
      "Rooms, signed messages, end-to-end encrypted DMs and tclk escrow verification",
      "Pluggable DeepSeek, Claude, Gemini, OpenAI-compatible and local providers with budgets and a kill switch",
      "Local worker daemon, MCP server bridge and signed work receipts anyone can verify"
    ],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "TanStack Query",
      "Zustand",
      "MCP",
      "DeepSeek",
      "Anthropic",
      "Google Gemini",
      "Vitest"
    ],
    links: [
      { label: "Live", href: "https://coremesh-flop.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/CoreMesh" }
    ],
    status: "Public repository and live deployment, tested against Technocore 0.11 to 0.13.",
    role: "Built the console, crypto vault, provider relay, worker policy layer and MCP integration.",
    architecture:
      "Single app with a web console, a provider relay API, a Node worker daemon and an MCP server sharing one protocol library."
  },
  {
    slug: "trace-core",
    title: "TRACE/CORE",
    index: "15",
    category: "Identity / Signed Contribution Proofs",
    description:
      "In-browser studio that creates an Ed25519 did:key identity, chats with signed messages and publishes verifiable contribution proofs on the Technocore protocol. Keys never leave the browser.",
    features: [
      "did:key identity in a local vault encrypted with PBKDF2 and AES-GCM, with backup export and import",
      "Live signed chat rooms with search and trust filters",
      "Public DID profiles and a private mailbox that accepts only signed writes",
      "Signed contribution URLs exported as a verifiable proof file"
    ],
    stack: ["Next.js", "React", "TypeScript", "Web Crypto", "Vercel"],
    links: [
      { label: "Live", href: "https://tracecore-flop.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/trace-core" }
    ],
    status: "Public repository and live deployment.",
    role: "Built the identity vault, signing flows, chat UI and the rate-limited proxy.",
    architecture:
      "Single Next.js app with a studio component, identity and protocol client libraries and one server route that forwards to Technocore with nonce and rate-limit protection."
  },
  {
    slug: "basestocks-bot",
    title: "BaseStocks Bot",
    index: "16",
    category: "Telegram Bot / BStocks",
    description:
      "Telegram bots for BStocks and the Launchpad that read their public APIs and hand every action back to the user's own wallet: prices, watchlists, portfolios, DCA links, launches, news and an assistant.",
    features: [
      "Price, markets, search, watchlist, wallet, portfolio and activity commands with inline buttons",
      "Prefilled buy, sell, DCA and launch deep links opened in the user's own wallet",
      "Free-text requests routed to the app assistant and returned as typed actions",
      "Inline queries, persistent keyboard and strict callback parsing; no keys, funds or wallet library"
    ],
    stack: ["Next.js", "TypeScript", "Telegram", "Zod", "Vitest", "Vercel"],
    links: [
      { label: "GitHub", href: "https://github.com/yusufky63/basestocks-bot" }
    ],
    status: "Public repository, deployed separately from both apps.",
    role: "Built the bot transport, command handlers, navigation model and safety rules.",
    architecture:
      "Next.js service that handles Telegram webhooks, reads the BStocks and Launchpad public APIs and returns links instead of signing anything."
  },
  {
    slug: "arc-pilot",
    title: "ArcPilot",
    index: "17",
    category: "Arc / Treasury Operator Console",
    description:
      "Local-first operator console that checks USDC treasury payouts on Arc against fixed rules, proposes PAY or BRIDGE_THEN_PAY actions and keeps a hashed evidence log in SQLite. Sending money stays locked off.",
    features: [
      "Payout batches with allowed recipients, USDC caps, protected reserve, bridge-fee limit and due time",
      "Repeatable rule checks and hashes that only propose actions",
      "Safe demo mode with no network calls and optional read-only balance checks on Arc and Base",
      "SQLite evidence log with JSON export and a one-click Windows launcher"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Viem",
      "Zod",
      "SQLite",
      "Circle",
      "Foundry",
      "Vitest"
    ],
    links: [{ label: "GitHub", href: "https://github.com/yusufky63/arc-pilot" }],
    status: "Public repository at v0.2.0 with CI running 113 Vitest and 12 Foundry tests.",
    role: "Built the observer, orchestrator, persistence layer, batch registry contract and operator UI.",
    architecture:
      "Next.js app with a Node server layer for observation, orchestration and persistence, CLI workers, a Foundry batch registry contract and SQLite storage."
  },
  {
    slug: "gpt-image-studio",
    title: "GPT Image Studio",
    index: "18",
    category: "Desktop App / AI Imaging",
    description:
      "Windows desktop app for generating, editing and outpainting images with OpenAI GPT Image models, with local history, token and cost tracking and API keys stored in Windows Credential Manager.",
    features: [
      "Text-to-image, edit and reference, and expand or outpaint modes",
      "Local resize, crop and stretch without API calls",
      "Quality, format, background and aspect-ratio controls including 4K presets",
      "SQLite history with token usage and USD cost tracking"
    ],
    stack: ["Python", "Qt", "OpenAI", "SQLite", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/yusufky63/GPT-Image-Studio" }
    ],
    status: "Public repository released as v1.0.2 with a CI-built Windows executable.",
    role: "Built the desktop UI, API client, pricing model, secure key storage and release pipeline.",
    architecture:
      "Single PySide6 desktop app split into api, db, pricing, security and validation modules, packaged with PyInstaller."
  },
  {
    slug: "coin-tracker-bot",
    title: "Coin Tracker Bot",
    index: "19",
    category: "Telegram Bot / BSC Holders",
    description:
      "Telegram bot that tracks top holders of BSC tokens and alerts on watched wallet transfers over a live WebSocket, with Moralis and Etherscan data, catch-up of missed transfers and per-user settings.",
    features: [
      "Add, rename and remove BEP-20 tokens with on-chain fallback for details",
      "Top-holder rankings and USD prices from Moralis or Etherscan",
      "Wallet and rank watchers with live transfer alerts and missed-transfer catch-up",
      "Button-driven settings with isolated data per Telegram user"
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Telegram",
      "Ethers",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Vitest"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/yusufky63/tg-coin-tracker" }
    ],
    status: "Public repository, Railway-ready with Docker, health checks and unit plus live tests.",
    role: "Built the bot, watcher services, scheduler, notification flow and data model.",
    architecture:
      "grammY bot and Fastify webhook server with watcher, holder scheduler and notification services over a Prisma and PostgreSQL database."
  },
  {
    slug: "visionz-ai",
    title: "VisionZ AI",
    index: "20",
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
    slug: "lexoraft",
    title: "Lexoraft",
    index: "21",
    category: "AI Learning App",
    description:
      "English/Turkish learning app with vocabulary cards, practice flows, quiz review, AI translation, and writing feedback.",
    features: [
      "Vocabulary cards with examples and Turkish translations",
      "Practice center for mistakes, grammar, speaking, writing, and listening",
      "AI translation coach with grammar notes and recall prompts",
      "Progress, favorites, quiz misses, drafts, and provider settings",
      "Controlled AI content generation with validation and duplicate reduction"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Zod",
      "DeepSeek",
      "OpenAI",
      "Browser TTS",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://english-learning-ai.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/english-learning" }
    ],
    status: "Public repository and live deployment.",
    role: "Built the learning workspace, progress model, AI provider settings, practice flows, and production deployment.",
    architecture:
      "Next.js App Router application with browser-local persistence, server AI provider adapters, Zod validation, security checks, rate limits, and browser speech/TTS flows."
  },
  {
    slug: "cellforge",
    title: "CellForge",
    index: "22",
    category: "Open Source UI Library",
    description:
      "Open-source React loader system with animated cell-based primitives, a live tuning studio, shadcn-style registry, and npm runtime package.",
    features: [
      "71 installable loader items generated from a local registry",
      "Gallery for loader families and quick install commands",
      "Studio for tuning color, shape, pattern, size, speed, padding, frames, and generated code",
      "shadcn-style source registry for editable component installs",
      "npm runtime package with reduced-motion handling and CSS-only animation paths"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Framer Motion",
      "Vitest",
      "npm",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://cellforge.dev" },
      { label: "GitHub", href: "https://github.com/cellforge-dev/cellforge" }
    ],
    status: "Public organization repository, live documentation site, registry, and npm package.",
    role: "Built the loader primitive system, public docs, tuning studio, registry generation workflow, package distribution, and validation pipeline.",
    architecture:
      "Next.js site with docs, gallery, studio, playground, generated shadcn registry files, source loader primitives, package build output, Vitest coverage, and consumer smoke checks."
  }
];

export const miniApps: Project[] = [
  {
    slug: "farsender",
    index: "23",
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
    index: "24",
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
    index: "25",
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
    index: "26",
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
    index: "27",
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
    index: "28",
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

export const projectGroups: ProjectGroup[] = [
  {
    id: "projects",
    eyebrow: "01 / Featured",
    title: "Featured Products",
    description:
      "Product-led case studies: the founder platform first, then the newest Base DeFi and launchpad work, the gaming product and the consumer apps.",
    layout: "rows",
    projects: featuredProjects
  },
  {
    id: "infrastructure",
    eyebrow: "02 / Onchain",
    title: "Onchain Infrastructure",
    description:
      "Token operations, name services, testnet routing, payout tooling and developer kits across Base, Arc and GIWA.",
    layout: "cards",
    projects: infrastructureProjects
  },
  {
    id: "tools",
    eyebrow: "03 / AI & Tools",
    title: "AI, Agents & Tooling",
    description:
      "Agent control planes, bots, desktop tools and open-source UI tooling that support the wider product-builder profile.",
    layout: "cards",
    projects: toolProjects
  },
  {
    id: "mini-apps",
    eyebrow: "04 / Farcaster",
    title: "Mini Apps",
    description:
      "Earlier Farcaster experiments: fast wallet actions, games, token creation and social on-chain flows.",
    layout: "cards",
    projects: miniApps
  }
];

export const homepageGroups: ProjectGroup[] = projectGroups.map((group) => ({
  ...group,
  projects: group.projects.filter((project) => project.homepage !== false)
}));

export const allProjects: Project[] = projectGroups.flatMap(
  (group) => group.projects
);

export const capabilities: CapabilityGroup[] = [
  {
    title: "Product",
    items: [
      "Wallet analytics",
      "Tokenized stock trading",
      "Token launchpads",
      "Testnet routing & bridges",
      "On-chain games",
      "Name services",
      "AI agent tooling",
      "Mobile subscription tracking"
    ]
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Mobile-first UI"]
  },
  {
    title: "Web3",
    items: [
      "Wagmi",
      "Viem",
      "Ethers",
      "Solidity",
      "Foundry",
      "Uniswap v4",
      "Circle CCTP",
      "Base Account",
      "Zora"
    ]
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "Fastify",
      "Supabase",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Socket.io",
      "Indexers"
    ]
  },
  {
    title: "Mobile + AI",
    items: [
      "Expo",
      "React Native",
      "WatermelonDB",
      "Anthropic",
      "Gemini",
      "DeepSeek",
      "MCP",
      "Telegram Bots"
    ]
  }
];

export function getProject(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export function getProjectSummary(project: Project) {
  return project.summary ?? project.description;
}
