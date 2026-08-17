import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { organization } from "@/lib/organization";
import type { HomeStrings } from "@/content/i18n/en/home";

interface SupportSectionProps {
  strings: HomeStrings["support"];
  ctaHref: string;
  prayerHref: string;
  isUrdu: boolean;
}

export function SupportSection({
  strings,
  ctaHref,
  prayerHref,
  isUrdu,
}: SupportSectionProps) {
  return (
    <section className="border-t border-border bg-band py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
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
            <Button href={ctaHref} variant="primary" isUrdu={isUrdu} className="mt-7">
              {strings.cta}
            </Button>
          </div>

          <div className="min-w-0 flex flex-col gap-3.5">
            <SupportRow
              href={prayerHref}
              title={strings.pray.title}
              description={strings.pray.description}
              isUrdu={isUrdu}
              showArrow
            />
            <SupportRow
              title={strings.give.title}
              description={strings.give.description}
              isUrdu={isUrdu}
              badge={strings.give.badge}
            />
            <SupportRow
              href={`tel:${organization.phone}`}
              title={strings.speak.title}
              description={strings.speak.description}
              isUrdu={isUrdu}
              showArrow
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function SupportRow({
  href,
  title,
  description,
  isUrdu,
  showArrow = false,
  badge,
}: {
  href?: string;
  title: string;
  description: string;
  isUrdu: boolean;
  showArrow?: boolean;
  badge?: string;
}) {
  const content = (
    <div className="flex items-center justify-between gap-4 border border-border bg-surface px-6 py-5">
      <div>
        <p className={cn("font-serif text-[1.1875rem] text-foreground", isUrdu && "font-urdu-display")}>
          {title}
        </p>
        <p className={cn("text-small mt-0.5 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
          {description}
        </p>
      </div>
      {badge ? (
        <span className="shrink-0 border border-warning/40 bg-warning/10 px-2.5 py-1.5 text-[0.75rem] tracking-[0.1em] text-warning uppercase">
          {badge}
        </span>
      ) : null}
      {showArrow ? (
        <span aria-hidden="true" className="shrink-0 text-[0.90625rem] text-primary dark:text-dark-accent">
          {isUrdu ? "←" : "→"}
        </span>
      ) : null}
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} className="block transition-colors duration-150 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]">
      {content}
    </a>
  );
}
