"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel, Button } from "@/components/ui";
import { FadeInUp } from "@/components/animations";
import { ArrowLeft, Clock, TrendingUp, Users, Zap, ExternalLink, BookOpen, ArrowUpRight, ChevronRight } from "lucide-react";
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

// Services provided per case study
const caseStudyServices: Record<string, string[]> = {
  hamilton: [
    "Content Generation", "Email Automation", "Customer Support AI",
    "Inventory Management", "Order Processing", "Workflow Automation",
  ],
  terra: [
    "Content Generation", "Demand Forecasting", "Subscription Management",
    "Customer Portal", "Delivery Optimization", "Supply Chain AI",
  ],
  savannah: [
    "Meta Ads", "Google Ads", "Automated Reporting",
    "Content Generation", "Campaign Setup", "Data Analytics",
  ],
  snowflake: [
    "Customer Onboarding", "Churn Prediction", "Content Generation",
    "Support Automation", "User Analytics", "Retention Systems",
  ],
  loop: [
    "Content Generation", "Meta Ads", "Auto-clipping", "Edition",
    "Multi cuentas", "Competitor Analysis", "AI Agent", "3D Rendering",
  ],
  spacepal: [
    "SEO", "Programmatic SEO", "Google Ads", "Meta Ads", "Multi cuentas",
    "Youtube Long form videos", "Auto-clipping", "LLM Presence",
    "Email Marketing", "WhatsApp Campaigns", "TikTok",
  ],
};

// Tech stack per case study
const caseStudyTechStack: Record<string, { name: string; color: string }[]> = {
  hamilton: [
    { name: "Shopify", color: "#96BF48" },
    { name: "ChatGPT", color: "#10A37F" },
    { name: "Zapier", color: "#FF4A00" },
    { name: "Slack", color: "#4A154B" },
  ],
  terra: [
    { name: "ChatGPT", color: "#10A37F" },
    { name: "Notion", color: "#000000" },
    { name: "Zapier", color: "#FF4A00" },
    { name: "Slack", color: "#4A154B" },
  ],
  savannah: [
    { name: "Google Analytics", color: "#E37400" },
    { name: "Meta", color: "#0081FB" },
    { name: "Google Ads", color: "#4285F4" },
    { name: "ChatGPT", color: "#10A37F" },
    { name: "Slack", color: "#4A154B" },
  ],
  snowflake: [
    { name: "ChatGPT", color: "#10A37F" },
    { name: "Intercom", color: "#6AFDEF" },
    { name: "Slack", color: "#4A154B" },
    { name: "Notion", color: "#000000" },
  ],
  loop: [
    { name: "Meta", color: "#0081FB" },
    { name: "Instagram", color: "#E4405F" },
    { name: "ComfyUI", color: "#7C3AED" },
    { name: "ChatGPT", color: "#10A37F" },
    { name: "Vercel", color: "#000000" },
  ],
  spacepal: [
    { name: "Google", color: "#4285F4" },
    { name: "Meta", color: "#0081FB" },
    { name: "ChatGPT", color: "#10A37F" },
    { name: "TikTok", color: "#000000" },
    { name: "Reddit", color: "#FF4500" },
    { name: "WhatsApp", color: "#25D366" },
    { name: "Next.js", color: "#000000" },
  ],
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

// Case studies with optional extra solution paragraph
const solutionP3Slugs = ["spacepal"];
const solutionP4Slugs = ["spacepal"];

export function CaseStudyDetail({ slug }: CaseStudyDetailProps) {
  const t = useTranslations(`caseStudyDetail.${slug}`);
  const tCommon = useTranslations("caseStudyDetail.common");
  const Icon = caseStudyIcons[slug] || TrendingUp;
  const extras = caseStudyExtras[slug];
  const tCaseStudies = useTranslations("caseStudies");
  const hasSolutionP3 = solutionP3Slugs.includes(slug);
  const hasSolutionP4 = solutionP4Slugs.includes(slug);
  const services = caseStudyServices[slug] || [];
  const techStack = caseStudyTechStack[slug] || [];
  const currentIndex = allCaseStudies.findIndex((cs) => cs.id === slug);
  const nextSlug = allCaseStudies[(currentIndex + 1) % allCaseStudies.length].id;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f6f0e9] pt-32 pb-16 overflow-hidden">
        <div className="max-w-[var(--container-max-width)] mx-auto px-6 w-full">
          {/* Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[2/1] md:aspect-[16/7] rounded-[28px] overflow-hidden"
          >
            <Image
              src={caseStudyImages[slug]}
              alt={t("title")}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/5" />

            {/* Back button - top left */}
            <Link
              href="/case-studies"
              className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/90 backdrop-blur-sm text-sm font-medium text-[var(--color-charcoal)] hover:bg-white transition-colors shadow-sm"
            >
              {tCommon("backToStudies")}
            </Link>

            {/* Next case study - top right */}
            <Link
              href={`/case-studies/${nextSlug}`}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5 text-[var(--color-charcoal)]" />
            </Link>

            {/* Content overlay - bottom left */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-10">
              <h1 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-normal leading-[1.1] text-white mb-2 md:mb-3">
                {t("title")}
              </h1>
              <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
                {t("heroDescription")}
              </p>
            </div>
          </motion.div>

          {/* Optional extras below hero card */}
          {extras && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-6"
            >
              {extras.siteUrl && (
                <a
                  href={extras.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brown)] hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  {extras.siteUrl.replace("https://", "")}
                </a>
              )}
              {extras.tools && (
                <div className="flex flex-wrap gap-2">
                  {extras.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-cream-dark)] text-[var(--color-charcoal)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto space-y-20">
          {/* The Challenge */}
          <FadeInUp>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("challengeLabel")}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-[2.5rem] leading-[1.2] font-normal mb-6">
                  {t("challengeTitle")}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>{t("challengeP1")}</p>
                  <p>{t("challengeP2")}</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* The Solution */}
          <FadeInUp delay={0.1}>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("solutionLabel")}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-[2.5rem] leading-[1.2] font-normal mb-6">
                  {t("solutionTitle")}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>{t("solutionP1")}</p>
                  <p>{t("solutionP2")}</p>
                  {hasSolutionP3 && <p>{t("solutionP3")}</p>}
                  {hasSolutionP4 && <p>{t("solutionP4")}</p>}
                </div>
              </div>
            </div>
          </FadeInUp>
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
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto mb-12">
              <p>{t("resultsP1")}</p>
              <p>{t("resultsP2")}</p>
            </div>
          </FadeInUp>

          {/* Stats Bar */}
          <FadeInUp delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="rounded-2xl bg-[var(--color-cream)] px-6 py-5 shadow-[var(--shadow-sm)] text-center">
                <div className="font-display text-3xl md:text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                  {t("stat1Value")}
                </div>
                <p className="font-semibold text-sm">{t("stat1Label")}</p>
              </div>
              <div className="rounded-2xl bg-[var(--color-cream)] px-6 py-5 shadow-[var(--shadow-sm)] text-center">
                <div className="font-display text-3xl md:text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                  {t("stat2Value")}
                </div>
                <p className="font-semibold text-sm">{t("stat2Label")}</p>
              </div>
              <div className="rounded-2xl bg-[var(--color-cream)] px-6 py-5 shadow-[var(--shadow-sm)] text-center">
                <div className="font-display text-3xl md:text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                  {t("stat3Value")}
                </div>
                <p className="font-semibold text-sm">{t("stat3Label")}</p>
              </div>
              <div className="rounded-2xl bg-[var(--color-cream)] px-6 py-5 shadow-[var(--shadow-sm)] text-center">
                <div className="font-display text-3xl md:text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                  {t("stat4Value")}
                </div>
                <p className="font-semibold text-sm">{t("stat4Label")}</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services & Tech Stack */}
      {(services.length > 0 || techStack.length > 0) && (
        <section className="py-14 px-6 bg-[var(--color-charcoal)] overflow-hidden">
          <div className="max-w-[var(--container-max-width)] mx-auto">
            {/* Services */}
            {services.length > 0 && (
              <FadeInUp>
                <div className="mb-12">
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-white mb-6">
                    {tCommon("servicesLabel")}
                  </h3>
                  {/* Marquee rows */}
                  <div
                    className="space-y-3"
                    style={{
                      maskImage:
                        "linear-gradient(to right, rgba(0,0,0,0), rgb(0,0,0) 8%, rgb(0,0,0) 92%, rgba(0,0,0,0))",
                      WebkitMaskImage:
                        "linear-gradient(to right, rgba(0,0,0,0), rgb(0,0,0) 8%, rgb(0,0,0) 92%, rgba(0,0,0,0))",
                    }}
                  >
                    {/* Row 1 */}
                    <div className="overflow-hidden">
                      <ul className="flex items-center gap-3 w-max animate-marquee">
                        {[...services, ...services, ...services, ...services].map((service, i) => (
                          <li
                            key={`r1-${i}`}
                            className="h-[38px] px-5 text-[14px] font-medium rounded-[10px] whitespace-nowrap backdrop-blur-[32px] flex items-center text-white"
                            style={{ backgroundColor: "rgba(240, 231, 221, 0.15)" }}
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Row 2 (reversed order, opposite direction) */}
                    <div className="overflow-hidden">
                      <ul className="flex items-center gap-3 w-max animate-marquee-reverse">
                        {[...[...services].reverse(), ...[...services].reverse(), ...[...services].reverse(), ...[...services].reverse()].map(
                          (service, i) => (
                            <li
                              key={`r2-${i}`}
                              className="h-[38px] px-5 text-[14px] font-medium rounded-[10px] whitespace-nowrap backdrop-blur-[32px] flex items-center text-white"
                              style={{ backgroundColor: "rgba(240, 231, 221, 0.15)" }}
                            >
                              {service}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            )}

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <FadeInUp delay={0.1}>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-white mb-6">
                    {tCommon("techStackLabel")}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    {techStack.map((tool) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2.5 h-[42px] px-5 rounded-[12px] bg-white/10 backdrop-blur-[32px] border border-white/5"
                      >
                        <span
                          className="w-[18px] h-[18px] rounded-[5px] shrink-0"
                          style={{ backgroundColor: tool.color }}
                        />
                        <span className="text-[14px] font-medium text-white whitespace-nowrap">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            )}
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="py-20 px-6 bg-[var(--color-cream-dark)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <FadeInUp>
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
          </FadeInUp>
        </div>
      </section>

      {/* Related Stories */}
      <section className="py-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <FadeInUp>
            <div className="text-center mb-14">
              <BookOpen className="w-10 h-10 text-[var(--color-brown-muted)] mx-auto mb-5" strokeWidth={1.5} />
              <h2 className="font-display text-3xl md:text-4xl font-normal text-[var(--color-charcoal)]">
                {tCommon("relatedTitle")}
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {allCaseStudies
                .filter((cs) => cs.id !== slug)
                .slice(0, 4)
                .map((cs) => (
                  <Link key={cs.id} href={`/case-studies/${cs.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      className="group bg-[var(--color-cream-dark)] rounded-[28px] p-5 pb-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between min-h-[200px]"
                    >
                      {/* Top: title + description */}
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-normal italic text-[var(--color-charcoal)] mb-2">
                          {cs.title}
                        </h3>
                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed pr-10">
                          {tCaseStudies(`${cs.id}.description`)}
                        </p>
                      </div>

                      {/* Bottom: badge left + arrow right */}
                      <div className="flex items-center justify-between mt-5">
                        <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white text-[var(--color-charcoal)] shadow-sm">
                          {cs.category}
                        </span>
                        <motion.div
                          className="w-10 h-10 rounded-full border-2 border-[var(--color-charcoal)] flex items-center justify-center group-hover:bg-[var(--color-charcoal)] transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowUpRight className="w-5 h-5 text-[var(--color-charcoal)] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                        </motion.div>
                      </div>
                    </motion.div>
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
