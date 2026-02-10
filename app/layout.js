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
  title: 'Almers Food — Frozen Food Praktis, Rasa Tetap Berkelas',
  description:
    'Almers Food menyediakan frozen food premium rumahan. Roti Maryam, Pastel, Kroket, Samosa, dan lainnya. Siap masak, siap nikmat. Bisa kirim luar kota!',
  keywords: 'frozen food, almers food, roti maryam, pastel, kroket, samosa, banyuwangi, frozen food premium',
  openGraph: {
    title: 'Almers Food — Frozen Food Praktis, Rasa Tetap Berkelas',
    description: 'Frozen food premium rumahan. Siap masak, siap nikmat. Bisa kirim luar kota!',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
