import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

interface MinistryMasthead {
  homeLabel: string;
  homeHref: string;
  ministriesLabel: string;
  ministriesHref: string;
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  standfirst: string;
  isUrdu?: boolean;
}

/**
 * Slot 1 of the shared ministry-child template (Dawn of Light - Ministry
 * Pages.dc.html "00 — The shared ministry template": "Breadcrumb, kicker,
 * h1, and one standfirst sentence in Source Serif at 22px. Parchment
 * ground.") — identical across Church/Publishing/Education/Children's
 * Education, only the text differs. Parchment (bg-paper), not navy — the
 * masthead these four pages use is genuinely different from Seminary's own
 * bespoke navy treatment, not a simplification of it.
 */
export function MinistryMasthead({
  homeLabel,
  homeHref,
  ministriesLabel,
  ministriesHref,
  breadcrumbLabel,
  eyebrow,
  title,
  standfirst,
  isUrdu = false,
}: MinistryMasthead) {
  return (
    <div className="border-b border-border bg-paper py-10 md:py-14">
      <Container>
        <Breadcrumb
          items={[
            { label: homeLabel, href: homeHref },
            { label: ministriesLabel, href: ministriesHref },
            { label: breadcrumbLabel },
          ]}
          isUrdu={isUrdu}
          className="mb-6"
        />
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_560px] lg:gap-14">
          <div>
            <p
              className={cn(
                "text-eyebrow text-primary",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {eyebrow}
            </p>
            <h1 className={cn("text-h1 mt-3 text-foreground", isUrdu && "font-urdu-display")}>{title}</h1>
          </div>
          {/* text-standfirst (serif) — Ministry Pages.dc.html's own standfirst
              is Source Serif 22px, unlike the Ministries index masthead's
              plain sans paragraph. A different page, a different, correct
              choice — not a repeat of that earlier mismatch. */}
          <p className={cn("text-standfirst measure text-ink-body", isUrdu && "font-urdu-display text-xl")}>
            {standfirst}
          </p>
        </div>
      </Container>
    </div>
  );
}
