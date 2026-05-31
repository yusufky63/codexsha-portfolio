# Codexsha Portfolio Content Strategy

## Goal

Build a professional portfolio that positions Yusuf as a Web3 product builder with strong execution across Base, Farcaster Mini Apps, wallet analytics, on-chain games, AI-powered creator tools, and mobile consumer products.

Do not frame the site as a generic developer portfolio. The strongest signal is product ownership: shipped tools, live apps, founder projects, private platform work, and repeatable execution in the on-chain app ecosystem.

## Core Positioning

Primary headline:

> Web3 Product Builder for Base, Farcaster, AI, and On-chain Apps

Short bio:

> I build on-chain products that combine wallet analytics, Farcaster Mini Apps, AI-assisted creation tools, Base-native games, and mobile-first consumer experiences.

Expanded bio:

> I am Yusuf, founder and builder behind zkCodex, DrawCoin, BasePlay, and Abonely. My work focuses on turning blockchain infrastructure into usable products: wallet intelligence, mini apps, on-chain gaming, creator token tools, and subscription management apps. I work across product, frontend, backend, smart contracts, API design, and deployment.

## Content Principles

- Lead with products, not technologies.
- Keep the first viewport focused on credibility and clarity.
- Show fewer projects with stronger context instead of listing every repository.
- Group smaller Farcaster experiments together.
- Exclude Legacy Trackers from the main site.
- Mention private projects by product value and stack, not sensitive repo details.
- Use live links where available.
- Use GitHub links only for public repositories or when intentionally exposed.

## Recommended Site Structure

1. Hero
2. Featured Products
3. Farcaster Mini Apps
4. Technical Capabilities
5. Build Timeline
6. Contact / Social Links

## Hero Content

Eyebrow:

> Base · Farcaster · AI · On-chain UX

Headline:

> Building useful Web3 products from idea to mainnet.

Supporting copy:

> I design and ship wallet analytics, Farcaster Mini Apps, Base-native games, AI-powered creator tools, and mobile consumer apps with full-stack ownership across product, frontend, backend, contracts, APIs, and deployment.

Primary CTA:

> View Projects

Secondary CTA:

> Contact

Social links:

- GitHub: https://github.com/yusufky63
- X: https://x.com/codexsha
- Website / product: https://zkcodex.com

## Featured Products

### 1. zkCodex

Category:

> Founder Project · Wallet Analytics · Multi-chain Web3 Platform

Short description:

> zkCodex is a multi-chain wallet analytics and DeFi tools platform that helps users understand wallet activity, transaction history, portfolio behavior, contract interactions, and potential airdrop opportunities.

Key points:

- Multi-chain wallet analytics across 35+ EVM networks.
- Wallet scoring, transaction activity, asset overview, and interaction history.
- Airdrop opportunity discovery and eligibility-style tracking.
- Smart contract interaction tools and EVM utilities.
- Separate stats API for wallet analytics, transaction history, DeFi/NFT activity, and scoring.
- Farcaster Mini App version for mobile-first wallet checks and on-chain journeys.

Stack:

> React, JavaScript, TypeScript, Next.js, Wagmi, Viem, RainbowKit, Reown AppKit, LiFi Widget, Circle Bridge Kit, Express, Ethers, Vercel

Links:

- Main product: https://zkcodex.com
- Public intro repo: https://github.com/zkcodex/Introduction-zkCodex

Portfolio treatment:

> Make this the first and strongest case study. Present it as a platform with multiple parts: main dashboard, stats API, Farcaster mini app, and smart contract/on-chain utility layer.

### 2. BasePlay

Category:

> Private Product · On-chain Gaming · Base Mainnet

Short description:

> BasePlay is a Base-native on-chain gaming platform with provably fair mini games, real stakes, instant payouts, smart contracts, backend event handling, leaderboards, and admin tooling.

Key points:

- Base mainnet-only production direction.
- Mini games with small real-stake bets.
- Game library includes Coin Flip, Dice, Crash, Mines, Hi-Lo, Limbo, Roulette Lite, Slots, Wheel, Plinko Lite, Scratch Card, Treasure Chest, Lucky Seven, Rock Paper Scissors, Color Pick, and Over/Under.
- Solidity contracts with vault architecture, game contracts, payout logic, and tests.
- Chainlink VRF-based randomness.
- Backend event listener, WebSocket updates, Supabase database, and admin pages.
- Security documentation covering reentrancy, front-running, vault drain protection, pausing, refunds, and double settlement prevention.

Stack:

> Next.js, TypeScript, Tailwind CSS, Wagmi, RainbowKit, Viem, Node.js, Express, Socket.io, Supabase, Redis, Solidity, OpenZeppelin, Chainlink VRF, Hardhat, Vercel

Live link:

> https://baseplay.games

Portfolio treatment:

> Present as a serious full-stack Web3 product, not just a game demo. Emphasize contract architecture, fairness, payout safety, Base-native UX, and product system depth.

### 3. DrawCoin

Category:

> AI + Creator Economy · Base · Farcaster Mini App

Short description:

> DrawCoin lets users create and trade art-backed coins on Base using hand-drawn artwork or AI-generated visuals, with Farcaster Mini App and BaseApp support.

Key points:

- Interactive drawing canvas and AI art generation.
- ERC-20 style tradeable coin creation through Zora infrastructure.
- Base network support for low-cost transactions.
- Farcaster Mini App integration.
- Supabase-backed data layer.
- Multiple AI/image services and IPFS-style asset flow.

Stack:

> Next.js, TypeScript, Tailwind CSS, Zora SDK, Wagmi, Viem, Farcaster SDK, Supabase, Gemini, Together AI, Pinata/IPFS

Links:

- Live: https://drawcoin-mini.vercel.app
- GitHub: https://github.com/yusufky63/drawcoin

Portfolio treatment:

> Use as the strongest AI + Web3 creator product. Explain the user journey: draw or generate art, create coin, trade/share in Farcaster.

### 4. Abonely

Category:

> Mobile App · Consumer SaaS · Subscription Tracking

Short description:

> Abonely is a privacy-first mobile subscription tracker for managing recurring payments, reminders, spending insights, and multi-currency subscription data without connecting bank accounts.

Key points:

- iOS-first mobile app with Android support.
- Add, edit, archive, and analyze subscriptions.
- Monthly/yearly spending dashboard.
- Payment reminders with configurable offsets.
- Multi-currency support for TRY, USD, EUR, RUB.
- 50+ popular service catalog with auto-fill pricing.
- Insights by category and period.
- Offline-first local database with optional cloud sync.
- Supabase Auth with email and Google Sign-In.
- iOS widget, family profiles, CSV export, themes, and multilingual support.

Stack:

> Expo, React Native, TypeScript, Zustand, WatermelonDB, Supabase, Google Sign-In, Sentry, FlashList

Related repos:

- Mobile app: private `subtrack`
- Web landing/app: private `abonely-web`, live at https://abonely-web.vercel.app

Portfolio treatment:

> Use this to show range beyond Web3. It proves mobile product thinking, offline-first architecture, consumer UX, localization, and practical SaaS design.

## Farcaster Mini Apps Section

Section title:

> Farcaster Mini Apps & On-chain Experiments

Section intro:

> A collection of focused mini apps built for fast wallet actions, Base-native interactions, games, token creation, and social on-chain flows.

Projects to include:

### FarSender

Description:

> A Farcaster Mini App for sending ETH and ERC-20 tokens to multiple recipients across Base and Optimism through a simple mobile-first flow.

Stack:

> Next.js, TypeScript, Farcaster Mini App SDK, Neynar, Wagmi, Viem

Links:

- Live: https://farsender.vercel.app
- GitHub: https://github.com/yusufky63/farsender

### 8bitMinter

Description:

> A retro-styled token creator for Farcaster and Base, using AI-assisted content and Zora SDK flows to make token creation more accessible.

Stack:

> Next.js, TypeScript, Farcaster SDK, Zora SDK, Wagmi, Supabase, AI content generation

Links:

- Live: https://8bitminter.vercel.app
- GitHub: https://github.com/yusufky63/8bitminter

### Base 2048

Description:

> A Base-themed 2048 game with score tracking, local persistence, timer, undo flow, and hooks prepared for leaderboard/on-chain enrichment.

Stack:

> Next.js, TypeScript, Tailwind CSS, Farcaster Mini App SDK, OnchainKit

Links:

- Live: https://base-2048.vercel.app
- GitHub: https://github.com/yusufky63/base-2048

### Base Counter

Description:

> An on-chain counter experience for Base with wallet connection, leaderboard UI, and Farcaster sharing.

Stack:

> Next.js, TypeScript, Farcaster Mini App SDK, Wagmi, Viem, Ethers

Links:

- Live: https://counter-base.vercel.app
- GitHub: https://github.com/yusufky63/base-counter

### Frevoke

Description:

> A Base token approval revoke mini app that helps users inspect and revoke token approvals through a mobile-first Farcaster interface.

Stack:

> Next.js, TypeScript, OnchainKit, Wagmi, Viem, Blockscout API, Farcaster SDK

Links:

- Live: https://frevoke.vercel.app
- GitHub: https://github.com/yusufky63/frevoke

### Cosmic Raid

Description:

> A Farcaster Mini App arcade game experiment with wallet integration, mobile layout, leaderboard-oriented UI, and space shooter visuals.

Stack:

> Next.js, TypeScript, Farcaster Mini App SDK, Wagmi, Viem

Links:

- Live: https://cosmic-raid.vercel.app
- GitHub: https://github.com/yusufky63/cosmic-raid

## AI / Automation Tools

### VisionZ AI

Description:

> An AI-powered token creation and discovery platform that helps users generate token ideas, metadata, images, market views, and trading-oriented pages.

Stack:

> Next.js, JavaScript, Zora SDK, Supabase, Hugging Face, Wagmi, Ethers, ConnectKit

Links:

- Live: https://vision-z-ai.vercel.app
- GitHub: https://github.com/yusufky63/VisionZ-AI

### YouTube Shorts Video Pipeline

Description:

> A Streamlit-based video production pipeline that analyzes uploaded videos, generates Turkish narration, creates ElevenLabs voiceover, builds ASS/SRT subtitles, and renders Shorts-ready MP4 output with FFmpeg.

Stack:

> Python, Streamlit, Gemini, ElevenLabs, FFmpeg, ASS/SRT subtitle generation

Links:

- GitHub: https://github.com/yusufky63/youtube-shorts-video-pipeline

### OneClick Deployer

Description:

> A no-code smart contract deployment tool for launching ERC-20 tokens, ERC-721 NFTs, and simple custom contracts across multiple chains.

Stack:

> Next.js, TypeScript, Ethers, Wagmi, ConnectKit, Supabase, Tailwind CSS

Links:

- Live: https://oneclickdeploy-flame.vercel.app
- GitHub: https://github.com/yusufky63/oneclickdeploy

## Technical Capabilities

Use this section as a compact proof of range.

Product areas:

- Wallet analytics and scoring
- Farcaster Mini App development
- Base and EVM user experiences
- On-chain game systems
- AI-assisted creator tools
- Mobile subscription tracking
- Smart contract deployment tooling
- Telegram and automation bots
- API design and backend services

Frontend:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Mobile-first interfaces
- Dashboard and product UI
- Farcaster Mini App UX

Web3:

- Wagmi
- Viem
- Ethers
- RainbowKit
- OnchainKit
- Reown AppKit
- Zora SDK
- Farcaster SDK
- Neynar
- Solidity
- Hardhat
- Chainlink VRF

Backend and data:

- Node.js
- Express
- Supabase
- PostgreSQL
- Redis
- WebSocket / Socket.io
- REST APIs
- Rate limiting and validation

AI and automation:

- Gemini
- Together AI
- Hugging Face
- ElevenLabs
- FFmpeg
- Streamlit

Mobile:

- Expo
- React Native
- Zustand
- WatermelonDB
- Supabase Auth
- Sentry
- iOS widgets

## Build Timeline

Suggested timeline items:

- 2026: BasePlay, FarSender, zkCodex Mini, Abonely, DrawCoin, Base/Farcaster mini apps.
- 2025: VisionZ AI, NFT Telegram Bot, Airdrop Telegram Bot, zkCodex feedback/admin tooling.
- 2024: zkCodex platform expansion, backend services, Base/Optimism ecosystem work.
- 2022-2023: React Native, React apps, QR scanner, early frontend/mobile foundations.

Keep this section short. It should show momentum, not become a full archive.

## Projects To Exclude From Main Content

Do not include Legacy Trackers as a visible main section:

- zksync-airdrop-checker
- zksync
- linea-tracker
- blast-tracker
- optimisimtracker

These can remain implicit background experience but should not be a homepage category. They dilute the current, stronger product narrative.

Also keep unrelated forks out of the main content unless used as credibility for ecosystem learning.

## Homepage Project Priority

Use this order:

1. zkCodex
2. BasePlay
3. DrawCoin
4. Abonely
5. Farcaster Mini Apps group
6. AI / Automation Tools

## Recommended Tone

Use direct, product-focused copy:

- "Built"
- "Designed"
- "Integrated"
- "Shipped"
- "Supports"
- "Powered by"
- "Base-native"
- "Mobile-first"
- "On-chain"

Avoid weak or generic copy:

- "Passionate developer"
- "I like coding"
- "Various projects"
- "Learning blockchain"
- "Full stack developer" as the only identity

## UI Content Blocks For Next Step

The UI can be built from these content blocks:

- `hero`: eyebrow, headline, supporting copy, CTAs, social links.
- `featuredProjects`: zkCodex, BasePlay, DrawCoin, Abonely.
- `miniApps`: FarSender, 8bitMinter, Base 2048, Base Counter, Frevoke, Cosmic Raid.
- `tools`: VisionZ AI, YouTube Shorts Pipeline, OneClick Deployer.
- `capabilities`: grouped stack and product capabilities.
- `timeline`: concise year-based build history.

## Final Content Decision

The site should not look like a repo directory. It should look like a product builder profile with a clear hierarchy:

> Founder platforms first, shipped products second, mini app ecosystem third, tooling and experiments last.
