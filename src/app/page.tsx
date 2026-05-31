import {
  ArrowDown,
  Boxes,
  BrainCircuit,
  Mail,
  Zap
} from "lucide-react";
import { BlurText } from "@/components/effects/blur-text";
import { CapabilitiesPanel } from "@/components/capabilities-panel";
import { CountUp } from "@/components/effects/count-up";
import { SplitText } from "@/components/effects/split-text";
import { CompactCard } from "@/components/compact-card";
import { LogoLoop } from "@/components/logo-loop";
import { ProjectRow } from "@/components/project-row";
import { GitHubMark, TelegramMark, XMark } from "@/components/social-icons";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  capabilities,
  featuredProjects,
  miniApps,
  stats,
  tools
} from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <SiteHeader />
      <div className="mx-auto max-w-[1080px] px-4 pb-12 pt-9 md:px-6 md:pt-12">
        <section className="grid gap-7 border-b border-[#2a2a2a] pb-8 md:grid-cols-[minmax(0,1fr)_330px] md:items-end">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#6f6f6f]">
              Web3 Product Builder
            </p>
            <SplitText
              as="h1"
              className="max-w-3xl text-[32px] font-medium leading-[1.08] text-[#e6e6e6] md:text-[38px]"
              text="Building useful Web3 products from idea to mainnet."
            />
            <BlurText
              className="mt-4 max-w-2xl text-[15px] leading-7 text-[#a1a1a1]"
              text="I build wallet analytics, Farcaster Mini Apps, Base-native games, AI creator tools, and mobile consumer apps with full-stack product ownership."
            />
            <div className="mt-5 flex flex-wrap gap-2">
              <Button href="/projects" variant="primary">
                <ArrowDown className="size-3.5" />
                View Projects
              </Button>
              <Button href="#contact" variant="secondary">
                <Mail className="size-3.5" />
                Contact
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 rounded-lg border border-[#2a2a2a] bg-[#171717]">
            {stats.map((stat) => (
              <div
                className="border-b border-r border-[#242424] p-3 last:border-r-0 odd:last:border-b-0 md:p-4 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0"
                key={stat.label}
              >
                <p className="font-mono text-xl text-[#e6e6e6]">
                  <CountUp suffix={stat.suffix} value={stat.value} />
                </p>
                <p className="mt-1 text-[12px] text-[#7d7d7d]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10" id="projects">
          <SectionHeading
            description="Four product-led case studies. Private projects are described by product value and stack, without exposing sensitive repository details."
            eyebrow="01 / Flagship"
            title="Featured Products"
          />
          <div className="grid gap-3">
            {featuredProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="py-6" id="mini-apps">
          <SectionHeading
            description="Focused products for fast wallet actions, games, token creation, and social on-chain flows."
            eyebrow="02 / Farcaster"
            title="Mini Apps"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {miniApps.map((project) => (
              <CompactCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="py-10">
          <SectionHeading
            description="AI, contract deployment, and media automation work that supports the wider product-builder profile."
            eyebrow="03 / Tools"
            title="AI & Automation"
          />
          <div className="grid gap-3 md:grid-cols-3">
            {tools.map((project) => (
              <CompactCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="py-6" id="stack">
          <SectionHeading
            description="A compact view of the systems and product surfaces behind the work."
            eyebrow="04 / Stack"
            title="Capabilities"
          />
          <LogoLoop />
          <CapabilitiesPanel groups={capabilities} />
        </section>

        <section
          className="mt-8 overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#171717]"
          id="contact"
        >
          <div className="grid md:grid-cols-[minmax(0,1fr)_320px]">
            <div className="p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6f6f6f]">
                Contact
              </p>
              <h2 className="mt-2 text-xl font-medium text-[#e6e6e6]">
                Building on-chain products, mini apps, or AI creator tools?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#a1a1a1]">
                Reach out for focused product work across frontend, backend,
                contracts, APIs, mobile, AI workflows, and deployment. The
                portfolio is compact; the product surface is broader.
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {[
                  ["Product systems", Boxes],
                  ["Mini app UX", Zap],
                  ["AI workflows", BrainCircuit]
                ].map(([label, Icon]) => (
                  <div
                    className="flex items-center gap-2 rounded-md border border-[#292929] bg-[#1b1b1b] px-3 py-2 text-[12px] text-[#a8a8a8]"
                    key={label as string}
                  >
                    <Icon className="size-3.5 text-[#c9c9c9]" />
                    {label as string}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-[#2a2a2a] p-5 md:border-l md:border-t-0">
              <div className="grid gap-2">
                <Button
                  href="https://github.com/yusufky63"
                  icon={<GitHubMark className="size-3.5" />}
                  variant="secondary"
                >
                  GitHub
                </Button>
                <Button
                  href="https://t.me/codexsha"
                  icon={<TelegramMark className="size-3.5" />}
                  variant="secondary"
                >
                  Telegram
                </Button>
                <Button
                  href="https://x.com/codexsha"
                  icon={<XMark className="size-3.5" />}
                  variant="secondary"
                >
                  X / Twitter
                </Button>
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-8 flex flex-col gap-3 border-t border-[#2a2a2a] py-6 text-[12px] text-[#737373] md:flex-row md:items-center md:justify-between">
          <p>Codexsha / Yusuf. Quiet product index for shipped Web3 and mobile work.</p>
          <div className="flex flex-wrap gap-2">
            <a
              className="inline-flex items-center gap-1.5 rounded-md border border-[#2a2a2a] px-2.5 py-1 transition-colors hover:border-[#444] hover:text-[#d6d6d6]"
              href="https://github.com/yusufky63"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubMark className="size-3" />
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-1.5 rounded-md border border-[#2a2a2a] px-2.5 py-1 transition-colors hover:border-[#444] hover:text-[#d6d6d6]"
              href="https://t.me/codexsha"
              rel="noreferrer"
              target="_blank"
            >
              <TelegramMark className="size-3" />
              Telegram
            </a>
            <a
              className="inline-flex items-center gap-1.5 rounded-md border border-[#2a2a2a] px-2.5 py-1 transition-colors hover:border-[#444] hover:text-[#d6d6d6]"
              href="https://x.com/codexsha"
              rel="noreferrer"
              target="_blank"
            >
              <XMark className="size-3" />
              X
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
