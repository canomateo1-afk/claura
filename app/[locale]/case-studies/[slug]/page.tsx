import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import { CaseStudyDetail } from "@/components/sections/CaseStudyDetail";

const validSlugs = ["hamilton", "terra", "savannah", "snowflake"];

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!validSlugs.includes(slug)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: `caseStudyDetail.${slug}`,
  });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main>
        <CaseStudyDetail slug={slug} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
