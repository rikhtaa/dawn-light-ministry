import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "surface" | "muted" | "primary";
  id?: string;
}

const backgroundClasses: Record<NonNullable<SectionProps["background"]>, string> = {
  default: "bg-background",
  surface: "bg-surface",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
};

export function Section({
  children,
  className,
  background = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        backgroundClasses[background],
        className,
      )}
    >
      {children}
    </section>
  );
}
