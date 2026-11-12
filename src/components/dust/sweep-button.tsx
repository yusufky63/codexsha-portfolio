"use client";

import { Wind } from "lucide-react";
import { gust } from "@/lib/dust";

export function SweepButton() {
  return (
    <button
      className="btn"
      onClick={() => gust()}
      type="button"
    >
      <Wind strokeWidth={1.75} />
      Sweep the page
    </button>
  );
}
