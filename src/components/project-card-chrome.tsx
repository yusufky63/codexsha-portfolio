// Decorative "open details" arrow shared by project rows and cards. Each card
// has exactly one real link to its detail page (the full-card overlay), so
// this arrow stays out of the accessibility tree and lets clicks pass through
// to that overlay. Callers pass the display classes (`inline-flex`, or
// `hidden md:inline-flex`) so responsive visibility is not overridden here.
export function DetailsArrow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none size-8 items-center justify-center rounded-md text-[#9a9a9a] transition-colors group-hover:bg-[#232323] group-hover:text-[#e6e6e6] ${className}`}
    >
      <svg className="size-4" fill="none" viewBox="0 0 24 24">
        <path
          d="M7 17 17 7M9 7h8v8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    </span>
  );
}
