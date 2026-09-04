"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RuledList } from "@/components/ui/RuledRow";
import { SermonRow } from "@/components/sermons/SermonRow";
import { cn } from "@/lib/cn";
import type { Sermon } from "@/lib/sermons";
import type { SermonsStrings } from "@/content/i18n/en/sermons";

interface SermonsFilterableListProps {
  sermons: Sermon[];
  strings: Pick<SermonsStrings, "filters" | "row" | "actions" | "pagination">;
  isUrdu: boolean;
}

function chipClasses(active: boolean, extra?: string) {
  return cn(
    "text-[0.84375rem] whitespace-nowrap transition-colors duration-300",
    active
      ? "bg-ink px-4 py-2.5 text-dark-heading"
      : "border border-border px-4 py-2 text-ink-muted hover:border-border-strong",
    extra,
  );
}

/**
 * Dawn of Light - Sermons.dc.html's filter row + search, made functional.
 * Only `language` and free-text search are backed by real data across the
 * 14 sermon records — every sermon shares the same `speaker`, and none has
 * a `series` or `scriptureReference` set, so "By series"/"By Scripture"/
 * "By speaker" (the design's other three chips) would never narrow the
 * list and were removed rather than left as dead controls (see the
 * cleanup report for the audit).
 */
export function SermonsFilterableList({ sermons, strings, isUrdu }: SermonsFilterableListProps) {
  const [languages, setLanguages] = useState<Set<"en" | "ur">>(new Set());
  const [query, setQuery] = useState("");

  const languageLabel = (lang: "en" | "ur") => (lang === "ur" ? strings.filters.urdu : strings.filters.english);

  const toggleLanguage = (lang: "en" | "ur") => {
    setLanguages((prev) => {
      const next = new Set(prev);
      if (next.has(lang)) {
        next.delete(lang);
      } else {
        next.add(lang);
      }
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sermons.filter((sermon) => {
      if (languages.size > 0 && !languages.has(sermon.language)) return false;
      if (q) {
        const haystack = [sermon.title, sermon.speaker, sermon.scriptureReference]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [sermons, languages, query]);

  return (
    <>
      <div className="border-b border-border bg-surface py-5">
        <Container className="flex flex-nowrap items-center gap-3 overflow-x-auto sm:flex-wrap sm:overflow-visible">
          <button
            type="button"
            onClick={() => setLanguages(new Set())}
            className={chipClasses(languages.size === 0)}
          >
            {strings.filters.all}
          </button>
          <button
            type="button"
            onClick={() => toggleLanguage("en")}
            className={chipClasses(languages.has("en"), "hidden sm:inline-block")}
          >
            {strings.filters.english}
          </button>
          <button
            type="button"
            onClick={() => toggleLanguage("ur")}
            className={cn(
              "font-urdu-body text-sm whitespace-nowrap transition-colors duration-300",
              languages.has("ur")
                ? "bg-ink px-4 py-2 text-dark-heading"
                : "border border-border px-4 py-1.5 text-ink-muted hover:border-border-strong",
            )}
          >
            {strings.filters.urdu}
          </button>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={strings.filters.searchPlaceholder}
            aria-label={strings.filters.searchPlaceholder}
            className="ms-auto hidden min-w-60 border border-input-border bg-surface-warm px-4 py-2.5 text-[0.84375rem] text-foreground placeholder:text-ink-disabled focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:block"
          />
        </Container>
      </div>

      <section className="bg-surface pb-12">
        <Container>
          <Reveal>
            {filtered.length > 0 ? (
              <RuledList>
                {filtered.map((sermon, i) => (
                  <SermonRow
                    key={sermon.slug}
                    sermon={sermon}
                    strings={strings}
                    languageLabel={languageLabel(sermon.language)}
                    highlighted={i === 0}
                    isUrdu={isUrdu}
                  />
                ))}
              </RuledList>
            ) : (
              <p className={cn("mt-8 text-body text-ink-muted", isUrdu && "font-urdu-body")}>
                {strings.filters.noResults}
              </p>
            )}
          </Reveal>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-small text-ink-faint">
              {strings.pagination.showing} {filtered.length} {strings.pagination.of} {sermons.length}{" "}
              {strings.pagination.sermonsLabel}
            </p>
            <div className="flex gap-2">
              <Button variant="secondary" size="compact" disabled isUrdu={isUrdu}>
                {strings.pagination.previous}
              </Button>
              <Button variant="secondary" size="compact" disabled isUrdu={isUrdu}>
                {strings.pagination.next}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
