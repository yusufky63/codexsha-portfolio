export const THEME_STORAGE_KEY = "codexsha:theme";
export const DUST_STORAGE_KEY = "codexsha:dust";

export const site = {
  name: "Codexsha",
  owner: "Yusuf",
  role: "Product builder",
  url: "https://codexsha.dev",
  xHandle: "@codexsha",
  description:
    "Portfolio of Yusuf (Codexsha): onchain products, Farcaster mini apps, desktop tools and browser extensions, built from first commit to release.",
  repository: "https://github.com/yusufky63/codexsha-portfolio"
} as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/yusufky63" },
  { label: "X", href: "https://x.com/codexsha" },
  { label: "Telegram", href: "https://t.me/codexsha" },
  { label: "zkCodex", href: "https://zkcodex.com" }
] as const;

export const navLinks = [
  { label: "Work", href: "/projects" },
  { label: "Activity", href: "/#activity" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" }
] as const;
