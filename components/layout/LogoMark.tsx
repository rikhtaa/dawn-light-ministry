interface LogoMarkProps {
  size?: number;
  /**
   * "auto" (default) follows the page theme via the `.dark` class — correct
   * wherever the surrounding surface itself swaps with the theme (the
   * header). "on-dark" forces the dark-mode colours regardless of the
   * `.dark` class — needed on the footer, whose navy ground is the same
   * literal colour in both light and dark mode (HANDOFF.md §9).
   */
  tone?: "auto" | "on-dark";
  className?: string;
}

/**
 * The approved mark, verified byte-for-byte against the frozen source —
 * `public/logo/dlm-mark.svg`, copied from the Claude Design project's
 * `brand/dlm-mark.svg` ("Dawn of Light - Logo Assets.dc.html", labelled
 * "Approved · frozen · Direction B lockup"). 47×47 square, 1.5px brass
 * outline, oxblood Latin cross: vertical bar 3.2×23.5 at top 11.5,
 * crossbar 14.8×3.2 at top 18.4, both centred. Rendered inline (rather
 * than referencing the static file) so colours can be driven by the same
 * CSS custom properties as the rest of the UI — `fill-primary` already
 * swaps oxblood → brass under `.dark` per the §4.2 alias; `stroke-accent
 * dark:stroke-dark-accent` covers the outline, which has no such alias.
 * The viewBox stays fixed regardless of rendered `size` — HANDOFF.md
 * §12's mobile figures (2.5×18.4 / 11.6×2.5) are this same shape
 * uniformly scaled, not a different geometry.
 */
export function LogoMark({ size = 47, tone = "auto", className }: LogoMarkProps) {
  const onDark = tone === "on-dark";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 47 47"
      aria-hidden="true"
      className={className}
    >
      <rect
        x={0.75}
        y={0.75}
        width={45.5}
        height={45.5}
        fill="none"
        strokeWidth={1.5}
        className={onDark ? "stroke-dark-accent" : "stroke-accent dark:stroke-dark-accent"}
      />
      <rect
        x={21.4}
        y={11.5}
        width={3.2}
        height={23.5}
        className={onDark ? "fill-dark-accent" : "fill-primary"}
      />
      <rect
        x={15.6}
        y={18.4}
        width={14.8}
        height={3.2}
        className={onDark ? "fill-dark-accent" : "fill-primary"}
      />
    </svg>
  );
}
