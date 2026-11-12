import type { ArchiveSeed } from "@/data/types";

export const archive: ArchiveSeed[] = [
  {
    repo: "GPT-Image-Studio",
    title: "GPT Image Studio",
    description: "Windows-first desktop app for OpenAI GPT Image models: generate, edit, outpaint and locally resize images.",
    stack: [
      "Python",
      "PySide6",
      "OpenAI",
      "SQLite"
    ]
  },
  {
    repo: "crypto-website-demo",
    title: "BLOCKTYPE",
    description: "Animated, responsive landing page concept for a modular Web3 protocol; the protocol data shown is illustrative.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind"
    ]
  },
  {
    repo: "arc-pilot",
    title: "ArcPilot",
    description: "Local operator console for policy-bounded USDC treasury decisions on Arc Testnet, with an evidence trail in SQLite.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "SQLite"
    ]
  },
  {
    repo: "tg-coin-tracker",
    title: "TG Coin Tracker",
    description: "Telegram bot for tracking BSC/BEP-20 token holders and watched wallet movements.",
    stack: [
      "TypeScript",
      "Node.js",
      "grammY",
      "Prisma"
    ]
  },
  {
    repo: "claim-bot-linea",
    title: "Linea Airdrop Claim Bot",
    description: "Browser app that claims Linea airdrops for multiple wallets and transfers the tokens to a central wallet.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Ethers"
    ]
  },
  {
    repo: "nfts-telegram-bot",
    title: "NFTs Telegram Bot",
    description: "Telegram bot that tracks floor prices and stats for NFT collections on Ethereum, Solana, Berachain and Celestia.",
    stack: [
      "Node.js",
      "JavaScript",
      "Telegram Bot API"
    ]
  },
  {
    repo: "oneclickdeploy",
    title: "OneClick Deployer",
    description: "No-code tool for deploying ERC-20 tokens, ERC-721 NFTs and simple contract templates on EVM networks.",
    stack: [
      "Next.js",
      "TypeScript",
      "Wagmi",
      "Supabase"
    ]
  }
];
