"use client";

import { useMemo, useState } from "react";

type DecryptedTextProps = {
  text: string;
  className?: string;
};

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function DecryptedText({ text, className }: DecryptedTextProps) {
  const [active, setActive] = useState(false);
  const scrambled = useMemo(() => {
    return text
      .split("")
      .map((char, index) => {
        if (char === " " || char === "/" || char === "-") return char;
        return chars[(char.charCodeAt(0) + index * 7) % chars.length];
      })
      .join("");
  }, [text]);

  return (
    <span
      className={className}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      tabIndex={0}
    >
      {active ? scrambled : text}
    </span>
  );
}
