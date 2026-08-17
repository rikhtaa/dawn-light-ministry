import Link from "next/link";
import { cn } from "@/lib/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  isUrdu?: boolean;
  className?: string;
}

/**
 * HANDOFF.md §13: "Every detail page's breadcrumb is `Home / [Section] /
 * [Item]`." The final item has no href (current page). Separator mirrors
 * automatically under `dir="rtl"` — no manual class-swapping needed.
 */
export function Breadcrumb({ items, isUrdu = false, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-caption">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-ink-faint">
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "text-ink-faint transition-colors duration-150 hover:text-primary",
                    isUrdu && "font-urdu-body",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(
                    "text-ink-faint",
                    isLast && "text-ink-muted",
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
