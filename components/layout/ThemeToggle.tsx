"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function subscribeToThemeClass(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getThemeServerSnapshot() {
  // Matches the pre-hydration default; the inline script in
  // app/[locale]/layout.tsx may have already added "dark" before this
  // component mounts, and useSyncExternalStore reconciles that safely
  // without a hydration-mismatch warning.
  return false;
}

/**
 * Small line-art sun/moon glyphs (`currentColor`, no icon library — see
 * CLAUDE.md §6 on not reaching for the unused `lucide-react` dependency)
 * so the "label" variant's text control reads as a theme toggle at a
 * glance, not just plain text. Decorative only — the button's own
 * `aria-label` already names the action, so these stay `aria-hidden`.
 */
function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      className={className}
    >
      <circle cx="8" cy="8" r="3.2" />
      <path d="M8 1.3v1.5M8 13.2v1.5M1.3 8h1.5M13.2 8h1.5M3.4 3.4l1.05 1.05M11.55 11.55l1.05 1.05M3.4 12.6l1.05-1.05M11.55 4.45l1.05-1.05" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className={className}>
      <path d="M8.6 1.5a6.5 6.5 0 1 0 5.9 9.2A5.4 5.4 0 0 1 8.6 1.5Z" />
    </svg>
  );
}

interface ThemeToggleProps {
  darkModeLabel: string;
  lightModeLabel: string;
  ariaLabelToLight: string;
  ariaLabelToDark: string;
  /** "on-dark" — the navy utility bar. "on-light" — the mobile drawer panel. */
  tone?: "on-dark" | "on-light";
  /**
   * "label" — plain text control, HANDOFF.md §8's utility bar ("Dark
   * mode"). "switch" — a track-and-knob toggle, used in the mobile drawer
   * per the approved Claude Design mockup (a distinct control there, not
   * the utility bar's text style repeated).
   */
  variant?: "label" | "switch";
  className?: string;
}

/**
 * Reads/writes the `.dark` class the inline script in
 * app/[locale]/layout.tsx already applied pre-hydration, so this only
 * mirrors that state rather than deciding it.
 */
export function ThemeToggle({
  darkModeLabel,
  lightModeLabel,
  ariaLabelToLight,
  ariaLabelToDark,
  tone = "on-dark",
  variant = "label",
  className,
}: ThemeToggleProps) {
  const isDark = useSyncExternalStore(
    subscribeToThemeClass,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  function toggleTheme() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Storage may be unavailable (private browsing); theme still applies
      // for this session via the DOM class above.
    }
  }

  if (variant === "switch") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? ariaLabelToLight : ariaLabelToDark}
        className={cn(
          "flex w-full items-center justify-between gap-4 text-nav text-ink-muted transition-colors duration-300 hover:text-foreground",
          className,
        )}
      >
        <span>{isDark ? lightModeLabel : darkModeLabel}</span>
        <span
          aria-hidden="true"
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 items-center border transition-colors duration-300",
            isDark ? "border-primary bg-primary" : "border-border-strong bg-transparent",
          )}
        >
          <span
            className={cn(
              "inline-block h-5 w-5 border border-border-strong bg-surface transition-transform duration-300",
              isDark ? "translate-x-[22px]" : "translate-x-0.5",
            )}
          />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? ariaLabelToLight : ariaLabelToDark}
      className={cn(
        "group relative inline-flex items-center gap-1.5 py-0.5 text-[0.8125rem] transition-colors duration-300",
        tone === "on-dark"
          ? "text-utility-bar-fg hover:text-white focus-visible:text-white"
          : "text-ink-muted hover:text-foreground focus-visible:text-foreground",
        className,
      )}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span>{isDark ? lightModeLabel : darkModeLabel}</span>
      {/* Same hover/focus underline affordance as the utility bar's
          language links (components/layout/LanguageSwitcher.tsx) — a
          shared, established motion pattern (see SiteHeader's nav
          underline), not a new one invented for this control. */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100",
          tone === "on-dark" ? "bg-utility-bar-fg" : "bg-ink-faint dark:bg-dark-faint",
        )}
      />
    </button>
  );
}
