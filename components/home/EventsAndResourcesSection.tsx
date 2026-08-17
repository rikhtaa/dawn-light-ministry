import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { RuledList, RuledRow } from "@/components/ui/RuledRow";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface EventsAndResourcesSectionProps {
  eventsStrings: HomeStrings["events"];
  eventsCtaHref: string;
  eventsAllHref: string;
  resourcesStrings: HomeStrings["resources"];
  resourcesAllHref: string;
  isUrdu: boolean;
}

function ColumnHeading({
  heading,
  cta,
  href,
  isUrdu,
}: {
  heading: string;
  cta: string;
  href: string;
  isUrdu: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t-2 border-ink pt-4">
      <h2 className={cn("text-h3 text-foreground", isUrdu && "font-urdu-display")}>{heading}</h2>
      <Link
        href={href}
        className={cn(
          "shrink-0 text-[0.90625rem] font-medium text-primary underline decoration-[1.5px] underline-offset-[3px] transition-colors duration-150 hover:brightness-90 dark:text-dark-accent",
          isUrdu && "font-urdu-body",
        )}
      >
        {cta}
        <span aria-hidden="true"> {isUrdu ? "←" : "→"}</span>
      </Link>
    </div>
  );
}

/**
 * Verified against the approved mockup's combined "events + resources"
 * row — two columns in one section, not two separate ones.
 */
export function EventsAndResourcesSection({
  eventsStrings,
  eventsCtaHref,
  eventsAllHref,
  resourcesStrings,
  resourcesAllHref,
  isUrdu,
}: EventsAndResourcesSectionProps) {
  const resourceItems = Object.values(resourcesStrings.items);

  return (
    <section className="border-t border-border bg-surface py-16 lg:py-26">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <ColumnHeading
              heading={eventsStrings.heading}
              cta={eventsStrings.cta}
              href={eventsAllHref}
              isUrdu={isUrdu}
            />
            <div className="mt-4 border border-dashed border-input-border bg-surface-warm px-7 py-10 text-center">
              <p className={cn("font-serif text-[1.1875rem] text-foreground", isUrdu && "font-urdu-display")}>
                {eventsStrings.emptyHeading}
              </p>
              <p
                className={cn(
                  "measure mx-auto mt-2 text-small text-ink-muted",
                  isUrdu && "font-urdu-body text-base",
                )}
              >
                {eventsStrings.emptyState}
              </p>
              <Button href={eventsCtaHref} variant="secondary" size="compact" isUrdu={isUrdu} className="mt-4">
                {eventsStrings.emptyCta}
              </Button>
            </div>
          </div>

          <div className="min-w-0">
            <ColumnHeading
              heading={resourcesStrings.heading}
              cta={resourcesStrings.cta}
              href={resourcesAllHref}
              isUrdu={isUrdu}
            />
            <RuledList className="mt-4">
              {resourceItems.map((item) => (
                <RuledRow key={item.title} align="start">
                  <span className="text-mono-label w-16 shrink-0 text-accent">{item.kicker}</span>
                  <div className="min-w-0">
                    <p className={cn("font-serif text-[1.1875rem] text-foreground", isUrdu && "font-urdu-display")}>
                      {item.title}
                    </p>
                    <p
                      className={cn(
                        "text-small mt-0.5 text-ink-faint",
                        isUrdu && "font-urdu-body text-base",
                      )}
                    >
                      {item.meta}
                    </p>
                  </div>
                </RuledRow>
              ))}
            </RuledList>
          </div>
        </div>
      </Container>
    </section>
  );
}
