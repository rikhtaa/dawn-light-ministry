import Link from "next/link";
import { cn } from "@/lib/cn";
import { localizePath } from "@/lib/i18n/paths";
import { locales, type Locale } from "@/lib/i18n/types";

interface LanguageSwitcherProps {
  locale: Locale;
  pathWithoutLocale: string;
  label: string;
  className?: string;
}

const localeLabel: Record<Locale, string> = {
  en: "EN",
  ur: "اردو",
};

/**
 * Links to the same route under each locale, preserving the current page
 * (e.g. /ur/about <-> /en/about). Styled as a small identity element
 * (plain text + divider) rather than a generic UI toggle/pill.
 */
export function LanguageSwitcher({
  locale,
  pathWithoutLocale,
  label,
  className,
}: LanguageSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "flex items-center gap-2 text-[0.8125rem] tracking-[0.02em]",
        className,
      )}
    >
      {locales.map((loc, index) => {
        const active = loc === locale;
        return (
          <span key={loc} className="flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-border">
                /
              </span>
            ) : null}
            <Link
              href={localizePath(loc, pathWithoutLocale)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "transition-colors duration-200",
                active
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {localeLabel[loc]}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
