import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/layout/CtaBand";
import { Button } from "@/components/ui/Button";
import { RuledList, RuledRow } from "@/components/ui/RuledRow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

interface Sibling {
  key: string;
  title: string;
  description: string;
  href: string;
}

interface MinistrySiblingsAndCtaProps {
  siblingsHeading: string;
  viewAllLabel: string;
  viewAllHref: string;
  siblings: Sibling[];
  ctaHeading: string;
  ctaBody: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  isUrdu?: boolean;
}

/**
 * Slot 6 of the shared ministry-child template — "the other four
 * ministries as ruled rows, then one action band" (HANDOFF.md §14).
 * Structurally identical across all four pages; only which four siblings
 * remain (self excluded) and the CTA copy change.
 */
export function MinistrySiblingsAndCta({
  siblingsHeading,
  viewAllLabel,
  viewAllHref,
  siblings,
  ctaHeading,
  ctaBody,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  isUrdu = false,
}: MinistrySiblingsAndCtaProps) {
  const actions: ReactNode = (
    <>
      {ctaSecondaryLabel && ctaSecondaryHref ? (
        <Button href={ctaSecondaryHref} variant="secondary" isUrdu={isUrdu}>
          {ctaSecondaryLabel}
        </Button>
      ) : null}
      <Button href={ctaPrimaryHref} variant="primary" isUrdu={isUrdu}>
        {ctaPrimaryLabel}
      </Button>
    </>
  );

  return (
    <>
      <section className="border-b border-border bg-surface py-12 lg:py-16">
        <Container>
          <Reveal className="flex items-center justify-between gap-4 border-t-2 border-ink pt-4 dark:border-dark-accent">
            <h2
              className={cn(
                "text-h3 text-[1.625rem] font-semibold text-foreground",
                isUrdu && "font-urdu-display",
              )}
            >
              {siblingsHeading}
            </h2>
            <Button href={viewAllHref} variant="tertiary" showArrow isUrdu={isUrdu}>
              {viewAllLabel}
            </Button>
          </Reveal>
          <Reveal>
            <RuledList className="mt-1">
              {siblings.map((sibling) => (
                <RuledRow key={sibling.key} asLink={sibling.href}>
                  <span
                    className={cn(
                      "text-card-title font-semibold text-foreground",
                      isUrdu && "font-urdu-display",
                    )}
                  >
                    {sibling.title}
                  </span>
                  <span className={cn("text-small text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                    {sibling.description}
                  </span>
                </RuledRow>
              ))}
            </RuledList>
          </Reveal>
        </Container>
      </section>

      <CtaBand heading={ctaHeading} body={ctaBody} actions={actions} isUrdu={isUrdu} />
    </>
  );
}
