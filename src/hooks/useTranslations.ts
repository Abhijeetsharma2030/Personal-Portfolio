import { useCallback } from 'react';
import { useLanguageStore } from '../store/useLanguageStore';
import { translations } from '../i18n/translations';
import { TranslationKey } from '../i18n/types';

export const useTranslations = () => {
  const { language, setLanguage, toggleLanguage } = useLanguageStore();

  const t = useCallback(
    (key: TranslationKey, fallback?: string): string => {
      const currentDict = translations[language];
      if (currentDict && currentDict[key]) {
        return currentDict[key];
      }
      // Fallback to English if translation is missing
      const enDict = translations.en;
      if (enDict && enDict[key]) {
        return enDict[key];
      }
      return fallback || key;
    },
    [language]
  );

  return {
    t,
    language,
    setLanguage,
    toggleLanguage,
    isHindi: language === 'hi',
    isEnglish: language === 'en',
  };
};

