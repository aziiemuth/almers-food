export const metadata = {
  title: 'Review Pelanggan | Testimoni Frozen Food Almers Food Banyuwangi',
  description:
    'Baca ulasan jujur pelanggan Almers Food Banyuwangi. Testimoni tentang kelezatan Roti Maryam, Pastel, Kroket, dan Samosa kami. Terbukti enak, higienis, dan pengiriman aman ke seluruh Indonesia.',
  keywords: [
    'review almers food',
    'testimoni almers food banyuwangi',
    'review frozen food banyuwangi',
    'ulasan frozen food banyuwangi',
    'almers food banyuwangi terpercaya',
  ],
  alternates: {
    canonical: 'https://almersfood.vercel.app/review',
  },
  openGraph: {
    title: 'Testimoni Pelanggan Almers Food Banyuwangi',
    description:
      'Ratusan pelanggan puas dengan rasa dan kualitas frozen food Almers Food Banyuwangi. Baca cerita mereka di sini.',
    url: 'https://almersfood.vercel.app/review',
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
