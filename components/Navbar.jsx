'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import useThemeStore from '@/store/themeStore';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  background: ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.navBgSolid : theme.colors.navBg};
  border-bottom: 1px solid ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.border : 'transparent'};
  transition: all 0.35s ease;
  box-shadow: ${({ theme, $scrolled }) =>
    $scrolled ? `0 2px 20px ${theme.colors.shadow}` : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ $scrolled }) => ($scrolled ? '64px' : '76px')};
  transition: height 0.35s ease;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 64px;
  }
`;

const Brand = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  letter-spacing: 0;
  transition: color 0.3s ease;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 8px 16px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.text)};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 16px;
    right: 16px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.badgeBg};

    &::after {
      transform: scaleX(1);
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ThemeToggle = styled(motion.button)`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.badgeBg};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/review', label: 'Review' },
  { href: '/katalog', label: 'Katalog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { mode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer $scrolled={scrolled}>
        <Brand href="/">
          Almers<span>Food</span>
        </Brand>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} $active={pathname === item.href}>
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <NavActions>
          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {mode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </ThemeToggle>
        </NavActions>
      </NavContainer>
    </Nav>
  );
}
