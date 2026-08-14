"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { HeaderCta } from "@/components/layout/HeaderCta";
import type { NavKey } from "@/lib/navigation";

interface MobileNavItem {
  key: NavKey;
  href: string;
  label: string;
  active: boolean;
}

interface MobileNavProps {
  id: string;
  open: boolean;
  onDismiss: () => void;
  navLabel: string;
  closeLabel: string;
  items: MobileNavItem[];
  ctaHref: string;
  ctaLabel: string;
  isUrdu: boolean;
  languageSwitcher: ReactNode;
}

export function MobileNav({
  id,
  open,
  onDismiss,
  navLabel,
  closeLabel,
  items,
  ctaHref,
  ctaLabel,
  isUrdu,
  languageSwitcher,
}: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onDismiss();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onDismiss]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      <div
        className="absolute inset-0 bg-foreground/40"
        aria-hidden="true"
        onClick={onDismiss}
      />
      <div
        id={id}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={navLabel}
        className="absolute inset-y-0 end-0 flex w-full max-w-xs flex-col gap-8 overflow-y-auto border-s border-border bg-surface p-6"
      >
        <div className="flex items-center justify-end">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onDismiss}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[2px] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <CloseIcon />
            <span className="sr-only">{closeLabel}</span>
          </button>
        </div>

        <nav aria-label={navLabel} className="flex-1">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.key} className="border-b border-border">
                <Link
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={cn(
                    "block border-s-2 py-3 ps-3 transition-colors",
                    item.active
                      ? "border-secondary text-primary"
                      : "border-transparent text-foreground hover:border-border hover:text-primary",
                    isUrdu
                      ? "font-urdu-body text-base"
                      : "text-xs font-semibold uppercase tracking-[0.05em]",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6 border-t border-border pt-6">
          {languageSwitcher}
          <HeaderCta
            href={ctaHref}
            label={ctaLabel}
            isUrdu={isUrdu}
            variant="solid"
          />
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
