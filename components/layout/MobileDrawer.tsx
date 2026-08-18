"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { organization } from "@/lib/organization";
import type { NavKey } from "@/lib/navigation";

interface MobileDrawerNavItem {
  key: NavKey;
  href: string;
  label: string;
  active: boolean;
}

export interface MobileDrawerMinistryItem {
  key: string;
  href: string;
  label: string;
}

interface MobileDrawerProps {
  id: string;
  open: boolean;
  onDismiss: () => void;
  navLabel: string;
  menuTitle: string;
  closeLabel: string;
  items: MobileDrawerNavItem[];
  /** Sub-items shown when the "Ministries" row is expanded. */
  ministryItems: MobileDrawerMinistryItem[];
  supportHref: string;
  supportLabel: string;
  isUrdu: boolean;
  languageSwitcher: ReactNode;
  themeToggle: ReactNode;
}

/**
 * HANDOFF.md §8/§11: closes on route change, Escape closes, focus trapped
 * while open and returned to the trigger on close (handled by the caller,
 * SiteHeader). Structure verified against the approved Claude Design
 * mobile-drawer swatch: a navy "Menu" header strip, a ruled nav list with
 * an accordion under Ministries, then Support the mission, the language
 * segments, a dark-mode switch, and contact info — in that order.
 */
export function MobileDrawer({
  id,
  open,
  onDismiss,
  navLabel,
  menuTitle,
  closeLabel,
  items,
  ministryItems,
  supportHref,
  supportLabel,
  isUrdu,
  languageSwitcher,
  themeToggle,
}: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [ministriesExpanded, setMinistriesExpanded] = useState(false);

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

  const navTextClass = isUrdu ? "font-urdu-body text-base" : "text-nav";

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-ink/50" aria-hidden="true" onClick={onDismiss} />
      <div
        id={id}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={navLabel}
        className="absolute inset-y-0 end-0 flex w-full max-w-xs flex-col overflow-y-auto bg-surface"
      >
        <div className="flex items-center justify-between bg-ink px-5 py-3.5">
          <span className="font-serif text-[1.0625rem] text-dark-heading">{menuTitle}</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onDismiss}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-dark-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <CloseIcon />
            <span className="sr-only">{closeLabel}</span>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-8 p-6">
          <nav aria-label={navLabel} className="flex-1">
            <ul className="flex flex-col border-t border-border">
              {items.map((item) => {
                if (item.key === "ministries") {
                  return (
                    <li key={item.key} className="border-b border-border-soft">
                      <div
                        className={cn(
                          "flex min-h-11 items-center justify-between border-s-[3px] py-3 ps-3",
                          item.active
                            ? "border-accent text-foreground font-semibold"
                            : "border-transparent text-ink-muted",
                        )}
                      >
                        <Link
                          href={item.href}
                          aria-current={item.active ? "page" : undefined}
                          className={cn("transition-colors duration-300 hover:text-foreground", navTextClass)}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMinistriesExpanded((expanded) => !expanded)}
                          aria-expanded={ministriesExpanded}
                          aria-controls={`${id}-ministries-submenu`}
                          className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink-disabled transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          <span aria-hidden="true" className="text-lg leading-none">
                            {ministriesExpanded ? "−" : "+"}
                          </span>
                        </button>
                      </div>
                      {ministriesExpanded ? (
                        <ul id={`${id}-ministries-submenu`} className="flex flex-col bg-band">
                          {ministryItems.map((sub) => (
                            <li key={sub.key} className="border-b border-border-soft">
                              <Link
                                href={sub.href}
                                className={cn(
                                  "block min-h-11 py-3 ps-8 text-ink-muted transition-colors duration-300 hover:text-foreground",
                                  navTextClass,
                                )}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                }

                return (
                  <li key={item.key} className="border-b border-border-soft">
                    <Link
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      className={cn(
                        "block min-h-11 border-s-[3px] py-3 ps-3 transition-colors duration-300",
                        item.active
                          ? "border-accent text-foreground font-semibold"
                          : "border-transparent text-ink-muted hover:border-border-strong hover:text-foreground",
                        navTextClass,
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <Button href={supportHref} variant="primary" isUrdu={isUrdu} className="w-full">
              {supportLabel}
            </Button>
            {languageSwitcher}
            <div className="border-t border-border-soft pt-4">{themeToggle}</div>
            <div className="border-t border-border-soft pt-3.5 text-small text-ink-faint">
              <div>{organization.phone}</div>
              <div>{organization.email}</div>
            </div>
          </div>
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
