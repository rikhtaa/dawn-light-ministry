"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
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
  labelSwitchToLight: string;
  labelSwitchToDark: string;
  className?: string;
}

/**
 * Reads/writes the `.dark` class the inline script in
 * app/[locale]/layout.tsx already applied pre-hydration, so this only
 * needs to mirror that state rather than decide it — avoiding a second,
 * possibly-conflicting theme mechanism.
 */
export function ThemeToggle({
  labelSwitchToLight,
  labelSwitchToDark,
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

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? labelSwitchToLight : labelSwitchToDark}
      aria-pressed={isDark}
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        className,
      )}
    >
      {isDark ? (
        <Moon
          className="h-4 w-4 text-foreground"
          fill="currentColor"
          aria-hidden="true"
        />
      ) : (
        <Sun
          className="h-4 w-4 text-foreground"
          fill="currentColor"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
