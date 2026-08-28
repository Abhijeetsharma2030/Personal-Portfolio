import React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  Mail,
  ArrowRight,
  Download,
  Sparkles,
} from 'lucide-react';
import { personalInfo, socialLinks, coreTechBadges } from '../data/portfolioData';
import { useTranslations } from '../hooks/useTranslations';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Hero: React.FC = () => {
  const { t } = useTranslations();

  // 3D Tilt Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-14deg', '14deg']);
  const glareOpacity = useTransform(
    springY,
    [-0.5, 0, 0.5],
    [0.2, 0.05, 0.2]
  );
  const glareX = useTransform(springX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(springY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status availability badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
              <span className="text-slate-700 dark:text-slate-200 font-medium text-xl sm:text-2xl block mb-1">
                {t('hero.greeting')}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400">
                {t('hero.headline')}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {t('hero.subtext')}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/25 transition-all hover:translate-y-[-1px]"
              >
                <span>{t('hero.cta.projects')}</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:translate-y-[-1px]"
              >
                <span>{t('hero.cta.contact')}</span>
              </a>

              <a
                href="mailto:abhisharmaku099@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
                title="Quick Email Abhijeet"
              >
                <Download size={16} />
                <span>{t('hero.cta.resume')}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all hover:scale-105"
                      aria-label={social.ariaLabel}
                    >
                      {social.iconName === 'github' && <GithubIcon size={17} />}
                      {social.iconName === 'linkedin' && <LinkedinIcon size={17} />}
                      {social.iconName === 'mail' && <Mail size={17} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Developer Card (No Floating Chips) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
            style={{ perspective: 1200 }}
          >
            {/* 3D Motion Tilt Card */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="relative w-80 sm:w-88 h-[400px] sm:h-[440px] rounded-3xl p-3 bg-gradient-to-b from-slate-200/80 via-slate-100 to-slate-200/80 dark:from-slate-800/80 dark:via-slate-900/90 dark:to-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 shadow-2xl cursor-pointer select-none group"
            >
              {/* Inner 3D Photo Container */}
              <div
                style={{
                  transform: 'translateZ(30px)',
                  transformStyle: 'preserve-3d',
                }}
                className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 relative shadow-inner flex items-center justify-center"
              >
                <img
                  src={personalInfo.avatarBlob}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = personalInfo.avatarAbout;
                  }}
                />

                {/* Subtle Gradient Shadow Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Interactive Dynamic 3D Glare Sheen */}
                <motion.div
                  style={{
                    opacity: glareOpacity,
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
                  }}
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                />

                {/* 3D Elevated Name Badge */}
                <div
                  style={{ transform: 'translateZ(40px)' }}
                  className="absolute bottom-4 left-4 right-4 text-center pointer-events-none"
                >
                  <h3 className="text-base font-bold text-white tracking-wide drop-shadow-md">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium tracking-normal mt-0.5 drop-shadow-sm">
                    Software Developer
                  </p>
                </div>
              </div>

              {/* 3D Ambient Depth Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          </motion.div>
        </div>

        {/* Core Tech Badge Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={15} className="text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              {t('hero.coreSkills')}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {coreTechBadges.map((badge) => (
              <div
                key={badge.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-colors cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{badge.name}</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-400">
                  • {badge.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
