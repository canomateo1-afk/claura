"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionLabel, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ComparisonCardProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  variant: "dark" | "gradient";
}

function ComparisonCard({
  title,
  description,
  tags,
  imageSrc,
  variant,
}: ComparisonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative rounded-[28px] overflow-hidden aspect-[1064/768] w-full flex flex-col",
        variant === "dark"
          ? "bg-[var(--color-charcoal)]"
          : "bg-gradient-to-br from-[#e85d04] via-[#f48c06] to-[#dc2f02]"
      )}
    >
      {/* Full-card background image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={`${title} comparison card background`}
          fill
          className="object-cover"
        />
        {/* Subtle gradient overlay for text legibility */}
        <div
          className={cn(
            "absolute inset-0",
            variant === "dark"
              ? "bg-gradient-to-b from-black/30 via-transparent to-black/40"
              : "bg-gradient-to-b from-black/10 via-transparent to-black/30"
          )}
        />
      </div>

      {/* Tags with edge fade */}
      <section
        className="w-full overflow-hidden relative z-10 py-4"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,0), rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0))",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0), rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0))",
        }}
      >
        <ul
          className={cn(
            "flex items-center gap-4 w-max",
            variant === "dark" ? "animate-marquee" : "animate-marquee-reverse"
          )}
        >
          {[...tags, ...tags].map((tag, index) => (
            <li
              key={`${tag}-${index}`}
              className="h-[38px] px-5 text-[14px] font-medium rounded-[10px] whitespace-nowrap backdrop-blur-[32px] flex items-center text-white"
              style={{ backgroundColor: "rgba(240, 231, 221, 0.32)" }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>

      <div className="flex-1" />

      {/* Title - positioned center of card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <h3 className="font-display text-[44px] md:text-6xl text-center mt-6 drop-shadow-lg text-white">
          {title}
        </h3>
      </div>

      {/* Description at bottom */}
      <div className="p-6 pt-0 relative z-10">
        <p className="text-[15px] text-white/85 leading-relaxed text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Comparison() {
  const t = useTranslations("comparison");

  const otherAgenciesTags = [
    t("otherAgencies.tag1"),
    t("otherAgencies.tag2"),
    t("otherAgencies.tag3"),
  ];

  const clauraTags = [
    t("claura.tag1"),
    t("claura.tag2"),
    t("claura.tag3"),
    t("claura.tag4"),
  ];

  return (
    <section className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <SectionLabel>{t("sectionLabel")}</SectionLabel>
          <SectionHeading
            align="center"
            subtext={t("description")}
            highlightWords={["typical", "típica"]}
          >
            {t("title")}
          </SectionHeading>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <ComparisonCard
            title={t("otherAgencies.title")}
            description={t("otherAgencies.description")}
            tags={otherAgenciesTags}
            imageSrc="/images/other-agencies.png"
            variant="dark"
          />
          <ComparisonCard
            title={t("claura.title")}
            description={t("claura.description")}
            tags={clauraTags}
            imageSrc="/images/flower.png"
            variant="gradient"
          />
        </div>
      </div>
    </section>
  );
}

export default Comparison;
