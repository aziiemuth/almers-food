export const metadata = {
  title: 'Review & Testimoni Pelanggan',
  description:
    'Ulasan jujur pelanggan Almers Food. "Pastelnya renyah, isian gurih..." - Kak Ayu. "Kroketnya lembut, creamy..." - Mas Budi. Baca testimoni selengkapnya.',
  keywords: [
    'review almers food',
    'testimoni almers food banyuwangi',
    'review frozen food banyuwangi',
    'ulasan frozen food banyuwangi',
    'almers food banyuwangi terpercaya',
  ],
  alternates: {
    canonical: 'https://almersfood.web.id/review',
  },
  openGraph: {
    title: 'Review & Testimoni Pelanggan - Almers Food Banyuwangi',
    description:
      'Ulasan jujur pelanggan Almers Food Banyuwangi. Rasa lezat, higienis, halal, dan dipercaya pelanggan.',
    url: 'https://almersfood.web.id/review',
    siteName: 'Almers Food Banyuwangi',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://almersfood.web.id/foto/og-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Review Pelanggan Almers Food Banyuwangi',
      },
      {
        url: 'https://almersfood.web.id/foto/og-image-square.jpg',
        width: 600,
        height: 600,
        type: 'image/jpeg',
        alt: 'Review Pelanggan Almers Food Banyuwangi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Review & Testimoni Pelanggan - Almers Food Banyuwangi',
    description:
      'Ulasan jujur pelanggan Almers Food Banyuwangi. Rasa lezat, higienis, halal, dan dipercaya pelanggan.',
    images: ['https://almersfood.web.id/foto/og-image.jpg'],
  },
};

export default function Layout({ children }) {
  return children;
}
