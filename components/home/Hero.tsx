import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
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
            <Reveal>
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
            </Reveal>
            <div className="mt-11 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-5 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {facts.map((fact, i) => (
                <Reveal
                  key={fact.label}
                  index={i}
                  className={cn(
                    "flex min-w-0 flex-col gap-1",
                    "border-s border-border ps-4 md:ps-6",
                    "[&:nth-child(2n+1)]:border-s-0 [&:nth-child(2n+1)]:ps-0",
                    "md:[&:nth-child(2n+1)]:border-s md:[&:nth-child(2n+1)]:ps-6 md:first:border-s-0 md:first:ps-0",
                    "lg:[&:nth-child(2n+1)]:border-s-0 lg:[&:nth-child(2n+1)]:ps-0",
                    "xl:[&:nth-child(2n+1)]:border-s xl:[&:nth-child(2n+1)]:ps-6 xl:first:border-s-0 xl:first:ps-0",
                  )}
                >
                  <span
                    className={cn(
                      "font-serif text-[1.375rem] leading-tight text-foreground",
                      "xl:whitespace-nowrap",
                    )}
                  >
                    {fact.value}
                  </span>
                  <span className="text-caption text-balance leading-snug">
                    {fact.label}
                  </span>
                </Reveal>
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
