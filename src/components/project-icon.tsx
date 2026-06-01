import Image from "next/image";
import {
  BadgePlus,
  BarChart3,
  Clapperboard,
  Coins,
  Gamepad2,
  Grid3X3,
  Languages,
  Palette,
  Rocket,
  Send,
  ShieldOff,
  Smartphone,
  WandSparkles
} from "lucide-react";

const projectLogos: Record<string, string> = {
  zkcodex: "/project-icons/zkcodex.png",
  baseplay: "/project-icons/baseplay.png",
  drawcoin: "/project-icons/drawcoin.png",
  abonely: "/project-icons/abonely.png",
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

const projectIcons = {
  zkcodex: BarChart3,
  baseplay: Gamepad2,
  drawcoin: Palette,
  abonely: Smartphone,
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
  const Icon = projectIcons[slug as keyof typeof projectIcons] ?? Rocket;

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
