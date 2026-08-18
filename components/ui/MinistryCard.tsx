import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { cn } from "@/lib/cn";

type TopRule = "oxblood" | "navy" | "brass" | "success";

interface MinistryCardProps {
  kicker: string;
  title: string;
  description: string;
  meta: string;
  /** True when `meta` carries a [CONFIRM]/[PSEUDO/PLACEHOLDER] marker. */
  metaUnconfirmed?: boolean;
  href: string;
  topRule: TopRule;
  isUrdu?: boolean;
  className?: string;
}

/**
 * The whole card is the link — the approved mockup shows no separate
 * "Learn more" affordance per card, just the numbered mono kicker, title,
 * description and a ruled meta line.
 */
export function MinistryCard({
  kicker,
  title,
  description,
  meta,
  metaUnconfirmed = false,
  href,
  topRule,
  isUrdu = false,
  className,
}: MinistryCardProps) {
  return (
    <Link
      href={href}
      aria-label={title}
      className={cn(
        "block h-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      <Card
        topRule={topRule}
        tone="surface"
        interactive
        // Directional hover border (not `border-*`, which would also touch
        // border-top and dull the family-colour rule that identifies the
        // card) — start/end/bottom only, logical properties for RTL.
        className="flex h-full flex-col gap-3.5 hover:border-s-border-strong hover:border-e-border-strong hover:border-b-border-strong hover:bg-surface-warm"
      >
        <span className="text-mono-label text-ink-disabled">{kicker}</span>
        <h3 className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
          {title}
        </h3>
        <p className={cn("text-small flex-1 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
          {description}
        </p>
        <div className="border-t border-border-soft pt-3 text-caption">
          {metaUnconfirmed ? <PlaceholderTag>{meta}</PlaceholderTag> : meta}
        </div>
      </Card>
    </Link>
  );
}
