import { create } from 'zustand';

const useThemeStore = create((set) => ({
  mode: 'light',
  toggleTheme: () =>
    set((state) => {
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('almers-theme', newMode);
      }
      return { mode: newMode };
    }),
  initTheme: () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('almers-theme');
      if (saved) {
        set({ mode: saved });
      }
    }
  },
}));

export default useThemeStore;
