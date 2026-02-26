import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";
import { CaseStudyDetail } from "@/components/sections/CaseStudyDetail";

const validSlugs = ["hamilton", "terra", "savannah", "snowflake", "loop", "spacepal", "remax"];

const bannerImages: Record<string, string> = {
  hamilton: "/images/cs-banner-1.jpg",
  terra: "/images/cs-banner-2.jpg",
  savannah: "/images/cs-banner-3.jpg",
  snowflake: "/images/cs-banner-4.jpg",
  loop: "/images/cs-banner-5.jpg",
  spacepal: "/images/cs-banner-1.jpg",
  remax: "/images/cs-banner-2.jpg",
};

export function generateStaticParams() {
  return validSlugs.flatMap((slug) => [
    { slug, locale: "en" },
    { slug, locale: "es" },
  ]);
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

  const title = t("metaTitle");
  const description = t("metaDescription");
  const bannerImage = bannerImages[slug];
  const canonicalUrl = `https://claura-ai.com/${locale}/case-studies/${slug}`;
  const alternateLocale = locale === "en" ? "es" : "en";

  return {
    metadataBase: new URL("https://claura-ai.com"),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      locale: locale === "en" ? "en_US" : "es_ES",
      alternateLocale: alternateLocale === "en" ? "en_US" : "es_ES",
      images: [
        {
          url: bannerImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [bannerImage],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": `https://claura-ai.com/en/case-studies/${slug}`,
        en: `https://claura-ai.com/en/case-studies/${slug}`,
        es: `https://claura-ai.com/es/case-studies/${slug}`,
      },
    },
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

  const t = await getTranslations({
    locale,
    namespace: `caseStudyDetail.${slug}`,
  });

  const title = t("metaTitle");
  const description = t("metaDescription");
  const bannerImage = `https://claura-ai.com${bannerImages[slug]}`;
  const pageUrl = `https://claura-ai.com/${locale}/case-studies/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: bannerImage,
    publisher: {
      "@type": "Organization",
      name: "Claura",
      url: "https://claura-ai.com",
    },
    url: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        <CaseStudyDetail slug={slug} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
