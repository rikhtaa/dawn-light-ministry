import Link from "next/link";
import { cn } from "@/lib/cn";
import { localizePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { LogoMark } from "@/components/layout/LogoMark";

interface LogoLockupProps {
  locale: Locale;
  /**
   * "default" — 47px mark, single-line wordmark plus the descriptor line
   * (HANDOFF.md §12). "compact" — the mobile variant: 36px mark, wordmark
   * wrapped to two lines, descriptor omitted for space (§12 mobile note).
   */
  size?: "default" | "compact";
  /**
   * "auto" (default) follows the page theme — correct in the header,
   * whose surface actually swaps with light/dark. "on-dark" forces the
   * on-dark treatment regardless of theme — the footer's navy ground is
   * the same literal colour in both modes (HANDOFF.md §9).
   */
  tone?: "auto" | "on-dark";
  className?: string;
}

export function LogoLockup({
  locale,
  size = "default",
  tone = "auto",
  className,
}: LogoLockupProps) {
  const isCompact = size === "compact";
  const onDark = tone === "on-dark";
  const isUrdu = locale === "ur";

  return (
    <Link
      href={localizePath(locale, "/")}
      aria-label="Dawn of Light Ministry"
      className={cn(
        "flex shrink-0 items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        onDark
          ? "focus-visible:ring-offset-ink"
          : "focus-visible:ring-offset-surface",
        isCompact && "gap-3",
        className,
      )}
    >
      <LogoMark size={isCompact ? 36 : 47} tone={tone} />
      <span className="flex flex-col justify-center">
        {isCompact ? (
          isUrdu ? (
            // Claude Design's mobile Urdu swatch shows the Urdu name alone
            // in the compact header — not the English wordmark.
            <span
              className={cn(
                "font-urdu-display text-[1.0625rem] leading-[1.4]",
                onDark ? "text-dark-heading" : "text-foreground",
              )}
            >
              نور کی صبح
            </span>
          ) : (
            <span
              className={cn(
                "font-serif text-[1.0625rem] leading-[1.15] font-semibold tracking-[-0.01em]",
                onDark ? "text-dark-heading" : "text-foreground",
              )}
            >
              Dawn of Light
              <br />
              Ministry
            </span>
          )
        ) : (
          <>
            <span
              className={cn(
                "font-serif text-[1.3125rem] leading-[1.25] font-semibold tracking-[-0.01em]",
                onDark ? "text-dark-heading" : "text-foreground",
              )}
            >
              Dawn of Light Ministry
            </span>
            <span
              className={cn(
                // Hidden below xl: at 1024–1279 there isn't room for the
                // full nav + CTA alongside the descriptor line (measured
                // overflow otherwise) — the wordmark alone still identifies
                // the org at that tier.
                "hidden text-[0.71875rem] leading-[1.4] tracking-[0.09em] uppercase xl:block",
                onDark ? "text-[#8FA0AE]" : "text-ink-faint dark:text-[#8FA0AE]",
              )}
            >
              Bethlehem Church, Seminary &amp; Educational Mission
            </span>
          </>
        )}
      </span>
    </Link>
  );
}
