'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Leaf, ChefHat, Truck, ThumbsUp, ShoppingBag } from 'lucide-react';
import { FaStar, FaWhatsapp, FaQuoteLeft } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';
import OrderModal from '@/components/OrderModal';
import { products, featuredProductIds } from '@/data/products';
import { formatRupiah } from '@/lib/formatRupiah';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

/* ===== HERO ===== */
const HeroSection = styled.section`
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 85vh;
  }

  .swiper-pagination-bullet {
    background: #FFFFFF;
    opacity: 0.5;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: ${({ theme }) => theme.colors.supporting};
    width: 28px;
    border-radius: 5px;
  }
`;

const HeroSlide = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.heroOverlay};
  z-index: 1;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 2;
  padding: 0 24px;
  max-width: 700px;
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  line-height: 1.2;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const HeroCTAs = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #25D366;
  color: #FFFFFF;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 18px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35);
  }
`;

const SecondaryButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: #FFFFFF;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 18px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
`;

/* ===== FEATURES ===== */
const Section = styled.section`
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 550px;
  margin: 0 auto 48px;
  line-height: 1.7;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 32px 20px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.shadow};
    border-color: ${({ theme }) => theme.colors.supporting};
  }
`;

const FeatureIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.badgeBg};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
`;

const FeatureTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 6px;
`;

const FeatureDesc = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

/* ===== PRODUCTS ===== */
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ProductCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.colors.shadowMd};
    border-color: ${({ theme }) => theme.colors.supporting};
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: ${({ theme }) => theme.colors.borderLight};
  overflow: hidden;
`;

const ProductInfo = styled.div`
  padding: 18px 20px 20px;
`;

const ProductName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

const ProductContents = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 10px 0 14px;
`;

const OrderButton = styled(motion.button)`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

/* ===== WHY US ===== */
const WhySection = styled.section`
  padding: 80px 24px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`;

const WhyContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const WhyText = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.9;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

/* ===== TESTIMONIALS ===== */
const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 28px;
  height: 100%;
`;

const QuoteIcon = styled.div`
  color: ${({ theme }) => theme.colors.supporting};
  margin-bottom: 12px;
  opacity: 0.5;
`;

const TestimonialText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 16px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TestiAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.badgeBg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const TestiName = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: ${({ theme }) => theme.colors.starColor};
  margin-bottom: 12px;
`;

const TestimonialsSection = styled.section`
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;

  .swiper-slide {
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`;

/* ===== CONTACT CTA ===== */
const ContactCTA = styled.section`
  padding: 60px 24px;
  text-align: center;
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  background: #25D366;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 18px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  margin-top: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35);
  }
`;

/* ===== DATA ===== */
const heroSlides = [
  {
    title: 'Frozen Food Praktis, Rasa Tetap Berkelas',
    subtitle: 'Nikmati kelezatan frozen food premium yang siap masak kapan saja.',
    image: '/foto/Background Slider 1.png',
  },
  {
    title: 'Siap Masak, Siap Nikmat',
    subtitle: 'Tinggal goreng atau panggang, aromanya langsung bikin lapar.',
    image: '/foto/Background Slider 2.png',
  },
  {
    title: 'Bisa Kirim Luar Kota, Aman dan Rapi',
    subtitle: 'Packaging khusus frozen, sampai tujuan tetap segar dan aman.',
    image: '/foto/Background Slider 3.png',
  },
];

const features = [
  { icon: Leaf, title: 'Fresh & Higienis', desc: 'Dibuat bersih dari bahan segar pilihan' },
  { icon: ChefHat, title: 'Siap Masak', desc: 'Tinggal goreng atau panggang 5 menit' },
  { icon: Truck, title: 'Bisa Antar Luar Kota', desc: 'Packaging aman untuk pengiriman jauh' },
  { icon: ThumbsUp, title: 'Rasa Konsisten', desc: 'Kualitas terjaga di setiap batch' },
];

const testimonials = [
  { name: 'Mbak Rina', initial: 'R', text: 'Roti Maryamnya lembut banget, anak-anak langsung minta lagi!' },
  { name: 'Pak Dimas', initial: 'D', text: 'Samosanya padat, isiannya kerasa. Ini sih yang bikin nagih.' },
  { name: 'Ibu Sari', initial: 'S', text: 'Packaging luar kota aman banget, sampai rumah masih rapi.' },
  { name: 'Kak Ayu', initial: 'A', text: 'Pastelnya renyah, isian gurih, cocok buat arisan!' },
  { name: 'Mas Budi', initial: 'B', text: 'Kroketnya lembut, creamy, nggak bikin eneg. Top!' },
];

const featuredProducts = featuredProductIds.map((id) => products.find((p) => p.id === id));

export default function HomePage() {
  const [orderProduct, setOrderProduct] = useState(null);

  return (
    <>
      {/* HERO */}
      <HeroSection>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <HeroSlide>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                  priority={i === 0}
                />
                <HeroOverlay />
                <HeroContent
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <HeroTitle>{slide.title}</HeroTitle>
                  <HeroSubtitle>{slide.subtitle}</HeroSubtitle>
                  <HeroCTAs>
                    <PrimaryButton
                      href="https://wa.me/6287806554701"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaWhatsapp size={20} />
                      Order via WhatsApp
                    </PrimaryButton>
                    <SecondaryButton
                      href="/katalog"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <ShoppingBag size={18} />
                      Lihat Katalog
                    </SecondaryButton>
                  </HeroCTAs>
                </HeroContent>
              </HeroSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </HeroSection>

      {/* FEATURES */}
      <Section>
        <AnimatedSection>
          <SectionTitle>Kenapa Pilih Almers Food?</SectionTitle>
          <SectionSubtitle>
            Frozen food yang dibuat sepenuh hati, dengan standar kebersihan dan rasa yang konsisten.
          </SectionSubtitle>
        </AnimatedSection>
        <FeaturesGrid>
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <FeatureCard whileHover={{ y: -4 }}>
                <FeatureIcon>
                  <f.icon size={26} />
                </FeatureIcon>
                <FeatureTitle>{f.title}</FeatureTitle>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureCard>
            </AnimatedSection>
          ))}
        </FeaturesGrid>
      </Section>

      {/* FEATURED PRODUCTS */}
      <Section>
        <AnimatedSection>
          <SectionTitle>Produk Unggulan</SectionTitle>
          <SectionSubtitle>
            Pilihan terbaik dari Almers Food yang paling disukai pelanggan kami.
          </SectionSubtitle>
        </AnimatedSection>
        <ProductsGrid>
          {featuredProducts.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.08}>
              <ProductCard whileHover={{ y: -6 }}>
                <ProductImageWrapper>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </ProductImageWrapper>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductContents>{product.contents}</ProductContents>
                  <ProductPrice>{formatRupiah(product.price)}</ProductPrice>
                  <OrderButton
                    onClick={() => setOrderProduct(product)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingBag size={16} />
                    Pesan
                  </OrderButton>
                </ProductInfo>
              </ProductCard>
            </AnimatedSection>
          ))}
        </ProductsGrid>
      </Section>

      {/* WHY ALMERS */}
      <WhySection>
        <WhyContent>
          <AnimatedSection>
            <SectionTitle>Kenapa Almers Food?</SectionTitle>
            <WhyText>
              Almers Food dibuat untuk kamu yang mau makan enak tanpa ribet.
              Tinggal goreng atau panggang, aromanya langsung bikin lapar.
              Cocok buat anak kos, ibu rumah tangga, sampai bekal kerja.
              Semua produk kami dibuat dengan standar bersih dan cita rasa yang konsisten.
            </WhyText>
          </AnimatedSection>
        </WhyContent>
      </WhySection>

      {/* TESTIMONIALS */}
      <TestimonialsSection>
        <AnimatedSection>
          <SectionTitle>Apa Kata Mereka?</SectionTitle>
          <SectionSubtitle>
            Cerita jujur dari pelanggan yang sudah merasakan kelezatan Almers Food.
          </SectionSubtitle>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard>
                  <QuoteIcon><FaQuoteLeft size={20} /></QuoteIcon>
                  <Stars>
                    {[...Array(5)].map((_, s) => (
                      <FaStar key={s} size={14} />
                    ))}
                  </Stars>
                  <TestimonialText>&ldquo;{t.text}&rdquo;</TestimonialText>
                  <TestimonialAuthor>
                    <TestiAvatar>{t.initial}</TestiAvatar>
                    <TestiName>{t.name}</TestiName>
                  </TestimonialAuthor>
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </TestimonialsSection>

      {/* CONTACT CTA */}
      <ContactCTA>
        <AnimatedSection>
          <SectionTitle>Tertarik? Yuk, Order Sekarang!</SectionTitle>
          <SectionSubtitle>
            Langsung chat kami di WhatsApp untuk pesan atau tanya-tanya dulu.
          </SectionSubtitle>
          <CTAButton
            href="https://wa.me/6287806554701"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp size={20} />
            Order via WhatsApp
          </CTAButton>
        </AnimatedSection>
      </ContactCTA>

      {/* ORDER MODAL */}
      {orderProduct && (
        <OrderModal product={orderProduct} onClose={() => setOrderProduct(null)} />
      )}
    </>
  );
}
