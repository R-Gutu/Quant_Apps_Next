
import type { Metadata } from 'next'
import { Locale, routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { headers } from 'next/headers'
import { Viewport } from 'next';
import SchemaOrg from './_components/SchemaOrg';
import ChatwootWidget from './_components/ChatwootWidget';


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


export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  const headersList = await headers();
  const fullUrl = headersList.get('x-url') || "";
  
  const url = new URL(fullUrl);
  const path = url.pathname;
  
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
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/favicon.svg'
    },
    authors: [{ name: "Quant Apps" }],
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
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
        'x-default': `https://${baseDomain}/en${pathWithoutLocale}`,
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
          <ChatwootWidget />
        </Providers>
     
      </body>
      <GoogleAnalytics gaId="G-DK457M1DLQ" />
    </html>
  );
}