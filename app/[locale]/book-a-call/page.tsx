import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navigation, Footer } from "@/components/layout";
import { CTA } from "@/components/sections";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://claura-ai.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bookACall.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${baseUrl}/${locale}/book-a-call`,
      languages: {
        'en': `${baseUrl}/en/book-a-call`,
        'es': `${baseUrl}/es/book-a-call`,
        'x-default': `${baseUrl}/en/book-a-call`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      url: `${baseUrl}/${locale}/book-a-call`,
      siteName: "Claura",
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Claura - AI Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t("title"),
      description: t("description"),
      images: ['/images/og-image.png'],
    },
  };
}

export default async function BookACallPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navigation />
      <main className="pt-24">
        <CTA />
      </main>
      <Footer />
    </>
  );
}
