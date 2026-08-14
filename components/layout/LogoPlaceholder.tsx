import Link from "next/link";
import { localizePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

interface LogoPlaceholderProps {
  locale: Locale;
}

/**
 * Reserves the header's logo area at the intended size and spacing ahead
 * of the final mark. To integrate the real logo, replace the two <span>
 * placeholders below with <Image> (next/image):
 *   - horizontal lockup: /public/logo/dlm-logo.svg, sm: and up
 *   - icon/mark only:    /public/logo/dlm-mark.svg,  below sm
 * The surrounding <Link> and sizing wrapper do not need to change.
 */
export function LogoPlaceholder({ locale }: LogoPlaceholderProps) {
  return (
    <Link
      href={localizePath(locale, "/")}
      aria-label="Dawn of Light Ministry"
      className="flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <span
        aria-hidden="true"
        className="hidden h-8 w-32 items-center justify-center rounded-[2px] border border-dashed border-border text-[0.625rem] font-medium uppercase tracking-[0.08em] text-muted-foreground sm:flex md:h-9 md:w-36"
      >
        Logo
      </span>
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-dashed border-border text-[0.625rem] font-medium uppercase tracking-[0.04em] text-muted-foreground sm:hidden"
      >
        DLM
      </span>
    </Link>
  );
}
