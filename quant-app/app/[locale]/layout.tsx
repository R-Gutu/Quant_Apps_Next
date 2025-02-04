import type { Metadata } from 'next'
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Poppins, Inter } from "next/font/google";
import localFont from 'next/font/local'
import { GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.ttf",
  variable: '--font-clash-display'
})

import "./globals.css";
import "@/styles/mainpage.css"
import "@/styles/seoSection.css"
import "@/styles/faqPage.css"
import "@/styles/nextProjectSection.css"
import "@/styles/footer.css"
import "@/styles/talkPopup.css"
import "@/styles/workingProcess.css"
import "@/styles/aboutPage.css"
import "@/styles/contactUsPage.css"
import "@/styles/swiper.css";
import "@/styles/header.css";
import "@/styles/services.css";
import "@/styles/whatWeOfferSection.css";
import "@/styles/main.css"


import Footer from "./_components/Footer";
import AppToolbar from "./_components/AppToolbar"


export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/favicon.svg'
    },
    viewport: "width=device-width, initial-scale=1.0",
    authors: [{ name: "Quant Apps" }],
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://${'www.quant-apps.com'}`,
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
        'x-default': `https://${'www.quant-apps.com'}`,
        en: `https://${'www.quant-apps.com'}/en`,
        ru: `https://${'www.quant-apps.com'}/ru`,
        ro: `https://${'www.quant-apps.com'}/ro`,
      },
      canonical: './',
    }
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Quant-Apps",
  "url": "https://www.quant-apps.com",
  "logo": "https://www.quant-apps.com/logo.svg",
  "description": "Quant-Apps specializes in iOS and Android app development, web development, backend solutions, business CRM, and UI/UX design.",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61571073299478",
    "https://www.instagram.com/quantapps_/",
    "https://www.linkedin.com/company/quant-apps",
    "https://www.tiktok.com/@quantapps",
    "https://t.me/quantapps",
    "https://wa.me/37369882331"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "iOS App Development",
      "serviceType": "Mobile Development",
      "description": "We build cutting-edge iOS applications with seamless user experiences and high performance."
    },
    {
      "@type": "Service",
      "name": "Android App Development",
      "serviceType": "Mobile Development",
      "description": "Our Android app development services focus on intuitive design, scalability, and functionality."
    },
    {
      "@type": "Service",
      "name": "Web Development",
      "serviceType": "Software Development",
      "description": "We create robust, scalable web applications that deliver high-quality digital experiences."
    },
    {
      "@type": "Service",
      "name": "Servers & Backend Solutions",
      "serviceType": "Infrastructure",
      "description": "We design and optimize backend architectures to support scalable and high-performance applications."
    },
    {
      "@type": "Service",
      "name": "Business CRM Solutions",
      "serviceType": "Business Software",
      "description": "Custom CRM solutions tailored to streamline business operations and enhance customer relationships."
    },
    {
      "@type": "Service",
      "name": "UI/UX Design",
      "serviceType": "Design",
      "description": "User-centric UI/UX design services to create engaging and intuitive digital experiences."
    }
  ]
}

export default async function RootLayout({
  children,
  params,
  videoModal,
  talkModal,
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

  const messages = await getMessages();
  return (
    <html lang={locale} className={`${poppins.variable} ${clashDisplay.variable} ${inter.variable}`}>
      <body
        className="antialiased relative"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <AppToolbar />
          {children}
          {videoModal}
          {talkModal}
          <Footer />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-DK457M1DLQ" />
    </html>
  );
}