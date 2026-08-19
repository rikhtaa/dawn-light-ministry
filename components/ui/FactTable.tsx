import { cn } from "@/lib/cn";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";

export interface Fact {
  label: string;
  value: string;
  unconfirmed?: boolean;
}

// Ministries' "at a glance" strip is 3 facts on Education, 4 everywhere
// else (Dawn of Light - Ministry Pages.dc.html) — the only two counts the
// design uses for this layout. Explicit classes, not a template literal,
// since Tailwind's build-time scan can't see a computed `sm:grid-cols-${n}`.
const rowColumnClasses: Record<3 | 4, string> = {
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

interface FactTableProps {
  // `readonly` — accepts both a plain array and a `[...] as const` tuple
  // (e.g. built from `as const` content, Dawn of Light - Ministry
  // Pages.dc.html's ministry pages) without the caller needing a cast.
  // `.map()` doesn't mutate, so every existing caller keeps working as-is.
  facts: readonly Fact[];
  /**
   * "row" — 3–4 facts spread across the full width (ministry "at-a-glance"
   * strips, HANDOFF.md §14). "stacked" — ruled label/value rows, label
   * left and value right on one line (verified against the approved
   * mockup's Seminary and Children's-education fact lists).
   */
  layout?: "row" | "stacked";
  /** "row" layout only — the mockup uses 4 columns everywhere except
   * Education's 3-fact strip. No effect on "stacked". */
  columns?: 3 | 4;
  /** "on-navy" — sits on a NavyBand, whose background stays constant
   * regardless of the app theme, so border/text need to as well. */
  tone?: "default" | "on-navy";
  isUrdu?: boolean;
  className?: string;
}

export function FactTable({
  facts,
  layout = "stacked",
  columns = 4,
  tone = "default",
  isUrdu = false,
  className,
}: FactTableProps) {
  const onNavy = tone === "on-navy";

  if (layout === "row") {
    return (
      <dl
        className={cn(
          "grid grid-cols-2 gap-6 divide-y border-t py-6 sm:divide-y-0 sm:divide-x sm:[&>div]:px-6 sm:[&>div:first-child]:ps-0",
          rowColumnClasses[columns],
          onNavy
            ? "divide-white/10 border-white/10"
            : "divide-border-soft border-border",
          className,
        )}
      >
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-2">
            {/* Mono-label + serif value — matches the design's own
                "at a glance" typography exactly (IBM Plex Mono 10.5px
                uppercase label, Source Serif 20px value), distinct from
                the sans caption/body pairing "stacked" uses. */}
            <dt
              className={cn(
                "text-mono-label",
                onNavy && "text-dark-faint",
              )}
            >
              {fact.label}
            </dt>
            <dd
              className={cn(
                "text-card-title",
                onNavy ? "text-dark-heading" : "text-foreground",
                isUrdu && "font-urdu-display",
              )}
            >
              {fact.unconfirmed ? <PlaceholderTag>{fact.value}</PlaceholderTag> : fact.value}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <dl className={cn("flex flex-col", className)}>
      {facts.map((fact) => (
        <div
          key={fact.label}
          className={cn(
            "flex items-center justify-between gap-6 border-b py-3.5 text-[0.96875rem]",
            onNavy ? "border-white/10" : "border-border",
          )}
        >
          {/* `text-foreground`, not the literal `text-ink` — `ink` doesn't
              remap under `.dark` (it's the fixed navy-band colour), so a
              default-tone card sitting on the page's own dark background
              (e.g. a Detail-page rail card) rendered this label the same
              navy as its background — invisible. `foreground` aliases to
              `ink` in light mode and `dark-heading` in dark, so light mode
              is unaffected. */}
          <dt className={onNavy ? "text-dark-heading" : "text-foreground"}>{fact.label}</dt>
          <dd
            className={cn(
              onNavy ? "text-dark-body" : "text-ink-faint",
              isUrdu && "font-urdu-body",
            )}
          >
            {fact.unconfirmed ? <PlaceholderTag>{fact.value}</PlaceholderTag> : fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
