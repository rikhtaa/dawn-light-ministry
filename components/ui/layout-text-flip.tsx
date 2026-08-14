"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";

interface LayoutTextFlipProps {
  words: string[];
  duration?: number;
  isUrdu?: boolean;
}

export const LayoutTextFlip = ({
  words,
  duration = 3000,
  isUrdu = false,
}: LayoutTextFlipProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <motion.span
      layout
      className={cn(
        "relative inline-flex w-fit overflow-hidden align-baseline",
        "rounded-xl",
        "border border-primary-foreground/25",
        "bg-primary-foreground/10",
        "backdrop-blur-md",
        "shadow-lg shadow-black/10",
        "px-5 py-1.5",
        "text-primary-foreground",
        isUrdu && "font-urdu-body",
      )}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{
            y: -40,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            y: 40,
            opacity: 0,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className={cn(
            "inline-block whitespace-nowrap",
            "font-serif font-semibold",
            "text-[clamp(2.375rem,1.6rem_+_3.5vw,5.5rem)]",
            "leading-[1.15]",
            "tracking-[-0.01em]",
            isUrdu && "font-urdu-body leading-[1.9]",
          )}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};