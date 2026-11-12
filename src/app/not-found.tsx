import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Wordmark } from "@/components/dust/wordmark";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false }
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[1320px] px-4 md:px-7">
      <section className="pt-10 md:pt-16">
        <p className="eyebrow" data-dust-root="">
          <span className="n">Error</span>
          Page not found
        </p>
        <div className="mt-6">
          <Wordmark as="p" text="404" />
        </div>
        <div className="mt-8 grid gap-6 border-t border-line pt-6 md:grid-cols-12">
          <h1 className="display-medium text-[26px] leading-[1.12] text-ink md:col-span-7 md:text-[38px]" data-dust-root="">
            Nothing has settled at this address.
          </h1>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[15px] text-ink-secondary" data-dust-root="">
              The link may be old, or the project may have been renamed. The index lists everything that exists.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <ButtonLink href="/projects" variant="primary">
                Open the index
                <ArrowRight strokeWidth={1.75} />
              </ButtonLink>
              <ButtonLink href="/">Home</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
