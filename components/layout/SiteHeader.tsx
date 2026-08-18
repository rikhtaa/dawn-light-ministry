"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { LogoLockup } from "@/components/layout/LogoLockup";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/lib/navigation";
import { localizePath, stripLocaleFromPathname } from "@/lib/i18n/paths";
import { getCommonContent, getFooterContent } from "@/lib/i18n/content-registry";
import type { Locale } from "@/lib/i18n/types";

const MOBILE_NAV_ID = "mobile-nav-panel";

// The drawer's Ministries accordion — the five real ministry routes
// (excludes the footer's "lectures" entry, which points at /sermons
// rather than a distinct ministry page).
const ministryDrawerLinks = [
  { key: "church", href: "/ministries/church" },
  { key: "seminary", href: "/ministries/seminary" },
  { key: "childrensEducation", href: "/ministries/childrens-education" },
  { key: "christianArticles", href: "/ministries/publishing" },
  { key: "outreach", href: "/ministries/education" },
] as const;

interface SiteHeaderProps {
  locale: Locale;
}

function isActiveHref(href: string, pathWithoutLocale: string): boolean {
  if (href === "/") return pathWithoutLocale === "/";
  return pathWithoutLocale === href || pathWithoutLocale.startsWith(`${href}/`);
}

/**
 * Every nav item whose href matches the current path via isActiveHref(),
 * picking the longest (most specific) one — now that Seminary's own nav
 * item (/ministries/seminary) nests under Ministries' (/ministries),
 * visiting it would otherwise match both hrefs and highlight both items,
 * which the approved Seminary mockup's header does not show (only
 * "Seminary" is active there). Every previously-single-match route (Home,
 * About, Ministries alone, etc.) still resolves to that same one match,
 * since "most specific among one candidate" is just that candidate.
 */
function findActiveHref(pathWithoutLocale: string): string | undefined {
  let best: string | undefined;
  for (const item of navItems) {
    if (isActiveHref(item.href, pathWithoutLocale) && (!best || item.href.length > best.length)) {
      best = item.href;
    }
  }
  return best;
}

/**
 * HANDOFF.md §8: utility bar, then this header. Desktop nav renders at
 * `xl` (1280px) and up — nine nav items plus the Support CTA need more
 * room than the 1024–1279px tier has to give without feeling congested,
 * so that tier uses the drawer nav (MobileHeader/MobileDrawer) instead;
 * see LogoLockup's descriptor line, which was already gated to the same
 * `xl` breakpoint for the same reason. Nav order per §8: Home · About ·
 * Ministries · Seminary · Sermons · Resources · Events · Prayer ·
 * Contact, then the Support the mission CTA — Support is a button, not a
 * plain nav link (lib/navigation.ts).
 */
export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const pathWithoutLocale = stripLocaleFromPathname(pathname);
  const activeHref = findActiveHref(pathWithoutLocale);
  const isUrdu = locale === "ur";
  const strings = getCommonContent(locale);
  const footerStrings = getFooterContent(locale);

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

  const supportHref = localizePath(locale, "/support");

  return (
    <>
      <UtilityBar
        locale={locale}
        pathWithoutLocale={pathWithoutLocale}
        isUrdu={isUrdu}
        locationsLabel={strings.utilityBar.locations}
        phoneLabel={strings.utilityBar.phoneLabel}
        languageSwitcherLabel={strings.header.languageSwitcherLabel}
        darkModeLabel={strings.header.darkModeLabel}
        lightModeLabel={strings.header.lightModeLabel}
        themeToggleToLight={strings.header.themeToggleToLight}
        themeToggleToDark={strings.header.themeToggleToDark}
      />

      <header className="sticky top-0 z-40 w-full border-b border-border bg-surface">
        <Container>
          <MobileHeader
            ref={menuTriggerRef}
            locale={locale}
            menuOpen={menuOpen}
            menuId={MOBILE_NAV_ID}
            openLabel={strings.header.menuOpen}
            onOpen={() => setMenuOpen(true)}
          />

          <div className="hidden items-center justify-between gap-7 py-5 xl:flex">
            <LogoLockup locale={locale} showDescriptor={false} />

            <div className="flex items-center gap-6">
              <nav aria-label={strings.header.primaryNavLabel}>
                <ul className="flex items-center gap-1.5">
                  {navItems.map((item) => {
                    const active = item.href === activeHref;
                    return (
                      <li key={item.key}>
                        <Link
                          href={localizePath(locale, item.href)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "group relative inline-flex items-center px-2 py-2.5 transition-colors duration-300",
                            isUrdu
                              ? "font-urdu-body text-base"
                              : "text-[0.875rem] text-[#4b4a45] dark:text-[#bcc8d2]",
                            active
                              ? "font-semibold text-foreground"
                              : "hover:text-foreground",
                          )}
                        >
                          {strings.nav[item.key]}
                          {/* One indicator, not two: SiteHeader persists across
                              client-side route changes (same <Link> DOM node,
                              same `key`), so animating `scale-x` here — instead
                              of swapping a static full-width span in/out — lets
                              the active mark visibly grow into place when it
                              moves to a new item, not just appear. `origin-center`
                              (not `-left`) keeps the grow direction identical in
                              Urdu/RTL, where "left" isn't the natural start edge. */}
                          <span
                            aria-hidden="true"
                            className={cn(
                              "absolute inset-x-2 bottom-[-5px] h-[2px] origin-center transition-transform duration-300 ease-out",
                              active
                                ? "scale-x-100 bg-accent"
                                : "scale-x-0 bg-ink-faint group-hover:scale-x-100 dark:bg-dark-faint",
                            )}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <Button href={supportHref} variant="primary" size="compact" isUrdu={isUrdu}>
                {strings.header.supportCta}
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <MobileDrawer
        id={MOBILE_NAV_ID}
        open={menuOpen}
        onDismiss={dismissMenu}
        navLabel={strings.header.mobileNavLabel}
        menuTitle={strings.header.menuTitle}
        closeLabel={strings.header.menuClose}
        isUrdu={isUrdu}
        items={navItems.map((item) => ({
          key: item.key,
          href: localizePath(locale, item.href),
          label: strings.nav[item.key],
          active: item.href === activeHref,
        }))}
        ministryItems={ministryDrawerLinks.map((item) => ({
          key: item.key,
          href: localizePath(locale, item.href),
          label: footerStrings.ministriesLinks[item.key],
        }))}
        supportHref={supportHref}
        supportLabel={strings.header.supportCta}
        languageSwitcher={
          <LanguageSwitcher
            locale={locale}
            pathWithoutLocale={pathWithoutLocale}
            label={strings.header.languageSwitcherLabel}
            variant="chip"
          />
        }
        themeToggle={
          <ThemeToggle
            darkModeLabel={strings.header.darkModeLabel}
            lightModeLabel={strings.header.lightModeLabel}
            ariaLabelToLight={strings.header.themeToggleToLight}
            ariaLabelToDark={strings.header.themeToggleToDark}
            tone="on-light"
            variant="switch"
          />
        }
      />
    </>
  );
}
