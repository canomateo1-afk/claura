"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel, Button } from "@/components/ui";
import { FadeInUp } from "@/components/animations";
import { ArrowLeft, Clock, TrendingUp, Users, Zap, ExternalLink, BookOpen, Link2 } from "lucide-react";
import { Link } from "@/i18n/navigation";

const allCaseStudies = [
  { id: "hamilton", title: "Hamilton", category: "Ecommerce" },
  { id: "terra", title: "Terra", category: "Alimentos y Bebidas" },
  { id: "savannah", title: "Savannah", category: "Marketing" },
  { id: "snowflake", title: "Snowflake", category: "Software" },
  { id: "loop", title: "Loop", category: "SaaS / Publicidad" },
  { id: "spacepal", title: "SpacePal", category: "Marketplace / Eventos" },
];

// Case studies that have optional extra fields
const caseStudyExtras: Record<string, { siteUrl?: string; tools?: string[] }> = {
  loop: {
    siteUrl: "https://www.adloop.app",
    tools: ["Instagram", "Facebook", "Meta"],
  },
  spacepal: {
    siteUrl: "https://www.space-pal.com",
    tools: ["SEO Programático", "Reddit", "TikTok", "Email", "WhatsApp"],
  },
};

const caseStudyImages: Record<string, string> = {
  hamilton: "/images/case-study.png",
  terra: "/images/case-study.png",
  savannah: "/images/case-study.png",
  snowflake: "/images/case-study.png",
  loop: "/images/case-study.png",
  spacepal: "/images/case-study.png",
};

const caseStudyIcons: Record<string, typeof Clock> = {
  hamilton: TrendingUp,
  terra: Zap,
  savannah: Users,
  snowflake: Clock,
};

interface CaseStudyDetailProps {
  slug: string;
}

export function CaseStudyDetail({ slug }: CaseStudyDetailProps) {
  const t = useTranslations(`caseStudyDetail.${slug}`);
  const tCommon = useTranslations("caseStudyDetail.common");
  const Icon = caseStudyIcons[slug] || TrendingUp;
  const extras = caseStudyExtras[slug];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f6f0e9] pt-32 pb-16 overflow-hidden">
        <div className="max-w-[var(--container-max-width)] mx-auto px-6 w-full">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">{tCommon("backToStudies")}</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionLabel variant="medium">{t("category")}</SectionLabel>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] mb-4"
              >
                {t("title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-display text-xl font-light italic text-[var(--color-brown-muted)] mb-6"
              >
                {t("tagline")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-[var(--color-text-secondary)] max-w-lg leading-relaxed mb-8"
              >
                {t("heroDescription")}
              </motion.p>

              {extras?.siteUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mb-4"
                >
                  <a
                    href={extras.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brown)] hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {extras.siteUrl.replace("https://", "")}
                  </a>
                </motion.div>
              )}

              {extras?.tools && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.28 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {extras.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-cream-dark)] text-[var(--color-charcoal)] border border-[var(--color-cream-dark)]"
                    >
                      {tool}
                    </span>
                  ))}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button href="#book-a-call">{tCommon("ctaButton")}</Button>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-[var(--shadow-card)]">
                <Image
                  src={caseStudyImages[slug]}
                  alt={t("title")}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white drop-shadow-md">
                    <span className="text-2xl">&#10033;</span>
                    <span className="font-display text-3xl md:text-4xl font-medium tracking-tight">
                      {t("title")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="rounded-2xl bg-[var(--color-cream-dark)] px-6 py-5 shadow-[var(--shadow-sm)] text-center">
                <div className="font-display text-3xl md:text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                  {t("stat1Value")}
                </div>
                <p className="font-semibold text-sm">{t("stat1Label")}</p>
              </div>
              <div className="rounded-2xl bg-[var(--color-cream-dark)] px-6 py-5 shadow-[var(--shadow-sm)] text-center">
                <div className="font-display text-3xl md:text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                  {t("stat2Value")}
                </div>
                <p className="font-semibold text-sm">{t("stat2Label")}</p>
              </div>
              <div className="rounded-2xl bg-[var(--color-cream-dark)] px-6 py-5 shadow-[var(--shadow-sm)] text-center">
                <div className="font-display text-3xl md:text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                  {t("stat3Value")}
                </div>
                <p className="font-semibold text-sm">{t("stat3Label")}</p>
              </div>
              <div className="rounded-2xl bg-[var(--color-cream-dark)] px-6 py-5 shadow-[var(--shadow-sm)] text-center">
                <div className="font-display text-3xl md:text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                  {t("stat4Value")}
                </div>
                <p className="font-semibold text-sm">{t("stat4Label")}</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* The Challenge */}
            <FadeInUp>
              <div>
                <SectionLabel variant="medium">{tCommon("challengeLabel")}</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl font-normal leading-tight mb-6 mt-4">
                  {t("challengeTitle")}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>{t("challengeP1")}</p>
                  <p>{t("challengeP2")}</p>
                </div>
              </div>
            </FadeInUp>

            {/* The Solution */}
            <FadeInUp delay={0.1}>
              <div>
                <SectionLabel variant="medium">{tCommon("solutionLabel")}</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl font-normal leading-tight mb-6 mt-4">
                  {t("solutionTitle")}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>{t("solutionP1")}</p>
                  <p>{t("solutionP2")}</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-[var(--color-cream-dark)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <SectionLabel variant="medium">{tCommon("resultsLabel")}</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-normal leading-tight mt-4">
                {t("resultsTitle")}
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
              <p>{t("resultsP1")}</p>
              <p>{t("resultsP2")}</p>
            </div>
          </FadeInUp>

          {/* Testimonial */}
          <FadeInUp delay={0.2}>
            <div className="mt-16 py-16">
              <blockquote className="max-w-3xl mx-auto text-center">
                <div className="w-full h-px bg-[var(--color-border)] mb-12" />
                <p className="font-display text-2xl md:text-3xl lg:text-4xl font-normal leading-snug text-[var(--color-charcoal)] mb-10">
                  &ldquo;{t("testimonialQuote")}&rdquo;
                </p>
                <div className="w-full h-px bg-[var(--color-border)] mb-10" />
                <footer>
                  <p className="text-[var(--color-charcoal)] font-medium text-sm mb-1">{t("testimonialAuthor")}</p>
                  <p className="text-[var(--color-text-secondary)] text-xs">{t("testimonialRole")}</p>
                </footer>
              </blockquote>
            </div>
          </FadeInUp>
        </div>
      </section>
      {/* Related Stories */}
      <section className="py-20 px-6 bg-[var(--color-charcoal)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <FadeInUp>
            <div className="text-center mb-14">
              <BookOpen className="w-10 h-10 text-white/80 mx-auto mb-5" strokeWidth={1.5} />
              <h2 className="font-display text-3xl md:text-4xl font-normal text-white">
                {tCommon("relatedTitle")}
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {allCaseStudies
                .filter((cs) => cs.id !== slug)
                .slice(0, 4)
                .map((cs) => (
                  <Link key={cs.id} href={`/case-studies/${cs.id}`}>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors duration-200 cursor-pointer h-full flex flex-col justify-between min-h-[140px]">
                      <p className="text-white text-sm font-medium leading-snug mb-6">
                        {cs.title}
                      </p>
                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <Link2 className="w-3.5 h-3.5" />
                        <span>{tCommon("caseStudyTag")}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}

export default CaseStudyDetail;
