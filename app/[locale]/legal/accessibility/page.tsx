import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navigation, Footer } from "@/components/layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "accessibility.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AccessibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("accessibility");

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
            <h2 className="font-semibold text-xl mb-4">
              {t("commitment.title")}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("commitment.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">
              {t("standards.title")}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("standards.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">
              {t("features.title")}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {t("features.intro")}
            </p>
            <ul className="list-disc pl-6 text-[var(--color-text-secondary)] space-y-2">
              <li>{t("features.item1")}</li>
              <li>{t("features.item2")}</li>
              <li>{t("features.item3")}</li>
              <li>{t("features.item4")}</li>
              <li>{t("features.item5")}</li>
              <li>{t("features.item6")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">
              {t("feedback.title")}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("feedback.content")}{" "}
              <a
                href="mailto:accessibility@claura.ai"
                className="text-[var(--color-brown)] hover:underline"
              >
                accessibility@claura.ai
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
