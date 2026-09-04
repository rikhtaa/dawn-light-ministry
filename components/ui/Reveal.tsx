"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  /**
   * Position within a group of parallel items (a card row, a fact rail) so
   * siblings stagger instead of arriving together. Clamped to 2 — HANDOFF.md
   * §11: "staggered 100ms across at most three items" — so a fourth+ item
   * shares the third's delay rather than compounding it.
   */
  index?: number;
  className?: string;
}

const STAGGER_MS = 100;
const MAX_STAGGER_INDEX = 2;

/**
 * HANDOFF.md §11's one entrance rule: fade-and-rise 8px over 400ms, once,
 * staggered 100ms across at most three items. Content that's already on
 * screen at mount (anything above the fold)
 * reveals immediately instead of waiting on a scroll it will never see;
 * everything else reveals the first time it scrolls into view, then stops
 * watching. `prefers-reduced-motion` and pre-IntersectionObserver
 * environments skip straight to visible — motion is a progressive
 * enhancement, never a gate on seeing the content.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const alreadyOnScreen = rect.top < window.innerHeight && rect.bottom > 0;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      alreadyOnScreen
    ) {
      // Deferred (rather than called inline) so this stays an external-
      // system subscription reacting via a callback, not a synchronous
      // setState-in-effect — same shape as the observer branch below.
      // `queueMicrotask`, not `requestAnimationFrame` — found and fixed
      // once already: browsers throttle/suspend rAF callbacks entirely
      // while `document.hidden` is true (a backgrounded tab, a page
      // loaded in a tab that isn't yet frontmost, low-power mode), so a
      // page that first renders in that state could stay stuck at
      // opacity-0 indefinitely — content that's supposed to reveal
      // immediately never would, and everything inside stayed invisible
      // (though still technically focusable/typeable underneath).
      // Microtasks aren't tied to the rendering/paint pipeline the way
      // rAF is, so they aren't subject to that throttling.
      queueMicrotask(() => setVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // `threshold` is a fraction of the TARGET's own height, not the
      // viewport — found and fixed once already: a long-form article
      // section (e.g. About's restructured "Our Story", several thousand
      // px tall) can never cover 15% of itself on an ordinary viewport, so
      // it silently stayed opacity:0 forever. `0` fires as soon as any
      // part of the element is inside the (already-inset) root margin,
      // which is height-independent and correct for both a small card and
      // a full article body.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delay = Math.min(index, MAX_STAGGER_INDEX) * STAGGER_MS;

  return (
    <div
      ref={ref}
      className={cn(
        // `translate`, not `transform` — Tailwind v4's `translate-y-*`
        // utilities set the standalone CSS `translate` property, not
        // `transform`; listing `transform` here silently excluded the
        // rise from the transition and it snapped instead of easing.
        "transition-[opacity,translate] duration-[400ms] ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        className,
      )}
      style={visible && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
