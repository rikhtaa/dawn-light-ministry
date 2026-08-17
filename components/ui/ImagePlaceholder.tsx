import { cn } from "@/lib/cn";

type Ratio = "3:2" | "16:9" | "21:9" | "4:3" | "4:5";

const ratioClasses: Record<Ratio, string> = {
  "3:2": "aspect-[3/2]",
  "16:9": "aspect-video",
  "21:9": "aspect-[21/9]",
  "4:3": "aspect-[4/3]",
  "4:5": "aspect-[4/5]",
};

interface ImagePlaceholderProps {
  /** Names what belongs here, e.g. "Seminary class in session". */
  caption: string;
  ratio?: Ratio;
  /**
   * The photograph's own eventual caption (HANDOFF.md §6: "always
   * captioned"; §14's hero: "one photograph with a captioned navy
   * strip") — shown as a navy strip along the bottom edge, distinct from
   * `caption` (the dev-facing "what's missing" note). Often itself a
   * placeholder string until supplied.
   */
  photoCaption?: string;
  className?: string;
}

/**
 * HANDOFF.md §6: ships wherever an approved photograph is missing — a
 * marked diagonal-stripe fill, never a decorative gradient, with a mono
 * caption naming what belongs there. §9 darkens the stripe under `.dark`.
 */
export function ImagePlaceholder({
  caption,
  ratio = "3:2",
  photoCaption,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Photograph pending: ${caption}`}
      className={cn(
        "relative flex items-center justify-center border border-border",
        ratioClasses[ratio],
        "[background-image:repeating-linear-gradient(135deg,#E8E2D6_0_10px,#DFD8CA_10px_20px)]",
        "dark:[background-image:repeating-linear-gradient(135deg,#1B3145_0_10px,#16293A_10px_20px)]",
        className,
      )}
    >
      <span className="text-mono-label bg-surface/90 px-2 py-1 text-ink-ghost">{caption}</span>
      {photoCaption ? (
        // Not the `text-caption` utility — that bakes in ink-faint as its
        // own colour, which would collide with the dark-body override
        // needed against this always-navy strip.
        <span className="absolute inset-x-0 bottom-0 max-w-[80%] bg-ink px-5 py-3 text-[0.78125rem] leading-[1.4] text-dark-body">
          {photoCaption}
        </span>
      ) : null}
    </div>
  );
}
