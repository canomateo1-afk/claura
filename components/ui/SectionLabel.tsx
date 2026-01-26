"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionLabel({
  children,
  variant = "light",
  className,
}: SectionLabelProps) {
  const variants = {
    light: "bg-[var(--color-cream-dark)] text-[var(--color-text-primary)]",
    dark: "bg-[var(--color-charcoal-light)] text-white",
  };

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "inline-flex px-4 py-2 text-sm font-medium rounded-full mb-6",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
}

export default SectionLabel;
