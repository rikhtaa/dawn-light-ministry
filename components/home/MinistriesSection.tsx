import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { MinistryCard } from "@/components/ui/MinistryCard";
import { ministryItems } from "@/lib/ministries";
import { localizePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface MinistriesSectionProps {
  locale: Locale;
  isUrdu: boolean;
  strings: HomeStrings["ministries"];
  viewAllHref: string;
}

export function MinistriesSection({
  locale,
  isUrdu,
  strings,
  viewAllHref,
}: MinistriesSectionProps) {
  return (
    <Section background="surface">
      <Container>
        <div className="flex flex-col items-center gap-10">
          <SectionHeader
            eyebrow={strings.eyebrow}
            heading={strings.heading}
            description={strings.body}
            align="center"
            isUrdu={isUrdu}
          />

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministryItems.map((item) => (
              <MinistryCard
                key={item.key}
                title={strings.items[item.key].title}
                description={strings.items[item.key].description}
                href={localizePath(locale, item.href)}
                linkLabel={strings.learnMore}
                isUrdu={isUrdu}
              />
            ))}
          </div>

          <Link
            href={viewAllHref}
            className={cn(
              "text-nav text-primary underline decoration-secondary decoration-2 underline-offset-4 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",
              isUrdu && "font-urdu-body",
            )}
          >
            {strings.cta}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
