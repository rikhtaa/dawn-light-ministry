"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ServerErrorContent } from "@/components/errors/ServerErrorContent";
import { getErrorsContent } from "@/lib/i18n/content-registry";
import { isLocale, defaultLocale } from "@/lib/i18n/types";

/**
 * Dawn of Light - Utility Pages.dc.html §03 "500 variant" — a real
 * Next.js App Router error boundary (required to be a Client Component;
 * this is the standard `error.tsx` convention, not an ordinary route
 * called /500), catching any rendering error thrown under `/[locale]/...`.
 * `error.tsx` doesn't receive route `params` the way page.tsx does, so the
 * locale is read from the current URL instead, same as this project's
 * other client-only locale lookups. HANDOFF.md §18: "no technical detail
 * shown to a visitor" — `error` is only ever passed to `console.error`
 * (visible in devtools, never rendered), matching Next's own documented
 * error.tsx pattern; nothing about the error or any form contents is
 * rendered into the page.
 */
export default function LocaleError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const locale = isLocale(firstSegment) ? firstSegment : defaultLocale;
  const isUrdu = locale === "ur";
  const t = getErrorsContent(locale).serverError;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ServerErrorContent strings={t} onTryAgain={reset} isUrdu={isUrdu} />;
}
