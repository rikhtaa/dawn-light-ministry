import { cn } from "@/lib/cn";
import type { EventStatus } from "@/lib/events";

interface EventStatusBadgeProps {
  status: EventStatus;
  label: string;
  /**
   * "solid" (default) — Detail Templates.dc.html's four status-variant
   * cards: a solid fill, used on the event detail page. "outlined" —
   * Events.dc.html's index rows use a tinted, bordered pill instead (e.g.
   * `color:#2F6B4F; border:1px solid #BFD8C9; background:#F1F7F3` for
   * open) — a genuinely different treatment for the same status, not a
   * simplification of the solid one. The design has no dark-mode frame
   * for either page, so the tint background here is approximated as the
   * status colour at low opacity (adapts with the token in both themes)
   * rather than the design's literal near-white light-mode hex, which
   * would be illegible against a dark background.
   */
  variant?: "solid" | "outlined";
  className?: string;
}

// app/globals.css's own inline comments name these tokens for exactly this
// use ("registration open" / "closed state" / "cancelled" — lines 34–36):
// open/closed/cancelled are solid fills; completed is the one outlined
// variant (Dawn of Light - Detail Templates.dc.html's four status-variant
// cards), reusing border-strong/ink-faint, both of which already remap
// under `.dark` (app/globals.css), so no explicit `dark:` class is needed.
const solidClasses: Record<EventStatus, string> = {
  open: "bg-success text-white",
  closed: "bg-warning text-white",
  cancelled: "bg-error text-white",
  completed: "border border-border-strong text-ink-faint",
};

const outlinedClasses: Record<EventStatus, string> = {
  open: "border border-success/35 bg-success/10 text-success",
  closed: "border border-warning/35 bg-warning/10 text-warning",
  cancelled: "border border-error/35 bg-error/10 text-error",
  completed: "border border-border-strong text-ink-faint",
};

export function EventStatusBadge({
  status,
  label,
  variant = "solid",
  className,
}: EventStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-mono-label",
        variant === "solid" ? solidClasses[status] : outlinedClasses[status],
        className,
      )}
    >
      {label}
    </span>
  );
}
