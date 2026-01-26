import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navigation, Footer } from "@/components/layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cookiePolicy.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cookiePolicy");

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
              {t("whatAreCookies.title")}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("whatAreCookies.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">
              {t("howWeUse.title")}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {t("howWeUse.intro")}
            </p>
            <ul className="list-disc pl-6 text-[var(--color-text-secondary)] space-y-2">
              <li>
                <strong>{t("howWeUse.essential").split(":")[0]}:</strong>
                {t("howWeUse.essential").split(":")[1]}
              </li>
              <li>
                <strong>{t("howWeUse.analytics").split(":")[0]}:</strong>
                {t("howWeUse.analytics").split(":")[1]}
              </li>
              <li>
                <strong>{t("howWeUse.preference").split(":")[0]}:</strong>
                {t("howWeUse.preference").split(":")[1]}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">
              {t("managing.title")}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("managing.content")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-semibold text-xl mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {t("contact.content")}{" "}
              <a
                href="mailto:privacy@claura.ai"
                className="text-[var(--color-brown)] hover:underline"
              >
                privacy@claura.ai
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
