import Link from "next/link";
import { GitHubMark, TelegramMark, XMark } from "@/components/social-icons";
import { socialLinks } from "@/data/portfolio";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Mini Apps", href: "/#mini-apps" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" }
];

export function SiteHeader() {
  const headerLinks = socialLinks.filter((link) => link.label !== "zkCodex");

  return (
    <header className="sticky top-0 z-40 border-b border-[#242424] bg-[#121212]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[52px] max-w-[1080px] items-center justify-between px-4 md:px-6">
        <Link
          className="font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-[#e6e6e6]"
          href="/"
        >
          Codexsha
        </Link>
        <nav className="hidden items-center gap-4 text-[13px] text-[#a1a1a1] md:flex">
          {navItems.map((item) => (
            <Link
              className="transition-colors hover:text-[#e6e6e6]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {headerLinks.map((link) => (
            <a
              aria-label={link.label}
              className="inline-flex size-8 items-center justify-center rounded-md border border-[#2a2a2a] text-[#a1a1a1] transition-colors hover:border-[#444] hover:bg-[#1c1c1c] hover:text-[#e6e6e6]"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label === "GitHub" ? (
                <GitHubMark className="size-3.5" />
              ) : link.label === "Telegram" ? (
                <TelegramMark className="size-3.5" />
              ) : (
                <XMark className="size-3.5" />
              )}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
