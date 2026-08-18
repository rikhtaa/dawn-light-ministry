import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RuledListProps {
  children: ReactNode;
  className?: string;
}

/**
 * HANDOFF.md §6: "Prefer ruled rows to cards for lists." The container
 * carries the top rule; each RuledRow carries its own bottom rule, so
 * index pages (Sermons, Resources, Events) read as one continuous ruled
 * table rather than a card grid.
 */
export function RuledList({ children, className }: RuledListProps) {
  return (
    <div className={cn("flex flex-col border-t border-border", className)}>
      {children}
    </div>
  );
}

interface RuledRowProps {
  children: ReactNode;
  className?: string;
  asLink?: string;
  /** "between" (default) — content pushed to opposite ends, e.g. a title
   * and a trailing action. "start" — content flows left-to-right together. */
  align?: "between" | "start";
}

export function RuledRow({ children, className, asLink, align = "between" }: RuledRowProps) {
  const classes = cn(
    "flex flex-col gap-2 border-b border-border-soft py-4 sm:flex-row sm:items-center sm:gap-6 sm:py-[15px]",
    align === "between" ? "sm:justify-between" : "sm:justify-start",
    asLink &&
      "transition-colors duration-300 hover:bg-black/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:-ring-offset-2 dark:hover:bg-white/[0.03]",
    className,
  );

  if (asLink) {
    return (
      <a href={asLink} className={classes}>
        {children}
      </a>
    );
  }

  return <div className={classes}>{children}</div>;
}
