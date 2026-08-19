import type { Metadata } from "next";
import { NotFoundContent } from "@/components/errors/NotFoundContent";
import { getErrorsContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale, defaultLocale } from "@/lib/i18n/types";

export const metadata: Metadata = {
  title: "Page not found — Dawn of Light Ministry",
};

/**
 * Dawn of Light - Utility Pages.dc.html §03 — real Next.js App Router
 * not-found handling, not a page that merely looks like a 404: this file
 * renders whenever `notFound()` is called anywhere under `/[locale]/...`
 * (every page's own `if (!isLocale(locale)) notFound()` guard included),
 * and for any sub-path Next can't otherwise match under a `[locale]`
 * segment. It sits at the same route segment as every other page here, so
 * `params.locale` is populated the same ordinary way page.tsx's is for a
 * request tied to an actual route match — even for an invalid segment
 * (e.g. `/xx/whatever`), where it falls back to English rather than
 * guessing a language that isn't one of the two the site supports. Next
 * also prerenders this file on its own as the segment's generic fallback
 * (outside any specific request), where `params` itself is `undefined` —
 * guarded here rather than assumed present.
 */
export default async function LocaleNotFound({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  const rawLocale = (await params)?.locale;
  const locale = rawLocale && isLocale(rawLocale) ? rawLocale : defaultLocale;
  const isUrdu = locale === "ur";
  const t = getErrorsContent(locale).notFound;
  const path = (segment: string) => localizePath(locale, segment);

  const destinations = [
    { key: "serviceTimes", topRule: "oxblood" as const, ...t.cards.serviceTimes, href: path("/ministries/church") },
    { key: "prayer", topRule: "navy" as const, ...t.cards.prayer, href: path("/prayer") },
    { key: "library", topRule: "brass" as const, ...t.cards.library, href: path("/resources") },
    { key: "talk", topRule: "oxblood" as const, ...t.cards.talk, href: path("/contact") },
  ];

  return (
    <main className="flex flex-1 flex-col">
      <NotFoundContent strings={t} homeHref={path("/")} destinations={destinations} isUrdu={isUrdu} />
    </main>
  );
}
