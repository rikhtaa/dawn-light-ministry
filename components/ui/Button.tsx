import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "default" | "compact";

/**
 * HANDOFF.md §5. Square corners (radius 0 via the theme override in
 * app/globals.css), no shadow, no gradient, nothing moves or scales on
 * hover — only fill/border/colour change, over 120ms. Focus is always a
 * 2px oxblood outline, 2px offset (app/globals.css `:focus-visible`).
 * Minimum touch target 48×48 on primary/secondary at the default size.
 */
const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 disabled:pointer-events-none disabled:border-transparent disabled:bg-disabled-bg disabled:text-disabled-fg";

// §5's literal 14×24 (primary) / 13×24 (secondary) padding rounds to one
// shared box size here — the 1px difference isn't visually distinguishable.
const sizeClasses: Record<ButtonSize, string> = {
  default: "min-h-12 px-6 py-3.5 text-[0.9375rem]",
  // Header/nav context only (HANDOFF.md §8: "padding 13×20"; §19's 48px+
  // floor is for touch/form controls — this size never appears in a
  // touch-only context, but still clears the 44px minimum).
  compact: "min-h-11 px-5 py-[13px] text-[0.90625rem]",
};

// Primary keeps its own opaque fill regardless of what it sits on, so it
// never needs a "which background is this on" tone — only outline/text
// variants (secondary) do.
const secondaryToneClasses = {
  // Theme-aware: matches whatever surface the app theme currently shows.
  auto: cn(
    "border-border-strong text-ink hover:bg-black/[0.03]",
    "dark:border-dark-border-button dark:text-[#E8EBEE] dark:hover:bg-white/[0.06]",
  ),
  // Forces the dark treatment unconditionally — for a NavyBand, whose
  // background stays navy regardless of the app theme (HANDOFF.md §9).
  "on-navy": "border-dark-border-button text-[#E8EBEE] hover:bg-white/[0.06]",
};

const variantClasses: Record<ButtonVariant, string> = {
  // Dark primary buttons carry more weight (600) than light (500) — the
  // mockup does this consistently everywhere a primary button appears in
  // dark mode, not just in one place.
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover dark:font-semibold",
  secondary: "border",
  tertiary:
    "text-primary underline decoration-[1.5px] underline-offset-[3px] hover:brightness-90 dark:text-dark-accent",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Secondary only — see secondaryToneClasses. */
  tone?: "auto" | "on-navy";
  /** Tertiary only: append the trailing arrow, flipped for Urdu/RTL. */
  showArrow?: boolean;
  isUrdu?: boolean;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "default",
  tone = "auto",
  showArrow = false,
  isUrdu = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variant !== "tertiary" && sizeClasses[size],
    variantClasses[variant],
    variant === "secondary" && secondaryToneClasses[tone],
    isUrdu && "font-urdu-body",
    className,
  );

  const content =
    variant === "tertiary" && showArrow ? (
      <>
        {children}
        <span aria-hidden="true">{isUrdu ? "←" : "→"}</span>
      </>
    ) : (
      children
    );

  if (typeof props.href === "string") {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
