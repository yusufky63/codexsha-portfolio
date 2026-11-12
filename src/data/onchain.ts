import type { Project } from "@/data/types";

export const onchain: Project[] = [
  {
    slug: "zkcodex",
    title: "zkCodex",
    group: "onchain",
    category: "Founder Project / Wallet Analytics",
    year: 2023,
    summary: "Multi-chain wallet analytics and DeFi tools platform for understanding wallet activity, portfolio behavior, and on-chain opportunities.",
    description: "zkCodex helps users analyze wallet activity across EVM networks, inspect transaction history, track asset behavior, discover airdrop-style opportunities, and use contract interaction tools from one product surface.",
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
    architecture: "Main React application, dedicated wallet statistics API, Farcaster mini app surface, wallet connection layer, and external on-chain data integrations.",
    role: "Founder and product builder across product direction, frontend, backend APIs, wallet analytics flows, and deployment."
  },
  {
    slug: "baseplay",
    title: "BasePlay",
    group: "onchain",
    category: "On-chain Gaming / Base",
    year: 2026,
    summary: "Base-native on-chain gaming platform with provably fair mini games, real stakes, instant payouts, and admin tooling.",
    description: "BasePlay is a compact gaming platform for Base mainnet. It combines a Next.js frontend, backend event handling, Supabase data, Solidity game contracts, vault logic, and Chainlink VRF randomness.",
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
    links: [
      { label: "Live", href: "https://baseplay.games" },
      { label: "GitHub", href: "https://github.com/yusufky63/base-play-game" }
    ],
    status: "Public repository and live deployment.",
    architecture: "Monorepo with frontend, backend, contracts, and shared packages. Contracts handle game settlement and vault safety while backend services coordinate events and realtime product state.",
    role: "Full-stack product builder across game UX, contract architecture, backend events, database flows, and deployment.",
    repo: "base-play-game"
  },
  {
    slug: "routedust",
    title: "RouteDust",
    group: "onchain",
    category: "Testnet Router / Multi-chain",
    year: 2026,
    summary: "Testnet asset router and dust consolidator that scans a wallet across 20 EVM testnets and routes balances into one chosen chain and asset.",
    description: "RouteDust discovers live swap and bridge capabilities at runtime, reserves source gas, and quotes and simulates every path before the wallet prompt. Routes run through Circle CCTP and Gateway, Uniswap v2/v3/v4, Hyperlane, Stargate V2, Across, LI.FI and the OP Standard Bridge, with all signing done client-side.",
    features: [
      "Wallet scan and route planning across 20 testnets, with a watch mode for any address",
      "CCTP manual mint and Forwarding Service edges between all 19 Circle chains",
      "Uniswap v2, v3 and v4 swaps with split routes and a price-impact limit",
      "Exact approvals, simulation before signing and pinned spender bytecode hashes",
      "Resumable route and batch timelines; a retried CCTP burn is never sent twice"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Wagmi",
      "Viem",
      "Tailwind",
      "Circle",
      "Uniswap",
      "Li.Fi",
      "Vitest"
    ],
    links: [
      { label: "Live", href: "https://routedust.xyz" },
      { label: "GitHub", href: "https://github.com/yusufky63/routedust" }
    ],
    status: "Public repository with a live deployment at routedust.xyz; testnet only, with spec phases 0-4 implemented and verified live against the networks.",
    architecture: "pnpm monorepo: a Next.js 16 App Router web app plus core (scanner, planner, execution engine), registry (chains, assets, deployments) and providers (route adapters) packages. The server only runs shared work: discovery, the LI.FI and logo proxies, coverage and an optional gas faucet.",
    repo: "routedust"
  },
  {
    slug: "giwa-flashkit",
    title: "FlashKit for GIWA",
    group: "onchain",
    category: "Developer Toolkit / GIWA",
    year: 2026,
    summary: "TypeScript and React toolkit that turns GIWA Flashblocks preconfirmations into transaction tracking, pending-state simulation and finality APIs.",
    description: "FlashKit tracks a transaction across the Flashblocks RPC and the canonical RPC and reports preconfirmed, included, safe and finalized states. It ships as four npm packages alongside a web portal with a playground, documentation, a transaction inspector, an RPC benchmark and a faucet list.",
    features: [
      "@flashkit/core: dual RPC engine, state machine, simulation and metrics",
      "@flashkit/react hooks: useFlashTransaction, useFlashSimulation, useFlashStatus",
      "@flashkit/ui components: TransactionTimeline, FlashBadge, FlashLatency",
      "Pre-flight simulation with eth_simulateV1 against pending Flashblock state",
      "Degrades to canonical RPC tracking when the Flashblocks RPC is down or rate limited"
    ],
    stack: [
      "TypeScript",
      "React",
      "Viem",
      "Next.js",
      "Tailwind",
      "Solidity",
      "Foundry",
      "Vitest",
      "Turborepo",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://giwa-flashkit.vercel.app" },
      { label: "Docs", href: "https://giwa-flashkit.vercel.app/docs" },
      { label: "GitHub", href: "https://github.com/yusufky63/giwa-flashkit" }
    ],
    status: "Public MIT repository with a live portal and npm packages at version 0.1.1; targets the GIWA Sepolia testnet (chain 91342).",
    architecture: "pnpm and Turborepo monorepo with four packages (core, react, ui, testing), a Next.js web portal, example apps and Foundry contracts (FlashCounter, FlashMint). The core engine is framework-agnostic and never signs transactions.",
    repo: "giwa-flashkit",
    license: "MIT"
  },
  {
    slug: "basestocks-bot",
    title: "BaseStocks Bot",
    group: "onchain",
    category: "Telegram Bot / Base",
    year: 2026,
    summary: "Telegram bots for BaseStocks and the BaseStocks Launchpad that read their public APIs and hand every action back as a link for the user's own wallet.",
    description: "The BaseStocks handle answers price, markets, watchlist, portfolio, DCA, earn and news commands, and the Launchpad handle covers ranked lists, token lookups and prefilled launch links. The service holds no keys, funds or wallet library, so trades open through a handoff page into the Base app, MetaMask or the browser.",
    features: [
      "Commands for prices, markets, watchlists, portfolio, activity, DCA plans, earn and news",
      "Launchpad commands: /top, /new, /token, /search and a prefilled /launch link",
      "Inline queries, a persistent keyboard and buttons that edit the tapped message",
      "/open handoff page into the Base app, MetaMask or the current browser",
      "Boundary tests fail the build on any wallet or signing library"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Telegram",
      "Zod",
      "Upstash Redis",
      "React",
      "Vitest",
      "Vercel"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/yusufky63/basestocks-bot" }
    ],
    status: "Public repository with a Vercel deployment; /chart, launch alerts and authenticated wallet linking are listed as not built yet.",
    architecture: "A single Next.js 16 App Router service that runs as a serverless Telegram webhook without a bot framework; simple replies ride the webhook response and long work uses after(). An optional Upstash Redis store holds shared state, and a Vercel cron route posts health alerts to the operator.",
    repo: "basestocks-bot"
  },
  {
    slug: "bstocks-launchpad",
    title: "BStocks Launchpad",
    group: "onchain",
    category: "Token Launchpad / Base",
    year: 2026,
    summary: "Stock-paired token launcher on Base: one transaction creates a B20 token and opens a Uniswap v4 pool against a Coinbase tokenized stock.",
    description: "Each launch mints a fixed 1,000,000,000 supply with no admin and locks all of it as liquidity, with the opening price set from the stock's Chainlink feed. A hook charges a 1% fee in the stock on every swap, split 70% to the token creator and 30% to the platform treasury.",
    features: [
      "Factory functions launch, launchWithOptions and launchAndBuy",
      "StockPairHook books a 1% swap fee in the stock, claimable by creator and treasury",
      "Indexer for launches, swaps, candles, holders, fees and stock quotes",
      "JSON API published as OpenAPI 3.1 and llms.txt, with unsigned transaction builders",
      "Embeddable trade and create widgets for iframes"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Solidity",
      "Foundry",
      "Uniswap",
      "Wagmi",
      "Viem",
      "Tailwind",
      "PostgreSQL"
    ],
    links: [
      { label: "Live", href: "https://launchpad.basestocks.finance" },
      { label: "GitHub", href: "https://github.com/yusufky63/bstocks-launchpad" }
    ],
    status: "Public repository with a live app at launchpad.basestocks.finance and committed contract deployment records for Base mainnet (chain 8453).",
    architecture: "pnpm monorepo: Foundry contracts (StockPairFactory, StockPairHook, StockPairRouter), a shared TypeScript core package, an indexer that reads Base logs into Postgres, an alerts service and a Next.js web app with a JSON API.",
    repo: "bstocks-launchpad"
  },
  {
    slug: "bstocks",
    title: "BStocks",
    group: "onchain",
    category: "DeFi App / Base",
    year: 2026,
    summary: "Self-custodial interface for Coinbase Tokenized Stocks on Base with live prices, best-route trading, baskets, recurring plans, yield and gifting.",
    description: "Every quote compares several DEX aggregators, including KyberSwap, Velora, the Uniswap Trading API, Aerodrome and CoW Protocol, with exact approvals and simulation before signing. It also covers baskets and onchain auto-invest, Earn through Morpho, Aave V3 and Compound v3, gift links and pools, a portfolio view and a fenced AI assistant, without holding keys or funds.",
    features: [
      "Markets for 13 stocks with DEX price, Chainlink reference, candles and volume",
      "Trade routing across several DEX aggregators, plus cancellable limit orders",
      "Baskets and auto-invest plans enforced onchain by the AutoInvest contract",
      "Earn: idle USDC into Morpho vaults, Aave V3 and Compound v3",
      "Gift links and gift pools backed by an ownerless escrow with sponsored claims"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Wagmi",
      "Viem",
      "Supabase",
      "Solidity",
      "Foundry",
      "Zod"
    ],
    links: [
      { label: "Live", href: "https://basestocks.finance" },
      { label: "GitHub", href: "https://github.com/yusufky63/base-stocks" }
    ],
    status: "Public repository with a live app at basestocks.finance on Base; no license has been chosen yet.",
    architecture: "A single Next.js 16 App Router app with server-side quote and provider routes, optional Supabase persistence and an optional Upstash Redis cache tier. Foundry contracts (AutoInvest, GiftEscrow, GiftPool) back auto-invest and gifting, and a Vercel cron route refreshes discovery and status probes.",
    repo: "base-stocks"
  },
  {
    slug: "coremesh",
    title: "CoreMesh",
    group: "onchain",
    category: "Agent Console / Technocore",
    year: 2026,
    summary: "Human control plane for autonomous agents on Technocore: a did:key vault, bounded workers, a tclk/1 deal verifier, e2e1 messaging and an MCP server.",
    description: "CoreMesh gives an operator a user-controlled Ed25519 did:key identity, a replaceable model runtime and budgeted workers whose output is held until it is approved and posted as a signed line. It also reads and verifies Technocore rooms, takes part in tclk/1 deals on the paper rail and issues signed work receipts.",
    features: [
      "Vault: Ed25519 did:key encrypted in the browser with Argon2id and AES-256-GCM",
      "Rooms and messages: local signature verification and e2e1 end-to-end messaging",
      "Deals: tclk/1 verifier and party that replays the state machine",
      "Workers with cooldown, run, token and cost budgets plus a kill switch",
      "Local worker daemon and MCP server for Claude Code or Codex sessions"
    ],
    stack: [
      "React",
      "TypeScript",
      "vinext",
      "Vite",
      "Nitro",
      "Tailwind",
      "MCP",
      "Zod",
      "Vitest",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://coremesh-flop.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/CoreMesh" }
    ],
    status: "Public repository with a live deployment; built and tested against technocore-chat 0.11.4 through 0.13.0, and the only tclk/1 settlement rail is paper, so no value moves.",
    architecture: "A React app built with vinext on Vite and Nitro that runs as a Node server or on Vercel, with a fail-closed provider relay at /api/providers. Protocol logic lives in lib/ (Technocore adapter, cryptography, tclk/1 verifier), and a local worker daemon and an MCP server run from npm scripts.",
    repo: "CoreMesh"
  },
  {
    slug: "trace-core",
    title: "TRACE/CORE",
    group: "onchain",
    category: "Identity Studio / Technocore",
    year: 2026,
    summary: "Local-first identity, signed chat and verifiable contribution studio for the Technocore protocol in the FLOP ecosystem.",
    description: "TRACE/CORE generates an Ed25519 did:key in the browser, stores the seed encrypted with PBKDF2 and AES-GCM in localStorage, and signs room messages client-side. It also publishes profile notes, creates unlisted mailboxes and exports signed contribution proofs as JSON.",
    features: [
      "In-browser Ed25519 did:key generation with an encrypted local vault",
      "Signed room chat with sequence merging, optimistic posting and trust filters",
      "Public profile notes and a 144-bit unlisted mailbox",
      "Signed contribution proofs exported as trace-core-public-proof.json",
      "Fixed-origin proxy to technocore.chat with path validation and rate limits"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Web Crypto",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://tracecore-flop.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/trace-core" }
    ],
    status: "Public repository with a live deployment at tracecore-flop.vercel.app.",
    architecture: "A single Next.js 15 app where key generation and signing stay in the browser. A fixed-origin /api/technocore proxy forwards validated, same-origin requests to technocore.chat.",
    repo: "trace-core",
    license: "MIT"
  },
  {
    slug: "contour",
    title: "Contour Name Protocol",
    group: "onchain",
    category: "Name Service / Arc",
    year: 2026,
    summary: "Name service and marketplace for the .contour namespace on Arc Network with USDC settlement, a TypeScript SDK and a hosted MCP server.",
    description: "Contour registers .contour names with ENSIP-15 normalization, forward and reverse resolution, and server-issued EIP-712 registration permits. It adds an onchain USDC marketplace, the contour-sdk TypeScript client, an OpenAPI 3.1 REST API and MCP tools that prepare unsigned transactions for agents.",
    features: [
      "Registration and renewal priced in USDC by label length",
      "Forward and reverse resolution with ENSIP-15 normalized labels",
      "Onchain marketplace: list, update, cancel and single-transaction buy in USDC",
      "Hosted MCP server with lookup tools and unsigned transaction planners",
      "contour-sdk TypeScript client, OpenAPI 3.1 spec and signed deployment manifest"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Solidity",
      "Foundry",
      "Wagmi",
      "Viem",
      "MCP",
      "Zod",
      "Fastify"
    ],
    links: [
      { label: "Live", href: "https://contour-arc.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/arc-name-services" }
    ],
    status: "Public repository with a live web app; deployment manifests in the repo cover Arc Mainnet (chain 5042) and Arc Testnet (chain 5042002).",
    architecture: "pnpm monorepo: a Next.js 16 web app with API routes and the hosted MCP server, a permit-issuer service, an x402-keeper service, and config, normalization, sdk, react and mcp packages. Foundry contracts cover the registry, registrar, controller, resolvers and marketplace.",
    repo: "arc-name-services",
    license: "MIT"
  },
  {
    slug: "batchpayarc",
    title: "BatchPayArc",
    group: "onchain",
    category: "Payments Tool / Arc Testnet",
    year: 2026,
    summary: "Non-custodial browser utility for resumable bulk USDC payouts on Arc Testnet, sending up to 100 transfers per transaction through Multicall3From.",
    description: "A recipient list is planned as sequential chunks of at most 100 ERC-20 transfers, each simulated and gas-checked before the wallet signs. The USDC Transfer events in every receipt are verified before the chunk is checkpointed in local storage, so an interrupted run resumes without replaying verified transactions.",
    features: [
      "Manual entry or CSV import and export of recipients and amounts",
      "Deterministic chunks of at most 100 recipients, with no singleton final chunk",
      "Simulation, gas reserve and balance re-check before every signature",
      "Receipt verification against the exact multiset of USDC Transfer logs",
      "Local run history with checkpoints, resume and reconcile states"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Wagmi",
      "Viem",
      "Tailwind",
      "Vitest",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://batchpayarc.vercel.app" },
      { label: "Docs", href: "https://batchpayarc.vercel.app/how-it-works" },
      { label: "GitHub", href: "https://github.com/yusufky63/BatchPayArc" }
    ],
    status: "Public repository with a live deployment; testnet-only experimental software on Arc Testnet that has not received a formal security audit.",
    architecture: "A single Next.js app with no backend, database or relayer; Wagmi and Viem use a fallback transport over four Arc Testnet RPC endpoints. Transactions target Arc's Multicall3From contract, and no custom payment contract is deployed.",
    repo: "BatchPayArc"
  },
  {
    slug: "anychain",
    title: "AnyChain",
    group: "onchain",
    category: "Bridge Checkout / Arc Testnet",
    year: 2026,
    summary: "Browser-only checkout that moves testnet USDC from an Arc App Kit-supported source network to a chosen recipient on Arc Testnet.",
    description: "AnyChain uses the Arc App Kit bridge over CCTP v2 with Circle's Forwarding Service, so delivery on Arc needs no destination wallet. It supports EVM and Solana browser wallets, shows fee estimates and live step progress, and keeps a local checkpoint so eligible failed transfers can resume with retryBridge.",
    features: [
      "Fail-closed allowlist of the 23 source testnets documented by Arc App Kit",
      "EIP-6963 EVM wallets and Phantom-compatible Solana wallets",
      "CCTP, Forwarding Service and source gas estimates before transfer",
      "Versioned local checkpoint and cross-session recovery with retryBridge",
      "EIP-5792 approve-and-burn batching when the wallet supports it"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Circle",
      "Viem",
      "Solana",
      "Tailwind",
      "Vitest",
      "Vercel"
    ],
    links: [
      { label: "Live", href: "https://arc-anychain.vercel.app" },
      { label: "Docs", href: "https://arc-anychain.vercel.app/how-it-works" },
      { label: "GitHub", href: "https://github.com/yusufky63/arc-anychain" }
    ],
    status: "Public repository with a live deployment on Vercel; testnet only, with Arc Testnet as the fixed destination.",
    architecture: "A single Next.js app with no backend, database or custom smart contract; it reads source network addresses and program IDs from the installed Arc App Kit runtime. Transfer history lives in browser local storage.",
    repo: "arc-anychain"
  },
  {
    slug: "onchain-pilot",
    title: "Onchain Pilot",
    group: "onchain",
    category: "Operations Console / Base",
    year: 2026,
    summary: "Non-custodial Base Mainnet operations console for wallet assets, payments, Basenames, B20 issuance, token administration and policy controls.",
    description: "Every write follows one path: read current state and caller authority, encode the call, simulate it against Base Mainnet, show a transaction review, then ask the wallet for approval. It is built for issuers and operators and never requests or stores a private key.",
    features: [
      "B20 creation with deterministic salt, predicted address, roles, policies and supply cap",
      "Token operations: mint, burn, freeze-and-seize, pause and supply cap",
      "Role grants and revocations plus blocklist and allowlist policy management",
      "Wallet workspace with ETH and USDC balances, sends and EIP-681 QR requests",
      "Analytics: price, liquidity, volume, holders and an OHLCV chart"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Viem",
      "Base Account SDK",
      "Tailwind",
      "Vitest",
      "Playwright"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/yusufky63/base-onchain-pilot" }
    ],
    status: "Public repository with a deployment at b20-pilot.vercel.app; a production-candidate targeting Base Mainnet (8453), with real wallet writes kept as a manual release gate.",
    architecture: "A Next.js 16 App Router client workspace with read-only route handlers that adapt cached RPC, GeckoTerminal and Base Blockscout data. Wallet writes go from the browser to the user's wallet, and there is no application database or custodial backend.",
    repo: "base-onchain-pilot"
  },
  {
    slug: "sepbase",
    title: "SEPBASE",
    group: "onchain",
    category: "Name Service / Base Sepolia",
    year: 2026,
    summary: "Independent single-chain onchain name registry for Base Sepolia that registers names such as alice.sepbase and resolves them to wallet addresses.",
    description: "Names are ERC-721 tokens with annual pricing, renewal, forward resolution, primary names, onchain referral rewards and a fixed-price marketplace. The same contract state is exposed through the dApp, a TypeScript SDK, a React package, the ABI and a read-only HTTP API.",
    features: [
      "ERC-721 name ownership with active, grace, released and reserved lifecycle states",
      "1-5 year registration and renewal with tiered pricing for short names",
      "Forward resolution, forward-confirmed primary names and public profiles",
      "Onchain referral attribution with claimable pull-payment rewards",
      "Fixed-price marketplace with seller pull payments"
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Solidity",
      "Foundry",
      "OpenZeppelin",
      "Wagmi",
      "Viem",
      "Zod",
      "Vitest"
    ],
    links: [
      { label: "Live", href: "https://sepbase.vercel.app" },
      { label: "GitHub", href: "https://github.com/yusufky63/sepbase" }
    ],
    status: "Public repository with a live web app; the contract is deployed and source-verified on the Base Sepolia testnet, and the SDK packages are not yet published to npm.",
    architecture: "pnpm monorepo: a Next.js App Router dApp with a read-only API, a single non-upgradeable Foundry contract (ChainNameService v2.0.0), and SDK and React packages driven by a deployment manifest. The contract is the source of truth; there is no required database or indexer.",
    repo: "sepbase"
  },
  {
    slug: "arc-pilot",
    title: "ArcPilot",
    group: "onchain",
    category: "Arc / Treasury Operator Console",
    year: 2026,
    summary: "Local-first operator console that checks USDC treasury payouts on Arc against fixed rules, proposes PAY or BRIDGE_THEN_PAY actions and keeps a hashed evidence log in SQLite.",
    description: "Local-first operator console that checks USDC treasury payouts on Arc against fixed rules, proposes PAY or BRIDGE_THEN_PAY actions and keeps a hashed evidence log in SQLite. Sending money stays locked off.",
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
    links: [
      { label: "GitHub", href: "https://github.com/yusufky63/arc-pilot" }
    ],
    status: "Public repository at v0.2.0 with CI running 113 Vitest and 12 Foundry tests.",
    architecture: "Next.js app with a Node server layer for observation, orchestration and persistence, CLI workers, a Foundry batch registry contract and SQLite storage.",
    role: "Built the observer, orchestrator, persistence layer, batch registry contract and operator UI.",
    repo: "arc-pilot"
  }
];
