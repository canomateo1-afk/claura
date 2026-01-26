"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { SectionLabel, SectionHeading } from "@/components/ui";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

function CountUp({
  value,
  duration = 2000,
}: {
  value: string;
  duration?: number;
}) {
  const [count, setCount] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Extract number and suffix
    const numericMatch = value.match(/^([\d,]+)/);
    const suffix = value.replace(/^[\d,]+/, "");

    if (!numericMatch) {
      setCount(value);
      return;
    }

    const targetNumber = parseInt(numericMatch[1].replace(/,/g, ""));
    const startTime = Date.now();

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(targetNumber * easeOut);

      setCount(currentNumber.toLocaleString() + suffix);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl p-6 md:p-8 text-center bg-white/20 backdrop-blur-sm shadow-lg"
    >
      <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light italic text-white mb-2 tracking-tight">
        <CountUp value={value} />
      </div>
      <p className="text-white/80 text-sm leading-relaxed">{label}</p>
    </motion.div>
  );
}

export function AboutStats() {
  const t = useTranslations("about");

  const stats = [
    { value: t("stats.stat1Value"), label: t("stats.stat1Label") },
    { value: t("stats.stat2Value"), label: t("stats.stat2Label") },
    { value: t("stats.stat3Value"), label: t("stats.stat3Label") },
  ];

  return (
    <section className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        {/* Section Header - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <SectionLabel>{t("stats.sectionLabel")}</SectionLabel>
            <SectionHeading highlightWords={["you", "ti"]}>
              {t("stats.title")}
            </SectionHeading>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[var(--color-text-secondary)] leading-relaxed md:pt-12"
          >
            {t("stats.description")}
          </motion.p>
        </div>

        {/* Stats Cards on Gradient Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Multi-layer Gradient Background */}
          <div className="relative min-h-[320px] md:min-h-[380px] flex items-center justify-center p-6 md:p-10">
            {/* Background image */}
            <Image
              src="/images/stats-bg.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />

            {/* Stats Grid - Centered */}
            <div className="relative z-10 w-full max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutStats;
