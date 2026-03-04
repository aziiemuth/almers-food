'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaWhatsapp, FaQuoteLeft, FaFilter } from 'react-icons/fa';
import { ThumbsUp, MessageCircle, Star } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AnimatedSection from '@/components/AnimatedSection';

/* ====== ANIMATIONS ====== */
const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

/* ====== HERO ====== */
const HeroBanner = styled.section`
  position: relative;
  padding: 100px 24px 80px;
  text-align: center;
  background: ${({ theme }) => theme.colors.heroOverlay};
  color: #FFFFFF;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 30% 60%, rgba(255,179,0,0.12) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 20%, rgba(255,80,0,0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 16px 60px;
    min-height: 360px;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 640px;
  position: relative;
  z-index: 2;
`;

const HeroBadge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 215, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.4);
  color: #FFD700;
  font-size: 0.78rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
`;

const HeroStars = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 8px;
  color: #FFD700;
`;

const HeroRating = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroRatingLabel = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 14px;
`;

const PageTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.88;
  line-height: 1.7;
  font-family: 'Poppins', sans-serif;
`;

/* ====== RATING SUMMARY ====== */
const RatingSummarySection = styled.section`
  max-width: 900px;
  margin: -40px auto 0;
  padding: 0 24px;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-top: -30px;
  }
`;

const RatingSummaryCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 28px;
  padding: 36px 40px;
  box-shadow: 0 20px 60px ${({ theme }) => theme.colors.shadowMd};
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 28px 24px;
    text-align: center;
  }
`;

const RatingBig = styled.div`
  text-align: center;
`;

const RatingNumber = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FFB300, #FF6B00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const RatingStars = styled.div`
  display: flex;
  gap: 4px;
  color: #FFB300;
  justify-content: center;
  margin: 8px 0 4px;
`;

const RatingCount = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: 'Poppins', sans-serif;
`;

const RatingBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const RatingBarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RatingBarLabel = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: 'Poppins', sans-serif;
  width: 30px;
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
`;

const RatingBarOuter = styled.div`
  flex: 1;
  height: 8px;
  background: ${({ theme }) => theme.colors.borderLight};
  border-radius: 4px;
  overflow: hidden;
`;

const RatingBarInner = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #FFB300, #FF8C00);
  border-radius: 4px;
`;

const RatingBarCount = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: 'Poppins', sans-serif;
  width: 16px;
  text-align: right;
  flex-shrink: 0;
`;

const SummaryStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const SummaryStat = styled.div`
  text-align: center;
`;

const SummaryStatNum = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const SummaryStatLabel = styled.p`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

/* ====== FILTER BAR ====== */
const FilterSection = styled.section`
  max-width: 1100px;
  margin: 40px auto 0;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: 'Poppins', sans-serif;
`;

const FilterChip = styled(motion.button)`
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  border: 1.5px solid ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.border};
  background: ${({ $active, theme }) => $active ? theme.colors.primary : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.colors.textOnPrimary : theme.colors.textMuted};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* ====== REVIEWS ====== */
const Section = styled.section`
  padding: 32px 24px 80px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px 16px 60px;
  }
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const avatarColors = [
  'linear-gradient(135deg, #FF6B6B, #FF8E53)',
  'linear-gradient(135deg, #4ECDC4, #2980B9)',
  'linear-gradient(135deg, #A8E063, #56AB2F)',
  'linear-gradient(135deg, #F093FB, #F5576C)',
  'linear-gradient(135deg, #4FC3F7, #0288D1)',
  'linear-gradient(135deg, #FFD93D, #FF6B6B)',
];

const ReviewCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  padding: 28px;
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px ${({ theme }) => theme.colors.shadowMd};
    border-color: transparent;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background: ${({ $color }) => $color};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

const ReviewerInfo = styled.div`
  flex: 1;
`;

const ReviewerName = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3px;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: #FFB300;
`;

const ReviewDate = styled.span`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
  display: block;
  margin-top: 2px;
`;

const ProductTag = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  padding: 3px 10px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.badgeBg};
  color: ${({ theme }) => theme.colors.primary};
  margin-left: auto;
  flex-shrink: 0;
`;

const QuoteIcon = styled.div`
  color: ${({ theme }) => theme.colors.supporting};
  opacity: 0.3;
`;

const ReviewText = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  font-style: italic;
  flex: 1;
`;

const ReviewFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const HelpfulBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: 'Poppins', sans-serif;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.badgeBg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* ====== SKELETON ====== */
const SkeletonCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  padding: 28px;
`;

/* ====== CTA ====== */
const CTASection = styled.section`
  padding: 40px 24px 96px;
  text-align: center;
`;

const CTACard = styled(motion.div)`
  max-width: 640px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 32px;
  padding: 56px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FFB300, #FF6B00, #25D366);
  }

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const CTAEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const CTATitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CTAText = styled.p`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 28px;
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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  }
`;

/* ====== DATA ====== */
const filters = ['Semua', 'Roti', 'Pastel', 'Kroket', 'Samosa'];

const ratingBars = [
  { stars: 5, count: 45, pct: 90 },
  { stars: 4, count: 5, pct: 10 },
  { stars: 3, count: 0, pct: 0 },
  { stars: 2, count: 0, pct: 0 },
  { stars: 1, count: 0, pct: 0 },
];

const reviews = [
  {
    name: 'Mbak Rina',
    initial: 'R',
    product: 'Roti Maryam',
    date: 'Feb 2026',
    text: 'Aku kira frozen food biasa, ternyata rotinya lembut banget. Pas digoreng, aromanya wangi. Anak-anak langsung minta lagi.',
    category: 'Roti',
  },
  {
    name: 'Pak Dimas',
    initial: 'D',
    product: 'Samosa Daging',
    date: 'Jan 2026',
    text: 'Samosanya padat, isiannya kerasa, dan nggak berminyak. Ini yang bikin nagih.',
    category: 'Samosa',
  },
  {
    name: 'Ibu Sari',
    initial: 'S',
    product: 'Semua Produk',
    date: 'Jan 2026',
    text: 'Packaging luar kota aman. Sampai rumah masih rapi, tinggal masuk freezer. Beli untuk stok sebulan!',
    category: 'Semua',
  },
  {
    name: 'Kak Ayu',
    initial: 'A',
    product: 'Pastel',
    date: 'Des 2025',
    text: 'Pastelnya renyah, isian gurih, nggak pelit. Cocok banget buat bekal arisan, teman-teman pada suka!',
    category: 'Pastel',
  },
  {
    name: 'Mas Budi',
    initial: 'B',
    product: 'Kroket',
    date: 'Des 2025',
    text: 'Kroketnya lembut, creamy, dan nggak bikin eneg. Serius enak banget, langsung repeat order 2 pack.',
    category: 'Kroket',
  },
  {
    name: 'Mbak Nisa',
    initial: 'N',
    product: 'Roti Maryam Coklat',
    date: 'Nov 2025',
    text: 'Roti Maryam coklatnya manisnya pas, cocok buat cemilan sore. Nggak terlalu manis, nggak terlalu tawar.',
    category: 'Roti',
  },
  {
    name: 'Ibu Dewi',
    initial: 'D',
    product: 'Lumpur Kenari',
    date: 'Nov 2025',
    text: 'Lumpur Kenarinya enak banget! Lembut di mulut, kacang kenarinya bikin makin spesial. Beli tiap minggu wajib hukumnya.',
    category: 'Semua',
  },
  {
    name: 'Mas Fandi',
    initial: 'F',
    product: 'Samosa Sayur',
    date: 'Okt 2025',
    text: 'Samosa sayurnya enak, bumbu rempahnya kerasa banget. Cocok buat yang suka makanan gurih tapi nggak mau berlebihan.',
    category: 'Samosa',
  },
  {
    name: 'Bu Lestari',
    initial: 'L',
    product: 'Pastel',
    date: 'Okt 2025',
    text: 'Pastelnya beda dari yang lain, kulitnya tipis renyah tapi isiannya penuh. Udah jadi langganan tetap buat kumpul keluarga.',
    category: 'Pastel',
  },
  {
    name: 'Kak Reza',
    initial: 'R',
    product: 'Kroket',
    date: 'Sep 2025',
    text: 'Kroket favoritku! Isi dalamnya creamy dan gurih, luarnya renyah sempurna. Harga juga bersahabat, worth it banget.',
    category: 'Kroket',
  },
  {
    name: 'Mbak Hani',
    initial: 'H',
    product: 'Brota',
    date: 'Sep 2025',
    text: 'Pertama kali coba Brota dari Almers, langsung suka! Renyah unik, rasanya beda sama snack biasanya. Recommend banget!',
    category: 'Semua',
  },
  {
    name: 'Pak Wahyu',
    initial: 'W',
    product: 'Semua Produk',
    date: 'Agu 2025',
    text: 'Udah coba hampir semua produknya, dan semuanya enak! Konsisten banget kualitasnya. Ini frozen food terbaik yang pernah aku beli di Banyuwangi.',
    category: 'Semua',
  },
];

export default function ReviewPage() {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Semua');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filtered = activeFilter === 'Semua'
    ? reviews
    : reviews.filter(r => r.category === activeFilter);

  return (
    <>
      {/* HERO */}
      <HeroBanner>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroBadge
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Star size={11} /> Ulasan Nyata dari Pelanggan
          </HeroBadge>
          <HeroStars>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={22} />
            ))}
          </HeroStars>
          <HeroRating>4.9</HeroRating>
          <HeroRatingLabel>50 ulasan · 90% bintang 5</HeroRatingLabel>
          <PageTitle>Review Pelanggan</PageTitle>
          <PageSubtitle>
            Cerita jujur dari mereka yang sudah merasakan kelezatan Almers Food — tanpa rekayasa, murni pengalaman nyata.
          </PageSubtitle>
        </HeroContent>
      </HeroBanner>

      {/* RATING SUMMARY CARD */}
      <RatingSummarySection>
        <AnimatedSection>
          <RatingSummaryCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <RatingBig>
              <RatingNumber>4.9</RatingNumber>
              <RatingStars>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </RatingStars>
              <RatingCount>dari 50 ulasan</RatingCount>
            </RatingBig>

            <RatingBars>
              {ratingBars.map((bar, i) => (
                <RatingBarRow key={i}>
                  <RatingBarLabel>
                    {bar.stars}<FaStar size={9} />
                  </RatingBarLabel>
                  <RatingBarOuter>
                    <RatingBarInner
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                    />
                  </RatingBarOuter>
                  <RatingBarCount>{bar.count}</RatingBarCount>
                </RatingBarRow>
              ))}
            </RatingBars>

            <SummaryStats>
              <SummaryStat>
                <SummaryStatNum>100%</SummaryStatNum>
                <SummaryStatLabel>Puas</SummaryStatLabel>
              </SummaryStat>
              <SummaryStat>
                <SummaryStatNum>50</SummaryStatNum>
                <SummaryStatLabel>Ulasan</SummaryStatLabel>
              </SummaryStat>
              <SummaryStat>
                <SummaryStatNum>★ 4.9</SummaryStatNum>
                <SummaryStatLabel>Rating</SummaryStatLabel>
              </SummaryStat>
            </SummaryStats>
          </RatingSummaryCard>
        </AnimatedSection>
      </RatingSummarySection>

      {/* FILTER BAR */}
      <FilterSection>
        <AnimatedSection delay={0.1}>
          <FilterBar>
            <FilterLabel>
              <FaFilter size={11} /> Filter:
            </FilterLabel>
            {filters.map(f => (
              <FilterChip
                key={f}
                $active={activeFilter === f}
                onClick={() => setActiveFilter(f)}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </FilterChip>
            ))}
          </FilterBar>
        </AnimatedSection>
      </FilterSection>

      {/* REVIEWS GRID */}
      <Section>
        <ReviewGrid>
          {loading
            ? Array(6).fill(0).map((_, i) => (
                <SkeletonCard key={i}>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                    <Skeleton width={50} height={50} borderRadius={16} />
                    <div>
                      <Skeleton width={120} height={16} />
                      <Skeleton width={80} height={12} style={{ marginTop: 4 }} />
                    </div>
                  </div>
                  <Skeleton count={3} />
                </SkeletonCard>
              ))
            : (
              <AnimatePresence mode="wait">
                {filtered.map((review, i) => (
                  <AnimatedSection key={`${review.name}-${activeFilter}`} delay={i * 0.07}>
                    <ReviewCard
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -6 }}
                    >
                      <ReviewHeader>
                        <Avatar $color={avatarColors[i % avatarColors.length]}>
                          {review.initial}
                        </Avatar>
                        <ReviewerInfo>
                          <ReviewerName>{review.name}</ReviewerName>
                          <Stars>
                            {[...Array(5)].map((_, s) => (
                              <FaStar key={s} size={12} />
                            ))}
                          </Stars>
                          <ReviewDate>{review.date}</ReviewDate>
                        </ReviewerInfo>
                        <ProductTag>{review.product}</ProductTag>
                      </ReviewHeader>

                      <QuoteIcon>
                        <FaQuoteLeft size={20} />
                      </QuoteIcon>

                      <ReviewText>&ldquo;{review.text}&rdquo;</ReviewText>

                      <ReviewFooter>
                        <HelpfulBtn>
                          <ThumbsUp size={13} />
                          Bermanfaat
                        </HelpfulBtn>
                        <HelpfulBtn>
                          <MessageCircle size={13} />
                          Balas
                        </HelpfulBtn>
                      </ReviewFooter>
                    </ReviewCard>
                  </AnimatedSection>
                ))}
              </AnimatePresence>
            )}
        </ReviewGrid>
      </Section>

      {/* CTA */}
      <CTASection>
        <AnimatedSection>
          <CTACard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CTAEmoji>🍴</CTAEmoji>
            <CTATitle>Tertarik? Sekali coba, biasanya repeat order.</CTATitle>
            <CTAText>
              Ratusan pelanggan sudah membuktikan. Sekarang giliran kamu merasakan frozen food yang beda dari biasanya.
            </CTAText>
            <CTAButton
              href="https://wa.me/6287806554701"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={20} />
              Order Sekarang
            </CTAButton>
          </CTACard>
        </AnimatedSection>
      </CTASection>
    </>
  );
}
