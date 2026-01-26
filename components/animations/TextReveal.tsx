"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  type?: "character" | "word";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  staggerDelay = 0.05,
  type = "character",
}: TextRevealProps) {
  const items = type === "character" ? children.split("") : children.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ whiteSpace: type === "word" ? "pre" : "normal" }}
        >
          {item}
          {type === "word" && index < items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default TextReveal;
