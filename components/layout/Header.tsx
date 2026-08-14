"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { LogoPlaceholder } from "@/components/layout/LogoPlaceholder";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { HeaderCta } from "@/components/layout/HeaderCta";
import { MobileNav } from "@/components/layout/MobileNav";
import { navItems } from "@/lib/navigation";
import { localizePath, stripLocaleFromPathname } from "@/lib/i18n/paths";
import { resolveContent } from "@/lib/i18n/resolve";
import type { Locale } from "@/lib/i18n/types";
import { common as commonEn } from "@/content/i18n/en/common";
import { common as commonUr } from "@/content/i18n/ur/common";

const MOBILE_NAV_ID = "mobile-nav-panel";

interface HeaderProps {
  locale: Locale;
}

function isActiveHref(href: string, pathWithoutLocale: string): boolean {
  if (href === "/") return pathWithoutLocale === "/";
  return (
    pathWithoutLocale === href || pathWithoutLocale.startsWith(`${href}/`)
  );
}

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const pathWithoutLocale = stripLocaleFromPathname(pathname);
  const isUrdu = locale === "ur";
  // English renders its own source directly; Urdu resolves through the
  // approved-only fallback so nothing unreviewed ever reaches this locale.
  const strings = isUrdu ? resolveContent(commonEn, commonUr) : commonEn;

  const [menuOpen, setMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const previousPathnameRef = useRef(pathname);

  // Closes the drawer on route change (nav-link activation, back/forward),
  // without stealing focus back — the new page should receive it naturally.
  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      previousPathnameRef.current = pathname;
      setMenuOpen(false);
    }
  }, [pathname]);

  function dismissMenu() {
    setMenuOpen(false);
    menuTriggerRef.current?.focus();
  }

  const prayerHref = localizePath(locale, "/prayer");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 md:h-20">
          <LogoPlaceholder locale={locale} />

          <div className="hidden items-center gap-6 xl:flex">
            <nav aria-label={strings.header.primaryNavLabel}>
              <ul className="flex items-center gap-5">
                {navItems.map((item) => {
                  const active = isActiveHref(item.href, pathWithoutLocale);
                  return (
                    <li key={item.key}>
                      <Link
                        href={localizePath(locale, item.href)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative inline-flex items-center py-2 transition-colors",
                          isUrdu
                            ? "font-urdu-body text-base"
                            : "text-xs font-semibold uppercase tracking-[0.05em]",
                          active
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary",
                        )}
                      >
                        {strings.nav[item.key]}
                        {active ? (
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px h-[1.5px] bg-secondary"
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <span aria-hidden="true" className="h-4 w-px bg-border" />

            <div className="flex items-center gap-5">
              <LanguageSwitcher
                locale={locale}
                pathWithoutLocale={pathWithoutLocale}
                label={strings.header.languageSwitcherLabel}
              />
              <HeaderCta
                href={prayerHref}
                label={strings.header.primaryCta}
                isUrdu={isUrdu}
                variant="outline"
              />
            </div>
          </div>

          <button
            ref={menuTriggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_NAV_ID}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[2px] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface xl:hidden"
          >
            <MenuIcon />
            <span className="sr-only">{strings.header.menuOpen}</span>
          </button>
        </div>
      </Container>

      <MobileNav
        id={MOBILE_NAV_ID}
        open={menuOpen}
        onDismiss={dismissMenu}
        navLabel={strings.header.mobileNavLabel}
        closeLabel={strings.header.menuClose}
        isUrdu={isUrdu}
        items={navItems.map((item) => ({
          key: item.key,
          href: localizePath(locale, item.href),
          label: strings.nav[item.key],
          active: isActiveHref(item.href, pathWithoutLocale),
        }))}
        ctaHref={prayerHref}
        ctaLabel={strings.header.primaryCta}
        languageSwitcher={
          <LanguageSwitcher
            locale={locale}
            pathWithoutLocale={pathWithoutLocale}
            label={strings.header.languageSwitcherLabel}
          />
        }
      />
    </header>
  );
}

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
