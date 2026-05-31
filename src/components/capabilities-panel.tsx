import {
  Blocks,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Gamepad2,
  Globe2,
  Layers3,
  LineChart,
  Network,
  PanelsTopLeft,
  PlugZap,
  Server,
  Smartphone,
  WalletCards,
  type LucideIcon
} from "lucide-react";
import {
  siElevenlabs,
  siEthers,
  siExpo,
  siExpress,
  siFarcaster,
  siGooglegemini,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siRedis,
  siSocketdotio,
  siSolidity,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siWagmi
} from "simple-icons";
import type { CapabilityGroup } from "@/data/portfolio";

const groupIcons: Record<string, LucideIcon> = {
  Product: Blocks,
  Frontend: Code2,
  Web3: WalletCards,
  Backend: Server,
  "Mobile + AI": Smartphone
};

const itemIcons: Record<string, LucideIcon> = {
  "Wallet analytics": LineChart,
  "Farcaster Mini Apps": Network,
  "On-chain games": Gamepad2,
  "AI creator tools": BrainCircuit,
  "Mobile subscription tracking": Smartphone,
  "Mobile-first UI": PanelsTopLeft,
  Zora: PlugZap,
  Viem: Layers3,
  OnchainKit: WalletCards,
  "REST APIs": Globe2,
  WatermelonDB: Database
};

const simpleIconPaths: Record<string, string> = {
  "Next.js": siNextdotjs.path,
  React: siReact.path,
  TypeScript: siTypescript.path,
  Tailwind: siTailwindcss.path,
  Wagmi: siWagmi.path,
  Ethers: siEthers.path,
  Solidity: siSolidity.path,
  "Node.js": siNodedotjs.path,
  Express: siExpress.path,
  Supabase: siSupabase.path,
  Redis: siRedis.path,
  "Socket.io": siSocketdotio.path,
  Expo: siExpo.path,
  "React Native": siReact.path,
  Gemini: siGooglegemini.path,
  ElevenLabs: siElevenlabs.path,
  "Farcaster Mini Apps": siFarcaster.path
};

export function CapabilitiesPanel({
  groups
}: {
  groups: CapabilityGroup[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#171717]">
      {groups.map((group) => {
        const GroupIcon = groupIcons[group.title] ?? Blocks;

        return (
          <section
            className="grid border-b border-[#252525] last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)]"
            key={group.title}
          >
            <div className="flex items-center gap-3 border-b border-[#252525] bg-[#191919] px-4 py-3 md:border-b-0 md:border-r">
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-[#303030] bg-[#202020] text-[#d7d7d7]">
                <GroupIcon className="size-3.5" />
              </span>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#d7d7d7]">
                  {group.title}
                </h3>
                <p className="mt-0.5 font-mono text-[10px] text-[#6f6f6f]">
                  {group.items.length} items
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-px bg-[#242424] p-px">
              {group.items.map((item) => (
                <span
                  className="flex min-h-10 flex-[1_1_220px] items-center gap-2 bg-[#171717] px-3 py-2 text-[12px] leading-5 text-[#adadad] transition-colors hover:bg-[#1d1d1d] hover:text-[#e0e0e0]"
                  key={item}
                >
                  <CapabilityItemIcon item={item} />
                  <span className="truncate">{item}</span>
                </span>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function CapabilityItemIcon({ item }: { item: string }) {
  const Icon = itemIcons[item] ?? Bot;
  const simplePath = simpleIconPaths[item];

  return (
    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded border border-[#2d2d2d] bg-[#1f1f1f] text-[#cfcfcf]">
      {simplePath ? (
        <svg
          aria-hidden="true"
          className="size-3"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d={simplePath} />
        </svg>
      ) : (
        <Icon className="size-3" />
      )}
    </span>
  );
}
