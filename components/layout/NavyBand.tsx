import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

interface NavyBandProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /**
   * "band" (default) — HANDOFF.md §4.4's 88–96 desktop / 56–72 tablet /
   * 30–40 mobile "band" rhythm. "section" — the approved homepage
   * mockup's Seminary band measures 104px desktop, matching its other
   * regular content sections (Mission, Ministries) rather than the
   * quieter band tier.
   */
  size?: "band" | "section";
}

/**
 * HANDOFF.md §9/§24: the navy band that carries a page's single most
 * important thing. "Two background colours per page maximum … one navy
 * band per page — never two navy bands in sequence" is a page-composition
 * rule for callers to honour; this component only supplies the band
 * itself. Uses the literal `ink` token directly (navy bands stay #122536
 * in both light and dark — §9).
 */
export function NavyBand({
  children,
  className,
  containerClassName,
  size = "band",
}: NavyBandProps) {
  return (
    <section
      className={cn(
        "bg-ink text-dark-body",
        size === "band" ? "py-9 md:py-16 lg:py-24" : "py-9 md:py-16 lg:py-26",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
