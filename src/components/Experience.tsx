import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Building,
} from 'lucide-react';
import { experienceList } from '../data/portfolioData';
import { useTranslations } from '../hooks/useTranslations';
import { TranslationKey } from '../i18n/types';

export const Experience: React.FC = () => {
  const { t } = useTranslations();
  const [expandedId, setExpandedId] = useState<string>(experienceList[0]?.id || '');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            {t('experience.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical progression line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="flex flex-col gap-8">
            {experienceList.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isFirst = index === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Dot Marker */}
                  <div
                    className={`absolute left-4 sm:left-8 -translate-x-1/2 top-5 w-4 h-4 rounded-full border-2 ${
                      isFirst
                        ? 'bg-emerald-500 border-white dark:border-slate-900 ring-4 ring-emerald-500/20'
                        : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600'
                    }`}
                  />

                  {/* Experience Card */}
                  <div
                    className={`pro-card rounded-2xl p-6 sm:p-7 transition-all ${
                      isExpanded
                        ? 'border-emerald-500/50 shadow-md ring-1 ring-emerald-500/20'
                        : 'pro-card-hover'
                    }`}
                  >
                    {/* Top Row: Role, Company & Period */}
                    <div
                      className="cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building size={16} className="text-emerald-500 shrink-0" />
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            {exp.company}
                          </h3>
                        </div>
                        <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          {t(exp.roleKey as TranslationKey)}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                          <Calendar size={13} className="text-emerald-500" />
                          <span>{exp.period}</span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <MapPin size={13} />
                          <span>{exp.locationKey}</span>
                        </div>

                        <button
                          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-transform duration-200"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                        >
                          <ChevronDown size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Summary Description - High Contrast */}
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-3 leading-relaxed">
                      {t(exp.descriptionKey as TranslationKey)}
                    </p>

                    {/* Expandable Key Contributions */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800"
                      >
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">
                          Key Deliverables & Responsibilities
                        </h4>
                        <ul className="flex flex-col gap-2.5 mb-5">
                          {exp.points.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-2.5 leading-relaxed"
                            >
                              <CheckCircle2
                                size={15}
                                className="text-emerald-500 shrink-0 mt-0.5"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Used */}
                        <div className="flex items-center gap-2 flex-wrap pt-3 border-t border-slate-100 dark:border-slate-800">
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            Technologies:
                          </span>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
