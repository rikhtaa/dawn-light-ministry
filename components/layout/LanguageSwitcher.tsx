import Link from "next/link";
import { cn } from "@/lib/cn";
import { localizePath } from "@/lib/i18n/paths";
import { locales, type Locale } from "@/lib/i18n/types";

interface LanguageSwitcherProps {
  locale: Locale;
  pathWithoutLocale: string;
  label: string;
  /**
   * "text" — the utility-bar reading "English / اردو" (HANDOFF.md §8).
   * "chip" — two equal-width square segmented buttons for the mobile
   * drawer. HANDOFF.md §4.4 exempts "pills on language chips" from the
   * radius-0 rule, but the approved Claude Design mockup's own drawer
   * segments are square (`border:1px solid; flex:1`), not pills — the
   * mockup is treated as visual source of truth here.
   */
  variant?: "text" | "chip";
  className?: string;
}

const localeLabel: Record<Locale, string> = {
  en: "English",
  ur: "اردو",
};

export function LanguageSwitcher({
  locale,
  pathWithoutLocale,
  label,
  variant = "text",
  className,
}: LanguageSwitcherProps) {
  if (variant === "chip") {
    return (
      <div role="group" aria-label={label} className={cn("flex items-center gap-2.5", className)}>
        {locales.map((loc) => {
          const active = loc === locale;
          return (
            <Link
              key={loc}
              href={localizePath(loc, pathWithoutLocale)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "text-nav inline-flex min-h-11 flex-1 items-center justify-center border px-4 text-center transition-colors duration-300",
                active
                  ? "border-foreground text-foreground font-semibold"
                  : "border-border text-ink-muted hover:border-border-strong hover:text-foreground",
                loc === "ur" && !active && "font-urdu-body",
              )}
            >
              {localeLabel[loc]}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("flex items-center gap-2 text-[0.8125rem] text-utility-bar-fg", className)}
    >
      {locales.map((loc, index) => {
        const active = loc === locale;
        return (
          <span key={loc} className="flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-utility-bar-fg/40">
                /
              </span>
            ) : null}
            <Link
              href={localizePath(loc, pathWithoutLocale)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "transition-colors duration-300",
                active ? "font-semibold text-white" : "hover:text-white",
              )}
            >
              {loc === "en" ? "English" : "اردو"}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
