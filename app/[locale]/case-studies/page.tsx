import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import { CaseStudiesContent } from "@/components/sections/CaseStudiesContent";

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

  return (
    <>
      <Navigation />
      <main>
        <CaseStudiesContent />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
