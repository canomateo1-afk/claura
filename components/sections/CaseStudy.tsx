"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui";
import { FadeInUp } from "@/components/animations";

const allCaseStudies = [
  { id: "hamilton", title: "Hamilton", category: "Ecommerce", image: "/images/cs-banner-1.jpg" },
  { id: "terra", title: "Terra", category: "Alimentos y Bebidas", image: "/images/cs-banner-2.jpg" },
  { id: "savannah", title: "Savannah", category: "Marketing", image: "/images/cs-banner-3.jpg" },
  { id: "snowflake", title: "Snowflake", category: "Software", image: "/images/cs-banner-4.jpg" },
  { id: "loop", title: "Loop", category: "SaaS / Publicidad", image: "/images/cs-banner-5.jpg" },
  { id: "spacepal", title: "SpacePal", category: "Marketplace / Eventos", image: "/images/cs-banner-1.jpg" },
  { id: "remax", title: "Remax", category: "Real Estate / PropTech", image: "/images/cs-banner-2.jpg" },
  { id: "pulse", title: "Pulse", category: "Music / Creator Economy", image: "/images/cs-banner-4.jpg" },
  { id: "soyandina", title: "Soy Andina", category: "Comunidad / Lifestyle", image: "/images/cs-banner-3.jpg" },
];

export function CaseStudy() {
  const t = useTranslations("caseStudy");
  const tCaseStudies = useTranslations("caseStudies");

  return (
    <section className="py-24 px-6 bg-[var(--color-cream-dark)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        {/* Header */}
        <FadeInUp>
          <div className="mb-12">
            <SectionLabel className="bg-[#E5DCD0]">{t("sectionLabel")}</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-tight mt-4">
              {t("title")}{" "}
              <span className="font-light italic text-[var(--color-brown-muted)]">
                {t("titleHighlight")}
              </span>
            </h2>
          </div>
        </FadeInUp>

        {/* Horizontal scroll carousel */}
        <FadeInUp delay={0.1}>
          <div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory -mx-6 px-6 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 lg:grid-cols-4">
            {allCaseStudies.map((cs, index) => (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.id}`}
                className="shrink-0 w-[72vw] max-w-[280px] snap-start md:w-auto md:max-w-none"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                  className="group bg-[var(--color-cream)] rounded-[24px] p-3 pb-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden rounded-[16px]">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: "brightness(0.85) saturate(1.75)" }}
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 text-xs font-medium rounded-lg bg-white/95 text-[var(--color-charcoal)] backdrop-blur-sm shadow-sm">
                        {cs.category}
                      </span>
                    </div>
                    {/* Title overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-lg md:text-xl font-medium tracking-tight leading-tight text-white drop-shadow-md px-3 text-center">
                        {cs.title}
                      </span>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="pt-3 px-1">
                    <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed line-clamp-2">
                      {tCaseStudies(`${cs.id}.description`)}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

export default CaseStudy;
