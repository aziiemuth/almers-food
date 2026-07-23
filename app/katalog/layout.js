export const metadata = {
  title: 'Katalog Produk Frozen Food Homemade',
  description:
    'Lihat daftar lengkap produk Almers Food Banyuwangi. Roti Maryam Coklat & Original, Pastel Renyah, Kroket Creamy, Samosa Gurih, dan Lumpur Kenari.',
  keywords: [
    'katalog frozen food banyuwangi',
    'harga frozen food banyuwangi',
    'menu frozen food almers food',
    'jual roti maryam banyuwangi',
    'jual pastel frozen banyuwangi',
    'jual kroket banyuwangi',
    'jual samosa banyuwangi',
    'frozen food murah banyuwangi',
  ],
  alternates: {
    canonical: 'https://almersfood.web.id/katalog',
  },
  openGraph: {
    title: 'Katalog Produk Frozen Food - Almers Food Banyuwangi',
    description:
      'Lihat daftar lengkap produk Almers Food Banyuwangi. Roti Maryam Coklat & Original, Pastel Renyah, Kroket Creamy, Samosa Gurih, dan Lumpur Kenari.',
    url: 'https://almersfood.web.id/katalog',
    siteName: 'Almers Food Banyuwangi',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://almersfood.web.id/foto/og-image.webp',
        width: 1200,
        height: 630,
        type: 'image/webp',
        alt: 'Katalog Frozen Food Almers Food Banyuwangi',
      },
      {
        url: 'https://almersfood.web.id/foto/og-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Katalog Frozen Food Almers Food Banyuwangi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katalog Produk Frozen Food - Almers Food Banyuwangi',
    description:
      'Lihat daftar lengkap produk Almers Food Banyuwangi. Roti Maryam, Pastel, Kroket, Samosa, dan Lumpur Kenari.',
    images: ['https://almersfood.web.id/foto/og-image.webp'],
  },
};

export default function Layout({ children }) {
  return children;
}
