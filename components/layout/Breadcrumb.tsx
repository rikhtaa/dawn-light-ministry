import Link from "next/link";
import { cn } from "@/lib/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  isUrdu?: boolean;
  /**
   * "on-navy" — light text/hover regardless of the app theme, for a
   * breadcrumb sitting directly on a dark surface (e.g. Seminary's
   * masthead — Dawn of Light - Seminary.dc.html — which is a navy fill in
   * light mode and the page's own dark background in dark mode; either
   * way the ambient `text-ink-faint` default reads too dark). Mirrors
   * Button's/FactTable's own "on-navy" tone.
   */
  tone?: "default" | "on-navy";
  className?: string;
}

/**
 * HANDOFF.md §13: "Every detail page's breadcrumb is `Home / [Section] /
 * [Item]`." The final item has no href (current page). Separator mirrors
 * automatically under `dir="rtl"` — no manual class-swapping needed.
 */
export function Breadcrumb({ items, isUrdu = false, tone = "default", className }: BreadcrumbProps) {
  const onNavy = tone === "on-navy";

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-caption">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className={onNavy ? "text-dark-faint" : "text-ink-faint"}>
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    onNavy
                      ? "text-dark-faint transition-colors duration-300 hover:text-dark-accent"
                      : "text-ink-faint transition-colors duration-300 hover:text-primary",
                    isUrdu && "font-urdu-body",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(
                    onNavy ? "text-dark-faint" : "text-ink-faint",
                    isLast && (onNavy ? "text-dark-heading" : "text-ink-muted"),
                    isUrdu && "font-urdu-body",
                  )}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
