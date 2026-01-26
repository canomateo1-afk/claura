"use client";

import { motion } from "framer-motion";

interface FadeInRightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  once?: boolean;
}

export function FadeInRight({
  children,
  className,
  delay = 0,
  duration = 0.6,
  x = 30,
  once = true,
}: FadeInRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeInRight;
