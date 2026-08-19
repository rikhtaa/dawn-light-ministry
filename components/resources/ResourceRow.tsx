import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { RuledRow } from "@/components/ui/RuledRow";
import { cn } from "@/lib/cn";

interface ResourceRowProps {
  kicker: string;
  title: string;
  description?: string;
  meta: string[];
  actionLabel: string;
  href?: string;
  external?: boolean;
  isUrdu?: boolean;
}

/**
 * Dawn of Light - Resources.dc.html's index row: a 180×112 (16:9)
 * thumbnail, mono kicker (type · language · format), serif title,
 * description, meta line, and a trailing action whose label states the
 * action plainly (Watch on YouTube / Read / Download PDF / Ask for a
 * copy) — never a generic "View". Deliberately untyped to `Resource` —
 * the design's own first row is a Sermon (lib/sermons.ts), not a
 * Resource, so the caller resolves either type's fields into these same
 * plain props rather than this component knowing about two data models.
 */
export function ResourceRow({
  kicker,
  title,
  description,
  meta,
  actionLabel,
  href,
  external = false,
  isUrdu = false,
}: ResourceRowProps) {
  return (
    <RuledRow align="between">
      <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-center">
        <div className="w-full shrink-0 sm:w-[180px]">
          <ImagePlaceholder ratio="16:9" caption="thumbnail 16:9" bordered={false} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-mono-label text-accent dark:text-dark-accent">{kicker}</p>
          <p
            className={cn(
              "text-card-title mt-1.5 font-semibold text-foreground",
              isUrdu && "font-urdu-display",
            )}
          >
            {title}
          </p>
          {description ? (
            <p className={cn("text-small mt-1 measure text-ink-muted", isUrdu && "font-urdu-body text-base")}>
              {description}
            </p>
          ) : null}
          {meta.length > 0 ? (
            <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1 text-caption text-ink-faint">
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      {href ? (
        <Button
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          variant="secondary"
          isUrdu={isUrdu}
          className="w-full shrink-0 sm:w-auto"
        >
          {actionLabel}
        </Button>
      ) : (
        <Button variant="secondary" isUrdu={isUrdu} disabled className="w-full shrink-0 sm:w-auto">
          {actionLabel}
        </Button>
      )}
    </RuledRow>
  );
}
