import type { ReactNode } from "react";
import {
  siAnthropic,
  siAxios,
  siChainlink,
  siChartdotjs,
  siCircle,
  siCoinbase,
  siDeepseek,
  siDocker,
  siElevenlabs,
  siEthers,
  siExpress,
  siExpo,
  siFarcaster,
  siFastify,
  siFfmpeg,
  siFirebase,
  siFramer,
  siGithubactions,
  siGooglegemini,
  siGoogle,
  siHuggingface,
  siIpfs,
  siJavascript,
  siModelcontextprotocol,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siOpenzeppelin,
  siPostgresql,
  siPrisma,
  siPython,
  siQt,
  siRadixui,
  siReact,
  siReactquery,
  siRedis,
  siRedux,
  siReplicate,
  siSentry,
  siShadcnui,
  siSocketdotio,
  siSolana,
  siSolidity,
  siSqlite,
  siStreamlit,
  siSupabase,
  siSwagger,
  siTailwindcss,
  siTanstack,
  siTelegram,
  siThreedotjs,
  siTldraw,
  siTurborepo,
  siTypescript,
  siUpstash,
  siVercel,
  siVite,
  siVitest,
  siWagmi,
  siWalletconnect,
  siWeb3dotjs,
  siZod
} from "simple-icons";

const iconPaths: Record<string, string> = {
  "Next.js": siNextdotjs.path,
  TypeScript: siTypescript.path,
  JavaScript: siJavascript.path,
  React: siReact.path,
  "React Native": siReact.path,
  Vite: siVite.path,
  Tailwind: siTailwindcss.path,
  "Tailwind CSS": siTailwindcss.path,
  Wagmi: siWagmi.path,
  Ethers: siEthers.path,
  "Web3.js": siWeb3dotjs.path,
  WalletConnect: siWalletconnect.path,
  Solidity: siSolidity.path,
  Chainlink: siChainlink.path,
  "Chainlink VRF": siChainlink.path,
  OpenZeppelin: siOpenzeppelin.path,
  Farcaster: siFarcaster.path,
  "Farcaster SDK": siFarcaster.path,
  OnchainKit: siCoinbase.path,
  Coinbase: siCoinbase.path,
  "Base Account": siCoinbase.path,
  Circle: siCircle.path,
  "Circle CCTP": siCircle.path,
  Solana: siSolana.path,
  IPFS: siIpfs.path,
  "React Query": siReactquery.path,
  "TanStack Query": siTanstack.path,
  Redux: siRedux.path,
  "Node.js": siNodedotjs.path,
  Express: siExpress.path,
  Fastify: siFastify.path,
  "Socket.io": siSocketdotio.path,
  Supabase: siSupabase.path,
  PostgreSQL: siPostgresql.path,
  Prisma: siPrisma.path,
  SQLite: siSqlite.path,
  Redis: siRedis.path,
  Upstash: siUpstash.path,
  "Upstash Redis": siUpstash.path,
  Firebase: siFirebase.path,
  Docker: siDocker.path,
  Expo: siExpo.path,
  Sentry: siSentry.path,
  Gemini: siGooglegemini.path,
  "Google Gemini": siGooglegemini.path,
  "Google Sign-In": siGoogle.path,
  Anthropic: siAnthropic.path,
  DeepSeek: siDeepseek.path,
  "Hugging Face": siHuggingface.path,
  Replicate: siReplicate.path,
  ElevenLabs: siElevenlabs.path,
  MCP: siModelcontextprotocol.path,
  FFmpeg: siFfmpeg.path,
  Python: siPython.path,
  Streamlit: siStreamlit.path,
  Qt: siQt.path,
  Telegram: siTelegram.path,
  "Three.js": siThreedotjs.path,
  "Chart.js": siChartdotjs.path,
  "Framer Motion": siFramer.path,
  "Radix UI": siRadixui.path,
  "shadcn/ui": siShadcnui.path,
  Tldraw: siTldraw.path,
  Axios: siAxios.path,
  Zod: siZod.path,
  Swagger: siSwagger.path,
  Vitest: siVitest.path,
  Turborepo: siTurborepo.path,
  npm: siNpm.path,
  "GitHub Actions": siGithubactions.path,
  Vercel: siVercel.path
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
} as const;

// Hand-drawn monochrome glyphs for tools that have no entry in simple-icons.
const customGlyphs: Record<string, ReactNode> = {
  RainbowKit: (
    <>
      <path d="M4 15a8 8 0 0 1 16 0" {...strokeProps} strokeWidth="2" />
      <path d="M8 15a4 4 0 0 1 8 0" {...strokeProps} strokeWidth="2" />
    </>
  ),
  "Reown AppKit": (
    <>
      <path d="M8.8 8.8h6.4v6.4H8.8z" {...strokeProps} strokeWidth="1.8" />
      <path
        d="M5 12h3.8M15.2 12H19M12 5v3.8M12 15.2V19"
        {...strokeProps}
        strokeWidth="1.8"
      />
    </>
  ),
  Viem: (
    <>
      <path d="M5 7h14l-7 11Z" {...strokeProps} strokeWidth="1.8" />
      <path d="M9 7l3 11 3-11" {...strokeProps} strokeWidth="1.4" />
    </>
  ),
  Zora: (
    <path d="M7 6h10L7 18h10" {...strokeProps} strokeWidth="2" />
  ),
  "Li.Fi": (
    <>
      <path d="M5 16c3-5 11-5 14 0" {...strokeProps} strokeWidth="1.8" />
      <path d="M6 8h12M6 8v4M18 8v4" {...strokeProps} strokeWidth="1.8" />
    </>
  ),
  Hardhat: (
    <>
      <path d="M5 13a7 7 0 0 1 14 0v2H5z" {...strokeProps} strokeWidth="1.8" />
      <path d="M4 16h16" {...strokeProps} strokeWidth="1.8" />
    </>
  ),
  Foundry: (
    <>
      <path d="M5 8h11l3 3H9v4h8v2H5v-2h2v-4H5z" {...strokeProps} strokeWidth="1.6" />
    </>
  ),
  Uniswap: (
    <>
      <path d="M5 9h11m0 0-3-3m3 3-3 3" {...strokeProps} strokeWidth="1.8" />
      <path d="M19 15H8m0 0 3-3m-3 3 3 3" {...strokeProps} strokeWidth="1.8" />
    </>
  ),
  Recharts: (
    <>
      <path d="M5 17 10 11l4 3 5-7" {...strokeProps} strokeWidth="1.8" />
      <path d="M5 19h14" {...strokeProps} strokeWidth="1.4" />
    </>
  ),
  "Lightweight Charts": (
    <>
      <path d="M7 6v12M5 9h4v6H5zM17 5v14M15 8h4v7h-4z" {...strokeProps} strokeWidth="1.6" />
      <path d="M12 11v4" {...strokeProps} strokeWidth="1.6" />
    </>
  ),
  Neynar: (
    <>
      <path d="M7 7h4v4H7zM13 13h4v4h-4z" {...strokeProps} strokeWidth="1.6" />
      <path d="M11 9h4M9 11v4" {...strokeProps} strokeWidth="1.6" />
    </>
  ),
  WatermelonDB: (
    <>
      <path
        d="M6 9c0-2 2.7-4 6-4s6 2 6 4v6c0 2-2.7 4-6 4s-6-2-6-4z"
        {...strokeProps}
        strokeWidth="1.7"
      />
      <path d="M6 9c0 2 2.7 4 6 4s6-2 6-4" {...strokeProps} strokeWidth="1.7" />
    </>
  ),
  OpenAI: (
    <>
      <path d="M12 4a4 4 0 0 1 4 4v3a4 4 0 0 1-8 0V8a4 4 0 0 1 4-4Z" {...strokeProps} strokeWidth="1.7" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" {...strokeProps} strokeWidth="1.7" />
    </>
  ),
  Zustand: (
    <>
      <path d="M6 6h12v12H6z" {...strokeProps} strokeWidth="1.7" />
      <path d="M9 15 15 9M9 9h6v6" {...strokeProps} strokeWidth="1.7" />
    </>
  ),
  x402: (
    <>
      <path d="M5 6h14v12H5z" {...strokeProps} strokeWidth="1.7" />
      <path d="M12 9v6M10 10.5h3a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 0 0 3h3" {...strokeProps} strokeWidth="1.5" />
    </>
  ),
  "Web Crypto": (
    <>
      <path d="M8 11V8a4 4 0 0 1 8 0v3" {...strokeProps} strokeWidth="1.7" />
      <path d="M6 11h12v8H6z" {...strokeProps} strokeWidth="1.7" />
    </>
  ),
  Playwright: (
    <>
      <path d="M7 5h10l2 5-7 9-7-9z" {...strokeProps} strokeWidth="1.7" />
      <path d="M5 10h14M9 5l3 14 3-14" {...strokeProps} strokeWidth="1.3" />
    </>
  ),
  FlashList: (
    <path d="m13 3-7 10h5l-1 8 8-11h-5z" {...strokeProps} strokeWidth="1.8" />
  )
};

const glyphAliases: Record<string, string> = {
  ConnectKit: "Reown AppKit",
  Ox: "Viem",
  "Zora SDK": "Zora",
  "Uniswap v4": "Uniswap",
  Blockscout: "Neynar",
  "Browser TTS": "OpenAI"
};

const fallbackGlyph = (
  <path d="M7 8h10M7 12h10M7 16h6" {...strokeProps} strokeWidth="1.8" />
);

export function TechGlyph({
  label,
  className = "size-3.5"
}: {
  label: string;
  className?: string;
}) {
  const path = iconPaths[label];

  if (path) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    );
  }

  const glyph =
    customGlyphs[label] ?? customGlyphs[glyphAliases[label]] ?? fallbackGlyph;

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      {glyph}
    </svg>
  );
}

export function TechStackIcons({
  items,
  limit = 5
}: {
  items: string[];
  limit?: number;
}) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.slice(0, limit).map((item) => (
        <span
          className="inline-flex size-7 items-center justify-center rounded-md border border-[#292929] bg-[#1b1b1b] text-[#bdbdbd]"
          key={item}
          title={item}
        >
          <TechGlyph label={item} />
        </span>
      ))}
    </div>
  );
}
