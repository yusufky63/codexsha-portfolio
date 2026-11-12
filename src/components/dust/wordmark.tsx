"use client";

import { useEffect, useRef } from "react";
import { assemble } from "@/lib/dust";

type WordmarkProps = {
  text: string;
  as?: "h1" | "p";
};

/** Full-width display type that gathers itself out of loose grains on first view. */
export function Wordmark({ text, as: Tag = "h1" }: WordmarkProps) {
  const node = useRef<HTMLHeadingElement & HTMLParagraphElement>(null);

  useEffect(() => {
    if (node.current) void assemble(node.current);
  }, []);

  return (
    <div className="wordmark-row">
      <Tag className="wordmark text-ink" data-dust-intro="" data-dust-root="" ref={node}>
        {text}
      </Tag>
    </div>
  );
}
