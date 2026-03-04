'use client';

import React from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Heart, Shield, Package, Award, Users, Sparkles, MapPin, Clock, Truck, Star } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';

/* ====== ANIMATIONS ====== */
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* ====== HERO ====== */
const HeroBanner = styled.section`
  position: relative;
  padding: 100px 24px 80px;
  text-align: center;
  background: ${({ theme }) => theme.colors.heroOverlay};
  color: #FFFFFF;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(255,179,0,0.15) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(255,100,0,0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 16px 60px;
    min-height: 360px;
  }
`;

const HeroBadge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #FFD700;
  font-size: 0.78rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const HeroContent = styled(motion.div)`
  max-width: 680px;
  position: relative;
  z-index: 2;
`;

const PageTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.05rem;
  opacity: 0.88;
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
`;

/* ====== STATS BAR ====== */
const StatsBar = styled.section`
  background: ${({ theme }) => theme.colors.cardBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0;
`;

const StatsInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled(motion.div)`
  padding: 32px 20px;
  text-align: center;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child,
  &:nth-child(4) {
    border-right: none;
  }

  @media (max-width: 768px) {
    &:nth-child(2n) {
      border-right: none;
    }
    &:nth-child(3),
    &:nth-child(4) {
      border-bottom: none;
    }
  }
`;

const StatNumber = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 6px;
`;

const StatLabel = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

/* ====== MAIN SECTIONS ====== */
const Section = styled.section`
  padding: 80px 24px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 56px 16px;
  }
`;

const SectionTag = styled.span`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.badgeBg};
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 14px;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.9;
  margin-bottom: 18px;
`;

/* ====== CERITA SECTION (2-col) ====== */
const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-top: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 20px;
  padding-bottom: 28px;
  position: relative;

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 40px;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const TimelineDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.badgeBg};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 0.85rem;
  font-family: 'Poppins', sans-serif;
  animation: ${float} 3s ease-in-out infinite;
`;

const TimelineBody = styled.div``;
const TimelineTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;
const TimelineText = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

/* ====== VISION & COMMITMENT ====== */
const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VisionCard = styled(motion.div)`
  position: relative;
  padding: 36px 30px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 24px 24px 0 0;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px ${({ theme }) => theme.colors.shadowMd};
    border-color: transparent;
  }
`;

const VisionIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.badgeBg};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

const VisionTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
`;

const VisionText = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
`;

/* ====== INFO CARDS (keunggulan) ====== */
const GlassSection = styled.section`
  padding: 80px 24px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const GlassInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  padding: 30px 24px;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  text-align: center;
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
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
    border-radius: 0 0 22px 22px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.colors.shadowMd};
    border-color: transparent;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.badgeBg}, ${({ theme }) => theme.colors.borderLight});
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  transition: transform 0.3s ease;
`;

const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 0.92rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 0.81rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.65;
`;

/* ====== PENGIRIMAN ====== */
const ShippingSection = styled.section`
  padding: 80px 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

const ShippingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const ShippingVisual = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ShippingStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.borderLight};
  border-radius: 14px;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.badgeBg};
  }
`;

const ShippingStepNum = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const ShippingStepText = styled.div``;
const ShippingStepTitle = styled.p`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2px;
`;
const ShippingStepDesc = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

/* ====== CTA ====== */
const CTASection = styled.section`
  padding: 80px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const CTAInner = styled(motion.div)`
  max-width: 600px;
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
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}, #25D366);
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

const CTAButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 32px;
  background: #25D366;
  color: #FFFFFF;
  font-size: 0.95rem;
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

const KatalogButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 32px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 18px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    transform: translateY(-2px);
  }
`;

/* ====== DATA ====== */
const stats = [
  { number: '100+', label: 'Pelanggan Puas' },
  { number: '8', label: 'Varian Produk' },
  { number: '★ 4.9', label: 'Rating Pelanggan' },
  { number: '10+', label: 'Tahun Berdiri' },
];

const infoCards = [
  { icon: Heart, title: 'Dibuat Dengan Cinta', text: 'Setiap produk dibuat manual dengan perhatian detail di setiap tahap produksi.' },
  { icon: Shield, title: 'Standar Higienis', text: 'Area produksi bersih, bahan segar, dan proses yang terjaga kualitasnya.' },
  { icon: Package, title: 'Packaging Aman', text: 'Pengemasan rapi dan aman, bahkan untuk pengiriman luar kota sekalipun.' },
  { icon: Award, title: 'Rasa Premium', text: 'Resep yang telah diracik dan diuji sampai menemukan rasa terbaik.' },
  { icon: Users, title: 'Pelanggan Setia', text: 'Ratusan pelanggan yang repeat order membuktikan kualitas kami.' },
  { icon: Sparkles, title: 'Selalu Berinovasi', text: 'Kami terus menghadirkan varian baru yang menarik dan lezat.' },
];

const timeline = [
  { num: '01', title: 'Dapur Rumahan', text: 'Berawal dari dapur rumah, dengan resep keluarga dan semangat berbagi.' },
  { num: '02', title: 'Pelanggan Pertama', text: 'Dari mulut ke mulut, kepercayaan mulai tumbuh dari lingkungan sekitar.' },
  { num: '03', title: 'Berkembang', text: 'Kini melayani ratusan pelanggan, termasuk pengiriman ke berbagai kota.' },
];

const shippingSteps = [
  { step: '1', title: 'Dikemas dalam Styrofoam', desc: 'Produk ditata rapi di dalam styrofoam khusus.' },
  { step: '2', title: 'Tambahkan Ice Gel', desc: 'Ice gel dimasukkan agar suhu tetap dingin selama pengiriman.' },
  { step: '3', title: 'Bungkus Kardus Tebal', desc: 'Lapisan kardus kokoh untuk perlindungan ekstra dari guncangan.' },
  { step: '4', title: 'Sampai Segar di Tujuan', desc: 'Produk tiba dalam kondisi beku sempurna, siap masuk freezer.' },
];

export default function TentangPage() {
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
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Star size={12} /> Frozen Food Banyuwangi Terpercaya
          </HeroBadge>
          <PageTitle>Tentang Almers Food</PageTitle>
          <PageSubtitle>
            Frozen food rumahan dengan rasa yang serius. Dibuat untuk kamu yang menghargai kelezatan tanpa ribet — dari dapur kami, ke meja makan kamu.
          </PageSubtitle>
        </HeroContent>
      </HeroBanner>

      {/* STATS BAR */}
      <StatsBar>
        <StatsInner>
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <StatItem whileHover={{ scale: 1.03 }}>
                <StatNumber>{s.number}</StatNumber>
                <StatLabel>{s.label}</StatLabel>
              </StatItem>
            </AnimatedSection>
          ))}
        </StatsInner>
      </StatsBar>

      {/* CERITA KAMI */}
      <Section>
        <AnimatedSection>
          <SectionTag>Cerita Kami</SectionTag>
          <SectionTitle>Dari Dapur Rumah, ke Seluruh Indonesia</SectionTitle>
        </AnimatedSection>
        <StoryGrid>
          <AnimatedSection delay={0.1}>
            <Text>
              <strong>Almers Food</strong> adalah frozen food rumahan dengan rasa yang serius. Kita jaga kualitas dari adonan, isian, sampai pengemasan. Semua dibuat dengan standar bersih, dan rasa yang konsisten.
            </Text>
            <Text>
              Berawal dari dapur rumahan, kini Almers Food telah melayani ratusan pelanggan yang percaya bahwa frozen food bisa tetap enak, aman, dan praktis. Setiap produk kami dibuat dengan bahan-bahan pilihan dan resep yang telah disempurnakan.
            </Text>
            <Text>
              Kami percaya makanan yang baik dimulai dari niat yang baik. Itulah kenapa setiap produk Almers Food dibuat dengan cinta dan kejujuran — tanpa bahan pengawet berbahaya, tanpa kompromi soal rasa.
            </Text>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <TimelineWrapper>
              {timeline.map((t, i) => (
                <TimelineItem
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <TimelineDot style={{ animationDelay: `${i * 0.5}s` }}>{t.num}</TimelineDot>
                  <TimelineBody>
                    <TimelineTitle>{t.title}</TimelineTitle>
                    <TimelineText>{t.desc}</TimelineText>
                  </TimelineBody>
                </TimelineItem>
              ))}
            </TimelineWrapper>
          </AnimatedSection>
        </StoryGrid>
      </Section>

      {/* VISI & KOMITMEN */}
      <GlassSection>
        <GlassInner>
          <AnimatedSection>
            <SectionTag>Visi &amp; Misi</SectionTag>
            <SectionTitle>Komitmen Kami untuk Kamu</SectionTitle>
          </AnimatedSection>
          <VisionGrid>
            <AnimatedSection delay={0.1}>
              <VisionCard whileHover={{ y: -6 }}>
                <VisionIcon><Star size={26} /></VisionIcon>
                <VisionTitle>Visi Kami</VisionTitle>
                <VisionText>
                  Menjadi brand frozen food rumahan terpercaya yang menghadirkan kelezatan autentik ke setiap rumah di Indonesia. Kami percaya bahwa makanan enak tidak harus sulit dan mahal — cukup praktis, higienis, dan penuh cita rasa.
                </VisionText>
              </VisionCard>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <VisionCard whileHover={{ y: -6 }}>
                <VisionIcon><Shield size={26} /></VisionIcon>
                <VisionTitle>Komitmen Kualitas</VisionTitle>
                <VisionText>
                  Setiap batch produk Almers Food dibuat dengan kontrol kualitas ketat. Dari pemilihan bahan baku, proses memasak, hingga pengemasan — semua diawasi untuk memastikan yang sampai ke tangan kamu adalah yang terbaik.
                </VisionText>
              </VisionCard>
            </AnimatedSection>
          </VisionGrid>
        </GlassInner>
      </GlassSection>

      {/* 6 KEUNGGULAN */}
      <Section>
        <AnimatedSection>
          <SectionTag>Keunggulan</SectionTag>
          <SectionTitle>Mengapa Pelanggan Percaya Almers Food?</SectionTitle>
        </AnimatedSection>
        <CardsGrid>
          {infoCards.map((card, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <InfoCard whileHover={{ y: -6 }}>
                <CardIcon>
                  <card.icon size={26} />
                </CardIcon>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </InfoCard>
            </AnimatedSection>
          ))}
        </CardsGrid>
      </Section>

      {/* PENGIRIMAN LUAR KOTA */}
      <ShippingSection>
        <AnimatedSection>
          <SectionTag>Pengiriman</SectionTag>
          <SectionTitle>Aman Sampai ke Seluruh Indonesia</SectionTitle>
        </AnimatedSection>
        <ShippingGrid>
          <AnimatedSection delay={0.1}>
            <Text>
              Kami memiliki packaging khusus untuk pengiriman luar kota. Produk dikemas dalam styrofoam dengan ice gel, lalu dibungkus rapi dalam kardus tebal.
            </Text>
            <Text>
              Proses ini memastikan produk tetap beku dan segar saat sampai di tujuan, bahkan untuk perjalanan 2–3 hari. Sudah banyak pelanggan luar kota yang repeat order karena yakin produk sampai dalam kondisi sempurna.
            </Text>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary, #666)' }}>
                <Truck size={15} /> Seluruh Indonesia
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary, #666)' }}>
                <Clock size={15} /> 1–3 Hari Sampai
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary, #666)' }}>
                <MapPin size={15} /> COD Banyuwangi
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ShippingVisual>
              {shippingSteps.map((s, i) => (
                <ShippingStep
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                >
                  <ShippingStepNum>{s.step}</ShippingStepNum>
                  <ShippingStepText>
                    <ShippingStepTitle>{s.title}</ShippingStepTitle>
                    <ShippingStepDesc>{s.desc}</ShippingStepDesc>
                  </ShippingStepText>
                </ShippingStep>
              ))}
            </ShippingVisual>
          </AnimatedSection>
        </ShippingGrid>
      </ShippingSection>

      {/* CTA */}
      <CTASection>
        <AnimatedSection>
          <CTAInner
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CTAEmoji>🍽️</CTAEmoji>
            <CTATitle>Penasaran dengan Rasanya?</CTATitle>
            <CTAText>
              Yuk langsung pesan lewat WhatsApp atau jelajahi katalog produk kami. Sekali coba, biasanya jadi repeat order!
            </CTAText>
            <CTAButtons>
              <CTAButton
                href="https://wa.me/6287806554701"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={20} />
                Chat WhatsApp
              </CTAButton>
              <KatalogButton
                href="/katalog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Katalog
              </KatalogButton>
            </CTAButtons>
          </CTAInner>
        </AnimatedSection>
      </CTASection>
    </>
  );
}
