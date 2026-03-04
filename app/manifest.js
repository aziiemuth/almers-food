export default function manifest() {
  return {
    name: 'Almers Food Banyuwangi',
    short_name: 'Almers Food',
    description:
      'Toko frozen food di Banyuwangi. Roti Maryam, Pastel, Kroket, Samosa — homemade, higienis, halal.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#C8882F',
    lang: 'id',
    orientation: 'portrait',
    icons: [
      {
        src: '/menu.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
    ],
    categories: ['food', 'shopping'],
    dir: 'ltr',
  };
}
