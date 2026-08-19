import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * HANDOFF.md §7's field spec applied to a bare `<input>`/`<textarea>`/
 * `<select>` — label above (13.5px/500) lives in FormField, this is only
 * the control itself, shared so Prayer/Contact (and any future form)
 * render identical fields. `bg-surface dark:bg-background`, not a single
 * token: the design's dark input ground (#0E1A24, the page's own dark
 * ground) is one level darker than its panel (#152531, dark-surface) —
 * `--surface` alone dark-remaps to dark-surface, so light needs `surface`
 * (white) and dark needs `background` (paper's dark-ground alias)
 * overridden explicitly.
 */
export function inputClasses(hasError = false): string {
  return cn(
    "w-full border bg-surface px-4 py-3.5 text-[0.96875rem] text-ink placeholder:text-ink-disabled dark:bg-background dark:text-dark-heading dark:placeholder:text-dark-faint",
    "focus:outline-none focus:ring-2 focus:ring-primary/15 dark:focus:ring-dark-accent/25",
    hasError
      ? "border-error focus:border-error"
      : "border-input-border focus:border-primary dark:focus:border-dark-accent",
  );
}

interface FormFieldProps {
  label: string;
  htmlFor: string;
  optionalLabel?: string;
  help?: string;
  error?: string;
  isUrdu?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * HANDOFF.md §7: "label above (13.5px/500, #3E3A33) … Optional fields say
 * (optional) in the label. Help text 13px #7C7466 below … Errors are text
 * plus #A33A3A, never colour alone, and are announced to screen readers."
 */
export function FormField({
  label,
  htmlFor,
  optionalLabel,
  help,
  error,
  isUrdu = false,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className={cn(
          "block text-[0.84375rem] font-medium text-ink-body",
          isUrdu && "font-urdu-body text-base",
        )}
      >
        {label}
        {optionalLabel ? <span className="font-normal text-ink-ghost"> {optionalLabel}</span> : null}
      </label>
      <div className="mt-1.75">{children}</div>
      {error ? (
        <p role="alert" className="mt-1.5 flex items-start gap-1.5 text-small text-error">
          <span aria-hidden="true" className="font-semibold">
            !
          </span>
          <span className={isUrdu ? "font-urdu-body" : undefined}>{error}</span>
        </p>
      ) : help ? (
        <p className={cn("mt-1.5 text-caption text-ink-faint", isUrdu && "font-urdu-body text-sm")}>{help}</p>
      ) : null}
    </div>
  );
}
