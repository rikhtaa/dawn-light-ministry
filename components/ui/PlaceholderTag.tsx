import { cn } from "@/lib/cn";

interface PlaceholderTagProps {
  children: string;
  className?: string;
}

/**
 * Renders `[CONFIRM]` / `[PSEUDO/PLACEHOLDER …]` markers — HANDOFF.md §15:
 * "must be impossible to miss in development and must never present
 * placeholder text as fact." Uses the warning token, never colour alone
 * (the bracketed text itself signals the state to screen readers too).
 */
export function PlaceholderTag({ children, className }: PlaceholderTagProps) {
  return (
    <span
      className={cn(
        "text-mono-label inline-flex items-center gap-1 text-warning",
        className,
      )}
    >
      {children}
    </span>
  );
}
