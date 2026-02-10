'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Heart, Shield, Package, Award, Users, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import AnimatedSection from '@/components/AnimatedSection';

const HeroBanner = styled.section`
  padding: 80px 24px 60px;
  text-align: center;
  background: ${({ theme }) => theme.colors.heroOverlay};
  color: #FFFFFF;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 16px 40px;
    min-height: 280px;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 650px;
`;

const PageTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.05rem;
  opacity: 0.9;
  line-height: 1.7;
`;

const Section = styled.section`
  padding: 80px 24px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px 16px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.9;
  margin-bottom: 16px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  padding: 28px 24px;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.shadow};
    border-color: ${({ theme }) => theme.colors.supporting};
  }
`;

const CardIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.badgeBg};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
`;

const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`;

const HighlightSection = styled.section`
  padding: 60px 24px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HighlightContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const CTASection = styled.section`
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

const infoCards = [
  { icon: Heart, title: 'Dibuat Dengan Cinta', text: 'Setiap produk dibuat manual dengan perhatian detail di setiap tahap produksi.' },
  { icon: Shield, title: 'Standar Higienis', text: 'Area produksi bersih, bahan segar, dan proses yang terjaga kualitasnya.' },
  { icon: Package, title: 'Packaging Aman', text: 'Pengemasan rapi dan aman, bahkan untuk pengiriman luar kota sekalipun.' },
  { icon: Award, title: 'Rasa Premium', text: 'Resep yang telah diracik dan diuji sampai menemukan rasa terbaik.' },
  { icon: Users, title: 'Pelanggan Setia', text: 'Ratusan pelanggan yang repeat order membuktikan kualitas kami.' },
  { icon: Sparkles, title: 'Selalu Berinovasi', text: 'Kami terus menghadirkan varian baru yang menarik dan lezat.' },
];

export default function TentangPage() {
  return (
    <>
      <HeroBanner>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PageTitle>Tentang Almers Food</PageTitle>
          <PageSubtitle>
            Frozen food rumahan dengan rasa yang serius. Dibuat untuk kamu yang menghargai kelezatan tanpa ribet.
          </PageSubtitle>
        </HeroContent>
      </HeroBanner>

      <Section>
        <AnimatedSection>
          <SectionTitle>Cerita Kami</SectionTitle>
          <Text>
            Almers Food adalah frozen food rumahan dengan rasa yang serius. Kita jaga kualitas
            dari adonan, isian, sampai pengemasan. Semua dibuat dengan standar bersih, dan rasa
            yang konsisten.
          </Text>
          <Text>
            Berawal dari dapur rumahan, kini Almers Food telah melayani ratusan pelanggan yang
            percaya bahwa frozen food bisa tetap enak, aman, dan praktis. Setiap produk kami
            dibuat dengan bahan-bahan pilihan dan resep yang telah disempurnakan.
          </Text>
        </AnimatedSection>
      </Section>

      <HighlightSection>
        <HighlightContent>
          <AnimatedSection>
            <SectionTitle>Visi</SectionTitle>
            <Text>
              Menjadi brand frozen food rumahan terpercaya yang menghadirkan kelezatan autentik
              ke setiap rumah di Indonesia. Kami percaya bahwa makanan enak tidak harus sulit dan
              mahal — cukup praktis, higienis, dan penuh cita rasa.
            </Text>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <SectionTitle>Komitmen Kualitas</SectionTitle>
            <Text>
              Setiap batch produk Almers Food dibuat dengan kontrol kualitas ketat. Dari pemilihan
              bahan baku, proses memasak, hingga pengemasan — semua diawasi untuk memastikan yang
              sampai ke tangan kamu adalah yang terbaik.
            </Text>
          </AnimatedSection>
        </HighlightContent>
      </HighlightSection>

      <Section>
        <AnimatedSection>
          <SectionTitle>Pengiriman Luar Kota</SectionTitle>
          <Text>
            Kami memiliki packaging khusus untuk pengiriman luar kota. Produk dikemas dalam
            styrofoam dengan ice gel, lalu dibungkus rapi dalam kardus tebal. Proses ini
            memastikan produk tetap beku dan segar saat sampai di tujuan, bahkan untuk perjalanan
            2-3 hari.
          </Text>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <CardsGrid>
            {infoCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <InfoCard whileHover={{ y: -4 }}>
                  <CardIcon>
                    <card.icon size={24} />
                  </CardIcon>
                  <CardTitle>{card.title}</CardTitle>
                  <CardText>{card.text}</CardText>
                </InfoCard>
              </AnimatedSection>
            ))}
          </CardsGrid>
        </AnimatedSection>
      </Section>

      <CTASection>
        <AnimatedSection>
          <SectionTitle style={{ textAlign: 'center' }}>Mau Tahu Lebih Lanjut?</SectionTitle>
          <Text style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
            Hubungi kami di WhatsApp untuk tanya-tanya produk atau langsung pesan.
          </Text>
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
        </AnimatedSection>
      </CTASection>
    </>
  );
}
