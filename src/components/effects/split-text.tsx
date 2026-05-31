type SplitTextProps = {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
};

export function SplitText({ text, as = "span", className }: SplitTextProps) {
  const Tag = as;
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <span
          className="split-word"
          key={`${word}-${index}`}
          style={{ animationDelay: `${index * 42}ms` }}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </Tag>
  );
}
