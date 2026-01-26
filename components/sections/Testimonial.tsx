"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TextReveal } from "@/components/animations";

export function Testimonial() {
  const t = useTranslations("testimonial");

  return (
    <section className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[var(--radius-3xl)] overflow-hidden min-h-[400px] flex flex-col justify-end p-8 md:p-12"
        >
          {/* Background image */}
          <Image
            src="/images/testimonial-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-[700px]">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] text-white leading-tight mb-8">
              <TextReveal type="word" staggerDelay={0.08}>
                {t("quote")}
              </TextReveal>
            </h2>

            <div className="flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-lg">IO</span>
              </div>
              <div>
                <p className="font-semibold text-white">{t("authorName")}</p>
                <p className="text-sm text-white/70">{t("authorRole")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
