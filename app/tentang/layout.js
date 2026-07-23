export const metadata = {
  title: 'Tentang Kami - Produsen Frozen Food Higienis',
  description:
    'Kenali Almers Food Banyuwangi. Keunggulan Kami: Dibuat Secara Homemade dengan Cinta, Standar Higienis, Bersertifikat Halal, Rasa Premium, dan Pengiriman Aman.',
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
    title: 'Tentang Kami - Almers Food Banyuwangi',
    description:
      'Kenali Almers Food Banyuwangi. Keunggulan Kami: Dibuat Secara Homemade dengan Cinta, Standar Higienis, Bersertifikat Halal, Rasa Premium, dan Pengiriman Aman.',
    url: 'https://almersfood.web.id/tentang',
    siteName: 'Almers Food Banyuwangi',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://almersfood.web.id/foto/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Tentang Almers Food Banyuwangi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Kami - Almers Food Banyuwangi',
    description:
      'Kenali Almers Food Banyuwangi. Keunggulan Kami: Dibuat Secara Homemade dengan Cinta, Standar Higienis, Bersertifikat Halal, dan Rasa Premium.',
    images: ['https://almersfood.web.id/foto/og-image.png'],
  },
};

export default function Layout({ children }) {
  return children;
}
