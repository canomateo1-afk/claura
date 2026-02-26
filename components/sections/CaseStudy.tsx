"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const headerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [leftPad, setLeftPad] = useState(24);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Measure header's left edge to align carousel
  const measurePadding = useCallback(() => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setLeftPad(rect.left);
    }
  }, []);

  useEffect(() => {
    measurePadding();
    window.addEventListener("resize", measurePadding);
    return () => window.removeEventListener("resize", measurePadding);
  }, [measurePadding]);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = (el.querySelector("a") as HTMLElement)?.offsetWidth ?? 280;
    el.scrollBy({ left: dir === "right" ? cardWidth + 16 : -(cardWidth + 16), behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[var(--color-cream-dark)]">
      {/* Header inside container */}
      <div ref={headerRef} className="max-w-[var(--container-max-width)] mx-auto px-6">
        <FadeInUp>
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel className="bg-[#E5DCD0]">{t("sectionLabel")}</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-tight mt-4">
                {t("title")}{" "}
                <span className="font-light italic text-[var(--color-brown-muted)]">
                  {t("titleHighlight")}
                </span>
              </h2>
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2 mb-1 shrink-0">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Anterior"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-cream)] shadow-sm transition-all duration-200 disabled:opacity-30 hover:bg-white disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 text-[var(--color-text-primary)]" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Siguiente"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-cream)] shadow-sm transition-all duration-200 disabled:opacity-30 hover:bg-white disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4 text-[var(--color-text-primary)]" />
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* Full-width carousel — left edge aligned with header via JS measurement */}
      <FadeInUp delay={0.1}>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingLeft: `${leftPad}px`,
            paddingRight: `${leftPad}px`,
          }}
        >
          {allCaseStudies.map((cs, index) => (
            <Link
              key={cs.id}
              href={`/case-studies/${cs.id}`}
              className="shrink-0 w-[72vw] sm:w-[44vw] md:w-[30vw] lg:w-[21vw] max-w-[300px] snap-start"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: [0.4, 0, 0.2, 1] }}
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
    </section>
  );
}

export default CaseStudy;
