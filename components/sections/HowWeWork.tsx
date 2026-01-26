"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionLabel, Button } from "@/components/ui";
import { FadeInLeft } from "@/components/animations";

export function HowWeWork() {
  const t = useTranslations("howWeWork");

  const steps = [
    {
      number: t("step1.number"),
      title: t("step1.title"),
      timeline: t("step1.timeline"),
      description: t("step1.description"),
    },
    {
      number: t("step2.number"),
      title: t("step2.title"),
      timeline: t("step2.timeline"),
      description: t("step2.description"),
    },
    {
      number: t("step3.number"),
      title: t("step3.title"),
      timeline: t("step3.timeline"),
      description: t("step3.description"),
    },
  ];

  return (
    <section id="how-we-work" className="py-24 md:py-32 px-6 bg-[var(--color-cream-dark)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Heading & CTAs */}
          <FadeInLeft>
            <div className="lg:sticky lg:top-32">
              <SectionLabel>{t("sectionLabel")}</SectionLabel>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.1] tracking-tight mb-6">
                {t("title")}{" "}
                <span className="italic font-light text-[var(--color-text-secondary)]">
                  {t("titleHighlight")}
                </span>{" "}
                {t("titleEnd")}
              </h2>
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-8 max-w-md">
                {t("description")}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button calLink="mateo-cano/construye-y-automatiza-con-ia">{t("ctaPrimary")}</Button>
                <Button variant="secondary" icon="play">
                  {t("ctaSecondary")}
                </Button>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Column - Process Steps with Timeline */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 md:gap-8">
                {/* Timeline Column */}
                <div className="relative flex flex-col items-center">
                  {/* Number Circle */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="w-12 h-12 rounded-full bg-[var(--color-cream)] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center z-10 relative"
                  >
                    <span className="text-sm text-[var(--color-text-muted)] font-medium">
                      {step.number}
                    </span>
                  </motion.div>
                  
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="relative w-px flex-1 min-h-[80px] my-2">
                      {/* Background line (subtle) */}
                      <div className="absolute inset-0 bg-[var(--color-border)] opacity-30" />
                      {/* Animated line */}
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.4 + 0.5,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="absolute inset-0 bg-[var(--color-border)] origin-top"
                      />
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.4 + 0.2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex-1 pb-12 last:pb-0 pt-2"
                >
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="font-semibold text-lg text-[var(--color-text-primary)]">
                      {step.title}
                    </h3>
                    <span className="px-3 py-1 text-xs bg-[var(--color-cream)] rounded-full text-[var(--color-text-secondary)]">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
