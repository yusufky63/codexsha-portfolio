"use client";

import { useEffect } from "react";
import { mountDust } from "@/lib/dust";

/** Mounted once in the layout: turns every `data-dust-root` on the page into grains under the cursor. */
export function DustField() {
  useEffect(() => mountDust(), []);
  return null;
}
