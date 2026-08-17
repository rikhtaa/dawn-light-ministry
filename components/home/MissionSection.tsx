import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface MissionSectionProps {
  strings: HomeStrings["mission"];
  ctaHref: string;
  isUrdu: boolean;
}

export function MissionSection({ strings, ctaHref, isUrdu }: MissionSectionProps) {
  const values = Object.values(strings.values);

  return (
    <section className="border-t border-border bg-surface py-16 lg:py-26">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
          <div className="min-w-0">
            <p
              className={cn(
                "text-eyebrow text-primary",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.eyebrow}
            </p>
            <div className="mt-3 h-[3px] w-12 bg-accent" />
          </div>
          <div className="min-w-0">
            <p
              className={cn(
                "text-standfirst measure text-foreground",
                isUrdu && "font-urdu-display",
              )}
            >
              {strings.quote}
            </p>
            <p
              className={cn(
                "text-body measure mt-5 text-ink-body",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {values.map((value) => (
                <span
                  key={value}
                  className={cn(
                    "border border-border px-3.5 py-2 text-[0.8125rem] text-ink-muted",
                    isUrdu && "font-urdu-body text-sm",
                  )}
                >
                  {value}
                </span>
              ))}
            </div>
            <Link
              href={ctaHref}
              className={cn(
                "mt-7 inline-flex items-center gap-1 text-[0.96875rem] font-medium text-primary underline decoration-[1.5px] underline-offset-[3px] transition-colors duration-150 hover:brightness-90 dark:text-dark-accent",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.cta}
              <span aria-hidden="true">{isUrdu ? "←" : "→"}</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
