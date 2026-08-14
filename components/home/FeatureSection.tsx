import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/cn";

interface FeatureSectionProps {
  id?: string;
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  background?: "default" | "surface" | "muted";
  isUrdu: boolean;
}

/**
 * Shared shape for centered eyebrow/heading/body/link content sections —
 * used for Mission (§7.3), Education (§7.5), and Support (§7.9).
 */
export function FeatureSection({
  id,
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  background = "default",
  isUrdu,
}: FeatureSectionProps) {
  return (
    <Section id={id} background={background}>
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <SectionHeader
            eyebrow={eyebrow}
            heading={heading}
            description={body}
            align="center"
            isUrdu={isUrdu}
          />
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
