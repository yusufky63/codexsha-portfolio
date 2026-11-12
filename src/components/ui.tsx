import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ProjectLink } from "@/data/types";

/** Sets `--c`, the colour a frame, rail, dot or ghost button takes on hover. */
export function tone(color: string): CSSProperties {
  return { "--c": color } as CSSProperties;
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "secondary" }: ButtonLinkProps) {
  return (
    <Link className={`btn btn-lg ${variant === "primary" ? "btn-primary" : ""}`} href={href}>
      {children}
    </Link>
  );
}

type SectionHeadProps = {
  number: string;
  label: string;
  title: string;
  note?: string;
};

/** Numbered section opener: eyebrow with its rule, then the title and an optional margin note. */
export function SectionHead({ number, label, title, note }: SectionHeadProps) {
  return (
    <div data-dust-root="">
      <p className="eyebrow">
        <span className="n">{number}</span>
        {label}
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-12 md:gap-6">
        <h2 className="display text-[30px] leading-[1.05] text-ink md:col-span-7 md:text-[40px]">{title}</h2>
        {note ? (
          <p className="text-[14px] text-ink-secondary md:col-span-4 md:col-start-9 md:pt-2">{note}</p>
        ) : null}
      </div>
    </div>
  );
}

/** External links of a project as bracket buttons. */
export function LinkList({ links }: { links: ProjectLink[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a className="btn btn-ghost" href={link.href} rel="noreferrer" style={tone("var(--accent)")} target="_blank">
            {link.label}
            <ArrowUpRight strokeWidth={1.75} />
          </a>
        </li>
      ))}
    </ul>
  );
}
