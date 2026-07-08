'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Home, Info, Star, ShoppingBag } from 'lucide-react';

const BottomNavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: none;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
  padding-bottom: calc(8px + env(safe-area-inset-bottom));
  box-shadow: 0 -2px 10px ${({ theme }) => theme.colors.shadow};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.textSecondary || theme.colors.text)};
  padding: 8px;
  border-radius: 12px;
  transition: all 0.3s ease;
  min-width: 64px;
  position: relative;

  span {
    font-size: 0.7rem;
    font-weight: ${({ $active }) => ($active ? 600 : 400)};
    font-family: 'Poppins', sans-serif;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 32px;
  height: 3px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 4px 4px;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  background: ${({ theme, $active }) => ($active ? theme.colors.badgeBg : 'transparent')};
  border-radius: 12px;
  transition: background 0.3s ease;
  margin-bottom: 2px;
`;

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Beranda', icon: Home },
    { href: '/katalog', label: 'Katalog', icon: ShoppingBag },
    { href: '/review', label: 'Review', icon: Star },
    { href: '/tentang', label: 'Tentang', icon: Info },
  ];

  return (
    <BottomNavContainer>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <NavItem key={item.href} href={item.href} $active={isActive}>
            {isActive && (
              <ActiveIndicator
                layoutId="bottomNavIndicator"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <IconWrapper $active={isActive}>
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            </IconWrapper>
            <span>{item.label}</span>
          </NavItem>
        );
      })}
    </BottomNavContainer>
  );
}
