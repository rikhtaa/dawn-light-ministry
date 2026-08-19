import { cn } from "@/lib/cn";

interface BeforeLaunchNoticeProps {
  kicker: string;
  body: string;
  isUrdu?: boolean;
}

/**
 * Dawn of Light - Utility Pages.dc.html: "Each [legal page] ends with a
 * 'Before launch' box listing what needs approval." Identical treatment on
 * both Privacy and Website Notice — the one piece of the legal template
 * worth sharing beyond LegalDocument's own shell.
 */
export function BeforeLaunchNotice({ kicker, body, isUrdu = false }: BeforeLaunchNoticeProps) {
  return (
    <div className="border border-border bg-band p-6">
      <p className="text-mono-label mb-2 text-warning">{kicker}</p>
      <p className={cn("text-small text-ink-body", isUrdu && "font-urdu-body text-base")}>{body}</p>
    </div>
  );
}
