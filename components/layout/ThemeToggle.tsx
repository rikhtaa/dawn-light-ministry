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
          "flex w-full items-center justify-between gap-4 text-nav text-ink-muted transition-colors duration-150 hover:text-foreground",
          className,
        )}
      >
        <span>{isDark ? lightModeLabel : darkModeLabel}</span>
        <span
          aria-hidden="true"
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 items-center border transition-colors duration-150",
            isDark ? "border-primary bg-primary" : "border-border-strong bg-transparent",
          )}
        >
          <span
            className={cn(
              "inline-block h-5 w-5 border border-border-strong bg-surface transition-transform duration-150",
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
        "text-[0.8125rem] transition-colors duration-150",
        tone === "on-dark"
          ? "text-utility-bar-fg hover:text-white"
          : "text-ink-muted hover:text-foreground",
        className,
      )}
    >
      {isDark ? lightModeLabel : darkModeLabel}
    </button>
  );
}
