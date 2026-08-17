import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MinistryCard } from "@/components/ui/MinistryCard";
import { ministryItems, type MinistryKey } from "@/lib/ministries";
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

// Structural — not translatable content, so it lives here rather than in
// content/i18n (mirrors lib/ministries.ts's own structure/copy split).
// Verified against the approved mockup's six cards.
const topRuleByKey: Record<MinistryKey, "oxblood" | "navy" | "brass" | "success"> = {
  church: "oxblood",
  seminary: "navy",
  childrensEducation: "brass",
  publishing: "success",
  teachingLectures: "navy",
  outreach: "brass",
};

const metaUnconfirmedByKey: Record<MinistryKey, boolean> = {
  church: true,
  seminary: true,
  childrensEducation: false,
  publishing: false,
  teachingLectures: false,
  outreach: false,
};

export function MinistriesSection({
  locale,
  isUrdu,
  strings,
  viewAllHref,
}: MinistriesSectionProps) {
  return (
    <section className="border-t border-border bg-paper py-16 lg:py-26">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p
              className={cn(
                "text-eyebrow text-primary",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.eyebrow}
            </p>
            <h2 className={cn("text-h2 mt-2.5 text-foreground", isUrdu && "font-urdu-display")}>
              {strings.heading}
            </h2>
          </div>
          <Link
            href={viewAllHref}
            className={cn(
              "text-[0.9375rem] font-medium text-primary underline decoration-[1.5px] underline-offset-[3px] transition-colors duration-150 hover:brightness-90 dark:text-dark-accent",
              isUrdu && "font-urdu-body",
            )}
          >
            {strings.cta}
            <span aria-hidden="true"> {isUrdu ? "←" : "→"}</span>
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ministryItems.map((item) => (
            <MinistryCard
              key={item.key}
              kicker={strings.items[item.key].kicker}
              title={strings.items[item.key].title}
              description={strings.items[item.key].description}
              meta={strings.items[item.key].meta}
              metaUnconfirmed={metaUnconfirmedByKey[item.key]}
              href={localizePath(locale, item.href)}
              topRule={topRuleByKey[item.key]}
              isUrdu={isUrdu}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
