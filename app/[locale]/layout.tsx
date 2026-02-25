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
    keywords: locale === 'es' ? [
      "agencia de IA",
      "automatización de contenido",
      "sistemas de contenido",
      "agencia de automatización Argentina",
      "consultoría de IA",
      "automatización de procesos",
      "marketing con IA",
      "contenido automatizado",
    ] : [
      "AI agency",
      "content automation",
      "AI content systems",
      "AI consulting",
      "workflow automation",
      "AI implementation",
      "artificial intelligence agency",
      "automated content marketing",
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
    '@type': ['Organization', 'ProfessionalService'],
    name: 'Claura',
    description: locale === 'en' 
      ? 'AI Agency helping businesses automate content workflows and implement AI systems that actually work.'
      : 'Agencia de IA que ayuda a empresas a automatizar sus sistemas de contenido e implementar IA que realmente funciona.',
    url: baseUrl,
    logo: `${baseUrl}/images/og-image.png`,
    email: 'mateo@claura-ai.com',
    foundingDate: '2024',
    sameAs: [
      'https://www.instagram.com/mateocano_ia/',
      'https://www.tiktok.com/@mate_cano',
      'https://www.linkedin.com/in/mateocano/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'mateo@claura-ai.com',
      availableLanguage: ['English', 'Spanish'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR',
    },
    areaServed: [
      { '@type': 'Country', name: 'Argentina' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    serviceType: locale === 'es' ? [
      'Automatización de Contenido',
      'Consultoría de IA',
      'Sistemas de Contenido con IA',
      'Automatización de Procesos',
    ] : [
      'Content Automation',
      'AI Consulting',
      'AI Content Systems',
      'Workflow Automation',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Content Automation',
      'Machine Learning',
      'Marketing Automation',
      'AI Implementation',
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
