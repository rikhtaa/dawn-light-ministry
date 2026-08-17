import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { organization } from "@/lib/organization";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface LocationsSectionProps {
  strings: HomeStrings["contact"];
  isUrdu: boolean;
}

export function LocationsSection({ strings, isUrdu }: LocationsSectionProps) {
  return (
    <section className="border-t border-border bg-surface py-16 lg:py-24">
      <Container>
        <p
          className={cn(
            "text-eyebrow text-primary",
            isUrdu && "font-urdu-body text-base normal-case tracking-normal",
          )}
        >
          {strings.eyebrow}
        </p>
        <h2 className={cn("text-h2 mt-3 text-foreground", isUrdu && "font-urdu-display")}>
          {strings.heading}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Card tone="surface">
            <p className={cn("font-serif text-[1.375rem] text-foreground", isUrdu && "font-urdu-display")}>
              {strings.cities.karachi}
            </p>
            <p className="text-body mt-2.5 leading-[1.7] text-ink-muted">
              <PlaceholderTag>{strings.addressPending}</PlaceholderTag>
              <br />
              <PlaceholderTag>{strings.serviceTimesPending}</PlaceholderTag>
            </p>
          </Card>
          <Card tone="surface">
            <p className={cn("font-serif text-[1.375rem] text-foreground", isUrdu && "font-urdu-display")}>
              {strings.cities.faisalabad}
            </p>
            <p className="text-body mt-2.5 leading-[1.7] text-ink-muted">
              <PlaceholderTag>{strings.addressPending}</PlaceholderTag>
              <br />
              <PlaceholderTag>{strings.serviceTimesPending}</PlaceholderTag>
            </p>
          </Card>
          <Card topRule="brass" tone="surface-warm">
            <p className={cn("font-serif text-[1.375rem] text-foreground", isUrdu && "font-urdu-display")}>
              {strings.reachHeading}
            </p>
            <p className="text-body mt-2.5 leading-[1.9] text-ink-muted">
              {strings.phoneLabel}
              <br />
              <a href={`tel:${organization.phone}`} className="font-medium text-foreground">
                {organization.phone}
              </a>
              <br />
              {strings.emailLabel}
              <br />
              <a href={`mailto:${organization.email}`} className="font-medium text-foreground">
                {organization.email}
              </a>
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
