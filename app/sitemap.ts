import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.cbdc.ac'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/', '/about', '/advertise', '/cross-border', '/currencies', '/faq', '/getting-ready',
    '/glossary', '/legal', '/news', '/programmes', '/programmes-to-watch', '/the-debate',
    '/timeline', '/tracker', '/watchlist', '/what-is-a-cbdc', '/whitepaper',
    '/legal/privacy', '/legal/terms', '/legal/cookies', '/legal/disclaimer',
    '/legal/research-methodology', '/legal/editorial-policy', '/legal/accessibility',
    '/legal/intellectual-property', '/legal/security', '/legal/external-links',
  ]
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date('2026-10-28') }))
}
