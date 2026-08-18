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
  /**
   * True for a card that's itself a link/button (e.g. MinistryCard) —
   * adds the 2026-08-18 hover lift + shadow (HANDOFF.md §11 "Amendment"),
   * timed to the site's 300-400ms cards band (350ms).
   * False/omitted for a static info card (e.g. LocationsSection's contact
   * panels): no hover state, since hovering a non-interactive card would
   * falsely suggest it's clickable. Kept as one prop switching one
   * transition utility, rather than combining `transition-colors` with a
   * separate `transition-transform` class — two Tailwind transition
   * utilities on the same element don't merge; the later one in the
   * generated stylesheet just overwrites the earlier one's
   * `transition-property` (source order, not class order, decides which).
   */
  interactive?: boolean;
}

/**
 * Flat and bordered — 1px border. Static cards stay shadow-free, exactly
 * as HANDOFF.md §6/§24 originally specified ("elevation is a rule, never
 * a shadow"); `interactive` cards now lift 2px with a soft tinted shadow
 * on hover, settling back on `active:` for a pressed feel — the
 * 2026-08-18 motion pass deliberately revised that rule for anything
 * clickable (see HANDOFF.md §11 "Amendment"). Reduced motion isn't
 * handled per-card: app/globals.css's blanket `prefers-reduced-motion`
 * rule already forces every transition to ~0ms, so the lift/shadow still
 * apply on hover but snap instead of animating.
 */
export function Card({
  children,
  className,
  topRule,
  tone = "surface-warm",
  interactive = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "border border-border p-6",
        interactive
          ? "transition-[background-color,border-color,transform,box-shadow] duration-[350ms] ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(18,37,54,0.10)] active:translate-y-0 active:shadow-none dark:hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)]"
          : "transition-colors duration-300",
        tone === "surface-warm" ? "bg-surface-warm" : "bg-surface",
        topRule && cn("border-t-[3px]", topRuleClasses[topRule]),
        className,
      )}
    >
      {children}
    </div>
  );
}
