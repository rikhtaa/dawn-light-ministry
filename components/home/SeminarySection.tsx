import { NavyBand } from "@/components/layout/NavyBand";
import { Button } from "@/components/ui/Button";
import { FactTable } from "@/components/ui/FactTable";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface SeminarySectionProps {
  strings: HomeStrings["seminary"];
  primaryCtaHref: string;
  secondaryCtaHref: string;
  isUrdu: boolean;
}

export function SeminarySection({
  strings,
  primaryCtaHref,
  secondaryCtaHref,
  isUrdu,
}: SeminarySectionProps) {
  const facts = [
    strings.facts.classes,
    strings.facts.instruction,
    strings.facts.statementOfFaith,
    { ...strings.facts.coursesSchedule, unconfirmed: true },
  ];

  return (
    <NavyBand size="section">
      <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p
            className={cn(
              "text-eyebrow text-dark-accent",
              isUrdu && "font-urdu-body text-base normal-case tracking-normal",
            )}
          >
            {strings.eyebrow}
          </p>
          <h2
            className={cn(
              "text-h2 mt-4 text-dark-heading",
              isUrdu && "font-urdu-display",
            )}
          >
            {strings.heading}
          </h2>
          <p
            className={cn(
              "text-body measure mt-5 text-dark-body",
              isUrdu && "font-urdu-body",
            )}
          >
            {strings.body}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCtaHref} variant="primary" isUrdu={isUrdu}>
              {strings.primaryCta}
            </Button>
            <Button href={secondaryCtaHref} variant="secondary" tone="on-navy" isUrdu={isUrdu}>
              {strings.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="min-w-0">
          <ImagePlaceholder ratio="16:9" caption={strings.imageCaption} className="mb-6" />
          <FactTable facts={facts} layout="stacked" tone="on-navy" isUrdu={isUrdu} />
        </div>
      </Reveal>
    </NavyBand>
  );
}
