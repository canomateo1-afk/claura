"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui";
import { FadeInUp } from "@/components/animations";
import { ArrowLeft, Clock, TrendingUp, Users, Zap, ExternalLink, BookOpen, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";

const techLogoMap: Record<string, string> = {
  shopify: "/images/tech-logos/shopify.svg",
  openai: "/images/tech-logos/openai.svg",
  zapier: "/images/tech-logos/zapier.svg",
  slack: "/images/tech-logos/slack.svg",
  notion: "/images/tech-logos/notion.svg",
  googleanalytics: "/images/tech-logos/googleanalytics.svg",
  meta: "/images/tech-logos/meta.svg",
  googleads: "/images/tech-logos/googleads.svg",
  intercom: "/images/tech-logos/intercom.svg",
  instagram: "/images/tech-logos/instagram.svg",
  vercel: "/images/tech-logos/vercel.svg",
  google: "/images/tech-logos/google.svg",
  tiktok: "/images/tech-logos/tiktok.svg",
  reddit: "/images/tech-logos/reddit.svg",
  whatsapp: "/images/tech-logos/whatsapp.svg",
  nextdotjs: "/images/tech-logos/nextdotjs.svg",
  anthropic: "/images/tech-logos/anthropic.svg",
};

const allCaseStudies = [
  { id: "hamilton", title: "Hamilton", category: "Ecommerce" },
  { id: "terra", title: "Terra", category: "Alimentos y Bebidas" },
  { id: "savannah", title: "Savannah", category: "Marketing" },
  { id: "snowflake", title: "Snowflake", category: "Software" },
  { id: "loop", title: "Loop", category: "SaaS / Publicidad" },
  { id: "spacepal", title: "SpacePal", category: "Marketplace / Eventos" },
  { id: "remax", title: "Remax", category: "Real Estate / PropTech" },
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
  remax: {
    siteUrl: "https://www.remax.com.ar",
    tools: ["WhatsApp", "Telegram", "Instagram", "TikTok", "Facebook"],
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
  remax: [
    "Automatización de Contenido", "Bot de WhatsApp/Telegram", "Scraping de Medios",
    "Generación Multiformat", "Publicación Multiplataforma",
  ],
};

// Tech stack per case study
const caseStudyTechStack: Record<string, { name: string; icon: string }[]> = {
  hamilton: [
    { name: "Shopify", icon: "shopify" },
    { name: "ChatGPT", icon: "openai" },
    { name: "Zapier", icon: "zapier" },
    { name: "Slack", icon: "slack" },
  ],
  terra: [
    { name: "ChatGPT", icon: "openai" },
    { name: "Notion", icon: "notion" },
    { name: "Zapier", icon: "zapier" },
    { name: "Slack", icon: "slack" },
  ],
  savannah: [
    { name: "Google Analytics", icon: "googleanalytics" },
    { name: "Meta", icon: "meta" },
    { name: "Google Ads", icon: "googleads" },
    { name: "ChatGPT", icon: "openai" },
    { name: "Slack", icon: "slack" },
  ],
  snowflake: [
    { name: "ChatGPT", icon: "openai" },
    { name: "Intercom", icon: "intercom" },
    { name: "Slack", icon: "slack" },
    { name: "Notion", icon: "notion" },
  ],
  loop: [
    { name: "Meta", icon: "meta" },
    { name: "Instagram", icon: "instagram" },
    { name: "ComfyUI", icon: "comfyui" },
    { name: "ChatGPT", icon: "openai" },
    { name: "Vercel", icon: "vercel" },
  ],
  spacepal: [
    { name: "Google", icon: "google" },
    { name: "Meta", icon: "meta" },
    { name: "ChatGPT", icon: "openai" },
    { name: "TikTok", icon: "tiktok" },
    { name: "Reddit", icon: "reddit" },
    { name: "WhatsApp", icon: "whatsapp" },
    { name: "Next.js", icon: "nextdotjs" },
  ],
  remax: [
    { name: "WhatsApp", icon: "whatsapp" },
    { name: "Meta", icon: "meta" },
    { name: "Instagram", icon: "instagram" },
    { name: "TikTok", icon: "tiktok" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Claude", icon: "anthropic" },
  ],
};

const caseStudyImages: Record<string, string> = {
  hamilton: "/images/cs-banner-1.jpg",
  terra: "/images/cs-banner-2.jpg",
  savannah: "/images/cs-banner-3.jpg",
  snowflake: "/images/cs-banner-4.jpg",
  loop: "/images/cs-banner-5.jpg",
  spacepal: "/images/cs-banner-1.jpg",
  remax: "/images/cs-banner-2.jpg",
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
  const prevSlug = allCaseStudies[(currentIndex - 1 + allCaseStudies.length) % allCaseStudies.length].id;
  const nextSlug = allCaseStudies[(currentIndex + 1) % allCaseStudies.length].id;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-cream)] pt-32 pb-16 overflow-hidden">
        <div className="max-w-[var(--container-max-width)] mx-auto px-6 w-full">
          {/* Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[1/1] sm:aspect-[3/2] md:aspect-[16/6] rounded-[28px] overflow-hidden"
          >
            <Image
              src={caseStudyImages[slug]}
              alt={t("title")}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ filter: "brightness(0.85) saturate(1.75)" }}
              priority
            />
            {/* Gradient overlay for text legibility - bottom third only */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.35) 30%, transparent 55%)" }} />

            {/* Back button - top left */}
            <Link
              href="/case-studies"
              className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/90 backdrop-blur-sm text-sm font-medium text-[var(--color-charcoal)] hover:bg-white transition-colors shadow-sm"
            >
              {tCommon("backToStudies")}
            </Link>

            {/* Prev / Next navigation - top right */}
            <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
              <Link
                href={`/case-studies/${prevSlug}`}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-[var(--color-charcoal)]" />
              </Link>
              <Link
                href={`/case-studies/${nextSlug}`}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5 text-[var(--color-charcoal)]" />
              </Link>
            </div>

            {/* Content overlay - bottom left */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 z-10">
              <div className="flex items-end gap-3 mb-2 md:mb-3">
                <h1 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-normal leading-[1.1] text-white">
                  {t("title")}
                </h1>
                {extras?.siteUrl && (
                  <a
                    href={extras.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-1 shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/25 backdrop-blur-sm hover:bg-white/40 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                )}
              </div>
              <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
                {t("heroDescription")}
              </p>
            </div>
          </motion.div>

          {/* extras block removed — siteUrl now shown as icon inside hero image */}
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="pt-12 pb-20 px-6 bg-[var(--color-cream)]">
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

          {/* Our Strategy */}
          <FadeInUp delay={0.1}>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("strategyLabel")}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-[2.5rem] leading-[1.2] font-normal mb-6">
                  {t("strategyTitle")}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>{t("strategyP1")}</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* The Solution */}
          <FadeInUp delay={0.2}>
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
      <section className="pt-12 pb-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <FadeInUp>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("resultsLabel")}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-[2.5rem] leading-[1.2] font-normal mb-6">
                  {t("resultsTitle")}
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10">
                  <p>{t("resultsP1")}</p>
                  <p>{t("resultsP2")}</p>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="rounded-3xl bg-[var(--color-cream-dark)] px-7 py-6"
                    >
                      <div className="font-display text-4xl md:text-5xl font-normal mb-2 text-[var(--color-charcoal)]">
                        {t(`stat${n}Value`)}
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {t(`stat${n}Label`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services & Tech Stack */}
      {(services.length > 0 || techStack.length > 0) && (
        <section className="pt-12 pb-20 px-6 bg-[var(--color-cream)]">
          <div className="max-w-[var(--container-max-width)] mx-auto space-y-20">
            {/* Services */}
            {services.length > 0 && (
              <FadeInUp>
                <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
                  <div>
                    <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                      {tCommon("servicesLabel")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service) => (
                      <span
                        key={service}
                        className="h-[38px] px-5 text-[14px] font-medium rounded-[10px] whitespace-nowrap flex items-center text-[var(--color-charcoal)] bg-[var(--color-cream-dark)]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            )}

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <FadeInUp delay={0.1}>
                <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
                  <div>
                    <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                      {tCommon("techStackLabel")}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {techStack.map((tool) => {
                      const logoSrc = techLogoMap[tool.icon];
                      return (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2.5 h-[42px] px-5 rounded-[12px] bg-[var(--color-cream-dark)] border border-[var(--color-border)]"
                        >
                          {logoSrc ? (
                            <img
                              src={logoSrc}
                              alt={tool.name}
                              className="w-[18px] h-[18px] shrink-0 object-contain"
                            />
                          ) : (
                            <Sparkles className="w-[18px] h-[18px] shrink-0 text-[var(--color-charcoal)]" />
                          )}
                          <span className="text-[14px] font-medium text-[var(--color-charcoal)] whitespace-nowrap">
                            {tool.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </FadeInUp>
            )}
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="pt-12 pb-20 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <FadeInUp>
            <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-12">
              <div>
                <span className="text-sm text-[var(--color-text-secondary)] font-medium tracking-wide">
                  {tCommon("testimonialLabel")}
                </span>
              </div>
              <blockquote>
                <p className="font-display text-2xl md:text-3xl lg:text-[2.5rem] font-normal leading-snug text-[var(--color-charcoal)] mb-8">
                  &ldquo;{t("testimonialQuote")}&rdquo;
                </p>
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
            <div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
              {allCaseStudies
                .filter((cs) => cs.id !== slug)
                .slice(0, 4)
                .map((cs) => (
                  <Link key={cs.id} href={`/case-studies/${cs.id}`} className="shrink-0 w-[68vw] max-w-[260px] snap-start md:w-auto md:max-w-none">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      className="group bg-[var(--color-cream-dark)] rounded-[24px] p-3 pb-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 cursor-pointer"
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] relative overflow-hidden rounded-[16px]">
                        <Image
                          src={caseStudyImages[cs.id]}
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
                          <div className="flex items-center gap-1.5 text-white drop-shadow-md px-3 text-center">
                            <span className="font-display text-lg md:text-xl font-medium tracking-tight leading-tight">
                              {cs.title}
                            </span>
                          </div>
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
    </>
  );
}

export default CaseStudyDetail;
