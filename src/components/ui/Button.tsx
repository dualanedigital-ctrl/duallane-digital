import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none";

const variants = {
  primary:
    "bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset] hover:shadow-[0_0_0_1px_rgba(99,102,241,0.4),0_16px_40px_-12px_rgba(99,102,241,0.65)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-surface text-foreground border border-border-strong hover:bg-surface-hover hover:border-white/25 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-foreground-muted hover:text-foreground",
};

const sizes = {
  md: "h-11 px-6",
  lg: "h-13 px-8 text-base",
};

type CommonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return <Link href={href} className={classes} {...linkRest} />;
  }

  return <button className={classes} {...(rest as ButtonAsButton)} />;
}
