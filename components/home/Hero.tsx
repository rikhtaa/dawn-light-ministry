import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface HeroProps {
  strings: HomeStrings["hero"];
  primaryCtaHref: string;
  secondaryCtaHref: string;
  isUrdu: boolean;
}

/**
 * Rebuilt against the approved Claude Design mockup's plain split hero —
 * eyebrow/h1/Urdu subtitle/standfirst/CTAs/fact rail beside a captioned
 * photograph, no animated background or cycling headline. Direction B's
 * motion budget explicitly rules out hero animation (HANDOFF.md §11), so
 * AuroraBackground/LayoutTextFlip (Aceternity) are no longer used here —
 * the files themselves are untouched, this is the consumer being adapted.
 */
export function Hero({ strings, primaryCtaHref, secondaryCtaHref, isUrdu }: HeroProps) {
  const facts = [strings.facts.founded, strings.facts.cities, strings.facts.seminary, strings.facts.tradition];

  return (
    <section className="bg-paper">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
          <div className="flex min-w-0 flex-col justify-center">
            <p
              className={cn(
                "text-eyebrow text-primary",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.eyebrow}
            </p>
            <h1
              className={cn(
                "text-display mt-5 text-foreground",
                isUrdu && "font-urdu-display",
              )}
            >
              {strings.headline}
            </h1>
            {/* dir="rtl" for correct Nastaliq shaping; text-align stays
                left regardless of page direction, matching the mockup
                exactly (`direction:rtl; text-align:left`). */}
            <p
              className="font-urdu-display mt-4 text-left text-2xl leading-[2] text-primary dark:text-dark-clay"
              dir="rtl"
            >
              {strings.urduName}
            </p>
            <p
              className={cn(
                "text-body-long measure mt-6 text-ink-body",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.standfirst}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCtaHref} variant="primary" isUrdu={isUrdu}>
                {strings.primaryCta}
              </Button>
              <Button href={secondaryCtaHref} variant="secondary" isUrdu={isUrdu}>
                {strings.secondaryCta}
              </Button>
            </div>
            <div className="mt-11 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-5 sm:grid-cols-4">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={cn(
                    "flex flex-col gap-1",
                    index > 0 && "sm:border-s sm:border-border sm:ps-6",
                  )}
                >
                  <span className="font-serif text-[1.4375rem] text-foreground">{fact.value}</span>
                  <span className="text-caption">{fact.label}</span>
                </div>
              ))}
            </div>
          </div>

          <ImagePlaceholder
            ratio="4:5"
            caption={strings.imagePlaceholder}
            photoCaption={strings.imageCaption}
            className="min-h-[420px] min-w-0"
          />
        </div>
      </Container>
    </section>
  );
}
