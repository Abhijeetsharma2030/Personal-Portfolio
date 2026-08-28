import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  CheckCircle,
  Code,
  Sparkles,
} from 'lucide-react';
import {
  personalInfo,
  educationList,
  certificationsList,
} from '../data/portfolioData';
import { useTranslations } from '../hooks/useTranslations';

export const About: React.FC = () => {
  const { t } = useTranslations();

  const coreStrengths = [
    'Building responsive web applications from scratch with React.js, Material UI, and React DOM',
    'Zustand & Redux Toolkit state architecture for enterprise workflows and multi-step forms',
    'Direct client interaction on-site to gather clinical requirements and build tailored UIs',
    'Third-party API integrations: Razorpay Payment Gateway & Google Maps API',
    'Managing on-site client deployments and production builds on Windows IIS servers via WinSCP',
    'Clean, maintainable TypeScript with strict interfaces and modular component patterns',
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles size={14} />
            <span>Developer Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            {t('about.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Avatar & Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Profile Avatar Card */}
            <div className="pro-card rounded-3xl p-6 relative flex flex-col items-center text-center">
              <div className="w-44 h-44 rounded-2xl overflow-hidden mb-5 border border-slate-200 dark:border-slate-700 shadow-md relative group">
                <img
                  src={personalInfo.avatarAbout}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {personalInfo.name}
              </h3>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">
                Enterprise Healthcare & Fintech Specialist
              </p>

              {/* Quick Info Badges */}
              <div className="w-full grid grid-cols-1 gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800 text-left">
                <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200">
                  <MapPin size={15} className="text-emerald-500 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200">
                  <Mail size={15} className="text-emerald-500 shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-emerald-500 transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200">
                  <Phone size={15} className="text-emerald-500 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200">
                  <Briefcase size={15} className="text-emerald-500 shrink-0" />
                  <span>2 Years Experience</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="pro-card rounded-2xl p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <Award size={18} className="text-emerald-500" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {t('about.certificationsTitle')}
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                {certificationsList.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3"
                  >
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-300">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Core Strengths, Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Bio Card */}
            <div className="pro-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code size={20} className="text-emerald-500" />
                <span>Engineering Philosophy & Profile</span>
              </h3>
              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                {t('about.bio')}
              </p>

              {/* Core Strengths */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                Key Core Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreStrengths.map((strength, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 flex items-start gap-2.5 leading-relaxed"
                  >
                    <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="pro-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-5">
                <GraduationCap size={20} className="text-emerald-500" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {t('about.educationTitle')}
                </h4>
              </div>

              {educationList.map((edu) => (
                <div key={edu.id} className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h5>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {edu.duration}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {edu.degreeKey}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-300 mb-2">
                    {edu.location}
                  </div>
                  {edu.highlights && (
                    <ul className="flex flex-col gap-1.5">
                      {edu.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
