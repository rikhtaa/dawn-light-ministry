import Image from "next/image";
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
  /**
   * False for placements where the surrounding element already draws its
   * own border/frame around the image tile (e.g. Ministries' row/mobile
   * card — the approved mockup's image tile has no border of its own,
   * just the fill flush against the row or card). Defaults to true, the
   * shape every other placement (About's archive photo, leadership
   * portraits, Hero, etc.) already relies on.
   */
  bordered?: boolean;
  /**
   * "on-navy" — for a placeholder that always sits on a permanently-navy
   * surface regardless of the app theme (e.g. Sermons' latest-sermon band
   * — Dawn of Light - Sermons.dc.html's YouTube facade), forces the
   * darker stripe (otherwise only shown under `.dark`) and drops the
   * light caption pill for plain `dark-faint` text, matching the mockup's
   * unconditional treatment there. Defaults to "default", every other
   * placement's existing light/dark-toggling behaviour.
   */
  tone?: "default" | "on-navy";
  className?: string;
  /**
   * A real, organization-supplied photograph (`public/images/...`). When
   * given, this renders the actual photo instead of the diagonal-stripe
   * fill — `caption` then only backs the `alt`-less accessible name for a
   * decorative-adjacent container and is otherwise unused. Omit to keep
   * today's "photograph pending" placeholder behaviour unchanged.
   */
  src?: string;
  /** Required alongside `src` — a neutral, factual description (never an invented identity). */
  alt?: string;
  /**
   * "cover" (default) fills the frame, cropping to match `ratio` — right
   * for photographs. "contain" letterboxes instead, for source images
   * (e.g. a portrait book cover) where cropping would cut off the actual
   * content rather than just tightening a photographic crop.
   */
  objectFit?: "cover" | "contain";
  /** CSS `object-position`, e.g. "center 30%" — keep faces/subjects in frame on a tighter crop. */
  objectPosition?: string;
  /**
   * Bypasses next/image's domain-allowlist check for this instance only —
   * needed for an external host not in next.config.ts's remotePatterns
   * (e.g. YouTube's own thumbnail CDN, img.youtube.com), without adding
   * that host site-wide.
   */
  unoptimized?: boolean;
  /**
   * Set on the one image that's the Largest Contentful Paint element for
   * its page (e.g. the Home hero photo) so next/image loads it eagerly
   * with a preload hint instead of lazily — otherwise it's flagged by
   * Next's own dev-time LCP warning. Defaults to false (lazy), correct
   * for every other placement, which is below the fold.
   */
  priority?: boolean;
}

/**
 * HANDOFF.md §6: ships wherever an approved photograph is missing — a
 * marked diagonal-stripe fill, never a decorative gradient, with a mono
 * caption naming what belongs there. §9 darkens the stripe under `.dark`.
 * When `src` is supplied (a real, organization-provided photograph), this
 * renders that photo instead, in the same aspect-ratio/border/photoCaption
 * shape every call site already relies on.
 */
export function ImagePlaceholder({
  caption,
  ratio = "3:2",
  photoCaption,
  bordered = true,
  tone = "default",
  className,
  src,
  alt,
  objectFit = "cover",
  objectPosition,
  unoptimized,
  priority = false,
}: ImagePlaceholderProps) {
  const onNavy = tone === "on-navy";

  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden",
          bordered && (onNavy ? "border border-dark-border" : "border border-border"),
          ratioClasses[ratio],
          className,
        )}
      >
        <Image
          src={src}
          alt={alt ?? caption}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 720px"
          className={objectFit === "contain" ? "object-contain" : "object-cover"}
          style={objectPosition ? { objectPosition } : undefined}
          unoptimized={unoptimized}
          priority={priority}
        />
        {photoCaption ? (
          <span className="absolute inset-x-0 bottom-0 max-w-[80%] bg-ink px-5 py-3 text-[0.78125rem] leading-[1.4] text-dark-body">
            {photoCaption}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Photograph pending: ${caption}`}
      className={cn(
        "relative flex items-center justify-center",
        bordered && (onNavy ? "border border-dark-border" : "border border-border"),
        ratioClasses[ratio],
        onNavy
          ? "[background-image:repeating-linear-gradient(135deg,#1B3145_0_10px,#16293A_10px_20px)]"
          : "[background-image:repeating-linear-gradient(135deg,#E8E2D6_0_10px,#DFD8CA_10px_20px)] dark:[background-image:repeating-linear-gradient(135deg,#1B3145_0_10px,#16293A_10px_20px)]",
        className,
      )}
    >
      <span
        className={cn(
          "text-mono-label",
          onNavy ? "text-dark-faint" : "bg-surface/90 px-2 py-1 text-ink-ghost",
        )}
      >
        {caption}
      </span>
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
