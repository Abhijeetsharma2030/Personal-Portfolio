import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Server,
  Wrench,
  Sparkles,
  CheckCircle,
  Layers,
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';
import { SkillCategory } from '../types/portfolio';
import { useTranslations } from '../hooks/useTranslations';
import { TranslationKey } from '../i18n/types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const { t } = useTranslations();

  const filterTabs: { id: SkillCategory; labelKey: string; icon: React.ReactNode }[] = [
    { id: 'all', labelKey: 'skills.filter.all', icon: <Layers size={15} /> },
    { id: 'frontend', labelKey: 'skills.filter.frontend', icon: <Code2 size={15} /> },
    { id: 'backend', labelKey: 'skills.filter.backend', icon: <Server size={15} /> },
    { id: 'devops', labelKey: 'skills.filter.devops', icon: <Wrench size={15} /> },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skillsList
      : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-50/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles size={14} />
            <span>Tech Stack Mastery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            {t('skills.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('skills.intro')}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-white bg-emerald-500 shadow-md shadow-emerald-500/25'
                    : 'text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{t(tab.labelKey as TranslationKey)}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="pro-card pro-card-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Name + Category badge */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {skill.category}
                    </span>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span className="text-slate-600 dark:text-slate-300">
                        {skill.experienceLevel}
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-emerald-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Practical Enterprise Highlight - High Contrast Text */}
                  {skill.highlight && (
                    <p className="text-xs text-slate-700 dark:text-slate-100 font-normal leading-relaxed mb-4 flex items-start gap-2">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{skill.highlight}</span>
                    </p>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
