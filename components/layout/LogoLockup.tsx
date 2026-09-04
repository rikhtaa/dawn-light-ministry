import Link from "next/link";
import { cn } from "@/lib/cn";
import { localizePath } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/types";

interface LogoLockupProps {
  locale: Locale;
  /**
   * "compact" — the approved navbar lockup (`dlm-logo-compact*.svg` /
   * `dlm-logo-ur-compact*.svg`) — used everywhere the site actually renders
   * a navbar (SiteHeader, MobileHeader) and in the footer. "default" — the
   * full horizontal lockup (`dlm-logo-horizontal*.svg` /
   * `dlm-logo-ur-horizontal*.svg`) for a context with room for the full
   * brand identity at its normal size; no current page needs this, but the
   * asset and rendering path stay implemented per the approved brand assets
   * (HANDOFF.md §12).
   */
  size?: "default" | "compact";
  /**
   * "auto" (default) follows the page theme — correct in the header, whose
   * surface actually swaps with light/dark: renders both the light and
   * on-dark colourway files, toggled via `dark:` so exactly one is visible.
   * "on-dark" forces the on-dark file unconditionally — the footer's navy
   * ground is the same literal colour in both modes (HANDOFF.md §9).
   */
  tone?: "auto" | "on-dark";
  /**
   * Display-only enlargement of the compact Urdu lockup, applied on top of
   * its native intrinsic size (real width/height, not a CSS `transform` —
   * so it participates in flex layout/sizing normally, instead of visually
   * overlapping neighbours the way a paint-time `scale()` would). Has no
   * effect for the English lockup or for the non-compact/default size,
   * regardless of what a caller passes — this exists solely because the
   * approved Urdu compact artwork (183×60) reads visually smaller in the
   * navbar than the English compact artwork (312×34) despite being the
   * correct, unaltered, approved file; SiteHeader/MobileHeader opt in so
   * the two navbars read as comparable weight. Defaults to 1 (no change) —
   * the footer intentionally doesn't pass this, so it keeps showing the
   * Urdu compact lockup at the asset's true native size.
   */
  urduCompactScale?: number;
  className?: string;
}

// English (`dlm-logo-*`) and Urdu (`dlm-logo-ur-*`) are two independently
// approved lockups, not one lockup mirrored in CSS — the Urdu artwork has
// its own hand-set proportions (Noto Nastaliq Urdu name/descriptor at
// 32px/16px full size, 24px/13px compact) and its own canvas, with the mark
// already composed on the right edge for RTL reading order. Each file is
// rendered as-is; nothing here flips, resizes, or recolours either set.
const ASSET = {
  en: {
    default: {
      light: "/logo/dlm-logo-horizontal.svg",
      dark: "/logo/dlm-logo-horizontal-on-dark.svg",
      width: 360,
      height: 48,
    },
    compact: {
      light: "/logo/dlm-logo-compact.svg",
      dark: "/logo/dlm-logo-compact-on-dark.svg",
      width: 312,
      height: 34,
    },
  },
  ur: {
    default: {
      light: "/logo/dlm-logo-ur-horizontal.svg",
      dark: "/logo/dlm-logo-ur-horizontal-on-dark.svg",
      width: 237,
      height: 82,
    },
    compact: {
      light: "/logo/dlm-logo-ur-compact.svg",
      dark: "/logo/dlm-logo-ur-compact-on-dark.svg",
      width: 183,
      height: 60,
    },
  },
} as const;

/**
 * Renders the approved lockup SVGs verbatim (`public/logo/`, copied
 * byte-for-byte from the frozen Claude Design sources — "Dawn of Light -
 * Logo Assets.dc.html" for English, "Dawn of Light - Logo Assets
 * (Urdu).dc.html" for Urdu — apart from stripped C2PA provenance metadata,
 * which has no visual effect and would otherwise ship ~8KB of inert bytes
 * on every page). The SVG artwork itself is never recoloured, resized, or
 * redrawn — `urduCompactScale` only changes the *rendered* box (real
 * width/height, so it stays lossless — SVGs rescale cleanly) of the
 * unmodified file, it doesn't touch the asset.
 */
export function LogoLockup({
  locale,
  size = "default",
  tone = "auto",
  urduCompactScale = 1,
  className,
}: LogoLockupProps) {
  const isCompact = size === "compact";
  const onDark = tone === "on-dark";
  const isUrdu = locale === "ur";
  const asset = ASSET[isUrdu ? "ur" : "en"][isCompact ? "compact" : "default"];
  const scale = isUrdu && isCompact ? urduCompactScale : 1;
  const renderWidth = asset.width * scale;
  const renderHeight = asset.height * scale;

  // `min-w-0` (not `shrink-0`): every lockup file here is wider than the
  // old inline mark+text markup ever was. Below `sm`, that's wider than the
  // space MobileHeader has beside its menu button — a flex item's default
  // `min-width: auto` would refuse to shrink it and overflow the header.
  // `min-w-0` here plus `max-w-full` on the <img> lets the browser scale
  // the whole lockup down uniformly (never past its intrinsic size) so it
  // always fits, the same responsive-image pattern used wherever else this
  // project scales art proportionally.
  const linkClassName = cn(
    "flex min-w-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    onDark ? "focus-visible:ring-offset-ink" : "focus-visible:ring-offset-surface",
    className,
  );

  // Plain <img>, not next/image, for all lockup files below: a small
  // fixed-vocabulary vector logo gets nothing from next/image's raster
  // optimisation, and enabling it would mean widening next.config.ts's
  // image allowlist (dangerouslyAllowSVG) for a file that's already as
  // small as it'll ever be.
  return (
    <Link
      href={localizePath(locale, "/")}
      aria-label={isUrdu ? "نور کی صبح" : "Dawn of Light Ministry"}
      className={linkClassName}
    >
      {onDark ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={asset.dark} width={renderWidth} height={renderHeight} alt="" className="h-auto max-w-full" />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset.light} width={renderWidth} height={renderHeight} alt="" className="h-auto max-w-full dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset.dark} width={renderWidth} height={renderHeight} alt="" className="hidden h-auto max-w-full dark:block" />
        </>
      )}
    </Link>
  );
}
