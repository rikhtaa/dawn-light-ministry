import { forwardRef } from "react";
import { LogoLockup } from "@/components/layout/LogoLockup";
import type { Locale } from "@/lib/i18n/types";

interface MobileHeaderProps {
  locale: Locale;
  menuOpen: boolean;
  menuId: string;
  openLabel: string;
  onOpen: () => void;
}

/**
 * HANDOFF.md §8/§12 mobile specifics: 36px mark, two-line wordmark, and a
 * 3-bar menu button sitting in its own 1px bordered box. Rendered below
 * `xl` inside SiteHeader; the full desktop lockup + inline nav only render
 * at `xl` (1280px) and up — the nine nav items plus the Support CTA don't
 * have room to breathe below that, so the 1024–1279px tier gets this
 * (already spacious) drawer nav instead of a cramped inline one.
 */
export const MobileHeader = forwardRef<HTMLButtonElement, MobileHeaderProps>(
  function MobileHeader({ locale, menuOpen, menuId, openLabel, onOpen }, ref) {
    return (
      <div className="flex items-center justify-between gap-4 py-4 xl:hidden">
        <LogoLockup locale={locale} size="compact" />
        <button
          ref={ref}
          type="button"
          onClick={onOpen}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-foreground transition-colors duration-150 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <MenuIcon />
          <span className="sr-only">{openLabel}</span>
        </button>
      </div>
    );
  },
);

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}
