import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export interface LegalTocItem {
  id: string;
  label: string;
}

interface LegalDocumentProps {
  homeLabel: string;
  homeHref: string;
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  standfirst: string;
  lastUpdated: string;
  tocHeading: string;
  tocItems: LegalTocItem[];
  questionsCard?: { heading: string; body: string };
  isUrdu?: boolean;
  children: ReactNode;
}

/**
 * Dawn of Light - Utility Pages.dc.html §01/§02: "Privacy and the notice
 * share a legal-document template with a sticky contents rail" — the ONLY
 * two pages on the site with this treatment (HANDOFF.md §14: "no
 * photography, no CTA band"). The rail's first item is drawn with the
 * active (oxblood left-border, bold) state and every other item plain —
 * that's the literal design, not a scroll-spy: these are quiet, single-
 * scroll read pages, and HANDOFF doesn't ask for JS scroll tracking here,
 * so none is added.
 */
export function LegalDocument({
  homeLabel,
  homeHref,
  breadcrumbLabel,
  eyebrow,
  title,
  standfirst,
  lastUpdated,
  tocHeading,
  tocItems,
  questionsCard,
  isUrdu = false,
  children,
}: LegalDocumentProps) {
  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-border bg-paper py-10 md:py-13">
        <Container>
          <Breadcrumb
            items={[{ label: homeLabel, href: homeHref }, { label: breadcrumbLabel }]}
            isUrdu={isUrdu}
            className="mb-6"
          />
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_480px] lg:gap-14">
            <div>
              <p className={cn("text-eyebrow text-primary", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
                {eyebrow}
              </p>
              <h1 className={cn("text-h1 mt-3 text-foreground", isUrdu && "font-urdu-display")}>{title}</h1>
            </div>
            <div>
              <p className={cn("text-body-long text-ink-body", isUrdu && "font-urdu-body")}>{standfirst}</p>
              {/* Not `text-mono-label` — that utility forces uppercase,
                  but the design's own "Last updated [DATE] · Version [n]"
                  line stays sentence case. */}
              <p className="mt-2.5 font-mono text-xs text-ink-ghost">{lastUpdated}</p>
            </div>
          </div>
        </Container>
      </div>

      <section className="bg-surface py-14 lg:py-16">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-18">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <p className="text-mono-label mb-3.5 text-ink-ghost">{tocHeading}</p>
            <nav aria-label={tocHeading}>
              <ul className="flex flex-col border-t border-border">
                {tocItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={cn(
                        "block border-b border-border-soft py-2.75 ps-3.5 text-[0.90625rem] transition-colors duration-300",
                        index === 0
                          ? "border-s-2 border-s-primary font-semibold text-foreground"
                          : "text-ink-muted hover:text-foreground",
                        isUrdu && "font-urdu-body text-base",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {questionsCard ? (
              <div className="mt-5 border border-border bg-surface-warm p-4.5">
                <p className={cn("text-card-title mb-2 text-[1rem] text-foreground", isUrdu && "font-urdu-display")}>
                  {questionsCard.heading}
                </p>
                <p className={cn("text-small text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                  {questionsCard.body}
                </p>
              </div>
            ) : null}
          </aside>

          {/* Matches app/[locale]/about/page.tsx's own convention: the
              masthead and the "On this page" rail don't get an entrance
              reveal (same as PageMasthead/OnThisPageRail there); only the
              body content does, as one section-level Reveal. */}
          <Reveal className="measure-legal min-w-0">{children}</Reveal>
        </Container>
      </section>
    </main>
  );
}
