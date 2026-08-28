import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { useTranslations } from '../hooks/useTranslations';
import { TranslationKey } from '../i18n/types';
import { GithubIcon } from './BrandIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTranslations();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Image with close button */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center border border-slate-700 hover:bg-emerald-500 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/80 text-emerald-400 border border-slate-700 uppercase tracking-wider mb-2 inline-block">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col gap-6">
            {/* Long Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {project.longDescriptionKey
                  ? t(project.longDescriptionKey as TranslationKey)
                  : t(project.descriptionKey as TranslationKey)}
              </p>
            </div>

            {/* Metrics & KPIs */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>Performance & Impact Metrics</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center"
                    >
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.architecturePoints && project.architecturePoints.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
                  <Cpu size={14} className="text-emerald-500" />
                  <span>Architecture & Key Decisions</span>
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {project.architecturePoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {t('projects.techStack')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External Action Links */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm transition-all"
                >
                  <span>{t('projects.viewLive')}</span>
                  <ExternalLink size={15} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
                >
                  <GithubIcon size={15} />
                  <span>{t('projects.viewCode')}</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
