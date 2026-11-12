import Link from "next/link";
import { ArrowUpRight, Pin } from "lucide-react";
import { ProjectIcon } from "@/components/project-icon";
import { tone } from "@/components/ui";
import type { IndexedProject } from "@/data/portfolio";

/** Spec tile for a pinned project. The frame and every word in it are dust. */
export function PinnedCard({ project, color }: { project: IndexedProject; color: string }) {
  return (
    <article
      className="frame frame-link group flex min-h-[264px] flex-col p-4 md:p-5"
      data-dust-frame=""
      data-dust-root=""
      style={tone(color)}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="badge badge-info">
          <Pin strokeWidth={1.75} />
          Pinned
        </span>
        <span className="num font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
          {project.index} / {project.sha}
        </span>
      </div>
      <ProjectIcon className="mt-7" id={project.slug} size={40} />
      <h3 className="display mt-4 text-[24px] leading-[1.05] text-ink">
        <Link className="after:absolute after:inset-0" href={`/projects/${project.slug}`}>
          {project.title}
        </Link>
      </h3>
      <p className="label mt-2.5 flex items-center gap-2">
        <span className="dot" />
        {project.category}
      </p>
      <p className="mt-4 text-[14px] text-ink-secondary">{project.summary}</p>
      <div className="mt-auto flex items-end justify-between gap-3 pt-6">
        <p className="font-mono text-[11px] text-ink-muted">{project.stack.slice(0, 4).join(" / ")}</p>
        <ArrowUpRight
          className="size-4 shrink-0 text-ink-muted transition-colors group-hover:text-ink"
          strokeWidth={1.75}
        />
      </div>
    </article>
  );
}

/** Spec tile for a game. The stores it is on are named in words, since a store is where a game lives. */
export function GameCard({ project, color }: { project: IndexedProject; color: string }) {
  const stores = project.links.filter((link) => link.label === "App Store" || link.label === "Google Play");

  return (
    <article
      className="frame frame-link group flex min-h-[264px] flex-col p-4 md:p-5"
      data-dust-frame=""
      data-dust-root=""
      style={tone(color)}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`badge ${stores.length > 0 ? "badge-ok" : ""}`}>
          {stores.length > 0 ? "In stores" : "In development"}
        </span>
        <span className="num font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
          {project.index} / {project.sha}
        </span>
      </div>
      <ProjectIcon className="mt-7" id={project.slug} size={40} />
      <h3 className="display mt-4 text-[24px] leading-[1.05] text-ink">
        <Link className="after:absolute after:inset-0" href={`/projects/${project.slug}`}>
          {project.title}
        </Link>
      </h3>
      <p className="label mt-2.5 flex items-center gap-2">
        <span className="dot" />
        {project.category}
      </p>
      <p className="mt-4 text-[14px] text-ink-secondary">{project.summary}</p>
      <div className="mt-auto flex items-end justify-between gap-3 pt-6">
        <p className="font-mono text-[11px] text-ink-muted">
          {stores.length > 0 ? stores.map((link) => link.label).join(" / ") : project.stack.slice(0, 3).join(" / ")}
        </p>
        <ArrowUpRight
          className="size-4 shrink-0 text-ink-muted transition-colors group-hover:text-ink"
          strokeWidth={1.75}
        />
      </div>
    </article>
  );
}

/** Wide row for a flagship product: the title is set large enough to scatter well. */
export function ProductRow({ project, color }: { project: IndexedProject; color: string }) {
  return (
    <article
      className="rail group grid gap-4 border-b border-line px-4 py-8 transition-colors last:border-b-0 hover:bg-raised md:grid-cols-12 md:gap-6 md:px-5 md:py-10"
      data-dust-root=""
      style={tone(color)}
    >
      <div className="flex items-center gap-3 md:col-span-1 md:flex-col md:items-start">
        <p className="num font-mono text-[12px] text-ink-muted">{project.index}</p>
        <ProjectIcon id={project.slug} size={36} />
      </div>
      <div className="md:col-span-5">
        <h3 className="display text-[44px] leading-[0.95] text-ink md:text-[64px]">
          <Link className="after:absolute after:inset-0" href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>
        <p className="label mt-3 flex items-center gap-2">
          <span className="dot" />
          {project.category}
        </p>
      </div>
      <div className="md:col-span-5">
        <p className="text-[15px] text-ink-secondary">{project.summary}</p>
        <p className="mt-4 font-mono text-[11px] text-ink-muted">{project.stack.slice(0, 6).join(" / ")}</p>
      </div>
      <div className="hidden md:col-span-1 md:flex md:justify-end">
        <ArrowUpRight className="size-5 text-ink-muted transition-colors group-hover:text-ink" strokeWidth={1.75} />
      </div>
    </article>
  );
}

type LedgerRowProps = {
  index: string;
  title: string;
  category: string;
  summary: string;
  year: number;
  href: string;
  color: string;
  /** Key into the icon table: the slug, or `archive-<repo>`. */
  iconId: string;
  external?: boolean;
  pinned?: boolean;
};

/** One line of the index. Internal rows open a case study, archive rows open the repository. */
export function LedgerRow({
  index,
  title,
  category,
  summary,
  year,
  href,
  color,
  iconId,
  external,
  pinned
}: LedgerRowProps) {
  const linkClass = "after:absolute after:inset-0";

  return (
    <article
      className="rail group grid grid-cols-[2.5rem_minmax(0,1fr)_1.25rem] items-baseline gap-x-3 border-b border-line px-4 py-4 transition-colors last:border-b-0 hover:bg-raised md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.5fr)_3.5rem_1.25rem] md:gap-x-6 md:px-5"
      data-dust-root=""
      style={tone(color)}
    >
      <p className="num font-mono text-[12px] text-ink-muted">{index}</p>
      <div className="min-w-0">
        <h3 className="display-medium flex items-center gap-2.5 text-[18px] leading-tight text-ink">
          <ProjectIcon id={iconId} size={22} />
          {external ? (
            <a className={linkClass} href={href} rel="noreferrer" target="_blank">
              {title}
            </a>
          ) : (
            <Link className={linkClass} href={href}>
              {title}
            </Link>
          )}
        </h3>
        <p className="label mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="dot" />
          {category}
          {pinned ? (
            <span className="inline-flex items-center gap-1 text-accent">
              <Pin className="size-3" strokeWidth={1.75} />
              Pinned
            </span>
          ) : null}
        </p>
        <p className="mt-2 text-[14px] text-ink-secondary md:hidden">{summary}</p>
      </div>
      <p className="hidden text-[14px] text-ink-secondary md:block">{summary}</p>
      <p className="num hidden font-mono text-[12px] text-ink-muted md:block">{year}</p>
      <ArrowUpRight
        className="size-4 self-start text-ink-muted transition-colors group-hover:text-ink md:self-auto"
        strokeWidth={1.75}
      />
    </article>
  );
}
