export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/katalog',
          '/katalog/',
          '/tentang',
          '/tentang/',
          '/review',
          '/review/',
          '/sitemap.xml',
        ],
        disallow: ['/api/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/katalog', '/tentang', '/review'],
        disallow: ['/api/', '/_next/', '/private/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: 'https://almersfood.web.id/sitemap.xml',
    host: 'https://almersfood.web.id',
  };
}
