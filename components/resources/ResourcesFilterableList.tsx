"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RuledList } from "@/components/ui/RuledRow";
import { ResourceRow } from "@/components/resources/ResourceRow";
import { cn } from "@/lib/cn";
import type { ResourcesStrings } from "@/content/i18n/en/resources";

export type ResourceCategory = "sermons" | "articles" | "bibleStudies" | "educationalMaterial" | "books" | null;

export interface FilterableResourceItem {
  key: string;
  /** null when the item's underlying type has no corresponding filter chip (e.g. a "video" Resource) — still shown under "All". */
  category: ResourceCategory;
  language: "en" | "ur";
  /** Search haystack fields — a sermon's speaker or a resource's author, and Scripture reference where present. */
  speaker?: string;
  scriptureReference?: string;
  rowProps: {
    kicker: string;
    title: string;
    description?: string;
    meta: string[];
    actionLabel: string;
    href?: string;
    external?: boolean;
    isUrdu?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    imageUnoptimized?: boolean;
  };
}

interface ResourcesFilterableListProps {
  items: FilterableResourceItem[];
  strings: Pick<ResourcesStrings, "filters" | "pagination">;
  isUrdu: boolean;
}

type CategoryFilter = "all" | Exclude<ResourceCategory, null>;

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
 * Dawn of Light - Resources.dc.html's filter row + search, made functional
 * (category + language + text search, combined with AND logic, no page
 * reload) while preserving the exact chip markup/responsive behavior the
 * static version already had — see app/[locale]/resources/page.tsx for the
 * server-resolved `items` this receives.
 */
export function ResourcesFilterableList({ items, strings, isUrdu }: ResourcesFilterableListProps) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [languages, setLanguages] = useState<Set<"en" | "ur">>(new Set());
  const [query, setQuery] = useState("");

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
    return items.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (languages.size > 0 && !languages.has(item.language)) return false;
      if (q) {
        const haystack = [item.rowProps.title, item.speaker, item.scriptureReference]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [items, category, languages, query]);

  return (
    <>
      <div className="border-b border-border bg-surface py-5">
        <Container className="flex flex-nowrap items-center gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
          <button type="button" onClick={() => setCategory("all")} className={chipClasses(category === "all")}>
            {strings.filters.all}
          </button>
          <button
            type="button"
            onClick={() => setCategory("sermons")}
            className={chipClasses(category === "sermons")}
          >
            {strings.filters.sermons}
          </button>
          <button
            type="button"
            onClick={() => setCategory("articles")}
            className={chipClasses(category === "articles")}
          >
            {strings.filters.articles}
          </button>
          <button
            type="button"
            onClick={() => setCategory("bibleStudies")}
            className={chipClasses(category === "bibleStudies", "hidden sm:inline-block")}
          >
            {strings.filters.bibleStudies}
          </button>
          <button
            type="button"
            onClick={() => setCategory("bibleStudies")}
            className={chipClasses(category === "bibleStudies", "sm:hidden")}
          >
            {strings.filters.bibleStudies}
          </button>
          <button
            type="button"
            onClick={() => setCategory("educationalMaterial")}
            className={chipClasses(category === "educationalMaterial", "hidden sm:inline-block")}
          >
            {strings.filters.educationalMaterial}
          </button>
          <button
            type="button"
            onClick={() => setCategory("books")}
            className={chipClasses(category === "books", "hidden sm:inline-block")}
          >
            {strings.filters.books}
          </button>
          <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
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
              "hidden font-urdu-body text-sm whitespace-nowrap transition-colors duration-300 sm:inline-block",
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
              <RuledList className="mt-2">
                {filtered.map((item) => (
                  <ResourceRow key={item.key} {...item.rowProps} isUrdu={isUrdu} />
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
              {strings.pagination.showing} {filtered.length} {strings.pagination.of} {items.length}{" "}
              {strings.pagination.resourcesLabel}
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
