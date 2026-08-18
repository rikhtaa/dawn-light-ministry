import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FactTable } from "@/components/ui/FactTable";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface ChildrenEducationSectionProps {
  strings: HomeStrings["childrenEducation"];
  isUrdu: boolean;
}

export function ChildrenEducationSection({ strings, isUrdu }: ChildrenEducationSectionProps) {
  const list = Object.values(strings.list);

  return (
    <section className="bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ImagePlaceholder
          ratio="4:3"
          caption={strings.imagePlaceholder}
          className="min-h-[320px] min-w-0 border-0"
        />
        <div className="min-w-0 px-(--container-gutter) py-16 lg:py-26 lg:pe-16 lg:ps-16">
          <Reveal index={1}>
            <p
              className={cn(
                "text-eyebrow text-primary",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.eyebrow}
            </p>
            <h2 className={cn("text-h2 mt-4 text-foreground", isUrdu && "font-urdu-display")}>
              {strings.heading}
            </h2>
            <p
              className={cn(
                "text-body measure mt-5 text-ink-body",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.body}
            </p>
            <FactTable facts={list} layout="stacked" isUrdu={isUrdu} className="mt-7" />
            <p className="text-caption mt-4">{strings.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
