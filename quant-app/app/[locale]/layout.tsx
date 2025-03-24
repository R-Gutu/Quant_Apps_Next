
import type { Metadata } from 'next'
import { Locale, routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { headers } from 'next/headers'
import { Viewport } from 'next';
import SchemaOrg from './_components/SchemaOrg';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
});

import "./globals.css";


import Footer from "./_components/Footer";
import AppToolbar from "./_components/AppToolbar"
import Providers from '@/app/[locale]/Providers';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}


export async function generateMetadata({ params, searchParams }: {
  params: { slug?: string[], locale?: string },
  searchParams: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  const t = await getTranslations('metadata');
  const headersList = await headers();
  const fullUrl = headersList.get('x-url') || "";
  
  // Extract domain and path
  const url = new URL(fullUrl);
  const path = url.pathname;
  
  // Build page-specific title and description
  // You can use params.slug to determine which page you're on
  let pageTitle = t('title');
  let pageDescription = t('description');
  
  // Example of how to customize metadata for specific pages
  if (params.slug) {
    // For pages like /blog/[slug]
    if (params.slug[0] === 'blog' && params.slug.length > 1) {
      // You could fetch blog post data here
      pageTitle = `${params.slug[1]} | ${t('title')}`;
      pageDescription = `Read about ${params.slug[1]} | ${t('description')}`;
    }
    // Add more conditions for other page types
  }
  
  // Build URLs for all languages
  const baseDomain = 'www.quant-apps.com';
  const pathWithoutLocale = path.replace(/^\/(en|ru|ro)/, '');
  
  return {
    robots: {
      index: true,
      googleBot: {
        index: true,
      }
    },
    title: pageTitle,
    description: pageDescription,
    icons: {
      icon: '/favicon.svg'
    },
    authors: [{ name: "Quant Apps" }],
    keywords: t('keywords'),
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: fullUrl,
      type: "website",
      images: [
        {
          url: 'https://www.quant-apps.com/icons/logo.svg',
          width: 1200,
          height: 630,
          alt: 'Quant-Apps Preview Image',
        }]
    },
    alternates: {
      languages: {
        'x-default': `https://${baseDomain}${pathWithoutLocale}`,
        en: `https://${baseDomain}/en${pathWithoutLocale}`,
        ru: `https://${baseDomain}/ru${pathWithoutLocale}`,
        ro: `https://${baseDomain}/ro${pathWithoutLocale}`,
      },
      canonical: fullUrl,
    }
  };
}



export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  videoModal: React.ReactNode;
  talkModal: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  return (
    <html lang={locale} className={`${inter.variable}`}>
      <body
        className="antialiased relative bg-[var(--bg-color)]"
      >
        <SchemaOrg />
        <Providers>
          <AppToolbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-DK457M1DLQ" />
    </html>
  );
}