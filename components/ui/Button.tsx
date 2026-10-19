import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
interface BaseProps { variant?: ButtonVariant; size?: "sm" | "md" | "lg"; children: ReactNode; className?: string; }
type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cool focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    { "text-xs px-3 py-1.5": size === "sm", "text-sm px-4 py-2": size === "md", "text-base px-6 py-3": size === "lg" },
    {
      "bg-accent-cool text-background hover:bg-accent-cool/90 shadow-lg shadow-accent-cool/20": variant === "primary",
      "bg-surface text-text-primary border border-border-subtle hover:bg-surface-hover hover:border-border-strong": variant === "secondary",
      "text-text-secondary hover:text-text-primary hover:bg-surface": variant === "ghost",
    },
    className
  );
  if ("href" in rest) {
    const { href, children, ...linkProps } = rest as ButtonAsLink;
    return <a href={href} className={baseClasses} {...linkProps}>{children}</a>;
  }
  const { children, ...buttonProps } = rest as ButtonAsButton;
  return <button type="button" className={baseClasses} {...buttonProps}>{children}</button>;
}
