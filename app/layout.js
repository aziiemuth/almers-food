import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import ClientLayout from '@/components/ClientLayout';
import JsonLd from '@/components/JsonLd';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://almersfood.web.id'),
  title: {
    default: 'Almers Food - Toko Frozen Food Terlengkap & Halal Banyuwangi',
    template: '%s | Almers Food',
  },
  description:
    'Dapatkan produk Frozen Food Sehat yang diproduksi secara homemade, higienis, dan bersertifikat Halal. Tersedia Roti Maryam, Pastel, Kroket, Samosa, dan aneka snack beku.',
  keywords: [
    'almers food',
    'almers food banyuwangi',
    'frozen food banyuwangi',
    'toko frozen food banyuwangi',
    'jual frozen food banyuwangi',
    'frozen food murah banyuwangi',
    'frozen food rumahan banyuwangi',
    'makanan beku banyuwangi',
    'roti maryam banyuwangi',
    'pastel frozen banyuwangi',
    'kroket frozen banyuwangi',
    'samosa frozen banyuwangi',
    'snack beku banyuwangi',
    'kuliner banyuwangi',
    'oleh-oleh banyuwangi',
    'pesan frozen food banyuwangi',
  ],
  authors: [{ name: 'Almers Food' }],
  creator: 'Almers Food',
  publisher: 'Almers Food',
  alternates: {
    canonical: 'https://almersfood.web.id',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/menu.svg',
    apple: '/menu.svg',
  },
  openGraph: {
    title: 'Almers Food - Toko Frozen Food Terlengkap & Halal Banyuwangi',
    description:
      'Dapatkan produk Frozen Food Sehat yang diproduksi secara homemade, higienis, dan bersertifikat Halal. Tersedia Roti Maryam, Pastel, Kroket, Samosa, dan aneka snack beku.',
    url: 'https://almersfood.web.id',
    siteName: 'Almers Food Banyuwangi',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://almersfood.web.id/foto/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Almers Food Banyuwangi - Toko Frozen Food Terlengkap di Banyuwangi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Almers Food - Toko Frozen Food Terlengkap & Halal Banyuwangi',
    description:
      'Dapatkan produk Frozen Food Sehat yang diproduksi secara homemade, higienis, dan bersertifikat Halal.',
    images: ['https://almersfood.web.id/foto/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'jz_P257ZLIAhDUsXhwB_6RkLAvpiDExfsxjpLKUyMHM',
  },
  other: {
    'geo.region': 'ID-JI',
    'geo.placename': 'Banyuwangi, Jawa Timur',
    'geo.position': '-8.2192;114.3691',
    'ICBM': '-8.2192, 114.3691',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <JsonLd />
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
