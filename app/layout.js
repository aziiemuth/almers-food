import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import ClientLayout from '@/components/ClientLayout';

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
  title: {
    default: 'Almers Food — Frozen Food Banyuwangi | Praktis, Rasa Berkelas',
    template: '%s | Almers Food Banyuwangi',
  },
  description:
    'Pusat frozen food Banyuwangi premium. Jual Roti Maryam, Pastel, Kroket, Samosa, dan aneka snack beku. Home made, higienis, halal, dan siap kirim ke seluruh Indonesia.',
  keywords: [
    'frozen food banyuwangi',
    'jual frozen food banyuwangi',
    'frozen food rumahan banyuwangi',
    'roti maryam banyuwangi',
    'pastel frozen banyuwangi',
    'kroket frozen banyuwangi',
    'samosa frozen banyuwangi',
    'kuliner banyuwangi',
    'oleh-oleh banyuwangi',
    'almers food',
  ],
  authors: [{ name: 'Almers Food' }],
  creator: 'Almers Food',
  publisher: 'Almers Food',
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
    title: 'Almers Food — Frozen Food Banyuwangi | Praktis & Premium',
    description: 'Jual frozen food rumahan di Banyuwangi. Roti maryam, pastel, kroket, samosa. Siap goreng & kirim luar kota. Rasa berkelas harga pas.',
    url: 'https://almersfood.vercel.app',
    siteName: 'Almers Food',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/foto/Background Slider 1.png',
        width: 1200,
        height: 630,
        alt: 'Almers Food - Frozen Food Banyuwangi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Almers Food — Frozen Food Banyuwangi',
    description: 'Frozen food premium asli Banyuwangi. Roti Maryam, Pastel, Kroket. Siap kirim!',
    images: ['/foto/Background Slider 1.png'],
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
  // Geo-tags for Local SEO (Banyuwangi coordinates)
  other: {
    'geo.region': 'ID-JI', // East Java
    'geo.placename': 'Banyuwangi',
    'geo.position': '-8.2192;114.3691', // Approx lat/long for Banyuwangi
    'ICBM': '-8.2192, 114.3691',
  },
};

import JsonLd from '@/components/JsonLd';

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
