"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, SectionLabel } from "@/components/ui";
import { Link } from "@/i18n/navigation";

export function AboutHero() {
  const t = useTranslations("about");

  return (
    <section className="bg-[#f6f0e9] pt-32 pb-16 overflow-hidden">
      <div className="max-w-[var(--container-max-width)] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>{t("hero.sectionLabel")}</SectionLabel>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] mb-6"
            >
              {t("hero.titleLine1")}
              <br />
              <span className="font-light italic text-[var(--color-brown-muted)]">
                {t("hero.titleLine2Highlight")}
              </span>{" "}
              {t("hero.titleLine2End")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[var(--color-text-secondary)] max-w-lg leading-relaxed mb-8"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="/book-a-call">{t("hero.ctaPrimary")}</Button>
              <Button variant="secondary" href="#how-we-work" icon="play">
                {t("hero.ctaSecondary")}
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Flower Image (same as footer) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative hidden lg:block"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/flower-about.png"
                alt=""
                fill
                sizes="50vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
