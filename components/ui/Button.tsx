"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: "arrow" | "play" | null;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary: "bg-[var(--color-charcoal)] text-white hover:bg-[var(--color-charcoal-light)]",
  secondary: "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-charcoal)]/20 hover:border-[var(--color-charcoal)]/40 hover:bg-[var(--color-cream-dark)]",
  ghost: "bg-transparent text-[var(--color-text-primary)] hover:bg-black/5",
  light: "bg-white text-[var(--color-text-primary)] hover:bg-[var(--color-cream)]",
};

const sizes = {
  sm: "px-5 py-2 text-sm h-10",
  md: "px-6 py-3 text-base h-12",
  lg: "px-8 py-4 text-base h-14",
};

const springTransition = { type: "spring" as const, stiffness: 400, damping: 17 };

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon = null,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const buttonContent = (
    <>
      <span>{children}</span>
      {icon === "play" ? (
        <motion.span 
          className="w-5 h-5 rounded-full bg-[var(--color-charcoal)] flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={springTransition}
        >
          <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
        </motion.span>
      ) : icon === "arrow" ? (
        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={springTransition}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      ) : null}
    </>
  );

  const buttonClasses = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer group",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={springTransition}
        className="inline-block"
      >
        <Link href={href} className={buttonClasses}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={springTransition}
    >
      {buttonContent}
    </motion.button>
  );
}

export default Button;
