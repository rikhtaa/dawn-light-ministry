import { NavyBand } from "@/components/layout/NavyBand";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";
import type { Sermon } from "@/lib/sermons";
import type { SermonsStrings } from "@/content/i18n/en/sermons";

interface LatestSermonBandProps {
  sermon: Sermon;
  strings: SermonsStrings["latest"];
  languageLabel: string;
  isUrdu?: boolean;
}

/**
 * Dawn of Light - Sermons.dc.html: the navy band above the archive,
 * carrying the single most recent sermon. Not documented as an exception
 * to HANDOFF.md §9's "navy bands stay #122536 in both light and dark"
 * (unlike Seminary's masthead), so this reuses NavyBand unchanged.
 */
export function LatestSermonBand({ sermon, strings, languageLabel, isUrdu = false }: LatestSermonBandProps) {
  return (
    <NavyBand className="border-b border-border">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[640px_1fr] lg:gap-11">
        <ImagePlaceholder ratio="16:9" tone="on-navy" caption={strings.imagePlaceholder} />
        <div className="min-w-0">
          <p
            className={cn(
              "text-mono-label text-dark-accent",
              isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
            )}
          >
            {strings.label}
          </p>
          <h2
            className={cn(
              "text-h3 mt-3.5 font-normal text-dark-heading",
              isUrdu && "font-urdu-display",
            )}
          >
            {sermon.title}
          </h2>
          <div className={cn("mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-small text-dark-body", isUrdu && "font-urdu-body")}>
            <span>{sermon.speaker}</span>
            <span>{sermon.date ?? strings.datePlaceholder}</span>
            {sermon.scriptureReference ? <span>{sermon.scriptureReference}</span> : null}
            <span>{languageLabel}</span>
          </div>
          {sermon.description ? (
            <p className={cn("text-body measure mt-5 text-dark-body", isUrdu && "font-urdu-body")}>
              {sermon.description}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            {/*
             * Always shown (Dawn of Light - Sermons.dc.html shows this
             * button in every state its own populated frame draws) —
             * disabled rather than omitted when there's no real YouTube
             * URL yet, so the designed CTA stays in place per instruction
             * rather than disappearing for missing data (CLAUDE.md §17's
             * "disabled" is one of the required states for an action).
             */}
            {sermon.externalUrl ? (
              <Button
                href={sermon.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                brassFill
                isUrdu={isUrdu}
              >
                {strings.watchOnYouTube}
              </Button>
            ) : (
              <Button variant="primary" brassFill isUrdu={isUrdu} disabled>
                {strings.watchOnYouTube}
              </Button>
            )}
            <Button href={`/sermons/${sermon.slug}`} variant="secondary" tone="on-navy" isUrdu={isUrdu}>
              {strings.sermonDetail}
            </Button>
          </div>
        </div>
      </div>
    </NavyBand>
  );
}
