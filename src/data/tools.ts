import type { Project } from "@/data/types";

export const tools: Project[] = [
  {
    slug: "cellforge",
    title: "CellForge",
    group: "tool",
    category: "Open Source UI Library",
    year: 2026,
    summary: "Open-source React loader system with animated cell-based primitives, a live tuning studio, shadcn-style registry, and npm runtime package.",
    description: "Open-source React loader system with animated cell-based primitives, a live tuning studio, shadcn-style registry, and npm runtime package.",
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
    architecture: "Next.js site with docs, gallery, studio, playground, generated shadcn registry files, source loader primitives, package build output, Vitest coverage, and consumer smoke checks.",
    role: "Built the loader primitive system, public docs, tuning studio, registry generation workflow, package distribution, and validation pipeline."
  },
  {
    slug: "visionz-ai",
    title: "VisionZ AI",
    group: "tool",
    category: "AI + Web3 Tooling",
    year: 2025,
    summary: "AI-powered token creation and discovery platform with generated metadata, images, market views, and trading-oriented pages.",
    description: "AI-powered token creation and discovery platform with generated metadata, images, market views, and trading-oriented pages.",
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
    architecture: "Next.js application with Zora SDK, Supabase, Hugging Face, Wagmi, Ethers, and trading/discovery UI modules.",
    role: "Built the token generation UX, AI integration surface, market views, and Zora/Web3 integration.",
    repo: "VisionZ-AI"
  },
  {
    slug: "lexoraft",
    title: "Lexoraft",
    group: "tool",
    category: "AI Learning App",
    year: 2026,
    summary: "English/Turkish learning app with vocabulary cards, practice flows, quiz review, AI translation, and writing feedback.",
    description: "English/Turkish learning app with vocabulary cards, practice flows, quiz review, AI translation, and writing feedback.",
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
    architecture: "Next.js App Router application with browser-local persistence, server AI provider adapters, Zod validation, security checks, rate limits, and browser speech/TTS flows.",
    role: "Built the learning workspace, progress model, AI provider settings, practice flows, and production deployment.",
    repo: "english-learning"
  }
];
