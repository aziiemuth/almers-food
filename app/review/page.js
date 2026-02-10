'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar, FaWhatsapp, FaQuoteLeft } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AnimatedSection from '@/components/AnimatedSection';

const HeroBanner = styled.section`
  padding: 80px 24px 60px;
  text-align: center;
  background: ${({ theme }) => theme.colors.heroOverlay};
  color: #FFFFFF;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 16px 40px;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
`;

const PageTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;

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
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px 16px;
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

const ReviewCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  padding: 28px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 35px ${({ theme }) => theme.colors.shadowMd};
    border-color: ${({ theme }) => theme.colors.supporting};
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.badgeBg};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
`;

const ReviewerInfo = styled.div``;

const ReviewerName = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: ${({ theme }) => theme.colors.starColor};
  margin-top: 2px;
`;

const QuoteIcon = styled.div`
  color: ${({ theme }) => theme.colors.supporting};
  margin-bottom: 10px;
  opacity: 0.4;
`;

const ReviewText = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  font-style: italic;
`;

const CTASection = styled.section`
  padding: 60px 24px 80px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
`;

const CTAText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 24px;
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
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35);
  }
`;

const SkeletonCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  padding: 28px;
`;

const reviews = [
  {
    name: 'Mbak Rina',
    initial: 'R',
    text: 'Aku kira frozen food biasa, ternyata rotinya lembut banget. Pas digoreng, aromanya wangi. Anak-anak langsung minta lagi.',
  },
  {
    name: 'Pak Dimas',
    initial: 'D',
    text: 'Samosanya padat, isiannya kerasa, dan nggak berminyak. Ini yang bikin nagih.',
  },
  {
    name: 'Ibu Sari',
    initial: 'S',
    text: 'Packaging luar kota aman. Sampai rumah masih rapi, tinggal masuk freezer.',
  },
  {
    name: 'Kak Ayu',
    initial: 'A',
    text: 'Pastelnya renyah, isian gurih, nggak pelit.',
  },
  {
    name: 'Mas Budi',
    initial: 'B',
    text: 'Kroketnya lembut, creamy, dan nggak bikin eneg.',
  },
  {
    name: 'Mbak Nisa',
    initial: 'N',
    text: 'Roti Maryam coklatnya manisnya pas, cocok buat cemilan sore.',
  },
];

export default function ReviewPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeroBanner>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <PageTitle>Review Pelanggan</PageTitle>
          <PageSubtitle>
            Cerita jujur dari mereka yang sudah merasakan kelezatan Almers Food.
          </PageSubtitle>
        </HeroContent>
      </HeroBanner>

      <Section>
        <ReviewGrid>
          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <SkeletonCard key={i}>
                    <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                      <Skeleton width={44} height={44} borderRadius={14} />
                      <div>
                        <Skeleton width={100} height={16} />
                        <Skeleton width={80} height={12} style={{ marginTop: 4 }} />
                      </div>
                    </div>
                    <Skeleton count={3} />
                  </SkeletonCard>
                ))
            : reviews.map((review, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <ReviewCard whileHover={{ y: -4 }}>
                    <ReviewHeader>
                      <Avatar>{review.initial}</Avatar>
                      <ReviewerInfo>
                        <ReviewerName>{review.name}</ReviewerName>
                        <Stars>
                          {[...Array(5)].map((_, s) => (
                            <FaStar key={s} size={13} />
                          ))}
                        </Stars>
                      </ReviewerInfo>
                    </ReviewHeader>
                    <QuoteIcon>
                      <FaQuoteLeft size={18} />
                    </QuoteIcon>
                    <ReviewText>&ldquo;{review.text}&rdquo;</ReviewText>
                  </ReviewCard>
                </AnimatedSection>
              ))}
        </ReviewGrid>
      </Section>

      <CTASection>
        <AnimatedSection>
          <CTATitle>Tertarik? Sekali coba, biasanya repeat order.</CTATitle>
          <CTAText>
            Ratusan pelanggan sudah membuktikan. Sekarang giliran kamu merasakan frozen food
            yang beda dari biasanya.
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
        </AnimatedSection>
      </CTASection>
    </>
  );
}
