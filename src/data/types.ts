export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectGroup = "desktop" | "game" | "onchain" | "mini-app" | "tool";

export type Project = {
  slug: string;
  title: string;
  group: ProjectGroup;
  category: string;
  /** Year the work started. */
  year: number;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  links: ProjectLink[];
  status: string;
  architecture: string;
  role?: string;
  /** Name of the public repository under github.com/yusufky63, used to read stars from the snapshot. */
  repo?: string;
  license?: string;
  privateNote?: string;
  pinned?: boolean;
};

/** A public repository that is listed but has no case study of its own. */
export type ArchiveSeed = {
  repo: string;
  title: string;
  description: string;
  stack: string[];
};
