import { cn } from "@/lib/cn";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";

export interface Fact {
  label: string;
  value: string;
  unconfirmed?: boolean;
}

interface FactTableProps {
  facts: Fact[];
  /**
   * "row" — 3–4 facts spread across the full width (ministry "at-a-glance"
   * strips, HANDOFF.md §14). "stacked" — ruled label/value rows, label
   * left and value right on one line (verified against the approved
   * mockup's Seminary and Children's-education fact lists).
   */
  layout?: "row" | "stacked";
  /** "on-navy" — sits on a NavyBand, whose background stays constant
   * regardless of the app theme, so border/text need to as well. */
  tone?: "default" | "on-navy";
  isUrdu?: boolean;
  className?: string;
}

export function FactTable({
  facts,
  layout = "stacked",
  tone = "default",
  isUrdu = false,
  className,
}: FactTableProps) {
  const onNavy = tone === "on-navy";

  if (layout === "row") {
    return (
      <dl
        className={cn(
          "grid grid-cols-2 gap-6 divide-y border-t py-6 sm:grid-cols-4 sm:divide-y-0 sm:divide-x sm:[&>div]:px-6 sm:[&>div:first-child]:ps-0",
          onNavy
            ? "divide-white/10 border-white/10"
            : "divide-border-soft border-border",
          className,
        )}
      >
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1">
            <dt
              className={cn(
                "text-caption uppercase tracking-[0.06em]",
                onNavy && "text-dark-faint",
              )}
            >
              {fact.label}
            </dt>
            <dd
              className={cn(
                "text-body",
                onNavy ? "text-dark-heading" : "text-ink-body",
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
