"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export interface OnThisPageItem {
  id: string;
  label: string;
  /**
   * Shorter label for the mobile scrolling tab strip (Dawn of Light -
   * About.dc.html "Mobile · 390" — "Mission" / "Faith" rather than the
   * desktop rail's "Mission & vision" / "Statement of faith"). Falls back
   * to `label` when an item's mobile and desktop wording already match.
   */
  mobileLabel?: string;
}

interface OnThisPageRailProps {
  items: OnThisPageItem[];
  label: string;
  isUrdu?: boolean;
}

/**
 * HANDOFF.md §14/§15: the About page's sticky anchor rail — "Deep links
 * must work and the rail must reflect the active anchor." Renders two
 * variants of the same nav, one hidden per breakpoint rather than two
 * separate components, mirroring how SiteHeader/MobileHeader already
 * split desktop vs mobile chrome:
 *  - ≥1024: a sticky vertical rail (§4.4 "article 260px 1fr").
 *  - <1024: a horizontal scrolling tab strip below the masthead (§10).
 * Plain `<a href="#...">` fragment links — no `scrollIntoView` (§19) —
 * with `scroll-mt-*` on each section heading (about/page.tsx) so the
 * sticky header doesn't cover the target on arrival.
 */
export function OnThisPageRail({ items, label, isUrdu = false }: OnThisPageRailProps) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActiveId(topMost.target.id);
      },
      // A band starting just below the sticky header and ending well
      // before the bottom of the viewport, so a section is marked active
      // once its heading has cleared the header, not merely on first
      // becoming partially visible at the bottom edge.
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <nav
        aria-label={label}
        className="sticky top-28 hidden self-start lg:block"
      >
        <p
          className={cn(
            "text-mono-label mb-3 text-ink-ghost",
            isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
          )}
        >
          {label}
        </p>
        <ul className="flex flex-col gap-0.5 border-s border-border">
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "-ms-px block border-s-2 py-1.5 ps-4 text-small transition-colors duration-300",
                    active
                      ? "border-primary font-medium text-foreground"
                      : "border-transparent text-ink-faint hover:text-foreground",
                    isUrdu && "font-urdu-body text-base",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav aria-label={label} className="-mx-1 border-b border-border lg:hidden">
        <ul className="flex gap-6 overflow-x-auto px-1 py-3">
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "block border-b-2 pb-1 text-small whitespace-nowrap transition-colors duration-300",
                    active
                      ? "border-primary font-medium text-foreground"
                      : "border-transparent text-ink-faint",
                    isUrdu && "font-urdu-body text-base",
                  )}
                >
                  {item.mobileLabel ?? item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
