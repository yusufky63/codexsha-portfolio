import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <SiteHeader />
      <div className="mx-auto flex min-h-[calc(100vh-52px)] max-w-[720px] flex-col justify-center px-4 py-12 md:px-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[#6f6f6f]">
          404
        </p>
        <h1 className="mt-3 text-[32px] font-medium text-[#e6e6e6]">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#a1a1a1]">
          This route is not part of the compact portfolio index. The current v1
          only exposes detail pages for the four flagship projects.
        </p>
        <div className="mt-5 flex gap-2">
          <Button href="/" variant="primary">
            Home
          </Button>
          <Link
            className="inline-flex h-9 items-center rounded-md border border-[#343434] px-3 text-[13px] text-[#a1a1a1] transition-colors hover:border-[#4a4a4a] hover:bg-[#202020] hover:text-[#e6e6e6]"
            href="/#projects"
          >
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
