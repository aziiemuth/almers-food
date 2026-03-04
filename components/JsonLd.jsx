export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'FoodStore'],
        '@id': 'https://almersfood.vercel.app/#business',
        name: 'Almers Food Banyuwangi',
        alternateName: 'Almers Food',
        description:
          'Almers Food adalah toko frozen food di Banyuwangi yang menyediakan berbagai produk makanan beku berkualitas dengan harga terjangkau. Kami menjual Roti Maryam, Pastel, Kroket, Samosa, dan aneka snack beku homemade yang higienis dan halal.',
        url: 'https://almersfood.vercel.app',
        telephone: '+6287806554701',
        image: [
          'https://almersfood.vercel.app/foto/og-image.png',
          'https://almersfood.vercel.app/foto/Background%20Slider%201.png',
        ],
        logo: {
          '@type': 'ImageObject',
          url: 'https://almersfood.vercel.app/menu.svg',
          width: 512,
          height: 512,
        },
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
        hasMap: 'https://maps.google.com/?q=Almers+Food+Banyuwangi',
        areaServed: [
          {
            '@type': 'City',
            name: 'Banyuwangi',
          },
          {
            '@type': 'Country',
            name: 'Indonesia',
          },
        ],
        openingHoursSpecification: [
          {
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
        ],
        priceRange: 'Rp 15.000 - Rp 40.000',
        currenciesAccepted: 'IDR',
        paymentAccepted: 'Cash, Transfer Bank, COD',
        servesCuisine: ['Frozen Food', 'Makanan Beku', 'Snack'],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '50',
          bestRating: '5',
          worstRating: '1',
        },
        sameAs: [
          'https://www.instagram.com/almersfood',
          'https://almersfood.vercel.app',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+6287806554701',
          contactType: 'customer service',
          areaServed: 'ID',
          availableLanguage: 'Indonesian',
          contactOption: 'TollFree',
        },
        keywords:
          'frozen food banyuwangi, toko frozen food banyuwangi, almers food, roti maryam banyuwangi, pastel frozen, kroket frozen, samosa banyuwangi',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://almersfood.vercel.app/#website',
        url: 'https://almersfood.vercel.app',
        name: 'Almers Food Banyuwangi',
        description:
          'Website resmi Almers Food — toko frozen food di Banyuwangi yang menyediakan produk makanan beku berkualitas dengan harga terjangkau.',
        publisher: {
          '@id': 'https://almersfood.vercel.app/#business',
        },
        inLanguage: 'id-ID',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://almersfood.vercel.app/katalog?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://almersfood.vercel.app/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Beranda',
            item: 'https://almersfood.vercel.app',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Katalog Frozen Food',
            item: 'https://almersfood.vercel.app/katalog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Review Pelanggan',
            item: 'https://almersfood.vercel.app/review',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Tentang Kami',
            item: 'https://almersfood.vercel.app/tentang',
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
