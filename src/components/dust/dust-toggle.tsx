"use client";

import { Grip } from "lucide-react";
import { dustEnabled, gust, settleAll } from "@/lib/dust";
import { DUST_STORAGE_KEY } from "@/lib/site";

/**
 * Lets a visitor overrule the system's reduced-motion setting in either
 * direction: the effect is the point of the site, but it has to be a choice.
 */
export function DustToggle() {
  const toggle = () => {
    const next = dustEnabled() ? "off" : "on";
    document.documentElement.setAttribute("data-dust", next);
    try {
      localStorage.setItem(DUST_STORAGE_KEY, next);
    } catch {
      // Private mode: the choice simply lasts for this page view.
    }
    if (next === "on") gust();
    else settleAll();
  };

  return (
    <button
      aria-label="Turn the dust effect on or off"
      className="btn btn-sm"
      onClick={toggle}
      type="button"
    >
      <Grip strokeWidth={1.75} />
      <span className="hidden sm:inline">
        Dust <span className="dust-on text-ok">on</span>
        <span className="dust-off text-warn">off</span>
      </span>
    </button>
  );
}
