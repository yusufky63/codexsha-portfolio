type BlurTextProps = {
  text: string;
  className?: string;
};

export function BlurText({ text, className }: BlurTextProps) {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, index) => (
        <span
          className="blur-word"
          key={`${word}-${index}`}
          style={{ animationDelay: `${180 + index * 22}ms` }}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </p>
  );
}
