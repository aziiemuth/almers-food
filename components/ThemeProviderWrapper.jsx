'use client';

import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/lib/theme';
import useThemeStore from '@/store/themeStore';

export default function ThemeProviderWrapper({ children }) {
  const { mode, initTheme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
