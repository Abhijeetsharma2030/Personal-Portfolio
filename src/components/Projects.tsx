import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  Info,
} from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { useTranslations } from '../hooks/useTranslations';
import { TranslationKey } from '../i18n/types';
import { GithubIcon } from './BrandIcons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const { t } = useTranslations();

  const categories = [
    { id: 'all', labelKey: 'projects.filter.all' },
    { id: 'fullstack', labelKey: 'projects.filter.fullstack' },
    { id: 'realtime', labelKey: 'projects.filter.realtime' },
    { id: 'ml', labelKey: 'projects.filter.ml' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsList
      : projectsList.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-slate-50/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles size={14} />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            {t('projects.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-white bg-emerald-500 shadow-md shadow-emerald-500/25'
                    : 'text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
                }`}
              >
                <span>{t(cat.labelKey as TranslationKey)}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="pro-card pro-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                {/* Project Image Header */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/80 text-emerald-400 border border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Deep Dive Action Button */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-slate-900/85 text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-700 hover:bg-emerald-500 transition-colors shadow-md"
                    title="View Architectural Deep Dive"
                  >
                    <Info size={14} />
                    <span>{t('projects.viewDetails')}</span>
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
                  <div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                      {t(project.descriptionKey as TranslationKey)}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>{t('projects.viewDetails')}</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"
                          aria-label="View source code on GitHub"
                          title="View Source Code"
                        >
                          <GithubIcon size={17} />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm transition-all"
                        >
                          <span>{t('projects.viewLive')}</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
