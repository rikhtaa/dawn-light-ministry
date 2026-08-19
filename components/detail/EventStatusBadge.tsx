import { cn } from "@/lib/cn";
import type { EventStatus } from "@/lib/events";

interface EventStatusBadgeProps {
  status: EventStatus;
  label: string;
  className?: string;
}

// app/globals.css's own inline comments name these tokens for exactly this
// use ("registration open" / "closed state" / "cancelled" — lines 34–36):
// open/closed/cancelled are solid fills; completed is the one outlined
// variant (Dawn of Light - Detail Templates.dc.html's four status-variant
// cards), reusing border-strong/ink-faint, both of which already remap
// under `.dark` (app/globals.css), so no explicit `dark:` class is needed.
const statusClasses: Record<EventStatus, string> = {
  open: "bg-success text-white",
  closed: "bg-warning text-white",
  cancelled: "bg-error text-white",
  completed: "border border-border-strong text-ink-faint",
};

export function EventStatusBadge({ status, label, className }: EventStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-mono-label",
        statusClasses[status],
        className,
      )}
    >
      {label}
    </span>
  );
}
