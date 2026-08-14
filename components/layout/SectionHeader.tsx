import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  headingLevel?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "start",
  headingLevel = "h2",
  className,
}: SectionHeaderProps) {
  const HeadingTag = headingLevel;
  const headingClass =
    headingLevel === "h1"
      ? "text-h1"
      : headingLevel === "h3"
        ? "text-h3"
        : "text-h2";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <HeadingTag className={cn(headingClass, "text-foreground")}>
        {heading}
      </HeadingTag>
      {description ? (
        <p className="text-body max-w-2xl text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
