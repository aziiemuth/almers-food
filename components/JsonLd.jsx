export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Almers Food',
    image: 'https://almersfood.vercel.app/foto/Background Slider 1.png',
    '@id': 'https://almersfood.vercel.app',
    url: 'https://almersfood.vercel.app',
    telephone: '087806554701',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Belitung No.65, Lateng',
      addressLocality: 'Banyuwangi',
      addressRegion: 'Jawa Timur',
      postalCode: '68413',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.2192,
      longitude: 114.3691,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '21:00',
    },
    sameAs: ['https://instagram.com/almersfood'], // Add actual social links if available
    priceRange: 'Rp 10.000 - Rp 100.000',
    servesCuisine: 'Frozen Food',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
