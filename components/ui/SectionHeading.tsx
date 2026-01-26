"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtext?: string;
  className?: string;
  align?: "left" | "center";
  highlightWords?: string[];
}

export function SectionHeading({
  children,
  subtext,
  className,
  align = "left",
  highlightWords = [],
}: SectionHeadingProps) {
  // Function to highlight specific words
  const renderWithHighlights = (text: string) => {
    if (highlightWords.length === 0) return text;

    let result = text;
    highlightWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      result = result.replace(
        regex,
        '<span class="font-light italic text-[var(--color-brown-muted)]">$1</span>'
      );
    });
    return result;
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <div className={cn(alignClasses[align], className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-tight max-w-[800px] mb-4",
          align === "center" && "mx-auto"
        )}
        dangerouslySetInnerHTML={{
          __html: renderWithHighlights(children as string),
        }}
      />
      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            "text-[var(--color-text-secondary)] text-base max-w-[600px] leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeading;
