import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "default" | "compact";

/**
 * HANDOFF.md §5, revised per the 2026-08-18 motion pass (see HANDOFF.md
 * §11 "Amendment", timing refined same day to the site-wide 250-300ms
 * links/buttons band): square corners (radius 0 via the theme override in
 * app/globals.css), no gradient, focus always a 2px oxblood outline with
 * 2px offset (app/globals.css `:focus-visible`), 48×48 minimum touch
 * target on primary/secondary at the default size — all still frozen.
 * Hover now also lifts 2px with a soft tinted shadow (previously
 * colour-only); `active:` settles back to baseline for a pressed feel.
 * A single `transition-[...]` utility (not `transition-colors` plus a
 * separate `transition-transform`) — two Tailwind transition utilities on
 * one element don't merge, the later one in the generated stylesheet just
 * overwrites the earlier one's `transition-property`, so every animated
 * property has to be listed in one utility. Reduced motion isn't handled
 * per-element: app/globals.css's blanket `prefers-reduced-motion` rule
 * already forces every transition to ~0ms, so the lift/shadow still
 * apply on hover but snap instead of animating — the same mechanism every
 * other hover effect in this file already relies on.
 */
const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-out disabled:pointer-events-none disabled:border-transparent disabled:bg-disabled-bg disabled:text-disabled-fg";

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
  // dark mode, not just in one place. Shadow is tinted with each button's
  // own fill colour (oxblood / ink) rather than a generic grey, so it
  // reads as that button's own elevation, not a default browser shadow.
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(122,46,46,0.28)] active:translate-y-0 active:shadow-none dark:font-semibold dark:hover:shadow-[0_4px_14px_rgba(0,0,0,0.45)]",
  secondary:
    "border hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(18,37,54,0.12)] active:translate-y-0 active:shadow-none dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]",
  // Tertiary is a text link, not a boxed button — colour-only, no
  // lift/shadow (nothing to lift; the underline already carries motion).
  tertiary:
    "text-primary underline decoration-[1.5px] underline-offset-[3px] hover:brightness-90 dark:text-dark-accent",
};

// Primary only, opt-in via `brassFill` — the Seminary page's navy masthead
// (Dawn of Light - Seminary.dc.html) uses a brass-filled primary CTA with
// navy text instead of the standard oxblood fill, in both light and dark
// mode (oxblood doesn't read clearly against navy). `accent`/`dark-accent`
// and `ink` are the same established tokens used everywhere else brass
// appears against navy — no new colour introduced.
const brassPrimaryClasses =
  "bg-accent text-ink hover:brightness-95 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(200,155,74,0.35)] active:translate-y-0 active:shadow-none dark:bg-dark-accent dark:hover:shadow-[0_4px_14px_rgba(0,0,0,0.45)]";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Secondary only — see secondaryToneClasses. */
  tone?: "auto" | "on-navy";
  /** Primary only — see brassPrimaryClasses. */
  brassFill?: boolean;
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
  brassFill = false,
  showArrow = false,
  isUrdu = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variant !== "tertiary" && sizeClasses[size],
    variant === "primary" && brassFill ? brassPrimaryClasses : variantClasses[variant],
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
