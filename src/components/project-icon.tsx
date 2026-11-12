import Image from "next/image";
import { projectIcons } from "@/data/icons";

type ProjectIconProps = {
  /** Project slug, or `archive-<repo>` for an archive row. */
  id: string;
  size?: number;
  className?: string;
};

/**
 * A project's own icon, with nothing behind it. Projects without an icon render
 * nothing: there is no stand-in mark. The picture is handed to the dust engine
 * whole, so all of it scatters in its own colours with the rest of its root.
 */
export function ProjectIcon({ id, size = 28, className = "" }: ProjectIconProps) {
  const src = projectIcons[id];
  if (!src) return null;

  return (
    <Image
      alt=""
      className={`shrink-0 object-contain ${className}`}
      data-dust-image=""
      height={size}
      src={src}
      style={{ width: size, height: size }}
      // The files are small and several are SVG, which the optimizer does not serve.
      unoptimized
      width={size}
    />
  );
}
