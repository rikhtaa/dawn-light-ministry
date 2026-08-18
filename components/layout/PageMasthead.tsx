import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/layout/Breadcrumb";

interface PageMastheadProps {
  breadcrumbItems: BreadcrumbItem[];
  eyebrow: string;
  title: ReactNode;
  standfirst?: ReactNode;
  isUrdu?: boolean;
  /** Extra content below the standfirst — e.g. a fact rail. */
  children?: ReactNode;
  className?: string;
}

/**
 * HANDOFF.md §14: every interior page opens utility bar → header →
 * masthead (breadcrumb, eyebrow, h1, standfirst) → body. This is that
 * masthead — the shared "page h1" scale (§4.3), not the homepage's larger
 * "display" scale.
 */
export function PageMasthead({
  breadcrumbItems,
  eyebrow,
  title,
  standfirst,
  isUrdu = false,
  children,
  className,
}: PageMastheadProps) {
  return (
    <div className={cn("border-b border-border bg-paper py-12 md:py-16", className)}>
      <Container>
        <div className="flex flex-col gap-5">
          <Breadcrumb items={breadcrumbItems} isUrdu={isUrdu} />
          <p
            className={cn(
              "text-eyebrow text-primary",
              isUrdu && "font-urdu-body text-base normal-case tracking-normal",
            )}
          >
            {eyebrow}
          </p>
          <h1
            className={cn(
              "text-h1 text-foreground",
              isUrdu && "font-urdu-display",
            )}
          >
            {title}
          </h1>
          {standfirst ? (
            <p
              className={cn(
                "text-body-long measure text-ink-muted",
                isUrdu && "font-urdu-body",
              )}
            >
              {standfirst}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </div>
  );
}
