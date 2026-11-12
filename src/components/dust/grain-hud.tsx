"use client";

import { useEffect, useRef } from "react";
import { subscribeGrains } from "@/lib/dust";

const format = new Intl.NumberFormat("en-US");

/** Live count of grains that are away from home. Visible only while something is moving. */
export function GrainHud() {
  const box = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(
    () =>
      subscribeGrains((awake) => {
        if (!box.current || !count.current) return;
        box.current.dataset.active = awake > 0 ? "true" : "false";
        // Written straight to the node: this changes every frame and must not re-render React.
        if (awake > 0) count.current.textContent = format.format(awake);
      }),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="grain-hud frame pointer-events-none fixed bottom-4 right-4 z-20 hidden items-center gap-3 px-3 py-2 md:flex"
      data-active="false"
      ref={box}
    >
      <span className="label">Grains in motion</span>
      <span className="num w-[7ch] text-right font-mono text-[12px] text-accent" ref={count}>
        0
      </span>
    </div>
  );
}
