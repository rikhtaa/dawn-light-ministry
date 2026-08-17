import { Container } from "@/components/layout/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { organization } from "@/lib/organization";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n/types";

interface UtilityBarProps {
  locale: Locale;
  pathWithoutLocale: string;
  isUrdu: boolean;
  locationsLabel: string;
  phoneLabel: string;
  languageSwitcherLabel: string;
  darkModeLabel: string;
  lightModeLabel: string;
  themeToggleToLight: string;
  themeToggleToDark: string;
}

/**
 * HANDOFF.md §8: navy `#122536`, `#B9C6D2` text, 12.5px, padding 10×40.
 * Left — locations, phone/WhatsApp, email. Right — language, a divider,
 * dark mode. Not sticky (the header below it is the only sticky chrome
 * element besides the article rail, §11) and hidden below `md` — there is
 * no room to set this left cluster without wrapping or truncation on a
 * 320–767px viewport; language and theme controls are reachable from the
 * mobile drawer instead (§10's "no horizontal overflow" constraint).
 */
export function UtilityBar({
  locale,
  pathWithoutLocale,
  isUrdu,
  locationsLabel,
  phoneLabel,
  languageSwitcherLabel,
  darkModeLabel,
  lightModeLabel,
  themeToggleToLight,
  themeToggleToDark,
}: UtilityBarProps) {
  return (
    <div className="hidden bg-ink-recessed py-[10px] text-utility-bar-fg md:block">
      <Container>
        <div className="flex items-center justify-between gap-6 text-[12.5px]">
          <div className={cn("flex items-center gap-4", isUrdu && "font-urdu-body text-sm")}>
            <span>{locationsLabel}</span>
            <span aria-hidden="true" className="text-utility-bar-fg/40">
              ·
            </span>
            <a href={`tel:${organization.phone}`} className="transition-colors hover:text-white">
              {phoneLabel} {organization.phone}
            </a>
            <span aria-hidden="true" className="text-utility-bar-fg/40">
              ·
            </span>
            <a
              href={`mailto:${organization.email}`}
              className="transition-colors hover:text-white"
            >
              {organization.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher
              locale={locale}
              pathWithoutLocale={pathWithoutLocale}
              label={languageSwitcherLabel}
            />
            <span aria-hidden="true" className="text-utility-bar-fg/40">
              /
            </span>
            <ThemeToggle
              darkModeLabel={darkModeLabel}
              lightModeLabel={lightModeLabel}
              ariaLabelToLight={themeToggleToLight}
              ariaLabelToDark={themeToggleToDark}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
