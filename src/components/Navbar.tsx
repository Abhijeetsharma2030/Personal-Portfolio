import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe, ArrowRight, Code2 } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';
import { useThemeStore } from '../store/useThemeStore';
import { useTranslations } from '../hooks/useTranslations';
import { TranslationKey } from '../i18n/types';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));
  const { theme, toggleTheme } = useThemeStore();
  const { t, language, toggleLanguage, isHindi } = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-lg tracking-tight"
          onClick={closeMenu}
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Code2 size={22} className="stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight group-hover:text-emerald-500 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              {isHindi ? 'सॉफ्टवेयर डेवलपर' : 'Software Developer'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-full border border-slate-200 dark:border-slate-700/80">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-emerald-500 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{t(item.labelKey as TranslationKey)}</span>
              </a>
            );
          })}
        </div>

        {/* Action Controls: Theme + Language + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
            title={`Switch to ${isHindi ? 'English' : 'Hindi'}`}
            aria-label="Toggle language"
          >
            <Globe size={14} className="text-emerald-500" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-slate-700" />
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm transition-all hover:translate-y-[-1px]"
          >
            <span>{t('nav.getInTouch')}</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>

          {/* Quick Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl px-6 py-6 z-50 md:hidden flex flex-col gap-2"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{t(item.labelKey as TranslationKey)}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm"
                >
                  <span>{t('nav.getInTouch')}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
