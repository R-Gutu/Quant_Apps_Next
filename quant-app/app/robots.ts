import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: `https://${'www.quant-apps.com'}`,
    sitemap: `https://${'www.quant-apps.com'}/sitemap.xml`,
  }
}