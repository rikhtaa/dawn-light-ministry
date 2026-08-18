import { resolveContent } from "@/lib/i18n/resolve";
import { defaultLocale, type Locale } from "@/lib/i18n/types";
import { common as commonEn, type CommonStrings } from "@/content/i18n/en/common";
import { home as homeEn, type HomeStrings } from "@/content/i18n/en/home";
import { footer as footerEn, type FooterStrings } from "@/content/i18n/en/footer";
import { metadata as metadataEn, type MetadataStrings } from "@/content/i18n/en/metadata";
import { about as aboutEn, type AboutStrings } from "@/content/i18n/en/about";
import { ministries as ministriesEn, type MinistriesStrings } from "@/content/i18n/en/ministries";
import { common as commonUr } from "@/content/i18n/ur/common";
import { home as homeUr } from "@/content/i18n/ur/home";
import { footer as footerUr } from "@/content/i18n/ur/footer";
import { metadata as metadataUr } from "@/content/i18n/ur/metadata";
import { about as aboutUr } from "@/content/i18n/ur/about";
import { ministries as ministriesUr } from "@/content/i18n/ur/ministries";

/**
 * The single place that maps a locale to its generated translation
 * modules. Components never branch on locale to pick a content file —
 * they call getCommonContent(locale) / getHomeContent(locale) /
 * getFooterContent(locale) below, for whichever locale routing handed
 * them, and get back a fully-resolved (approved-translated-or-English-
 * fallback) content object every time.
 *
 * Adding a language: generate its content/i18n/<locale>/*.ts files via
 * `npm run i18n:generate -- --locale=<code>` (see scripts/i18n/generate.ts),
 * then add one `case "<code>":` per function below. No page or component
 * file changes — this file and lib/i18n/types.ts's `locales` array are the
 * only two touched when a language is added.
 */

export function getCommonContent(locale: Locale): CommonStrings {
  if (locale === defaultLocale) return commonEn;
  switch (locale) {
    case "ur":
      return resolveContent(commonEn, commonUr);
    default:
      return commonEn;
  }
}

export function getHomeContent(locale: Locale): HomeStrings {
  if (locale === defaultLocale) return homeEn;
  switch (locale) {
    case "ur":
      return resolveContent(homeEn, homeUr);
    default:
      return homeEn;
  }
}

export function getFooterContent(locale: Locale): FooterStrings {
  if (locale === defaultLocale) return footerEn;
  switch (locale) {
    case "ur":
      return resolveContent(footerEn, footerUr);
    default:
      return footerEn;
  }
}

export function getMetadataContent(locale: Locale): MetadataStrings {
  if (locale === defaultLocale) return metadataEn;
  switch (locale) {
    case "ur":
      return resolveContent(metadataEn, metadataUr);
    default:
      return metadataEn;
  }
}

export function getAboutContent(locale: Locale): AboutStrings {
  if (locale === defaultLocale) return aboutEn;
  switch (locale) {
    case "ur":
      return resolveContent(aboutEn, aboutUr);
    default:
      return aboutEn;
  }
}

export function getMinistriesContent(locale: Locale): MinistriesStrings {
  if (locale === defaultLocale) return ministriesEn;
  switch (locale) {
    case "ur":
      return resolveContent(ministriesEn, ministriesUr);
    default:
      return ministriesEn;
  }
}
