import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface PrayerSectionProps {
  strings: HomeStrings["prayerCta"];
  ctaHref: string;
  isUrdu: boolean;
}

/**
 * The functional prayer form (server-side validation, anti-spam, rate
 * limiting, all six states) belongs to the dedicated /prayer page
 * (HANDOFF.md §23 step 8 / PRD §10), not the homepage — this section
 * invites the visitor there rather than imitating a working form inline.
 * Previously showed a decorative, `aria-hidden` mockup of the form's own
 * fields (name/email/request/checkboxes) that weren't real controls;
 * replaced with a short invitation and the one real, accessible action —
 * a button that goes to /prayer.
 */
export function PrayerSection({ strings, ctaHref, isUrdu }: PrayerSectionProps) {
  return (
    <section className="border-t border-border bg-band py-16 lg:py-24">
      <Container>
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_520px] lg:gap-16">
          <div className="min-w-0">
            <p
              className={cn(
                "text-eyebrow text-primary",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.eyebrow}
            </p>
            <h2 className={cn("text-h2 mt-4 text-foreground", isUrdu && "font-urdu-display")}>
              {strings.heading}
            </h2>
            <p
              className={cn(
                "text-body measure mt-5 text-ink-body",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.body}
            </p>
          </div>

          <div className="min-w-0 flex flex-col justify-center border border-border bg-surface p-8">
            <p className={cn("font-serif text-[1.3125rem] text-foreground", isUrdu && "font-urdu-display")}>
              {strings.formTitle}
            </p>
            <Button href={ctaHref} variant="primary" isUrdu={isUrdu} className="mt-6 w-full">
              {strings.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
