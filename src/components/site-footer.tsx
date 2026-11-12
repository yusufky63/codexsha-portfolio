import Link from "next/link";
import { SweepButton } from "@/components/dust/sweep-button";
import { navLinks, site, socialLinks } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-10 md:grid-cols-12 md:px-7 md:py-14">
        <div className="md:col-span-5" data-dust-root="">
          <p className="display text-[28px] leading-none text-ink">{site.name}</p>
          <p className="mt-4 max-w-sm text-[14px] text-ink-secondary">
            An index of shipped work by {site.owner}. Every word and frame on these pages is made of grains, and
            they move when you do.
          </p>
        </div>

        <nav aria-label="Site" className="md:col-span-2" data-dust-root="">
          <p className="label">Site</p>
          <ul className="mt-4 grid gap-2 text-[14px]">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link className="text-ink-secondary transition-colors hover:text-ink" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Elsewhere" className="md:col-span-2" data-dust-root="">
          <p className="label">Elsewhere</p>
          <ul className="mt-4 grid gap-2 text-[14px]">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <a
                  className="text-ink-secondary transition-colors hover:text-ink"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="label">Housekeeping</p>
          <div className="mt-4">
            <SweepButton />
          </div>
          <p className="mt-4 text-[13px] text-ink-muted">
            Throws every grain in view into the air. They find their way back.
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div
          className="mx-auto flex max-w-[1320px] flex-col gap-2 px-4 py-5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted md:flex-row md:items-center md:justify-between md:px-7"
          data-dust-root=""
        >
          <p>
            {year} / {site.name} / {site.owner}
          </p>
          <p>Set in Geist and Geist Mono</p>
          <a
            className="transition-colors hover:text-ink"
            href={site.repository}
            rel="noreferrer"
            target="_blank"
          >
            Source on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
