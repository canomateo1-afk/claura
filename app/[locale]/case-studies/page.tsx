import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navigation, Footer } from "@/components/layout";
import { SectionLabel, SectionHeading, Button } from "@/components/ui";
import { CTA } from "@/components/sections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "caseStudies.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("caseStudies");

  const caseStudies = [
    {
      id: "hamilton",
      title: t("hamilton.title"),
      category: t("hamilton.category"),
      description: t("hamilton.description"),
      stats: [
        { value: t("hamilton.stat1Value"), label: t("hamilton.stat1Label") },
        { value: t("hamilton.stat2Value"), label: t("hamilton.stat2Label") },
      ],
      color: "from-orange-200 to-coral-200",
    },
    {
      id: "brightpath",
      title: t("brightpath.title"),
      category: t("brightpath.category"),
      description: t("brightpath.description"),
      stats: [
        { value: t("brightpath.stat1Value"), label: t("brightpath.stat1Label") },
        { value: t("brightpath.stat2Value"), label: t("brightpath.stat2Label") },
      ],
      color: "from-blue-200 to-cyan-200",
    },
    {
      id: "nexus-tech",
      title: t("nexusTech.title"),
      category: t("nexusTech.category"),
      description: t("nexusTech.description"),
      stats: [
        { value: t("nexusTech.stat1Value"), label: t("nexusTech.stat1Label") },
        { value: t("nexusTech.stat2Value"), label: t("nexusTech.stat2Label") },
      ],
      color: "from-purple-200 to-pink-200",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 px-6 bg-[var(--color-cream)]">
          <div className="max-w-[var(--container-max-width)] mx-auto">
            <SectionLabel>{t("sectionLabel")}</SectionLabel>
            <SectionHeading
              highlightWords={["results", "resultados"]}
              subtext={t("subtitle")}
            >
              {t("title")}
            </SectionHeading>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 px-6 bg-[var(--color-cream)]">
          <div className="max-w-[var(--container-max-width)] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-[var(--color-cream-dark)] rounded-[var(--radius-card)] overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  {/* Image placeholder */}
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${study.color} flex items-center justify-center`}
                  >
                    <span className="text-6xl opacity-30">📊</span>
                  </div>

                  <div className="p-6">
                    <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide">
                      {study.category}
                    </span>
                    <h3 className="font-semibold text-lg mt-2 mb-3">
                      {study.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                      {study.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-6 mb-4">
                      {study.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="font-display text-2xl font-light italic">
                            {stat.value}
                          </div>
                          <div className="text-xs text-[var(--color-text-muted)]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button variant="ghost" size="sm" icon="arrow">
                      {t("readMore")}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
