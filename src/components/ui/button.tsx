import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variants = {
  primary:
    "border-[#d6d6d6] bg-[#e6e6e6] text-[#121212] hover:bg-[#f0f0f0]",
  secondary:
    "border-[#343434] bg-[#171717] text-[#e6e6e6] hover:border-[#4a4a4a] hover:bg-[#202020]",
  ghost:
    "border-transparent bg-transparent text-[#a1a1a1] hover:text-[#e6e6e6]"
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  if (props.href) {
    const {
      children,
      icon,
      variant = "secondary",
      className,
      href,
      ...anchorProps
    } = props;
    const classes = cn(
      "inline-flex h-9 items-center justify-center gap-2 rounded-md border px-3 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2",
      variants[variant],
      className
    );

    return (
      <Link className={classes} href={href} {...anchorProps}>
        {icon ? <span className="inline-flex size-3.5 items-center">{icon}</span> : null}
        {children}
      </Link>
    );
  }

  const buttonOnlyProps = props as ButtonAsButton;
  const { children, icon, variant = "secondary", className, ...buttonProps } =
    buttonOnlyProps;
  const classes = cn(
    "inline-flex h-9 items-center justify-center gap-2 rounded-md border px-3 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2",
    variants[variant],
    className
  );

  return (
    <button className={classes} {...buttonProps}>
      {icon ? <span className="inline-flex size-3.5 items-center">{icon}</span> : null}
      {children}
    </button>
  );
}
