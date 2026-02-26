import { setRequestLocale } from "next-intl/server";
import { Navigation, Footer } from "@/components/layout";
import {
  Hero,
  Stats,
  Services,
  Testimonial,
  Comparison,
  CaseStudy,
  // Team,
  FAQ,
  CTA,
} from "@/components/sections";
import { PageLoader } from "@/components/animations";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageLoader>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Testimonial />
        <Comparison />
        <CaseStudy />
        {/* <Team /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </PageLoader>
  );
}
