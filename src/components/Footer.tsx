import React from 'react';
import {
  Mail,
  ArrowUp,
  Code2,
} from 'lucide-react';
import { personalInfo, navItems, socialLinks } from '../data/portfolioData';
import { useTranslations } from '../hooks/useTranslations';
import { TranslationKey } from '../i18n/types';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const { t } = useTranslations();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100 dark:border-slate-800">
          {/* Brand & Bio summary */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#home" className="flex items-center gap-2.5 font-bold text-lg text-slate-900 dark:text-white">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-sm">
                <Code2 size={20} className="stroke-[2.5]" />
              </div>
              <span>{personalInfo.name}</span>
            </a>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              Software Developer specializing in Enterprise Healthcare & Fintech Platforms. Focused on client-tailored UI development, state architecture, and API integrations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-500 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all hover:scale-105"
                  aria-label={social.ariaLabel}
                >
                  {social.iconName === 'github' && <GithubIcon size={16} />}
                  {social.iconName === 'linkedin' && <LinkedinIcon size={16} />}
                  {social.iconName === 'mail' && <Mail size={16} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-xs text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  {t(item.labelKey as TranslationKey)}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top & location info */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
              title="Back to Top"
            >
              <span>{t('footer.backToTop')}</span>
              <ArrowUp size={14} />
            </button>

            <div className="text-left md:text-right">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300 block">
                {personalInfo.location}
              </span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block">
                Open to Enterprise Roles
              </span>
            </div>
          </div>
        </div>

        {/* Copyright & Tech Stack Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 text-center sm:text-left">
          <div>
            © {currentYear} {personalInfo.name}. {t('footer.rights')}
          </div>
          <div>
            <span>{t('footer.builtWith')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
