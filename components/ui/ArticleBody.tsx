import type { ArticleBlockDef } from "@/lib/article";
import { cn } from "@/lib/cn";

interface ArticleBodyProps {
  blocks: ArticleBlockDef[];
  content: Record<string, string>;
  isUrdu?: boolean;
  className?: string;
}

/**
 * Renders a long-form article body (heading/subheading/paragraph/list
 * blocks) restructured from the ARTICLES source document — used by About,
 * the Seminary programme body, and the Church/Children's Education
 * ministry pages. Reuses this project's existing in-body heading/paragraph
 * type scale (the exact classes app/[locale]/privacy/page.tsx and the
 * ministry pages' own "Activities" heading already use) rather than
 * inventing a new one. No drawn design frame shows a bulleted prose list
 * specifically, so the list treatment here is a minimal, token-only
 * extrapolation (no card, no shadow, no motion) — flagged in the
 * implementation report rather than presented as drawn.
 */
export function ArticleBody({ blocks, content, isUrdu = false, className }: ArticleBodyProps) {
  // A block whose resolved text is empty (an unpublished/missing Urdu
  // entry — see resolveBlocksStrict, lib/i18n/resolve.ts) is omitted
  // entirely rather than falling back to English. Locale separation is
  // strict: this component never mixes languages within one article.
  // Filtered up front (rather than returning null inline) so the first
  // *rendered* paragraph gets the leading-paragraph's zero top margin,
  // not just whichever block happened to be first in `blocks`.
  const renderableBlocks = blocks
    .map((block) => ({
      block,
      listItemKeys: block.kind === "list" ? (block.itemKeys ?? []).filter((k) => Boolean(content[k])) : undefined,
    }))
    .filter(({ block, listItemKeys }) => (block.kind === "list" ? (listItemKeys?.length ?? 0) > 0 : Boolean(content[block.key])));

  return (
    <div className={cn("measure", className)}>
      {renderableBlocks.map(({ block, listItemKeys }, index) => {
        const text = content[block.key];

        if (block.kind === "heading") {
          return (
            <h3
              key={block.key}
              className={cn(
                "text-h3 mt-9 text-[1.375rem] font-semibold text-foreground first:mt-0",
                isUrdu && "font-urdu-display",
              )}
            >
              {text}
            </h3>
          );
        }

        if (block.kind === "subheading") {
          return (
            <h4
              key={block.key}
              className={cn(
                "text-card-title mt-6 font-semibold text-foreground",
                isUrdu && "font-urdu-display",
              )}
            >
              {text}
            </h4>
          );
        }

        if (block.kind === "list") {
          return (
            <ul
              key={block.key}
              className={cn(
                "mt-3 list-disc space-y-1.5 ps-5 text-body text-ink-body",
                isUrdu && "font-urdu-body",
              )}
            >
              {(listItemKeys ?? []).map((itemKey) => (
                <li key={itemKey}>{content[itemKey]}</li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={block.key}
            className={cn(
              "text-body mt-4 text-ink-body",
              index === 0 && "mt-0",
              isUrdu && "font-urdu-body",
            )}
          >
            {text}
          </p>
        );
      })}
    </div>
  );
}
