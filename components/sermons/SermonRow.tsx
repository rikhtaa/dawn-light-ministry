import { RuledRow } from "@/components/ui/RuledRow";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { Sermon } from "@/lib/sermons";
import type { SermonsStrings } from "@/content/i18n/en/sermons";

interface SermonRowProps {
  sermon: Sermon;
  strings: Pick<SermonsStrings, "row" | "actions">;
  languageLabel: string;
  /** First row in the archive carries the brass accent rail (Dawn of Light - Sermons.dc.html). */
  highlighted?: boolean;
  isUrdu?: boolean;
}

const formatActionKey: Record<Sermon["format"], "watch" | "listen" | "read"> = {
  video: "watch",
  audio: "listen",
  text: "read",
};

/** Day-of-month and "MON YYYY" for the desktop date rail — fixed Western Arabic digits/short-month regardless of UI locale. */
function formatDateRail(iso: string): { day: string; monthYear: string } {
  const date = new Date(`${iso}T00:00:00`);
  return {
    day: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
    monthYear: new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(date).toUpperCase(),
  };
}

/** "dd Mon yyyy" for the mobile kicker line, where the date rail column doesn't exist. */
function formatDateCompact(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

/**
 * Dawn of Light - Sermons.dc.html: one archive row. Desktop/tablet: a
 * date rail (replacing a thumbnail — the design's own note: "sermon
 * thumbnails are unlikely to exist for older recordings") beside the
 * kicker/title/meta, with a trailing action button. Mobile's own frame
 * drops the date rail entirely — the date folds into the kicker line
 * instead — and the action button runs full-width below the meta rather
 * than trailing inline; a genuinely different composition, not the
 * desktop row narrowed.
 */
export function SermonRow({ sermon, strings, languageLabel, highlighted = false, isUrdu = false }: SermonRowProps) {
  const { day, monthYear } = sermon.date
    ? formatDateRail(sermon.date)
    : { day: strings.row.dateDay, monthYear: strings.row.dateMonthYear };
  const compactDate = sermon.date ? formatDateCompact(sermon.date) : strings.row.dateCompact;
  const actionKey = formatActionKey[sermon.format];
  const href = sermon.externalUrl ?? sermon.audioUrl ?? sermon.notesUrl;
  const formatLabel =
    sermon.format === "video"
      ? strings.row.formatVideo
      : sermon.format === "audio"
        ? strings.row.formatAudio
        : strings.row.formatText;

  return (
    <RuledRow align="between">
      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <div
          className={cn(
            "hidden w-[120px] shrink-0 border-s-2 ps-4 sm:block",
            highlighted ? "border-s-accent dark:border-s-dark-accent" : "border-s-border",
          )}
        >
          <p className="font-serif text-[1.625rem] leading-none text-foreground">{day}</p>
          <p className="text-mono-label mt-1.5 text-ink-ghost">{monthYear}</p>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-mono-label text-accent dark:text-dark-accent">
            <span className="sm:hidden">{compactDate} · </span>
            {strings.row.kicker} · {languageLabel} · {formatLabel}
          </p>
          <p className={cn("text-card-title mt-1.5 font-semibold text-foreground", isUrdu && "font-urdu-display")}>
            {sermon.title}
          </p>
          <div
            className={cn(
              "mt-1 flex flex-wrap gap-x-5 gap-y-1 text-caption text-ink-faint",
              isUrdu && "font-urdu-body",
            )}
          >
            <span>{sermon.speaker}</span>
            {sermon.scriptureReference ? <span>{sermon.scriptureReference}</span> : null}
            {sermon.series ? <span>{sermon.series}</span> : null}
          </div>
        </div>
      </div>
      {/*
       * Always shown, matching the design's own three rows — disabled
       * rather than omitted when no real recording URL exists yet, so
       * the row's designed action stays in place rather than
       * disappearing for missing data.
       */}
      {href ? (
        <Button
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="compact"
          isUrdu={isUrdu}
          className="w-full sm:w-auto"
        >
          {strings.actions[actionKey]}
        </Button>
      ) : (
        <Button variant="secondary" size="compact" isUrdu={isUrdu} className="w-full sm:w-auto" disabled>
          {strings.actions[actionKey]}
        </Button>
      )}
    </RuledRow>
  );
}
