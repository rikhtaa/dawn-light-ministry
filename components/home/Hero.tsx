import { cn } from "@/lib/cn";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/Button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import styles from "@/components/home/Hero.module.css";

interface HeroProps {
  eyebrow: string;
  headline: string;
  animatedWords: string[];
  supportingMessage: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
  isUrdu: boolean;
}

/**
 * Homepage hero.
 *
 * IMPORTANT:
 * AuroraBackground is not modified here.
 * LayoutTextFlip is used only for the final animated word.
 */
export function Hero({
  eyebrow,
  headline,
  animatedWords,
  supportingMessage,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
  isUrdu,
}: HeroProps) {
  return (
    <AuroraBackground className="min-h-[70vh] md:min-h-[80vh] lg:min-h-[92vh]">
      <div className={styles.contentWrap}>
        <p
          className={cn(
            styles.eyebrow,
            "text-label text-foreground/80",
            isUrdu && "font-urdu-body",
          )}
        >
          {eyebrow}
        </p>

        <h1
          className={cn(
           "font-serif font-semibold text-foreground",
           "text-[clamp(2.375rem,1.6rem_+_3.5vw,5.5rem)]",
           "leading-[1.15]",
           "tracking-[-0.01em]",
           "text-balance",
          isUrdu && "font-urdu-body leading-[1.9]",
          )}
        >
        <span>{headline}</span>{" "}
        <span className={styles.animatedWord}>
          <LayoutTextFlip
           words={animatedWords}
           isUrdu={isUrdu}
          />
        </span>
        </h1>

        <p
          className={cn(
            styles.supportingMessage,
            "text-body max-w-2xl text-foreground/90",
            isUrdu && "font-urdu-body text-lg",
          )}
        >
          {supportingMessage}
        </p>

        <div className={styles.ctaRow}>
          <Button
            href={primaryCtaHref}
            variant="outline"
            className={cn(
              "rounded-lg! border! border-transparent! bg-secondary! text-white! shadow-sm transition-all duration-200 dark:text-primary!",
              "hover:-translate-y-px hover:bg-secondary/90!",
              "focus-visible:ring-secondary! focus-visible:ring-offset-primary!",
              "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
              isUrdu && "font-urdu-body",
            )}
          >
            {primaryCta}
          </Button>

          <Button
            href={secondaryCtaHref}
            variant="outline"
            className={cn(
              "rounded-lg! border! border-foreground/30! bg-transparent! text-foreground! shadow-none transition-all duration-200",
              "hover:-translate-y-px hover:border-secondary/70! hover:bg-foreground/5!",
              "focus-visible:border-secondary! focus-visible:ring-secondary! focus-visible:ring-offset-background!",
              "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
              isUrdu && "font-urdu-body",
            )}
          >
            {secondaryCta}
          </Button>
        </div>
      </div>
    </AuroraBackground>
  );
}