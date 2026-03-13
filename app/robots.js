export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // typically you want to hide admin and API routes from search engines
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
