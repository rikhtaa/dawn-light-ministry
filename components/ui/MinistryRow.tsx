import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { cn } from "@/lib/cn";
import type { MinistryTopRule } from "@/lib/ministries";

// Mirrors Card.tsx's topRuleClasses token choice, on the start (left in
// LTR) edge instead of the top — the approved mockup's mobile stacked
// card keys each row to its family colour with a left rule (the same
// colour Home's cards carry as a top rule), not a plain neutral border.
const leftAccentClasses: Record<MinistryTopRule, string> = {
  oxblood: "border-s-primary dark:border-s-dark-clay",
  navy: "border-s-ink dark:border-s-[#8FA0AE]",
  brass: "border-s-accent dark:border-s-dark-accent",
  success: "border-s-success dark:border-s-dark-success",
};

interface MinistryRowProps {
  kicker: string;
  title: string;
  description: string;
  meta: string;
  /** True when `meta` carries a [CONFIRM]/[PSEUDO/PLACEHOLDER] marker. */
  metaUnconfirmed?: boolean;
  imagePlaceholder: string;
  href: string;
  linkLabel: string;
  /** Selects the mobile card's left accent colour (unused on desktop). */
  accent: MinistryTopRule;
  isUrdu?: boolean;
  className?: string;
}

/**
 * Ministries-index row — the approved mockup (Dawn of Light -
 * Ministries.dc.html "Ministries index") draws two genuinely different
 * compositions, not one row that just narrows:
 *  - ≥640px: a horizontal ruled row (photograph · kicker/title/
 *    description/meta · directional link), border-bottom only.
 *  - <640px: a bordered, family-coloured stacked card — photograph on
 *    top, then a left-accent-ruled content block, link inline below the
 *    meta line. Renders both and hides one per breakpoint (the same
 *    approach OnThisPageRail.tsx already uses for its own two nav
 *    shapes), rather than reflowing a single markup shape with CSS alone.
 *
 * The meta line stays visible on the mobile card even though the mockup's
 * mobile frame omits it — CLAUDE.md §15/§11's placeholder-visibility rule
 * (a [CONFIRM]/[PSEUDO] marker must never be hidden) outranks the mockup
 * on this one point per HANDOFF.md's own stated precedence. `dir="rtl"`
 * mirrors both variants automatically — plain flex row and logical
 * `border-s-*` — no manual start/end juggling needed.
 */
export function MinistryRow({
  kicker,
  title,
  description,
  meta,
  metaUnconfirmed = false,
  imagePlaceholder,
  href,
  linkLabel,
  accent,
  isUrdu = false,
  className,
}: MinistryRowProps) {
  return (
    <div
      className={cn(
        "mb-3.5 border border-border sm:mb-0 sm:border-0 sm:border-b sm:border-border-soft sm:py-8 sm:first:pt-0 sm:last:border-b-0",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-7">
        <div className="w-full shrink-0 sm:w-[180px] lg:w-[240px]">
          <ImagePlaceholder caption={imagePlaceholder} ratio="3:2" bordered={false} />
        </div>

        <div
          className={cn(
            "min-w-0 flex-1 border-s-[3px] p-4 sm:border-s-0 sm:p-0",
            leftAccentClasses[accent],
          )}
        >
          <p
            className={cn(
              "text-mono-label text-accent",
              isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
            )}
          >
            {kicker}
          </p>
          <h3
            className={cn(
              "text-card-title mt-2.5 font-semibold text-foreground",
              isUrdu && "font-urdu-display",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-body measure mt-2.5 text-ink-body",
              isUrdu && "font-urdu-body",
            )}
          >
            {description}
          </p>
          <div className="mt-4 border-t border-border-soft pt-3 text-caption text-ink-faint">
            {metaUnconfirmed ? <PlaceholderTag>{meta}</PlaceholderTag> : meta}
          </div>
          <div className="mt-4 sm:hidden">
            <Button href={href} variant="tertiary" showArrow isUrdu={isUrdu}>
              {linkLabel}
            </Button>
          </div>
        </div>

        <div className="hidden shrink-0 sm:block sm:pt-0.5">
          <Button href={href} variant="tertiary" showArrow isUrdu={isUrdu}>
            {linkLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
