type SectionHeadingProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
};

export function SectionHeading({
  id,
  title,
  eyebrow,
  description
}: SectionHeadingProps) {
  return (
    <div id={id} className="mb-4 flex flex-col gap-2 md:mb-5">
      {eyebrow ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6f6f6f]">
          {eyebrow}
        </p>
      ) : null}
      <div className="border-t border-[#2a2a2a] pt-4">
        <h2 className="text-xl font-medium leading-tight text-[#e6e6e6] md:text-2xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#a1a1a1]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
