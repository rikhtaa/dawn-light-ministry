import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

interface CtaBandProps {
  heading: ReactNode;
  body?: ReactNode;
  /** One or two buttons — HANDOFF.md §5. */
  actions: ReactNode;
  isUrdu?: boolean;
  className?: string;
}

/**
 * HANDOFF.md §5: "Large action bands sit on `#F4F1EA` with a heading, one
 * line of copy, and one or two buttons right-aligned on desktop, stacked
 * full-width on mobile."
 */
export function CtaBand({ heading, body, actions, isUrdu = false, className }: CtaBandProps) {
  return (
    <section className={cn("bg-band py-9 md:py-16 lg:py-24", className)}>
      <Container>
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className={cn("text-h2 text-foreground", isUrdu && "font-urdu-display")}>
              {heading}
            </h2>
            {body ? (
              <p
                className={cn(
                  "text-body text-ink-muted",
                  isUrdu && "font-urdu-body text-lg",
                )}
              >
                {body}
              </p>
            ) : null}
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">{actions}</div>
        </Reveal>
      </Container>
    </section>
  );
}
