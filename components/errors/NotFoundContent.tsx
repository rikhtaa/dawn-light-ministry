import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import type { ErrorsStrings } from "@/content/i18n/en/errors";
import { cn } from "@/lib/cn";

interface DestinationCard {
  key: string;
  topRule: "oxblood" | "navy" | "brass";
  heading: string;
  body: string;
  linkLabel: string;
  href: string;
}

interface NotFoundContentProps {
  strings: ErrorsStrings["notFound"];
  homeHref: string;
  destinations: DestinationCard[];
  isUrdu?: boolean;
}

// Design-fixed: Dawn of Light - Utility Pages.dc.html draws this exact
// Urdu line under the 404 heading regardless of site locale — same
// convention as components/layout/LogoLockup.tsx's "نور کی صبح", not a
// translated string.
const NOT_FOUND_URDU_LINE = "یہ صفحہ موجود نہیں ہے";

/**
 * Dawn of Light - Utility Pages.dc.html §03 — "04 destination cards
 * (Service times → Church · Request prayer · Sermons & resources · Talk to
 * someone / WhatsApp), Back to the homepage + site search." Desktop draws
 * a 4-card grid; the "mobile 390" frame draws the same four destinations
 * as a ruled list instead — a genuinely different mobile composition, not
 * a responsive shrink of the cards.
 */
export function NotFoundContent({ strings: t, homeHref, destinations, isUrdu = false }: NotFoundContentProps) {
  return (
    <div className="bg-paper py-16 sm:py-20 md:py-24">
      <Container>
        <div className="max-w-[62.5rem]">
          <Reveal>
            <p className="text-eyebrow text-ink-ghost">{t.monoLabel}</p>
            <h1
              className={cn(
                "text-display mt-5 mb-4.5 max-w-[24ch] text-foreground",
                isUrdu && "font-urdu-display",
              )}
            >
              {t.heading}
            </h1>
            <p dir="rtl" className="font-urdu-body mb-5 text-[1.375rem] leading-[2] text-primary">
              {NOT_FOUND_URDU_LINE}
            </p>
            <p className={cn("text-standfirst measure mb-10 text-ink-body", isUrdu && "font-urdu-display")}>
              <span className="hidden sm:inline">{t.body}</span>
              <span className="sm:hidden">{t.bodyMobile}</span>
            </p>
          </Reveal>

          {/* Desktop/tablet: four cards, staggered per-item like
              MinistriesSection's own card grid (Reveal's index caps the
              delay at the third item, same as everywhere else). */}
          <div className="hidden max-w-[68.75rem] gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d, i) => (
              <Reveal key={d.key} index={i} className="h-full">
                <Card topRule={d.topRule} tone="surface" className="h-full">
                  <p className={cn("text-card-title mb-2 text-foreground", isUrdu && "font-urdu-display")}>
                    {d.heading}
                  </p>
                  <p className={cn("text-small mb-3.5 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                    {d.body}
                  </p>
                  <Button href={d.href} variant="tertiary" showArrow isUrdu={isUrdu}>
                    {d.linkLabel}
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Mobile: ruled list — the design's own distinct "mobile 390"
              composition, not components/ui/RuledRow.tsx (that component's
              own mobile breakpoint stacks label/value in a column, which
              doesn't match this design's unconditional single-row layout
              at every width) — same hover/transition values as RuledRow,
              reused directly rather than through the component. */}
          <div className="flex flex-col border-t border-border sm:hidden">
            {destinations.map((d, i) => (
              <Reveal key={d.key} index={i}>
                <a
                  href={d.href}
                  className={cn(
                    "flex items-center justify-between border-b border-border-soft py-4 text-body text-foreground transition-colors duration-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]",
                    isUrdu && "font-urdu-body",
                  )}
                >
                  <span>{d.heading}</span>
                  <span className="text-primary" aria-hidden="true">
                    {isUrdu ? "←" : "→"}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={homeHref} variant="primary" className="w-full sm:w-auto" isUrdu={isUrdu}>
              {t.homeCta}
            </Button>
            {/* No site-search feature exists in this project yet — rendered
                disabled, matching the design's own muted, non-interactive
                treatment, rather than building search now. */}
            <input
              type="search"
              disabled
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className={cn(
                "hidden min-w-70 border border-input-border bg-surface px-5 py-4 text-[0.9375rem] text-ink-disabled placeholder:text-ink-disabled sm:block",
                isUrdu && "font-urdu-body text-right",
              )}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
