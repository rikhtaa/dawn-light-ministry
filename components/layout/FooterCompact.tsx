import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LogoLockup } from "@/components/layout/LogoLockup";
import { localizePath } from "@/lib/i18n/paths";
import { getFooterContent } from "@/lib/i18n/content-registry";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n/types";

interface FooterCompactProps {
  locale: Locale;
}

/**
 * HANDOFF.md §8: "Compact footer variant (padding 32–40, single row) is
 * used on form and utility pages" — Prayer, Contact, Privacy, Website
 * Notice, 404/500. Not wired into any route yet (those pages come in a
 * later step); the component is ready for that step to use.
 */
export function FooterCompact({ locale }: FooterCompactProps) {
  const isUrdu = locale === "ur";
  const footer = getFooterContent(locale);

  const linkClass = cn(
    "text-small text-dark-body transition-colors duration-150 hover:text-dark-heading",
    isUrdu && "font-urdu-body text-base",
  );

  return (
    <footer className="border-t border-dark-border bg-ink-recessed text-dark-body">
      <Container>
        <div className="flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between sm:py-9">
          <LogoLockup locale={locale} size="compact" tone="on-dark" />
          <p className="text-small text-dark-faint">
            © {new Date().getFullYear()} Dawn of Light Ministry. {footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <Link href={localizePath(locale, "/privacy")} className={linkClass}>
              {footer.privacy}
            </Link>
            <Link href={localizePath(locale, "/website-notice")} className={linkClass}>
              {footer.notice}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
