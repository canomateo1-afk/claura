"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel, Button } from "@/components/ui";
import { FadeInUp } from "@/components/animations";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

// Case study card images
const caseStudyImages = {
  hamilton: "/images/case-study.png",
  terra: "/images/case-study.png",
  savannah: "/images/case-study.png",
  snowflake: "/images/case-study.png",
};

interface CaseStudyCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

function CaseStudyCard({ id, title, category, description, image, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] 
      }}
      className="group cursor-pointer"
    >
      {/* Outer Card Container */}
      <div className="bg-[var(--color-cream-dark)] rounded-[28px] p-4 pb-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
        {/* Image Card */}
        <div className="aspect-[4/3] relative overflow-hidden rounded-[20px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Category badge - top right */}
          <div className="absolute top-4 right-4 z-10">
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-white/95 text-[var(--color-charcoal)] backdrop-blur-sm shadow-sm">
              {category}
            </span>
          </div>

          {/* Centered Logo/Title on image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 text-white drop-shadow-md">
              <span className="text-2xl">✱</span>
              <span className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                {title}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="pt-5 px-2 relative">
          <h3 className="font-display text-xl md:text-2xl font-normal italic text-[var(--color-charcoal)] mb-2">
            {title}
          </h3>
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed pr-14">
            {description}
          </p>
          
          {/* Arrow button - bottom right with outline style */}
          <motion.div
            className="absolute bottom-0 right-2 w-10 h-10 rounded-full border-2 border-[var(--color-charcoal)] flex items-center justify-center group-hover:bg-[var(--color-charcoal)] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-[var(--color-charcoal)] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudiesContent() {
  const t = useTranslations("caseStudies");
  // #region agent log
  const flowerContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const isLgScreen = screenWidth >= 1024;
    fetch('http://127.0.0.1:7244/ingest/7aa34515-378c-451f-85b1-00f38d477e98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CaseStudiesContent.tsx:useEffect',message:'Component mounted - checking screen size',data:{screenWidth,isLgScreen,hypothesisId:'H2'},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{});
    if (flowerContainerRef.current) {
      const rect = flowerContainerRef.current.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(flowerContainerRef.current);
      fetch('http://127.0.0.1:7244/ingest/7aa34515-378c-451f-85b1-00f38d477e98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CaseStudiesContent.tsx:useEffect',message:'Flower container dimensions',data:{width:rect.width,height:rect.height,display:computedStyle.display,visibility:computedStyle.visibility,hypothesisId:'H3'},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{});
      // Check for img element inside container
      const imgEl = flowerContainerRef.current.querySelector('img');
      if (imgEl) {
        fetch('http://127.0.0.1:7244/ingest/7aa34515-378c-451f-85b1-00f38d477e98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CaseStudiesContent.tsx:useEffect',message:'IMG element found',data:{src:imgEl.src,naturalWidth:imgEl.naturalWidth,naturalHeight:imgEl.naturalHeight,complete:imgEl.complete,hypothesisId:'H4'},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{});
      } else {
        fetch('http://127.0.0.1:7244/ingest/7aa34515-378c-451f-85b1-00f38d477e98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CaseStudiesContent.tsx:useEffect',message:'IMG element NOT found in container',data:{hypothesisId:'H4'},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{});
      }
    } else {
      fetch('http://127.0.0.1:7244/ingest/7aa34515-378c-451f-85b1-00f38d477e98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CaseStudiesContent.tsx:useEffect',message:'Flower container ref is NULL',data:{hypothesisId:'H3'},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{});
    }
    // Delayed check after 1 second
    setTimeout(() => {
      if (flowerContainerRef.current) {
        const imgEl = flowerContainerRef.current.querySelector('img');
        if (imgEl) {
          const imgRect = imgEl.getBoundingClientRect();
          fetch('http://127.0.0.1:7244/ingest/7aa34515-378c-451f-85b1-00f38d477e98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CaseStudiesContent.tsx:setTimeout',message:'IMG delayed check',data:{src:imgEl.src,naturalWidth:imgEl.naturalWidth,naturalHeight:imgEl.naturalHeight,complete:imgEl.complete,displayWidth:imgRect.width,displayHeight:imgRect.height,hypothesisId:'H4-delayed'},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{});
        }
      }
    }, 1000);
  }, []);
  // #endregion

  const caseStudies = [
    {
      id: "hamilton",
      title: t("hamilton.title"),
      category: t("hamilton.category"),
      description: t("hamilton.description"),
      image: caseStudyImages.hamilton,
    },
    {
      id: "terra",
      title: t("terra.title"),
      category: t("terra.category"),
      description: t("terra.description"),
      image: caseStudyImages.terra,
    },
    {
      id: "savannah",
      title: t("savannah.title"),
      category: t("savannah.category"),
      description: t("savannah.description"),
      image: caseStudyImages.savannah,
    },
    {
      id: "snowflake",
      title: t("snowflake.title"),
      category: t("snowflake.category"),
      description: t("snowflake.description"),
      image: caseStudyImages.snowflake,
    },
  ];

  return (
    <>
      {/* Hero Section - Same structure as AboutHero */}
      <section className="bg-[#f6f0e9] pt-32 pb-16 overflow-hidden">
        <div className="max-w-[var(--container-max-width)] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionLabel>{t("sectionLabel")}</SectionLabel>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] mb-6"
              >
                Real businesses,
                <br />
                <span className="font-light italic text-[var(--color-brown-muted)]">
                  real
                </span>{" "}
                results.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-[var(--color-text-secondary)] max-w-lg leading-relaxed mb-8"
              >
                {t("subtitle")}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button href="#book-a-call">{t("ctaButton")}</Button>
                <Button variant="secondary" href="/#how-we-work" icon="play">
                  {t("ctaSecondary")}
                </Button>
              </motion.div>
            </div>

            {/* Right Column - Flower Image (same structure as AboutHero) */}
            <motion.div
              ref={flowerContainerRef}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative hidden lg:block"
            >
              {/* #region agent log */}
              {(() => { fetch('http://127.0.0.1:7244/ingest/7aa34515-378c-451f-85b1-00f38d477e98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CaseStudiesContent.tsx:render',message:'Flower container rendering',data:{hypothesisId:'H5'},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{}); return null; })()}
              {/* #endregion */}
              <div className="relative w-full h-[500px]">
                <Image
                  src="/images/flower-case-studies.png"
                  alt="Claura case studies decorative floral element"
                  fill
                  sizes="50vw"
                  className="object-contain object-center"
                  priority
                  unoptimized
                  onLoad={() => {
                    // #region agent log
                    fetch('http://127.0.0.1:7244/ingest/7aa34515-378c-451f-85b1-00f38d477e98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CaseStudiesContent.tsx:Image.onLoad',message:'Image loaded successfully',data:{src:'/images/flower-case-studies.png',hypothesisId:'H6-fix-unoptimized'},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{});
                    // #endregion
                  }}
                  onError={(e) => {
                    // #region agent log
                    fetch('http://127.0.0.1:7244/ingest/7aa34515-378c-451f-85b1-00f38d477e98',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'CaseStudiesContent.tsx:Image.onError',message:'Image failed to load',data:{src:'/images/flower-case-studies.png',error:String(e),hypothesisId:'H6-fix-unoptimized'},timestamp:Date.now(),sessionId:'debug-session'})}).catch(()=>{});
                    // #endregion
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-6 bg-[var(--color-cream)]">
        <div className="max-w-[var(--container-max-width)] mx-auto">
          {/* How We Work Label */}
          <FadeInUp>
            <div className="mb-12">
              <SectionLabel>{t("howWeWorkLabel")}</SectionLabel>
            </div>
          </FadeInUp>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                {...study}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudiesContent;
