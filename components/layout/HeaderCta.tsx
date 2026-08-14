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
        "inline-flex min-h-11 items-center justify-center rounded-[2px] px-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        variant === "outline"
          ? "bg-primary text-primary-foreground duration-200 hover:bg-primary/90 focus-visible:ring-offset-surface"
          : "w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-offset-surface",
        isUrdu ? "font-urdu-body text-sm" : "text-sm font-medium",
        className,
      )}
    >
      {label}
    </Link>
  );
}
