import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  headingLevel?: "h1" | "h2" | "h3";
  isUrdu?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "start",
  headingLevel = "h2",
  isUrdu = false,
  className,
}: SectionHeaderProps) {
  const HeadingTag = headingLevel;
  const headingSizeClass =
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
      <HeadingTag
        className={cn(
          headingSizeClass,
          isUrdu && "font-urdu-display",
          "text-foreground",
        )}
      >
        {heading}
      </HeadingTag>
      {description ? (
        <p
          className={cn(
            "text-body max-w-2xl text-muted-foreground",
            isUrdu && "font-urdu-body text-lg",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
