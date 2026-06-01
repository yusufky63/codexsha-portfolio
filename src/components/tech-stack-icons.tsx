import {
  siAxios,
  siChainlink,
  siChartdotjs,
  siCircle,
  siCoinbase,
  siDeepseek,
  siElevenlabs,
  siEthers,
  siExpress,
  siExpo,
  siFarcaster,
  siFfmpeg,
  siFirebase,
  siFramer,
  siGooglegemini,
  siGoogle,
  siHuggingface,
  siIpfs,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siOpenzeppelin,
  siPython,
  siRadixui,
  siReact,
  siReactquery,
  siRedis,
  siRedux,
  siReplicate,
  siSentry,
  siShadcnui,
  siSocketdotio,
  siSolidity,
  siStreamlit,
  siSupabase,
  siSwagger,
  siTailwindcss,
  siThreedotjs,
  siTldraw,
  siTypescript,
  siUpstash,
  siVercel,
  siVitest,
  siWagmi,
  siWalletconnect,
  siWeb3dotjs,
  siZod
} from "simple-icons";

const iconPaths: Record<string, string> = {
  "Next.js": siNextdotjs.path,
  TypeScript: siTypescript.path,
  React: siReact.path,
  Tailwind: siTailwindcss.path,
  "Tailwind CSS": siTailwindcss.path,
  Wagmi: siWagmi.path,
  Ethers: siEthers.path,
  "Node.js": siNodedotjs.path,
  Express: siExpress.path,
  "Socket.io": siSocketdotio.path,
  Solidity: siSolidity.path,
  Chainlink: siChainlink.path,
  "Chainlink VRF": siChainlink.path,
  OpenZeppelin: siOpenzeppelin.path,
  Farcaster: siFarcaster.path,
  "Farcaster SDK": siFarcaster.path,
  "React Query": siReactquery.path,
  OnchainKit: siCoinbase.path,
  Coinbase: siCoinbase.path,
  Supabase: siSupabase.path,
  Redis: siRedis.path,
  Upstash: siUpstash.path,
  "Upstash Redis": siUpstash.path,
  Expo: siExpo.path,
  "React Native": siReact.path,
  Sentry: siSentry.path,
  Gemini: siGooglegemini.path,
  "Google Gemini": siGooglegemini.path,
  ElevenLabs: siElevenlabs.path,
  FFmpeg: siFfmpeg.path,
  Python: siPython.path,
  Streamlit: siStreamlit.path,
  "Hugging Face": siHuggingface.path,
  Replicate: siReplicate.path,
  Vercel: siVercel.path,
  Firebase: siFirebase.path,
  "Three.js": siThreedotjs.path,
  Redux: siRedux.path,
  "Chart.js": siChartdotjs.path,
  "Framer Motion": siFramer.path,
  "Radix UI": siRadixui.path,
  Axios: siAxios.path,
  WalletConnect: siWalletconnect.path,
  "Web3.js": siWeb3dotjs.path,
  Circle: siCircle.path,
  "Google Sign-In": siGoogle.path,
  IPFS: siIpfs.path,
  JavaScript: siJavascript.path,
  Swagger: siSwagger.path,
  Tldraw: siTldraw.path,
  DeepSeek: siDeepseek.path,
  Zod: siZod.path,
  "shadcn/ui": siShadcnui.path,
  Vitest: siVitest.path
};

function CustomTechIcon({ label }: { label: string }) {
  if (label === "RainbowKit") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M4 15a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" />
        <path d="M8 15a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (label === "Reown AppKit" || label === "ConnectKit") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M8.8 8.8h6.4v6.4H8.8z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 12h3.8M15.2 12H19M12 5v3.8M12 15.2V19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (label === "Viem" || label === "Ox") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M5 7h14l-7 11Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9 7l3 11 3-11" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      </svg>
    );
  }

  if (label === "Zora" || label === "Zora SDK") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M7 6h10L7 18h10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  if (label === "Li.Fi") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M5 16c3-5 11-5 14 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M6 8h12M6 8v4M18 8v4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (label === "Hardhat") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M5 13a7 7 0 0 1 14 0v2H5z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M4 16h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    );
  }

  if (label === "Recharts") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M5 17 10 11l4 3 5-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M5 19h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      </svg>
    );
  }

  if (label === "Neynar" || label === "Blockscout") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M7 7h4v4H7zM13 13h4v4h-4z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 9h4M9 11v4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    );
  }

  if (label === "WatermelonDB") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M6 9c0-2 2.7-4 6-4s6 2 6 4v6c0 2-2.7 4-6 4s-6-2-6-4z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6 9c0 2 2.7 4 6 4s6-2 6-4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (label === "OpenAI" || label === "Browser TTS") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M12 4a4 4 0 0 1 4 4v3a4 4 0 0 1-8 0V8a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    );
  }

  if (label === "FlashList") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="m13 3-7 10h5l-1 8 8-11h-5z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
      <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
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
          {iconPaths[item] ? (
            <svg
              aria-hidden="true"
              className="size-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={iconPaths[item]} />
            </svg>
          ) : (
            <CustomTechIcon label={item} />
          )}
        </span>
      ))}
    </div>
  );
}
