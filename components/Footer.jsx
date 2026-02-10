'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.footerText};
  padding: 60px 24px 24px;
  font-family: 'Poppins', sans-serif;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const FooterBrand = styled.div`
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 8px;

    span {
      color: ${({ theme }) => theme.colors.supporting};
    }
  }

  p {
    font-size: 0.85rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.footerText};
    opacity: 0.8;
    margin-top: 12px;
  }
`;

const Tagline = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.supporting};
  margin-top: 4px;
`;

const FooterTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
  letter-spacing: 0.3px;
`;

const FooterLink = styled(Link)`
  display: block;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.footerText};
  text-decoration: none;
  padding: 5px 0;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    color: ${({ theme }) => theme.colors.supporting};
    opacity: 1;
    padding-left: 6px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.85rem;
  margin-bottom: 14px;
  opacity: 0.85;
  line-height: 1.6;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.supporting};
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 10px 20px;
  background: #25D366;
  color: #FFFFFF;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #20BD5A;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(231, 218, 218, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  p {
    font-size: 0.8rem;
    opacity: 0.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid rgba(231, 218, 218, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.footerText};
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.supporting};
    color: #FFFFFF;
    border-color: transparent;
    transform: translateY(-2px);
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterBrand>
          <h3>Almers<span>Food</span></h3>
          <Tagline>Frozen Food Praktis, Rasa Tetap Berkelas</Tagline>
          <p>
            Dibuat dengan cinta untuk kamu yang mau makan enak tanpa ribet.
            Semua produk dijaga kualitasnya dari adonan sampai pengemasan.
          </p>
        </FooterBrand>

        <div>
          <FooterTitle>Menu</FooterTitle>
          <FooterLink href="/">Beranda</FooterLink>
          <FooterLink href="/tentang">Tentang Kami</FooterLink>
          <FooterLink href="/review">Review</FooterLink>
          <FooterLink href="/katalog">Katalog</FooterLink>
        </div>

        <div>
          <FooterTitle>Produk</FooterTitle>
          <FooterLink href="/katalog">Roti Maryam</FooterLink>
          <FooterLink href="/katalog">Pastel & Kroket</FooterLink>
          <FooterLink href="/katalog">Samosa</FooterLink>
          <FooterLink href="/katalog">Snack Lainnya</FooterLink>
        </div>

        <div>
          <FooterTitle>Kontak</FooterTitle>
          <ContactItem>
            <MapPin size={16} />
            <span>Jl. Belitung No.65, Lateng, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68413</span>
          </ContactItem>
          <ContactItem>
            <Phone size={16} />
            <span>087806554701</span>
          </ContactItem>
          <WhatsAppButton
            href="https://wa.me/6287806554701"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={18} />
            Chat WhatsApp
          </WhatsAppButton>
        </div>
      </FooterContainer>

      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Almers Food. All rights reserved.</p>
        <SocialLinks>
          <SocialIcon
            href="https://wa.me/6287806554701"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={18} />
          </SocialIcon>
          <SocialIcon
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </SocialIcon>
        </SocialLinks>
      </FooterBottom>
    </FooterWrapper>
  );
}
