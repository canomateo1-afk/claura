"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { SectionLabel, SectionHeading } from "@/components/ui";
import { FadeInUp } from "@/components/animations";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * easeOut));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function CaseStudy() {
  const t = useTranslations("caseStudy");

  return (
    <section className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          {/* Content */}
          <div>
            <SectionLabel className="px-5 py-2 text-xs tracking-wide uppercase">
              {t("sectionLabel")}
            </SectionLabel>
            <SectionHeading
              highlightWords={["most", "importa"]}
              className="max-w-[520px]"
            >
              {t("title")}
            </SectionHeading>

            <FadeInUp delay={0.1}>
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mt-6 max-w-[520px]">
                <p>
                  {t("paragraph1")}
                </p>
                <p>
                  {t("paragraph2")}
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  {t("paragraph3")}
                </p>
              </div>
            </FadeInUp>

            {/* Stats */}
            <FadeInUp delay={0.2}>
              <div className="grid grid-cols-2 gap-6 mt-12 max-w-[520px]">
                <div className="rounded-2xl bg-[var(--color-cream-dark)] px-6 py-5 shadow-[var(--shadow-sm)]">
                  <div className="font-display text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                    <CountUp value={50} suffix="+" />
                  </div>
                  <p className="font-semibold text-sm">{t("stat1Title")}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{t("stat1Subtitle")}</p>
                </div>
                <div className="rounded-2xl bg-[var(--color-cream-dark)] px-6 py-5 shadow-[var(--shadow-sm)]">
                  <div className="font-display text-4xl font-light italic mb-2 text-[var(--color-brown)]">
                    <CountUp value={40} suffix="%" />
                  </div>
                  <p className="font-semibold text-sm">{t("stat2Title")}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{t("stat2Subtitle")}</p>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Visual */}
          <FadeInUp delay={0.3}>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-[var(--shadow-card)]">
                <Image
                  src="/images/case-study.png"
                  alt="Hamilton e-commerce automation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white/90 text-xl font-semibold drop-shadow">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/60 text-sm">
                      *
                    </span>
                    <span>Hamilton</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
