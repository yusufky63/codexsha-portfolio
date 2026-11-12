import { ImageResponse } from "next/og";
import { OG, SiteCard, ogFonts } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: index of shipped work by ${site.owner}`;
export const size = OG.size;
export const contentType = "image/png";
export const revalidate = 86400;

export default function Image() {
  return new ImageResponse(<SiteCard />, { ...size, fonts: ogFonts() });
}
