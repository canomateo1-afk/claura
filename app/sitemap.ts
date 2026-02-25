import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://claura-ai.com'
  const locales = ['en', 'es']
  
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/case-studies', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/case-studies/hamilton', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/case-studies/terra', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/case-studies/savannah', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/case-studies/snowflake', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/case-studies/loop', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/case-studies/spacepal', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/book-a-call', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/legal/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/legal/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/legal/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/legal/accessibility', priority: 0.3, changeFrequency: 'yearly' as const },
  ]
  
  return routes.flatMap(route => 
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  )
}
