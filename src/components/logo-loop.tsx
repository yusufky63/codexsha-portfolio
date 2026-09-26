import { TechGlyph } from "@/components/tech-stack-icons";

const logos = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind",
  "Wagmi",
  "Viem",
  "Solidity",
  "Foundry",
  "Uniswap",
  "Circle",
  "Base Account",
  "Chainlink",
  "Farcaster",
  "Zora",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Expo"
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
      {logos.map((label) => (
        <span
          className="inline-flex h-9 min-w-28 items-center justify-center gap-2 rounded-md border border-[#292929] bg-[#1b1b1b] px-3 font-mono text-[11px] text-[#a8a8a8]"
          key={label}
        >
          <TechGlyph className="size-3.5 text-[#d0d0d0]" label={label} />
          {label}
        </span>
      ))}
    </div>
  );
}
