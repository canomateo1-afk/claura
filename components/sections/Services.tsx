"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui";
import { cn } from "@/lib/utils";
import { CornerDownRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function Services() {
  const t = useTranslations("services");
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "discover",
      number: t("discover.number"),
      title: t("discover.title"),
      description: t("discover.description"),
      image: "/images/service-discover-v2.png",
    },
    {
      id: "build",
      number: t("build.number"),
      title: t("build.title"),
      description: t("build.description"),
      image: "/images/service-build.png",
    },
    {
      id: "deploy",
      number: t("deploy.number"),
      title: t("deploy.title"),
      description: t("deploy.description"),
      image: "/images/service-deploy.png",
    },
    {
      id: "optimize",
      number: t("optimize.number"),
      title: t("optimize.title"),
      description: t("optimize.description"),
      image: "/images/service-optimize.png",
    },
  ];

  const activeService = services[activeTab];

  return (
    <section id="services" className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        {/* Section Header - Centered */}
        <div className="text-center mb-16">
          <SectionLabel>{t("sectionLabel")}</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-tight mb-4"
          >
            {t("title")}{" "}
            <span className="font-light italic text-[var(--color-brown-muted)]">{t("titleHighlight")}</span>{" "}
            {t("titleEnd")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[var(--color-text-secondary)] max-w-[700px] mx-auto leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Services Tabs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Tab List */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setActiveTab(index)}
                onFocus={() => setActiveTab(index)}
                className={cn(
                  "w-full text-left py-4 px-6 rounded-xl transition-all duration-300 flex items-baseline",
                  activeTab === index
                    ? "bg-[var(--color-cream-dark)]"
                    : "hover:bg-[var(--color-cream-dark)]/50"
                )}
                whileHover={{ x: activeTab === index ? 0 : 4 }}
              >
                <span
                  className={cn(
                    "font-display text-[clamp(2rem,5vw,3.5rem)] transition-colors duration-300",
                    activeTab === index
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-muted)]/40"
                  )}
                >
                  {service.title}
                </span>
                <sup
                  className={cn(
                    "text-sm ml-1 transition-colors duration-300",
                    activeTab === index
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-muted)]/40"
                  )}
                >
                  {service.number}
                </sup>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full max-w-[520px] mx-auto lg:mx-0 rounded-[var(--radius-3xl)] overflow-hidden mb-6">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2">
                  {activeService.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                  {activeService.description}
                </p>

                <Link
                  href="/book-a-call"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brown)] transition-colors"
                >
                  <CornerDownRight className="w-4 h-4" />
                  {t("bookFreeCall")}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
