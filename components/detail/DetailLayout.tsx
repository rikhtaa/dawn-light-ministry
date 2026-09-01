import type { ReactNode } from "react";

interface DetailLayoutProps {
  /** Rail slot 1 — the primary action card. Rendered twice (desktop rail vs. mobile above-body), never duplicated visually: each copy is hidden at the other breakpoint. Omit entirely (with `rail`) for a content type that has no rail — e.g. a leadership biography, which isn't a downloadable/actionable resource. */
  actionCard?: ReactNode;
  /** Main column — hero media then prose. */
  body: ReactNode;
  /** Rail slots 2–3 — facts table, then context (Dawn of Light - Detail Templates.dc.html's fixed rail order). Omit entirely (with `actionCard`) to fall back to a single full-width column. */
  rail?: ReactNode;
}

/**
 * The shared skeleton every detail page (Event/Sermon/Resource) uses —
 * Dawn of Light - Detail Templates.dc.html "01 — The shared skeleton" and
 * its own stated rule: "Rail order is fixed: action card, then facts
 * table, then context. Below 1024 the rail unstacks: action card moves
 * above the body, the rest below it." That's a genuine structural move
 * across the main/rail boundary, not a simple stack — achieved by
 * rendering the action card twice (mirroring how MinistryRow/SermonRow
 * already render two breakpoint-specific compositions rather than
 * reflowing one shape), each hidden at the other breakpoint, so only one
 * copy is ever visible. At ≥1024 the mobile copy is `display:none` and
 * therefore not a grid item at all, so the two remaining real children
 * (body, rail) auto-place into the two columns in DOM order with no
 * `order` utilities needed.
 *
 * When both `actionCard` and `rail` are omitted, the two-column grid
 * collapses to a single full-width column — for a content type that
 * genuinely has no rail content (a leadership biography), rather than an
 * empty/orphaned aside. Every existing caller (Event/Sermon/Resource
 * detail) always passes both, so this is additive and doesn't change
 * their rendering.
 */
export function DetailLayout({ actionCard, body, rail }: DetailLayoutProps) {
  if (!actionCard && !rail) {
    return <div className="min-w-0">{body}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-9">
      {actionCard ? <div className="lg:hidden">{actionCard}</div> : null}
      <div className="min-w-0">{body}</div>
      <aside className="flex flex-col gap-4">
        {actionCard ? <div className="hidden lg:block">{actionCard}</div> : null}
        {rail}
      </aside>
    </div>
  );
}
