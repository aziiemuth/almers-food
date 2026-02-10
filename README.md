# Almers Food - Frozen Food Website

Website modern untuk brand frozen food **Almers Food**. Dibangun dengan Next.js, Styled Components, dan berbagai library modern.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Styled Components
- **State Management:** Zustand
- **Animasi:** Framer Motion
- **Slider:** Swiper
- **Icons:** Lucide React, React Icons
- **Notifikasi:** Sonner
- **Loading:** React Loading Skeleton

## Halaman

| Route      | Deskripsi                                                  |
| ---------- | ---------------------------------------------------------- |
| `/`        | Beranda — Hero slider, fitur, produk unggulan, testimonial |
| `/tentang` | Tentang Kami — Cerita brand, visi, komitmen kualitas       |
| `/review`  | Review — Testimoni pelanggan                               |
| `/katalog` | Katalog — Produk, keranjang, checkout via WhatsApp         |

## Instalasi

### 1. Clone / Download

```bash
git clone <repo-url>
cd almersfood
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 4. Build untuk Production

```bash
npm run build
npm start
```

## Struktur Folder

```
almersfood/
├── app/
│   ├── layout.js          # Root layout (font, SSR registry)
│   ├── globals.css         # Global CSS reset
│   ├── page.js             # Beranda
│   ├── tentang/page.js     # Tentang Kami
│   ├── review/page.js      # Review
│   └── katalog/page.js     # Katalog + Cart
├── components/
│   ├── Navbar.jsx          # Navigasi sticky + mobile drawer
│   ├── Footer.jsx          # Footer dengan kontak & link
│   ├── OrderModal.jsx      # Modal order produk satuan
│   ├── AnimatedSection.jsx # Wrapper animasi scroll
│   ├── ScrollToTop.jsx     # Tombol scroll ke atas
│   ├── ClientLayout.jsx    # Layout wrapper (theme, navbar, footer)
│   └── ThemeProviderWrapper.jsx
├── data/
│   └── products.js         # Data produk & kategori
├── lib/
│   ├── theme.js            # Light & dark theme
│   ├── registry.js         # Styled Components SSR
│   ├── formatRupiah.js     # Format mata uang Rupiah
│   └── whatsapp.js         # Generator pesan WhatsApp
├── store/
│   ├── cartStore.js        # Zustand cart state
│   └── themeStore.js       # Zustand theme toggle
└── public/
    └── foto/               # Gambar produk & slider
```

## Konfigurasi

- **Nomor WhatsApp:** Edit `WA_NUMBER` di `lib/whatsapp.js`
- **Produk:** Edit `data/products.js`
- **Warna tema:** Edit `lib/theme.js`
- **Foto produk:** Taruh di `public/foto/`

## Requirements

- Node.js 18+
- npm 9+
