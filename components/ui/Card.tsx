import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TopRule = "oxblood" | "navy" | "brass" | "success";

// Dark-mode values verified against the approved mockup's dark ministry
// cards, not a blanket light→dark alias swap: church's oxblood rule
// becomes clay (HANDOFF §4.2: "clay replaces oxblood for accents in
// dark"), brass becomes the brighter dark-accent brass, and navy — which
// would nearly vanish against the dark card surface — lightens to a
// value the mockup uses but doesn't name as a token (#8FA0AE, close to
// dark-faint but distinct enough to keep literal rather than approximate).
const topRuleClasses: Record<TopRule, string> = {
  oxblood: "border-t-primary dark:border-t-dark-clay",
  navy: "border-t-ink dark:border-t-[#8FA0AE]",
  brass: "border-t-accent dark:border-t-dark-accent",
  // Not in HANDOFF §6's 3-colour prose, but the approved homepage mockup's
  // Publishing/"Christian articles" ministry card uses it — reuses the
  // existing --success/--dark-success tokens, not a new colour.
  success: "border-t-success dark:border-t-dark-success",
};

interface CardProps {
  children: ReactNode;
  className?: string;
  /**
   * HANDOFF.md §6: a 3px coloured top border identifies the card's family
   * — oxblood for church/action, navy for seminary/institutional, brass
   * for education/children, success-green for publishing (per the approved
   * mockup). Omit for a plain flat card.
   */
  topRule?: TopRule;
  /** "surface-warm" (#FCFBF8) is the default inset-card ground; "surface" is white. */
  tone?: "surface-warm" | "surface";
}

/**
 * Flat and bordered — 1px border, no shadow. Elevation is a rule, never a
 * shadow (HANDOFF.md §6/§24).
 */
export function Card({
  children,
  className,
  topRule,
  tone = "surface-warm",
}: CardProps) {
  return (
    <div
      className={cn(
        "border border-border p-6",
        tone === "surface-warm" ? "bg-surface-warm" : "bg-surface",
        topRule && cn("border-t-[3px]", topRuleClasses[topRule]),
        className,
      )}
    >
      {children}
    </div>
  );
}
