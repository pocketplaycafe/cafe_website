import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pocketplaycafe.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    '',
    '/game',
    '/cafe',
    '/gallery',
    '/about',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
