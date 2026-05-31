import type { ProjectLink } from "@/data/portfolio";
import { ExternalLink, Globe2 } from "lucide-react";
import { siAppstore } from "simple-icons";
import { GitHubMark } from "@/components/social-icons";

type ProjectLinkListProps = {
  links: ProjectLink[];
  className?: string;
  iconOnly?: boolean;
};

export function ProjectLinkList({
  links,
  className = "",
  iconOnly = false
}: ProjectLinkListProps) {
  if (!links.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((link) => (
        <a
          aria-label={link.label}
          className={`inline-flex items-center justify-center gap-1.5 rounded-md border border-[#303030] bg-[#1a1a1a] text-[12px] text-[#d4d4d4] transition-colors hover:border-[#525252] hover:bg-[#232323] hover:text-[#f0f0f0] ${
            iconOnly ? "size-8 px-0 py-0" : "px-2.5 py-1"
          }`}
          href={link.href}
          key={link.href}
          rel="noreferrer"
          target="_blank"
        >
          {link.label.toLowerCase().includes("github") ? (
            <GitHubMark className="size-3.5" />
          ) : link.label === "App Store" ? (
            <svg
              aria-hidden="true"
              className="size-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={siAppstore.path} />
            </svg>
          ) : link.label === "Live" ? (
            <Globe2 className="size-3.5" />
          ) : (
            <ExternalLink className="size-3.5" />
          )}
          {iconOnly ? <span className="sr-only">{link.label}</span> : link.label}
        </a>
      ))}
    </div>
  );
}
