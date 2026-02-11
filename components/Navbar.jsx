'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Sun, Moon, X, Menu } from 'lucide-react';
import useThemeStore from '@/store/themeStore';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(12px);
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
`;

const Brand = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  letter-spacing: -0.5px;
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
  border-radius: 12px;
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
  width: 40px;
  height: 40px;
  border-radius: 12px;
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

const MenuButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.badgeBg};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 998;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;

const MobileDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background: ${({ theme }) => theme.colors.surface};
  z-index: 999;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 30px ${({ theme }) => theme.colors.shadowMd};
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.35s;
`;

const MobileDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const MobileDrawerBrand = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const CloseButton = styled(motion.button)`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.badgeBg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 14px 16px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.text)};
  text-decoration: none;
  border-radius: 12px;
  background: ${({ theme, $active }) => ($active ? theme.colors.badgeBg : 'transparent')};
  transition: all 0.3s ease;
  margin-bottom: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.badgeBg};
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { mode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
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
            <MenuButton
              onClick={() => setMobileOpen(!mobileOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </MenuButton>
          </NavActions>
        </NavContainer>
      </Nav>

      <MobileOverlay $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <MobileDrawer $open={mobileOpen}>
        <MobileDrawerHeader>
          <MobileDrawerBrand>AlmersFood</MobileDrawerBrand>
          <CloseButton
            as={motion.button}
            onClick={() => setMobileOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={18} />
          </CloseButton>
        </MobileDrawerHeader>
        {navItems.map((item) => (
          <MobileNavLink key={item.href} href={item.href} $active={pathname === item.href} onClick={closeMobile}>
            {item.label}
          </MobileNavLink>
        ))}
      </MobileDrawer>
    </>
  );
}
