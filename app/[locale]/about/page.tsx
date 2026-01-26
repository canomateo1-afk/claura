import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navigation, Footer } from "@/components/layout";
import {
  AboutHero,
  AboutStats,
  AboutTestimonial,
  // Team,
  FAQ,
  CTA,
} from "@/components/sections";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({
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
        {/* Hero - Mission Statement */}
        <AboutHero />

        {/* Stats - The AI agency built for you */}
        <AboutStats />

        {/* Testimonial - Sarah Chen */}
        <AboutTestimonial />

        {/* Team Section - Hidden for now */}
        {/* <Team /> */}

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
