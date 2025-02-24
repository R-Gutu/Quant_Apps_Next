import type { MetadataRoute } from 'next'

// Define available languages
const LANGUAGES = ['en', 'ru', 'ro'] as const
type Language = typeof LANGUAGES[number]

// Define available routes
const ROUTES = {
  home: '',
  services: 'services',
  projects: 'projects',
  process: 'process',
  about: 'about-us',
  careers: 'careers',
} as const
type Route = keyof typeof ROUTES

// Define page priorities
const PRIORITIES = {
  HIGH: 1.0,
  MEDIUM: 0.8,
  LOW: 0.5,
} as const

// Helper to generate URL
const generateUrl = (lang: Language, path: string) => 
  `https://${'www.quant-apps.com'}/${lang}${path ? `/${path}` : ''}`

// Helper to generate alternates
const generateAlternates = (path: string) => ({
  languages: LANGUAGES.reduce((acc, lang) => {
    if (lang !== 'en') {
      acc[lang] = generateUrl(lang, path)
    }
    return acc
  }, {} as Record<Exclude<Language, 'en'>, string>),
})

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2025-01-25')

  const pages: Array<{
    route: Route
    priority: typeof PRIORITIES[keyof typeof PRIORITIES]
  }> = [
    { route: 'home', priority: PRIORITIES.HIGH },
    { route: 'services', priority: PRIORITIES.HIGH },
    { route: 'projects', priority: PRIORITIES.MEDIUM },
    { route: 'careers', priority: PRIORITIES.MEDIUM },
    { route: 'about', priority: PRIORITIES.MEDIUM },
    { route: 'process', priority: PRIORITIES.LOW },
  ]

  return pages.map(({ route, priority }) => ({
    url: generateUrl('en', ROUTES[route]),
    lastModified,
    priority,
    alternates: generateAlternates(ROUTES[route]),
  }))
}