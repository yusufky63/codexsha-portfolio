type IconProps = {
  className?: string;
};

export function GitHubMark({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18A11 11 0 0 1 12 6.05c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.16c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function XMark({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.9 2.75h3.02l-6.6 7.54 7.76 10.96h-6.08l-4.76-6.65-5.45 6.65H3.76l7.06-8.59L3.38 2.75h6.23l4.31 6.02 4.98-6.02Zm-1.06 16.57h1.67L8.68 4.58H6.88l10.96 14.74Z" />
    </svg>
  );
}

export function TelegramMark({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21.94 4.16c.28-1.18-.87-1.75-1.86-1.35L2.9 9.72c-1.17.47-1.15 1.14-.2 1.43l4.4 1.37L17.3 6.1c.48-.29.92-.13.56.19l-8.26 7.46-.31 4.65c.45 0 .65-.2.9-.44l2.16-2.1 4.5 3.32c.83.46 1.43.22 1.64-.77l2.97-14.25Z" />
    </svg>
  );
}
