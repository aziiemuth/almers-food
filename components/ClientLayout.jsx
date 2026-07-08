'use client';

import React from 'react';
import styled from 'styled-components';
import { Toaster } from 'sonner';
import ThemeProviderWrapper from '@/components/ThemeProviderWrapper';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundGradient};
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.4s ease, color 0.4s ease;
`;

const Main = styled.main`
  padding-top: 64px;
  min-height: calc(100vh - 64px);

  @media (max-width: 768px) {
    padding-bottom: calc(72px + env(safe-area-inset-bottom));
  }
`;

export default function ClientLayout({ children }) {
  return (
    <ThemeProviderWrapper>
      <PageWrapper>
        <Navbar />
        <Main>{children}</Main>
        <BottomNav />
        <Footer />
        <ScrollToTop />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontFamily: "'Poppins', sans-serif",
              borderRadius: '14px',
            },
          }}
        />
      </PageWrapper>
    </ThemeProviderWrapper>
  );
}
