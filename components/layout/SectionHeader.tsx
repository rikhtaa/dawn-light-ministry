import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  headingLevel?: "h1" | "h2" | "h3";
  isUrdu?: boolean;
  /** e.g. an "All ministries →" link, right-aligned beside the heading row. */
  rightLink?: ReactNode;
  className?: string;
}

/**
 * HANDOFF.md §15: "eyebrow + h2 + optional right link." The eyebrow is
 * plain mono text (§4.3 "Eyebrow"), not a pill — §21 drops the uppercase
 * mono treatment for Urdu ("never sits in an uppercase eyebrow — use
 * sentence case at the same position").
 */
export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "start",
  headingLevel = "h2",
  isUrdu = false,
  rightLink,
  className,
}: SectionHeaderProps) {
  const HeadingTag = headingLevel;
  const headingSizeClass =
    headingLevel === "h1"
      ? "text-h1"
      : headingLevel === "h3"
        ? "text-h3"
        : "text-h2";

  const headingBlock = (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-eyebrow text-primary",
            isUrdu && "font-urdu-body text-base normal-case tracking-normal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={cn(headingSizeClass, isUrdu && "font-urdu-display", "text-foreground")}
      >
        {heading}
      </HeadingTag>
    </div>
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {rightLink ? (
        <div className="flex w-full flex-wrap items-start justify-between gap-4">
          {headingBlock}
          <div className="shrink-0">{rightLink}</div>
        </div>
      ) : (
        headingBlock
      )}
      {description ? (
        <p
          className={cn(
            "text-body max-w-2xl text-ink-muted",
            isUrdu && "font-urdu-body text-lg",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
