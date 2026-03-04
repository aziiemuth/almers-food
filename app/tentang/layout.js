export const metadata = {
  title: 'Tentang Kami | Almers Food — Produsen Frozen Food Rumahan Banyuwangi',
  description:
    'Kenali Almers Food, usaha frozen food rumahan di Banyuwangi yang berdiri dengan semangat menyajikan makanan beku berkualitas. Produk homemade, higienis, halal, dengan harga terjangkau. Melayani pengiriman ke seluruh Indonesia.',
  keywords: [
    'tentang almers food',
    'almers food banyuwangi',
    'frozen food rumahan banyuwangi',
    'produsen frozen food banyuwangi',
    'usaha frozen food banyuwangi',
    'frozen food homemade banyuwangi',
  ],
  alternates: {
    canonical: 'https://almersfood.web.id/tentang',
  },
  openGraph: {
    title: 'Tentang Almers Food — Frozen Food Rumahan Terbaik di Banyuwangi',
    description:
      'Profil Almers Food: produsen frozen food homemade di Banyuwangi. Kami mengutamakan kualitas, kebersihan, dan rasa yang konsisten.',
    url: 'https://almersfood.web.id/tentang',
    images: [
      {
        url: '/foto/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tentang Almers Food Banyuwangi',
      },
    ],
  },
};

export default function Layout({ children }) {
  return children;
}
