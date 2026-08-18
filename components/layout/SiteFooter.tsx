import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LogoLockup } from "@/components/layout/LogoLockup";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { navItems } from "@/lib/navigation";
import { organization } from "@/lib/organization";
import { localizePath } from "@/lib/i18n/paths";
import { getCommonContent, getHomeContent, getFooterContent } from "@/lib/i18n/content-registry";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n/types";
import type { NavKey } from "@/lib/navigation";

interface SiteFooterProps {
  locale: Locale;
}

// The approved mockup's "Navigate" footer column: a flat subset of the
// header nav (no Sermons/Prayer/Contact — Prayer and Support get their
// own accent treatment in the Contact column instead).
const navigateKeys: NavKey[] = ["home", "about", "ministries", "seminary", "resources", "events"];

const ministryFooterLinks = [
  { key: "church", href: "/ministries/church" },
  { key: "seminary", href: "/ministries/seminary" },
  { key: "childrensEducation", href: "/ministries/childrens-education" },
  { key: "christianArticles", href: "/ministries/publishing" },
  { key: "lectures", href: "/sermons" },
  { key: "outreach", href: "/ministries/education" },
] as const;

/**
 * Structure verified against the approved Claude Design homepage mockup's
 * "footer" section (not HANDOFF.md §8's prose, which describes a
 * different — apparently superseded — column set). Navy, always — see
 * app/globals.css `--ink-recessed`.
 */
export function SiteFooter({ locale }: SiteFooterProps) {
  const isUrdu = locale === "ur";
  const nav = getCommonContent(locale);
  const home = getHomeContent(locale);
  const footer = getFooterContent(locale);
  const pathWithoutLocale = "/";

  const linkClass = cn(
    "text-small text-dark-body transition-colors duration-300 hover:text-dark-heading",
    isUrdu && "font-urdu-body text-base",
  );
  const accentLinkClass = cn(
    "text-small text-dark-accent transition-colors duration-300 hover:text-dark-heading",
    isUrdu && "font-urdu-body text-base",
  );
  const headingClass = cn(
    "text-mono-label text-utility-bar-fg",
    isUrdu && "font-urdu-body text-sm normal-case tracking-normal text-dark-body",
  );

  return (
    <footer className="border-t border-dark-border bg-ink-recessed text-dark-body">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-8">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <LogoLockup locale={locale} size="compact" tone="on-dark" />
            <p
              className={cn(
                "text-small max-w-xs text-dark-body",
                isUrdu && "font-urdu-body text-base",
              )}
            >
              {footer.missionStatement}
            </p>
            <div className="flex gap-2.5">
              <span
                aria-disabled="true"
                title={footer.socialPending}
                className="text-small border border-dark-border-button px-3.5 py-2 text-dark-heading"
              >
                Facebook
              </span>
              <span
                aria-disabled="true"
                title={footer.socialPending}
                className="text-small border border-dark-border-button px-3.5 py-2 text-dark-heading"
              >
                YouTube
              </span>
            </div>
          </div>

          <nav aria-label={footer.navigateHeading} className="flex flex-col gap-3">
            <span className={headingClass}>{footer.navigateHeading}</span>
            <ul className="flex flex-col gap-2">
              {navigateKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={localizePath(locale, navItems.find((item) => item.key === key)!.href)}
                    className={linkClass}
                  >
                    {nav.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.ministriesHeading} className="flex flex-col gap-3">
            <span className={headingClass}>{footer.ministriesHeading}</span>
            <ul className="flex flex-col gap-2">
              {ministryFooterLinks.map((item) => (
                <li key={item.key}>
                  <Link href={localizePath(locale, item.href)} className={linkClass}>
                    {footer.ministriesLinks[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <span className={headingClass}>{footer.contactHeading}</span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={`tel:${organization.phone}`}
                  aria-label={`${nav.utilityBar.phoneLabel}: ${organization.phone}`}
                  className={linkClass}
                >
                  {organization.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${organization.email}`} className={linkClass}>
                  {organization.email}
                </a>
              </li>
              <li className={linkClass}>{home.contact.cities.karachi}</li>
              <li className={linkClass}>{home.contact.cities.faisalabad}</li>
              <li>
                <Link href={localizePath(locale, "/prayer")} className={accentLinkClass}>
                  {footer.requestPrayerLabel}
                </Link>
              </li>
              <li>
                <Link href={localizePath(locale, "/support")} className={accentLinkClass}>
                  {nav.header.supportCta}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-dark-border py-6 sm:flex-row sm:items-center sm:justify-between">
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
            <LanguageSwitcher
              locale={locale}
              pathWithoutLocale={pathWithoutLocale}
              label={nav.header.languageSwitcherLabel}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
