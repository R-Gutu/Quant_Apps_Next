import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2025-01-25');

  return [
    {
      url: 'https://www.quant-apps.com/en',
      lastModified,
      priority: 1.0,
      alternates: {
        languages: {
          ru: 'https://www.quant-apps.com/ru',
          ro: 'https://www.quant-apps.com/ro',
        },
      },
    },
    {
      url: 'https://www.quant-apps.com/en/services',
      lastModified,
      priority: 1.0,
      alternates: {
        languages: {
          ru: 'https://www.quant-apps.com/ru/services',
          ro: 'https://www.quant-apps.com/ro/services',
        },
      },
    },
    {
      url: 'https://www.quant-apps.com/en/about-us',
      lastModified,
      priority: 0.8,
      alternates: {
        languages: {
          ru: 'https://www.quant-apps.com/ru/about-us',
          ro: 'https://www.quant-apps.com/ro/about-us',
        },
      },
    },
    {
      url: 'https://www.quant-apps.com/en/contact-us',
      lastModified,
      priority: 0.8,
      alternates: {
        languages: {
          ru: 'https://www.quant-apps.com/ru/contact-us',
          ro: 'https://www.quant-apps.com/ro/contact-us',
        },
      },
    },
    {
      url: 'https://www.quant-apps.com/en/faqs',
      lastModified,
      priority: 0.5,
      alternates: {
        languages: {
          ru: 'https://www.quant-apps.com/ru/faqs',
          ro: 'https://www.quant-apps.com/ro/faqs',
        },
      },
    },
  ];
}