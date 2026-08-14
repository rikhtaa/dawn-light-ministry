import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { navItems } from "@/lib/navigation";
import { ministryItems } from "@/lib/ministries";
import { organization } from "@/lib/organization";
import { localizePath } from "@/lib/i18n/paths";
import { resolveContent } from "@/lib/i18n/resolve";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n/types";
import { common as commonEn } from "@/content/i18n/en/common";
import { common as commonUr } from "@/content/i18n/ur/common";
import { home as homeEn } from "@/content/i18n/en/home";
import { home as homeUr } from "@/content/i18n/ur/home";
import { footer as footerEn } from "@/content/i18n/en/footer";
import { footer as footerUr } from "@/content/i18n/ur/footer";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const isUrdu = locale === "ur";
  const nav = isUrdu ? resolveContent(commonEn, commonUr) : commonEn;
  const home = isUrdu ? resolveContent(homeEn, homeUr) : homeEn;
  const footer = isUrdu ? resolveContent(footerEn, footerUr) : footerEn;

  const linkClass = cn(
    "text-small text-primary-foreground/70 transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm",
    isUrdu && "font-urdu-body text-base",
  );
  const headingClass = cn(
    "text-label text-primary-foreground/60",
    isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
  );

  return (
    <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <span
              aria-hidden="true"
              className="flex h-9 w-32 items-center justify-center rounded-[2px] border border-dashed border-primary-foreground/30 text-[0.625rem] font-medium uppercase tracking-[0.08em] text-primary-foreground/60"
            >
              Logo
            </span>
            <p
              className={cn(
                "text-small max-w-xs text-primary-foreground/70",
                isUrdu && "font-urdu-body text-base",
              )}
            >
              {footer.missionStatement}
            </p>
          </div>

          <nav aria-label={footer.navHeading} className="flex flex-col gap-3">
            <span className={headingClass}>{footer.navHeading}</span>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link href={localizePath(locale, item.href)} className={linkClass}>
                    {nav.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label={footer.ministriesHeading}
            className="flex flex-col gap-3"
          >
            <span className={headingClass}>{footer.ministriesHeading}</span>
            <ul className="flex flex-col gap-2">
              {ministryItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={localizePath(locale, item.href)}
                    className={linkClass}
                  >
                    {home.ministries.items[item.key].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <span className={headingClass}>{footer.contactHeading}</span>
            <ul className="flex flex-col gap-2">
              <li>
                <a href={`tel:${organization.phone}`} className={linkClass}>
                  {footer.phoneLabel}: {organization.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${organization.email}`} className={linkClass}>
                  {footer.emailLabel}: {organization.email}
                </a>
              </li>
            </ul>

            <span className={cn(headingClass, "mt-2")}>
              {footer.socialHeading}
            </span>
            <ul className="flex items-center gap-3">
              <li>
                <span
                  aria-disabled="true"
                  title={footer.socialPending}
                  className="text-small text-primary-foreground/40"
                >
                  Facebook
                </span>
              </li>
              <li>
                <span
                  aria-disabled="true"
                  title={footer.socialPending}
                  className="text-small text-primary-foreground/40"
                >
                  YouTube
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-primary-foreground/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-primary-foreground/60">
            © {new Date().getFullYear()} Dawn of Light Ministry.{" "}
            {footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            <Link href={localizePath(locale, "/privacy")} className={linkClass}>
              {footer.privacy}
            </Link>
            <Link href={localizePath(locale, "/notice")} className={linkClass}>
              {footer.notice}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
