import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navigation, Footer } from "@/components/layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "termsOfService.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("termsOfService");

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 px-6 bg-[var(--color-cream)]">
        <article className="max-w-[800px] mx-auto">
          <h1 className="font-display text-4xl font-normal mb-8">
            {t("title")}
          </h1>
          <p className="text-[var(--color-text-muted)] mb-8">
            {t("lastUpdated")}
          </p>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">{t("section1.title")}</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("section1.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">{t("section2.title")}</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("section2.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">{t("section3.title")}</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {t("section3.intro")}
            </p>
            <ul className="list-disc pl-6 text-[var(--color-text-secondary)] space-y-2">
              <li>{t("section3.item1")}</li>
              <li>{t("section3.item2")}</li>
              <li>{t("section3.item3")}</li>
              <li>{t("section3.item4")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">{t("section4.title")}</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("section4.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">{t("section5.title")}</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("section5.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">{t("section6.title")}</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("section6.content")}{" "}
              <a
                href="mailto:legal@claura.ai"
                className="text-[var(--color-brown)] hover:underline"
              >
                legal@claura.ai
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
