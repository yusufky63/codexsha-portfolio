import Image from "next/image";
import {
  AtSign,
  BadgePlus,
  Banknote,
  BarChart3,
  Bot,
  ChartCandlestick,
  Clapperboard,
  Coins,
  Fingerprint,
  Gamepad2,
  Grid3X3,
  Image as ImageIcon,
  Landmark,
  Languages,
  Palette,
  Radar,
  Rocket,
  Route,
  Send,
  ShieldOff,
  Smartphone,
  Terminal,
  Timer,
  WandSparkles,
  Waypoints,
  type LucideIcon
} from "lucide-react";

const projectLogos: Record<string, string> = {
  bstocks: "/project-icons/bstocks.png",
  "bstocks-launchpad": "/project-icons/bstocks.png",
  routedust: "/project-icons/routedust.svg",
  zkcodex: "/project-icons/zkcodex.png",
  baseplay: "/project-icons/baseplay.png",
  drawcoin: "/project-icons/drawcoin.png",
  abonely: "/project-icons/abonely.png",
  "onchain-pilot": "/project-icons/onchain-pilot.svg",
  contour: "/project-icons/contour.svg",
  sepbase: "/project-icons/sepbase.svg",
  coremesh: "/project-icons/coremesh.svg",
  "arc-pilot": "/project-icons/arc-pilot.svg",
  farsender: "/project-icons/farsender.png",
  "8bitminter": "/project-icons/8bitminter.png",
  "base-2048": "/project-icons/base-2048.png",
  "base-counter": "/project-icons/base-counter.png",
  frevoke: "/project-icons/frevoke.png",
  "cosmic-raid": "/project-icons/cosmic-raid.png",
  cellforge: "/project-icons/cellforge.svg",
  "visionz-ai": "/project-icons/visionz-ai.png",
  lexoraft: "/project-icons/lexoraft.svg"
};

const projectIcons: Record<string, LucideIcon> = {
  bstocks: ChartCandlestick,
  "bstocks-launchpad": Rocket,
  routedust: Route,
  zkcodex: BarChart3,
  baseplay: Gamepad2,
  drawcoin: Palette,
  abonely: Smartphone,
  "onchain-pilot": Coins,
  contour: AtSign,
  sepbase: AtSign,
  anychain: Waypoints,
  batchpayarc: Banknote,
  "giwa-flashkit": Timer,
  coremesh: Bot,
  "trace-core": Fingerprint,
  "basestocks-bot": Bot,
  "arc-pilot": Landmark,
  "gpt-image-studio": ImageIcon,
  "coin-tracker-bot": Radar,
  farsender: Send,
  "8bitminter": BadgePlus,
  "base-2048": Grid3X3,
  "base-counter": Coins,
  frevoke: ShieldOff,
  "cosmic-raid": Rocket,
  cellforge: Grid3X3,
  "visionz-ai": WandSparkles,
  lexoraft: Languages,
  "youtube-shorts-pipeline": Clapperboard
};

type ProjectIconBadgeProps = {
  slug: string;
  className?: string;
};

export function ProjectIconBadge({
  slug,
  className = ""
}: ProjectIconBadgeProps) {
  const logo = projectLogos[slug];
  const Icon = projectIcons[slug] ?? Terminal;

  return (
    <span
      className={`inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-[#2b2b2b] bg-[#1d1d1d] text-[#bdbdbd] ${className}`}
    >
      {logo ? (
        <Image
          alt=""
          aria-hidden="true"
          className="size-5 rounded-sm bg-[#e6e6e6] object-contain p-0.5 grayscale"
          height={20}
          src={logo}
          width={20}
        />
      ) : (
        <Icon className="size-3.5" />
      )}
    </span>
  );
}
