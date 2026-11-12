import { ImageResponse } from "next/og";
import { OG, ogFonts } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: OG.ink,
          color: OG.canvas,
          fontFamily: OG.display,
          fontSize: 128,
          fontWeight: 700,
          lineHeight: 1
        }}
      >
        C
      </div>
    ),
    { ...size, fonts: ogFonts() }
  );
}
