import Link from "next/link";
import { cn } from "@/lib/cn";

interface HeaderCtaProps {
  href: string;
  label: string;
  isUrdu: boolean;
  variant?: "outline" | "solid";
  className?: string;
}

export function HeaderCta({
  href,
  label,
  isUrdu,
  variant = "outline",
  className,
}: HeaderCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-secondary px-4 text-secondary-foreground shadow-sm transition-all duration-200 dark:text-white",
        "hover:-translate-y-px hover:bg-secondary/90",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        variant === "solid" && "w-full",
        isUrdu ? "font-urdu-body text-sm" : "text-sm font-medium",
        className,
      )}
    >
      {label}
    </Link>
  );
}
