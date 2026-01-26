"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, DotGrid } from "@/components/ui";
import { Marquee } from "@/components/animations";

const clientLogos = [
  { name: "CALIFORNIA", style: "font-bold tracking-widest" },
  { name: "venice.", style: "font-normal" },
  { name: "theo", style: "font-display italic" },
  { name: "Amsterdam", style: "font-normal" },
  { name: "Hamilton", style: "font-normal" },
];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex flex-col bg-[var(--color-warm-white)] pt-24">
      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[var(--color-brown-muted)] text-[var(--color-brown-muted)]"
              />
            ))}
          </div>
          <span className="text-sm text-[var(--color-text-secondary)]">
            {t("trustBadge")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.1] max-w-[1000px] mb-6"
        >
          <span className="block">{t("titlePart1")} <span className="font-light italic text-[var(--color-brown-muted)]">{t("titleHighlight")}</span></span>
          <span className="block">{t("titlePart2")}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[var(--color-text-secondary)] max-w-[600px] leading-relaxed mb-8"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button calLink="mateo-cano/construye-y-automatiza-con-ia">
            {t("ctaPrimary")}
          </Button>
          <Button variant="secondary" href="#how-we-work" icon="play">
            {t("ctaSecondary")}
          </Button>
        </motion.div>
      </div>

      {/* Hero Image with Dot Grid Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-[var(--container-max-width)] mx-auto px-6 mb-8"
      >
        <div className="relative aspect-[2.5/1] rounded-[var(--radius-3xl)] overflow-hidden group cursor-pointer">
          {/* Base Image */}
          <Image
            src="/images/flower.png"
            alt="Decorative hero image"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
            priority
          />
          
          {/* Dot Grid Overlay */}
          <DotGrid
            rows={9}
            cols={23}
            dotSize={12}
            gap={48}
            animated={true}
            className="z-10"
          />
        </div>
      </motion.div>

      {/* Logo Section */}
      <div className="py-8">
        <div className="max-w-[var(--container-max-width)] mx-auto px-6 lg:px-8">
          <div className="flex items-center">
            <p className="text-sm text-[var(--color-text-muted)] whitespace-nowrap shrink-0 pr-8 md:pr-16">
              {t("brandsLabel").split(":")[0]}:<br />{t("brandsLabel").split(":")[1]?.trim() || ""}
            </p>
            <div className="flex-1 overflow-hidden">
              <Marquee speed={30} pauseOnHover>
                {clientLogos.map((logo) => (
                  <span
                    key={logo.name}
                    className={`text-xl md:text-2xl text-[var(--color-text-muted)]/40 hover:text-[var(--color-text-muted)] transition-colors whitespace-nowrap ${logo.style}`}
                  >
                    {logo.name === "Hamilton" && <span className="mr-1">✱</span>}
                    {logo.name}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
