import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CreditCard, Server, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';
import { metricHighlights } from '../data/portfolioData';
import { useTranslations } from '../hooks/useTranslations';
import { TranslationKey } from '../i18n/types';

export const Metrics: React.FC = () => {
  const { t } = useTranslations();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 size={22} className="text-emerald-500" />;
      case 'CreditCard':
        return <CreditCard size={22} className="text-emerald-500" />;
      case 'Server':
        return <Server size={22} className="text-emerald-500" />;
      case 'Cpu':
        return <Cpu size={22} className="text-emerald-500" />;
      default:
        return <TrendingUp size={22} className="text-emerald-500" />;
    }
  };

  return (
    <section id="metrics" className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <TrendingUp size={14} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            {t('metrics.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t('metrics.subtitle')}
          </p>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricHighlights.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="pro-card pro-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    {getIcon(metric.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {metric.badge}
                  </span>
                </div>

                {/* Big Stat Value */}
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      {metric.suffix}
                    </span>
                  )}
                </div>

                {/* Stat Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {t(metric.titleKey as TranslationKey)}
                </h3>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-3">
                  {t(metric.subtitleKey as TranslationKey)}
                </p>
              </div>

              {/* Description & Impact - High Contrast */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-2">
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t(metric.descriptionKey as TranslationKey)}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
