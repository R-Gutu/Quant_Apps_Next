import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: `https://${process.env.SITE_URL}`,
    sitemap: `https://${process.env.SITE_URL}/sitemap.xml`,
  }
}