"use client";

import { Contrast } from "lucide-react";
import { gust } from "@/lib/dust";
import { THEME_STORAGE_KEY } from "@/lib/site";

export const THEME_EVENT = "codexsha:themechange";

export function ThemeToggle() {
  const invert = () => {
    const root = document.documentElement;
    const current =
      root.getAttribute("data-theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";

    // Transitions are held off for one frame so the grains are captured in the new colours, not half-way.
    root.setAttribute("data-theme-switching", "");
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private mode: the choice simply lasts for this page view.
    }
    void root.offsetHeight;
    window.dispatchEvent(new Event(THEME_EVENT));
    gust();
    requestAnimationFrame(() => root.removeAttribute("data-theme-switching"));
  };

  return (
    <button
      aria-label="Invert the page between light and dark"
      className="btn btn-sm"
      onClick={invert}
      type="button"
    >
      <Contrast strokeWidth={1.75} />
      <span className="hidden sm:inline">Invert</span>
    </button>
  );
}
