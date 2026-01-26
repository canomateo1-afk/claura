"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/navigation";

export function CTA() {
  const t = useTranslations("cta");
  const [selectedService, setSelectedService] = useState("aiAssessment");
  const [selectedChallenge, setSelectedChallenge] = useState("manualTasks");

  const serviceOptions = [
    { key: "aiAssessment", label: t("services.aiAssessment") },
    { key: "workflowAutomation", label: t("services.workflowAutomation") },
    { key: "customAITools", label: t("services.customAITools") },
    { key: "trainingSupport", label: t("services.trainingSupport") },
    { key: "implementingAI", label: t("services.implementingAI") },
    { key: "allAbove", label: t("services.allAbove") },
  ];

  const challengeOptions = [
    { key: "manualTasks", label: t("challenges.manualTasks") },
    { key: "unclearStart", label: t("challenges.unclearStart") },
    { key: "previousFailed", label: t("challenges.previousFailed") },
    { key: "scaleOperations", label: t("challenges.scaleOperations") },
  ];

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
              alt=""
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

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-cream-dark)] rounded-[var(--radius-3xl)] p-8 md:p-10"
          >
            <form className="space-y-6">
              {/* Name & Email */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t("form.namePlaceholder")}
                  required
                  className="w-full px-5 py-4 bg-[var(--color-cream)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brown)]"
                />
                <input
                  type="email"
                  placeholder={t("form.emailPlaceholder")}
                  required
                  className="w-full px-5 py-4 bg-[var(--color-cream)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brown)]"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  {t("form.servicesLabel")}
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((option) => (
                    <motion.button
                      key={option.key}
                      type="button"
                      onClick={() => setSelectedService(option.key)}
                      className={cn(
                        "px-4 py-2 text-sm rounded-xl border transition-colors cursor-pointer",
                        selectedService === option.key
                          ? "bg-[var(--color-charcoal)] text-white border-[var(--color-charcoal)]"
                          : "bg-transparent text-[var(--color-text-primary)] border-[var(--color-charcoal)]/20 hover:border-[var(--color-charcoal)]/40"
                      )}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Challenge Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  {t("form.challengeLabel")}
                </label>
                <div className="flex flex-wrap gap-2">
                  {challengeOptions.map((option) => (
                    <motion.button
                      key={option.key}
                      type="button"
                      onClick={() => setSelectedChallenge(option.key)}
                      className={cn(
                        "px-4 py-2 text-sm rounded-xl border transition-colors cursor-pointer",
                        selectedChallenge === option.key
                          ? "bg-[var(--color-charcoal)] text-white border-[var(--color-charcoal)]"
                          : "bg-transparent text-[var(--color-text-primary)] border-[var(--color-charcoal)]/20 hover:border-[var(--color-charcoal)]/40"
                      )}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <textarea
                placeholder={t("form.messagePlaceholder")}
                rows={4}
                className="w-full px-5 py-4 bg-[var(--color-cream)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brown)] resize-none"
              />

              {/* Submit */}
              <Button type="submit" icon="arrow" className="w-full" size="lg">
                {t("form.submitButton")}
              </Button>

              {/* Disclaimer */}
              <p className="text-xs text-center text-[var(--color-text-muted)]">
                {t("form.disclaimer")}{" "}
                <Link href="/legal/terms-of-service" className="underline hover:text-[var(--color-text-secondary)]">
                  {t("form.termsLink")}
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
