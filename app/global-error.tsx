"use client";

import { useEffect } from "react";
import { organization } from "@/lib/organization";
import "./globals.css";

/**
 * Last-resort boundary: catches an error thrown by `app/[locale]/layout.tsx`
 * itself, where even the normal header/footer chrome can't be trusted to
 * render. Next.js requires this file to supply its own complete
 * `<html>/<body>` — it replaces the root layout entirely when active. Kept
 * deliberately minimal (no SiteHeader/SiteFooter, no locale detection) so
 * it stays reliable precisely when the rest of the app has failed;
 * English-only, matching the compact 500 copy without depending on the
 * i18n content registry. HANDOFF.md §18: no technical detail is shown.
 * Semantic theme tokens still apply (this file imports globals.css
 * directly, so the CSS custom properties exist regardless of React/font
 * state) — light mode only, though, since the real layout's dark-mode
 * init script never runs here; an acceptable last-resort limitation.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[global-error]");
  }, []);

  return (
    <html lang="en" dir="ltr">
      <body className="flex min-h-screen items-center justify-center bg-paper px-4 font-sans text-ink">
        <div className="w-full max-w-165 border border-border bg-surface p-9 sm:p-12">
          <p className="text-eyebrow mb-4 text-ink-ghost">Error 500 · something went wrong</p>
          <h1 className="text-h2 mb-3.5 text-ink">Something went wrong at our end.</h1>
          <p className="text-body-long measure mb-6.5 text-ink-body">
            This is not your mistake. Try again in a moment, or reach the ministry directly on WhatsApp — that
            always works.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="min-h-12 bg-primary px-6 py-3.5 text-[0.9375rem] font-medium text-primary-foreground"
            >
              Try again
            </button>
            <a
              href={organization.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-border-strong px-6 py-3.5 text-[0.9375rem] font-medium text-ink"
            >
              WhatsApp {organization.phone}
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
