import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-label inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
