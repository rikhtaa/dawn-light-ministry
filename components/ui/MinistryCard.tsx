import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface MinistryCardProps {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  isUrdu?: boolean;
  className?: string;
}

export function MinistryCard({
  title,
  description,
  href,
  linkLabel,
  isUrdu = false,
  className,
}: MinistryCardProps) {
  return (
    <Card hoverable className={cn("flex flex-col gap-3", className)}>
      <h3
        className={cn(
          "text-h3 text-foreground",
          isUrdu && "font-urdu-display",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-body flex-1 text-muted-foreground",
          isUrdu && "font-urdu-body text-lg",
        )}
      >
        {description}
      </p>
      <Link
        href={href}
        aria-label={`${linkLabel} — ${title}`}
        className={cn(
          "text-nav inline-flex items-center gap-1 self-start text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm",
          isUrdu && "font-urdu-body",
        )}
      >
        {linkLabel}
        <span aria-hidden="true">→</span>
      </Link>
    </Card>
  );
}
