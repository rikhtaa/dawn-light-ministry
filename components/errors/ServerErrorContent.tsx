import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { organization } from "@/lib/organization";
import type { ErrorsStrings } from "@/content/i18n/en/errors";
import { cn } from "@/lib/cn";

interface ServerErrorContentProps {
  strings: ErrorsStrings["serverError"];
  onTryAgain?: () => void;
  isUrdu?: boolean;
}

/**
 * Dawn of Light - Utility Pages.dc.html §03 "500 variant · same layout,
 * different copy" — the compact 660px composition, used as-is at every
 * width (the design draws no separate mobile frame for 500; §"RESPONSIVE
 * DESIGN" says to fall back to the established responsive system rather
 * than invent one — this box is already narrow enough to need no
 * breakpoint-specific treatment). No technical detail, stack trace or
 * internal error text is ever rendered here (HANDOFF.md §18/§652).
 */
export function ServerErrorContent({ strings: t, onTryAgain, isUrdu = false }: ServerErrorContentProps) {
  return (
    <div className="flex flex-1 items-center justify-center bg-paper px-4 py-16">
      <Reveal className="w-full max-w-165 border border-border bg-surface p-9 sm:p-12">
        <p className="text-eyebrow text-ink-ghost">{t.monoLabel}</p>
        <h1 className={cn("text-h2 mt-4 mb-3.5 text-foreground", isUrdu && "font-urdu-display")}>{t.heading}</h1>
        <p className={cn("text-body-long measure mb-6.5 text-ink-body", isUrdu && "font-urdu-body")}>{t.body}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          {onTryAgain ? (
            <Button type="button" onClick={onTryAgain} variant="primary" isUrdu={isUrdu}>
              {t.tryAgainCta}
            </Button>
          ) : null}
          <Button href={organization.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" isUrdu={isUrdu}>
            <span dir="ltr">
              {t.whatsappCta} {organization.phone}
            </span>
          </Button>
        </div>
        <p className={cn("text-caption mt-6 border-t border-border pt-4 text-ink-faint", isUrdu && "font-urdu-body text-sm")}>
          {t.footnote}
        </p>
      </Reveal>
    </div>
  );
}
