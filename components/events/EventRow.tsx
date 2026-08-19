import { Button } from "@/components/ui/Button";
import { RuledRow } from "@/components/ui/RuledRow";
import { EventStatusBadge } from "@/components/detail/EventStatusBadge";
import { cn } from "@/lib/cn";
import type { Event } from "@/lib/events";
import type { EventsStrings } from "@/content/i18n/en/events";

interface EventRowProps {
  event: Event;
  statusLabel: string;
  cityLabel?: string;
  strings: Pick<EventsStrings, "row">;
  detailHref: string;
  isUrdu?: boolean;
}

/** Day-of-month and short month for the date box — fixed Western Arabic/short-month regardless of UI locale, matching SermonRow's own date-rail convention. */
function formatDateBox(iso: string): { day: string; month: string } {
  const date = new Date(`${iso}T00:00:00`);
  return {
    day: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date),
  };
}

// The date box's top rule is tied to the row's own status colour (open =
// success, closed = warning, cancelled = error, completed = neutral) —
// Events.dc.html's own three example rows use an unrelated oxblood/brass/
// error rotation that doesn't map to status at all (row 1 "open" is
// oxblood, row 2 "closed" is brass), which reads as decorative rather
// than a rule to reproduce; reusing the status colour keeps the box and
// its own badge reinforcing the same signal instead of two unrelated
// accent systems on one row.
const dateBoxTopRule: Record<Event["status"], string> = {
  open: "border-t-success",
  closed: "border-t-warning",
  cancelled: "border-t-error",
  completed: "border-t-border-strong",
};

/**
 * Dawn of Light - Events.dc.html "State B — populated list": a 96×96 date
 * box (day + month, top rule coloured by status) beside the badge/dates/
 * title/description column, with a trailing action that changes by
 * status — Register (open), Details (closed/completed), or plain
 * "No longer taking place" text, never a button, for cancelled.
 */
export function EventRow({ event, statusLabel, cityLabel, strings, detailHref, isUrdu = false }: EventRowProps) {
  const { day, month } = event.date
    ? formatDateBox(event.date)
    : { day: strings.row.dateDayPlaceholder, month: strings.row.dateMonthPlaceholder };

  const dateRangeLabel = [
    event.startTime && event.endTime ? `${event.startTime}–${event.endTime}` : event.date,
    cityLabel,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <RuledRow align="between" className={cn(event.status === "cancelled" && "opacity-70")}>
      <div className="flex min-w-0 flex-1 items-center gap-6">
        <div
          className={cn(
            "flex h-24 w-24 shrink-0 flex-col items-center justify-center border border-border border-t-[3px]",
            dateBoxTopRule[event.status],
          )}
        >
          <p className="font-serif text-[1.625rem] leading-none text-foreground">{day}</p>
          <p className="text-mono-label mt-1 text-ink-ghost">{month}</p>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <EventStatusBadge status={event.status} label={statusLabel} variant="outlined" />
            {dateRangeLabel ? <span className="text-caption text-ink-faint">{dateRangeLabel}</span> : null}
          </div>
          <p
            className={cn(
              "text-card-title mt-2 font-semibold text-foreground",
              event.status === "cancelled" && "text-ink-faint line-through decoration-border-strong",
              isUrdu && "font-urdu-display",
            )}
          >
            {event.title}
          </p>
          {event.description ? (
            <p className={cn("text-small mt-1 measure text-ink-muted", isUrdu && "font-urdu-body text-base")}>
              {event.description}
            </p>
          ) : null}
        </div>
      </div>

      {event.status === "cancelled" ? (
        <span className="shrink-0 text-small text-ink-faint">{strings.row.noLongerTakingPlace}</span>
      ) : event.status === "open" ? (
        event.registrationUrl ? (
          <Button href={event.registrationUrl} target="_blank" rel="noopener noreferrer" variant="primary" isUrdu={isUrdu} className="shrink-0">
            {strings.row.register}
          </Button>
        ) : (
          <Button variant="primary" isUrdu={isUrdu} disabled className="shrink-0">
            {strings.row.register}
          </Button>
        )
      ) : (
        <Button href={detailHref} variant="secondary" isUrdu={isUrdu} className="shrink-0">
          {strings.row.details}
        </Button>
      )}
    </RuledRow>
  );
}
