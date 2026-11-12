import type { ArchiveSeed } from "@/data/types";

export const archive: ArchiveSeed[] = [
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
