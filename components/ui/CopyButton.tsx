"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface CopyButtonProps {
  /** The exact text copied to the clipboard — never reformatted or altered. */
  value: string;
  /** Full accessible name for this specific field, e.g. "Copy Easypaisa number" — screen readers get this instead of the short visible text below, so several copy buttons on one page each announce distinctly. */
  ariaLabel: string;
  /** Short visible label shown on the button face, e.g. "Copy". */
  copyText: string;
  /** Shown on the button face, and used as both labels, for a couple of seconds after a successful copy. */
  copiedText: string;
  isUrdu?: boolean;
  className?: string;
}

/**
 * Small utility button for copying a single value (Easypaisa number,
 * bank account number, IBAN) to the clipboard — used on the Support
 * page's manual-payment section. Falls back to a hidden-textarea +
 * `execCommand("copy")` when the async Clipboard API isn't available
 * (e.g. a non-secure context), so the action still works rather than
 * silently doing nothing.
 */
export function CopyButton({ value, ariaLabel, copyText, copiedText, isUrdu = false, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    let succeeded = false;
    try {
      await navigator.clipboard.writeText(value);
      succeeded = true;
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        succeeded = document.execCommand("copy");
      } catch {
        succeeded = false;
      }
      document.body.removeChild(textarea);
    }
    if (succeeded) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedText : ariaLabel}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center justify-center border border-border-strong px-3 text-[0.8125rem] text-ink-muted transition-colors duration-300 hover:bg-black/[0.03] hover:text-foreground dark:border-dark-border-button dark:hover:bg-white/[0.06]",
        isUrdu && "font-urdu-body",
        className,
      )}
    >
      <span aria-hidden="true">{copied ? copiedText : copyText}</span>
    </button>
  );
}
