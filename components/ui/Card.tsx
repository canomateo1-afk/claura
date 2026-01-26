"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  variant?: "elevated" | "flat" | "glass" | "gradient";
  className?: string;
  hover?: boolean;
}

const variants = {
  elevated: "bg-white shadow-[var(--shadow-card)]",
  flat: "bg-[var(--color-cream-dark)]",
  glass: "glass",
  gradient: "bg-gradient-to-br from-[var(--color-orange)] via-[var(--color-coral)] to-[var(--color-teal)] text-white",
};

export function Card({
  children,
  variant = "flat",
  className,
  hover = false,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-[var(--radius-card)] p-8",
        variants[variant],
        hover && "transition-all duration-300",
        className
      )}
      whileHover={hover ? { y: -4, boxShadow: "var(--shadow-card-hover)" } : undefined}
    >
      {children}
    </motion.div>
  );
}

export default Card;
