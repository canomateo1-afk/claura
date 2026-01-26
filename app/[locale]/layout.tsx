import type { Metadata } from "next";
import { Instrument_Serif, Inter, Halant } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { CalProvider } from "@/components/CalProvider";
import "../globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://claura-ai.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const alternateLocale = locale === 'en' ? 'es' : 'en';

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: [
      "AI agency",
      "automation",
      "business efficiency",
      "AI consulting",
      "workflow automation",
      "AI implementation",
      locale === 'es' ? "agencia de IA" : "artificial intelligence",
      locale === 'es' ? "automatización de procesos" : "process automation",
    ],
    authors: [{ name: "Claura" }],
    creator: "Claura",
    publisher: "Claura",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'es': `${baseUrl}/es`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: messages.metadata.ogTitle,
      description: messages.metadata.ogDescription,
      type: "website",
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: alternateLocale === 'en' ? 'en_US' : 'es_ES',
      url: `${baseUrl}/${locale}`,
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
      title: messages.metadata.ogTitle,
      description: messages.metadata.ogDescription,
      images: ['/images/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Claura',
    description: locale === 'en' 
      ? 'AI Agency helping businesses automate workflows and implement AI systems that actually work.'
      : 'Agencia de IA que ayuda a empresas a automatizar flujos de trabajo e implementar sistemas de IA que realmente funcionan.',
    url: baseUrl,
    logo: `${baseUrl}/images/og-image.png`,
    sameAs: [
      'https://www.instagram.com/mateocano_ia/',
      'https://www.tiktok.com/@mate_cano',
      'https://www.linkedin.com/in/mateocano/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['English', 'Spanish'],
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: [
      'AI Consulting',
      'Workflow Automation',
      'AI Implementation',
      'Business Process Automation',
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} ${halant.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <CalProvider>
            {children}
          </CalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
