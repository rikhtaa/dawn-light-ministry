import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface PrayerCtaBannerProps {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  isUrdu: boolean;
}

export function PrayerCtaBanner({
  heading,
  body,
  ctaLabel,
  ctaHref,
  isUrdu,
}: PrayerCtaBannerProps) {
  return (
    <Section background="primary">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
          <h2 className={cn("text-h1", isUrdu && "font-urdu-display")}>
            {heading}
          </h2>
          <p
            className={cn(
              "text-body text-primary-foreground/80",
              isUrdu && "font-urdu-body text-lg",
            )}
          >
            {body}
          </p>
          <Button
            href={ctaHref}
            variant="secondary"
            className={isUrdu ? "font-urdu-body" : undefined}
          >
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
