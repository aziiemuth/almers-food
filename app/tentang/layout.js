export const metadata = {
  title: 'Keunggulan & Cerita Kami',
  description:
    'Kenali Almers Food Banyuwangi. Keunggulan Kami · 1. Dibuat Dengan Cinta · 2. Standar Higienis · 3. Rasa Premium · 4. Packaging Aman dan dikirim ke seluruh Indonesia.',
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
    title: 'Keunggulan & Cerita Kami - Almers Food',
    description:
      'Kenali Almers Food Banyuwangi. Keunggulan Kami · 1. Dibuat Dengan Cinta · 2. Standar Higienis · 3. Rasa Premium · 4. Packaging Aman dan dikirim ke seluruh Indonesia.',
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
