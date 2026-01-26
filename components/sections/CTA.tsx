"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section id="book-a-call" className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Side - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[var(--radius-3xl)] overflow-hidden min-h-[600px] flex flex-col justify-between p-8 md:p-12"
          >
            {/* Background Image */}
            <Image
              src="/images/book-call-flower.png"
              alt="Decorative floral background for booking section"
              fill
              className="object-cover"
              priority
            />
            
            
            {/* Top - Trust Badge */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-white text-white"
                  />
                ))}
              </div>
              <span className="text-sm text-white/90">
                {t("trustBadge")}
              </span>
            </div>

            {/* Center - Main Content */}
            <div className="relative z-10 text-center">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white leading-tight mb-4">
                {t("title")}
              </h2>
              <p className="text-white/80 max-w-[400px] mx-auto">
                {t("description")}
              </p>
            </div>

            {/* Bottom - Client Logos Marquee */}
            <div className="relative z-10 overflow-hidden">
              <motion.div
                className="flex items-center gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-12">
                    <span className="font-display text-white/70 text-xl italic">thrive</span>
                    <span className="font-medium text-white/70 text-lg">venice.</span>
                    <span className="font-bold text-white/70 text-sm tracking-[0.2em] uppercase">California</span>
                    <span className="font-display text-white/70 text-xl italic">thrive</span>
                    <span className="font-medium text-white/70 text-lg">venice.</span>
                    <span className="font-bold text-white/70 text-sm tracking-[0.2em] uppercase">California</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-cream-dark)] rounded-[var(--radius-3xl)] min-h-[600px] p-8 md:p-12 flex flex-col justify-center items-center text-center"
          >
            <div className="max-w-md">
              <h3 className="font-display text-2xl md:text-3xl text-[var(--color-text-primary)] mb-4">
                {t("formTitle")}
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-8">
                {t("formSubtitle")}
              </p>
              <motion.button
                data-cal-namespace="construye-y-automatiza-con-ia"
                data-cal-link="mateo-cano/construye-y-automatiza-con-ia"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="inline-flex items-center justify-center gap-2 px-8 py-4 h-14 bg-[var(--color-charcoal)] text-white rounded-lg font-medium text-base hover:bg-[var(--color-charcoal-light)] transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>{t("scheduleButton")}</span>
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
