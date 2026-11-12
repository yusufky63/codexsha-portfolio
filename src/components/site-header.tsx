import Link from "next/link";
import { DustToggle } from "@/components/dust/dust-toggle";
import { ThemeToggle } from "@/components/dust/theme-toggle";
import { SocialIcon } from "@/components/social-icons";
import { navLinks, site, socialLinks } from "@/lib/site";

export function SiteHeader() {
  const iconLinks = socialLinks.filter((link) => link.label !== "zkCodex");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex h-14 max-w-[1320px] items-center gap-4 px-4 md:gap-6 md:px-7">
        <Link className="inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.015em] text-ink" href="/">
          {/* Brand mark: a hairline square holding one solid grain. */}
          <span aria-hidden="true" className="grid size-4 place-items-center border border-ink-muted">
            <span className="size-1.5 bg-ink" />
          </span>
          <span data-dust-root="">{site.name}</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-0.5 text-[14px] text-ink-secondary">
          {navLinks.map((item, index) => (
            <Link
              // Activity and Stack are in-page anchors; on a phone the two page-level links are enough.
              className={`h-8 items-center px-2.5 transition-colors hover:bg-raised hover:text-ink ${
                index === 1 || index === 2 ? "hidden md:inline-flex" : "inline-flex"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            {iconLinks.map((link) => (
              <a
                aria-label={link.label}
                className="inline-grid size-8 place-items-center border border-line text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                <SocialIcon className="size-4" label={link.label} />
              </a>
            ))}
          </div>
          <DustToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
