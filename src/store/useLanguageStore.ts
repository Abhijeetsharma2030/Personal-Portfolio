import { create } from 'zustand';
import { Language } from '../types/portfolio';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('portfolio_lang') as Language | null;
  if (saved === 'en' || saved === 'hi') return saved;
  return 'en';
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: getInitialLanguage(),
  setLanguage: (language: Language) => {
    localStorage.setItem('portfolio_lang', language);
    set({ language });
  },
  toggleLanguage: () => {
    set((state) => {
      const nextLang: Language = state.language === 'en' ? 'hi' : 'en';
      localStorage.setItem('portfolio_lang', nextLang);
      return { language: nextLang };
    });
  },
}));

