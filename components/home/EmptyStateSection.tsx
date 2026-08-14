import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/cn";

interface EmptyStateSectionProps {
  eyebrow: string;
  heading: string;
  message: string;
  ctaLabel: string;
  ctaHref: string;
  background?: "default" | "surface" | "muted";
  isUrdu: boolean;
}

/**
 * Shared "no data yet" state for Events (§7.7) and Resources (§7.8) — PRD
 * requires a graceful empty state rather than fabricated content.
 */
export function EmptyStateSection({
  eyebrow,
  heading,
  message,
  ctaLabel,
  ctaHref,
  background = "default",
  isUrdu,
}: EmptyStateSectionProps) {
  return (
    <Section background={background}>
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-[2px] border border-dashed border-border p-10 text-center">
          <SectionHeader
            eyebrow={eyebrow}
            heading={heading}
            align="center"
            isUrdu={isUrdu}
          />
          <p
            className={cn(
              "text-body text-muted-foreground",
              isUrdu && "font-urdu-body text-lg",
            )}
          >
            {message}
          </p>
          <Link
            href={ctaHref}
            className={cn(
              "text-nav text-primary underline decoration-secondary decoration-2 underline-offset-4 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",
              isUrdu && "font-urdu-body",
            )}
          >
            {ctaLabel}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
