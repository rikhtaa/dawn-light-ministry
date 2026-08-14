import { locales, type Locale } from "@/lib/i18n/types";

/** Builds a locale-prefixed path, e.g. ("ur", "/about") -> "/ur/about". */
export function localizePath(locale: Locale, path: string): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Strips a known locale prefix from a pathname, e.g. "/ur/about" -> "/about",
 * "/en" -> "/". Used to preserve the current route when switching locales.
 */
export function stripLocaleFromPathname(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(`/${locale}`.length);
    }
  }
  return pathname;
}
