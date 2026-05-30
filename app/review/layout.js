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
    title: 'Review & Testimoni Pelanggan - Almers Food',
    description:
      'Ulasan jujur pelanggan Almers Food. "Pastelnya renyah, isian gurih..." - Kak Ayu. "Kroketnya lembut, creamy..." - Mas Budi. Baca testimoni selengkapnya.',
    url: 'https://almersfood.web.id/review',
    images: [
      {
        url: '/foto/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Review Pelanggan Almers Food Banyuwangi',
      },
    ],
  },
};

export default function Layout({ children }) {
  return children;
}
