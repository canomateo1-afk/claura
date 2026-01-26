"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PageLoaderProps {
  children: React.ReactNode;
}

export function PageLoader({ children }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const letters = "Claura".split("");

  useEffect(() => {
    // Total animation time: letter stagger + hold time + exit
    const letterAnimationTime = letters.length * 100 + 400; // stagger + letter animation
    const holdTime = 600; // Time to hold the complete text
    const totalTime = letterAnimationTime + holdTime;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, totalTime);

    return () => clearTimeout(timer);
  }, [letters.length]);

  // Show content after loader starts fading
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 40,
      rotateX: -90,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const contentVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-warm-white)]"
          >
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="flex items-center perspective-1000"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="font-display text-[clamp(3rem,12vw,8rem)] font-normal text-[var(--color-charcoal)] inline-block"
                  style={{
                    transformOrigin: "bottom center",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtle decorative element */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.4, 0, 0.2, 1] as const,
              }}
              className="absolute bottom-[45%] left-1/2 -translate-x-1/2 w-16 h-[1px] bg-[var(--color-brown-muted)] origin-center"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={contentVariants}
        initial="initial"
        animate={showContent ? "animate" : "initial"}
      >
        {children}
      </motion.div>
    </>
  );
}

export default PageLoader;
