import { create } from 'zustand';
import { ThemeMode } from '../types/portfolio';

interface ThemeState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem('portfolio_theme') as ThemeMode | null;
  if (saved === 'dark' || saved === 'light') return saved;
  // Default to Dark Mode as requested
  return 'dark';
};

const applyThemeToDOM = (theme: ThemeMode) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
  }
};

export const useThemeStore = create<ThemeState>((set) => {
  const initialTheme = getInitialTheme();
  applyThemeToDOM(initialTheme);

  return {
    theme: initialTheme,
    setTheme: (theme: ThemeMode) => {
      localStorage.setItem('portfolio_theme', theme);
      applyThemeToDOM(theme);
      set({ theme });
    },
    toggleTheme: () => {
      set((state) => {
        const nextTheme: ThemeMode = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('portfolio_theme', nextTheme);
        applyThemeToDOM(nextTheme);
        return { theme: nextTheme };
      });
    },
  };
});

