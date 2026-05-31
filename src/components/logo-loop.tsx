import {
  siChainlink,
  siCoinbase,
  siEthers,
  siExpress,
  siExpo,
  siFarcaster,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siSolidity,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siWagmi
} from "simple-icons";

type LogoItem = {
  label: string;
  path?: string;
  glyph?: "viem" | "zora";
};

const logos: LogoItem[] = [
  { label: "Next.js", path: siNextdotjs.path },
  { label: "TypeScript", path: siTypescript.path },
  { label: "React", path: siReact.path },
  { label: "Tailwind", path: siTailwindcss.path },
  { label: "Wagmi", path: siWagmi.path },
  { label: "Viem", glyph: "viem" },
  { label: "Ethers", path: siEthers.path },
  { label: "Farcaster", path: siFarcaster.path },
  { label: "Zora", glyph: "zora" },
  { label: "OnchainKit", path: siCoinbase.path },
  { label: "Supabase", path: siSupabase.path },
  { label: "Solidity", path: siSolidity.path },
  { label: "Chainlink", path: siChainlink.path },
  { label: "Node.js", path: siNodedotjs.path },
  { label: "Express", path: siExpress.path },
  { label: "Expo", path: siExpo.path }
];

export function LogoLoop() {
  return (
    <div
      aria-label="Core stack logos"
      className="relative mb-3 overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#171717] py-3"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#171717] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#171717] to-transparent" />
      <div className="logo-track flex w-max">
        <LogoSet />
        <LogoSet ariaHidden />
      </div>
    </div>
  );
}

function LogoSet({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="logo-set flex shrink-0 gap-2 px-1.5"
    >
      {logos.map((logo) => (
        <span
          className="inline-flex h-9 min-w-28 items-center justify-center gap-2 rounded-md border border-[#292929] bg-[#1b1b1b] px-3 font-mono text-[11px] text-[#a8a8a8]"
          key={logo.label}
        >
          {logo.path ? (
            <svg
              aria-hidden="true"
              className="size-3.5 text-[#d0d0d0]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={logo.path} />
            </svg>
          ) : (
            <LogoGlyph glyph={logo.glyph} />
          )}
          {logo.label}
        </span>
      ))}
    </div>
  );
}

function LogoGlyph({ glyph }: { glyph?: LogoItem["glyph"] }) {
  if (glyph === "zora") {
    return (
      <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
        <path d="M7 6h10L7 18h10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-3.5" fill="none" viewBox="0 0 24 24">
      <path d="M5 7h14l-7 11Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M9 7l3 11 3-11" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}
