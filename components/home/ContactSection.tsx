import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { organization } from "@/lib/organization";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface ContactSectionProps {
  strings: HomeStrings["contact"];
  ctaHref: string;
  isUrdu: boolean;
}

export function ContactSection({
  strings,
  ctaHref,
  isUrdu,
}: ContactSectionProps) {
  const cities = [strings.cities.karachi, strings.cities.faisalabad];

  return (
    <Section background="muted">
      <Container>
        <div className="flex flex-col items-center gap-10">
          <SectionHeader
            eyebrow={strings.eyebrow}
            heading={strings.heading}
            description={strings.body}
            align="center"
            isUrdu={isUrdu}
          />

          <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {cities.map((city) => (
              <Card key={city} className="flex flex-col gap-2">
                <h3
                  className={cn(
                    "text-h3 text-foreground",
                    isUrdu && "font-urdu-display",
                  )}
                >
                  {city}
                </h3>
                <p
                  className={cn(
                    "text-small italic text-muted-foreground",
                    isUrdu && "font-urdu-body text-base",
                  )}
                >
                  {strings.addressPending}
                </p>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className={cn("text-body", isUrdu && "font-urdu-body text-lg")}>
              <span className="text-muted-foreground">
                {strings.phoneLabel}:{" "}
              </span>
              <a
                href={`tel:${organization.phone}`}
                className="text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              >
                {organization.phone}
              </a>
            </p>
            <p className={cn("text-body", isUrdu && "font-urdu-body text-lg")}>
              <span className="text-muted-foreground">
                {strings.emailLabel}:{" "}
              </span>
              <a
                href={`mailto:${organization.email}`}
                className="text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
              >
                {organization.email}
              </a>
            </p>
          </div>

          <Button
            href={ctaHref}
            variant="primary"
            className={isUrdu ? "font-urdu-body" : undefined}
          >
            {strings.cta}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
