import { ArrowRight, ArrowUpRight, MousePointer2 } from "lucide-react";
import { Wordmark } from "@/components/dust/wordmark";
import { PixelBar } from "@/components/pixel-bar";
import { GameCard, LedgerRow, PinnedCard, ProductRow } from "@/components/project-views";
import { Sediment } from "@/components/sediment";
import { StackGraph } from "@/components/stack-graph";
import { ButtonLink, SectionHead, tone } from "@/components/ui";
import activity from "@/data/github-activity.json";
import {
  archiveEntries,
  composition,
  flagship,
  groupColor,
  groups,
  pinned,
  projects,
  projectsIn,
  span,
  stackMap,
  stackTally,
  stats
} from "@/data/portfolio";
import type { ProjectGroup } from "@/data/types";
import { site, socialLinks } from "@/lib/site";

const number = new Intl.NumberFormat("en-US");
const flagshipSlugs = new Set(flagship.map((project) => project.slug));
// A project is shown once on this page: flagship first, then pinned, then its group's ledger.
const pinnedCards = pinned.filter((project) => !flagshipSlugs.has(project.slug));
const games = projectsIn("game");
const indexGroups = groups
  .filter((group) => group.key !== "game")
  .map((group) => ({
    ...group,
    rows: projectsIn(group.key).filter((project) => !flagshipSlugs.has(project.slug) && !project.pinned)
  }))
  .filter((group) => group.rows.length > 0);
const stackRows = stackTally.filter((item) => item.count >= 2);
const total = composition.reduce((sum, segment) => sum + segment.count, 0);
const segments = composition.map((segment) => ({
  ...segment,
  color: groupColor(segment.key as ProjectGroup | "archive")
}));

export default function Home() {
  return (
    <main className="mx-auto max-w-[1320px] px-4 md:px-7">
      <section className="pt-8 md:pt-12">
        <div
          className="flex items-center justify-between gap-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted"
          data-dust-root=""
        >
          <p className="hidden sm:block">
            {site.owner} / {site.name}
          </p>
          <p>
            Index of shipped work, {span.from} to {span.to}
          </p>
        </div>

        <div className="mt-6 md:mt-8">
          <Wordmark text={site.name} />
        </div>

        <div className="mt-8 grid gap-8 border-t border-line pt-6 md:mt-12 md:grid-cols-12 md:gap-6">
          <p
            className="display-medium text-[26px] leading-[1.14] text-ink md:col-span-7 md:text-[36px]"
            data-dust-root=""
          >
            Onchain products, Farcaster mini apps, desktop tools and browser extensions, built from first commit to
            release.
          </p>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[15px] text-ink-secondary" data-dust-root="">
              I am {site.owner}, the builder behind zkCodex, BStocks, DrawCoin, BasePlay and Abonely. I work across
              product, frontend, backend, contracts and deployment.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <ButtonLink href="/projects" variant="primary">
                Open the index
                <ArrowRight strokeWidth={1.75} />
              </ButtonLink>
              <ButtonLink href="#contact">Get in touch</ButtonLink>
            </div>
            <p className="mt-6 hidden items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted [@media(hover:hover)]:flex">
              <MousePointer2 className="size-3.5" strokeWidth={1.75} />
              Everything here is dust. Move through it.
            </p>
          </div>
        </div>

        <dl className="frame mt-10 grid grid-cols-2 md:mt-14 md:grid-cols-4" data-dust-frame="" data-dust-root="">
          {stats.map((stat, position) => (
            <div
              className={`px-4 py-5 md:px-5 md:py-6 ${position % 2 === 1 ? "border-l border-line" : ""} ${
                position > 1 ? "border-t border-line md:border-t-0" : ""
              } ${position > 0 ? "md:border-l" : ""}`}
              key={stat.label}
            >
              <dd className="display-medium num text-[36px] leading-none text-ink md:text-[52px]">
                {number.format(stat.value)}
              </dd>
              <dt className="label mt-3">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="frame mt-3 p-4 md:p-5" data-dust-frame="" data-dust-root="">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="label">Catalogue by group</p>
            <p className="num font-mono text-[11px] text-ink-muted">
              {total} entries / a segment is as wide as its share
            </p>
          </div>
          <div className="mt-4">
            <PixelBar
              segments={segments}
              summary={`The catalogue by group: ${composition
                .map((segment) => `${segment.label} ${segment.count}`)
                .join(", ")}.`}
            />
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-3 lg:grid-cols-6">
            {segments.map((segment) => (
              <li className="flex items-center gap-2" key={segment.key} style={tone(segment.color)}>
                <span className="dot" />
                <span className="min-w-0 flex-1 truncate text-[14px] text-ink">{segment.label}</span>
                <span className="num font-mono text-[12px] text-ink-muted">{segment.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-header pt-20 md:pt-28" id="pinned">
        <SectionHead
          label="Pinned"
          note={`${pinnedCards.length} of the most recent additions: open-source desktop apps and browser extensions, each with its own case study.`}
          number="01"
          title="Newly added"
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pinnedCards.map((project) => (
            <PinnedCard color={groupColor(project.group)} key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="scroll-mt-header pt-20 md:pt-28" id="products">
        <SectionHead
          label="Flagship"
          note="The five to look at first, picked by hand from across the groups: a wallet analytics platform, a stock interface on Base, an onchain game platform and two open-source desktop apps."
          number="02"
          title="Flagship products"
        />
        <div className="frame mt-8">
          {flagship.map((project) => (
            <ProductRow color={groupColor(project.group)} key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {games.length > 0 ? (
        <section className="scroll-mt-header pt-20 md:pt-28" id="games">
          <SectionHead
            label="Games"
            note={groups.find((group) => group.key === "game")?.blurb}
            number="03"
            title="Games"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((project) => (
              <GameCard color={groupColor(project.group)} key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="scroll-mt-header pt-20 md:pt-28" id="index">
        <SectionHead
          label="Index"
          note={`${projects.length} case studies and ${archiveEntries.length} archived repositories. The rows below are the rest of the catalogue.`}
          number="04"
          title="Everything else"
        />
        <div className="mt-8 grid gap-8">
          {indexGroups.map((group) => (
            <div className="frame" key={group.key}>
              <div
                className="flex flex-col gap-1 border-b border-line bg-canvas px-4 py-3 md:flex-row md:items-center md:justify-between md:px-5"
                data-dust-root=""
                style={tone(groupColor(group.key))}
              >
                <h3 className="label flex items-center gap-2">
                  <span className="dot" />
                  <span className="text-ink">{group.label}</span>
                  <span className="num">{group.rows.length}</span>
                </h3>
                <p className="text-[13px] text-ink-muted">{group.blurb}</p>
              </div>
              {group.rows.map((project) => (
                <LedgerRow
                  category={project.category}
                  color={groupColor(project.group)}
                  href={`/projects/${project.slug}`}
                  iconId={project.slug}
                  index={project.index}
                  key={project.slug}
                  summary={project.summary}
                  title={project.title}
                  year={project.year}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/projects">
            Full index with the archive
            <ArrowRight strokeWidth={1.75} />
          </ButtonLink>
        </div>
      </section>

      <section className="scroll-mt-header pt-20 md:pt-28" id="activity">
        <SectionHead
          label="Activity"
          note="GitHub contributions drawn as sediment. Each day is a tray, and the grains in it are the work that settled there."
          number="05"
          title="What settled, day by day"
        />
        <div className="mt-8">
          <Sediment login={activity.login} ranges={activity.ranges} updatedAt={activity.updatedAt} />
        </div>
      </section>

      <section className="scroll-mt-header pt-20 md:pt-28" id="stack">
        <SectionHead
          label="Stack"
          note="Counted from the case studies, not listed from memory. A curve joins a group to a tool when they share projects, and it is as thick as the number they share."
          number="06"
          title="Tools, by use"
        />
        <div className="frame mt-8 hidden lg:block">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
            <p className="label">Stack map / groups to the eight most used tools</p>
            <p className="label">Hover or focus a node to read its counts</p>
          </div>
          <div className="dotgrid bg-sunken p-8">
            <StackGraph
              edges={stackMap.edges}
              groups={stackMap.groups.map((group) => ({ ...group, color: groupColor(group.key as ProjectGroup) }))}
              tools={stackMap.tools}
            />
          </div>
        </div>
        <ul className="frame mt-3 grid gap-x-10 px-4 sm:grid-cols-2 md:px-5 lg:grid-cols-3">
          {stackRows.map((item) => (
            <li
              className="grid grid-cols-[minmax(0,8.5rem)_minmax(0,1fr)_2rem] items-center gap-3 border-b border-line py-2.5"
              data-dust-root=""
              key={item.name}
            >
              <span className="truncate text-[14px] text-ink">{item.name}</span>
              <span
                aria-hidden="true"
                className="overflow-hidden whitespace-nowrap font-mono text-[12px] leading-none tracking-[-1px] text-ink-secondary"
              >
                {"•".repeat(item.count)}
              </span>
              <span className="num text-right font-mono text-[12px] text-ink-muted">{item.count}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="scroll-mt-header pt-20 md:pt-28" id="contact">
        <SectionHead label="Contact" number="07" title="Write to me" />
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-6">
          <p
            className="display-medium text-[26px] leading-[1.14] text-ink md:col-span-7 md:text-[36px]"
            data-dust-root=""
          >
            Building an onchain product, a mini app, a desktop tool or an AI workflow? I take focused product work from
            the first screen to the deployed release.
          </p>
          <ul className="frame h-fit md:col-span-4 md:col-start-9">
            {socialLinks.map((link) => (
              <li className="border-b border-line last:border-b-0" key={link.href}>
                <a
                  className="rail group flex items-center justify-between px-4 py-4 transition-colors hover:bg-raised"
                  data-dust-root=""
                  href={link.href}
                  rel="noreferrer"
                  style={tone("var(--accent)")}
                  target="_blank"
                >
                  <span className="display-medium text-[20px] text-ink">{link.label}</span>
                  <span className="flex items-center gap-3 font-mono text-[12px] text-ink-muted">
                    {link.href.replace("https://", "")}
                    <ArrowUpRight className="size-4 transition-colors group-hover:text-accent" strokeWidth={1.75} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
