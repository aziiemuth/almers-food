export const metadata = {
  title: 'Katalog Frozen Food Banyuwangi | Harga Terbaik — Almers Food',
  description:
    'Lihat katalog lengkap frozen food Almers Food Banyuwangi. Daftar harga Roti Maryam, Pastel, Kroket, Samosa, Lumpur Kenari, dan Brota. Homemade, higienis, halal. Bisa kirim luar kota.',
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
    canonical: 'https://almersfood.vercel.app/katalog',
  },
  openGraph: {
    title: 'Katalog Frozen Food Banyuwangi | Harga Terbaik Almers Food',
    description:
      'Cek daftar harga dan menu frozen food Almers Food Banyuwangi. Roti Maryam, Pastel, Kroket, Samosa — homemade, higienis, halal.',
    url: 'https://almersfood.vercel.app/katalog',
    images: [
      {
        url: '/foto/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Katalog Frozen Food Almers Food Banyuwangi',
      },
    ],
  },
};

export default function Layout({ children }) {
  return children;
}
