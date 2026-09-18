import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FileText,
  UserCheck,
  Globe,
} from "lucide-react";
import {
  personalInfo,
  educationList,
  certificationsList,
  biodataDetails,
} from "../data/portfolioData";
import { useTranslations } from "../hooks/useTranslations";

export const About: React.FC = () => {
  const { t } = useTranslations();
  const [activeTab, setActiveTab] = useState<
    "summary" | "biodata" | "education"
  >("summary");

  const coreStrengths = [
    "Nearly 2 years of frontend engineering with React.js, JavaScript, and Bootstrap in Healthcare & Fintech domains",
    "Zustand & Redux Toolkit state architecture for complex multi-step forms and state synchronization",
    "Direct client engagement on-site to gather clinical requirements and translate them into custom UI logic",
    "Third-party REST API integrations: Razorpay Payment Gateway & Google Maps API",
    "6 months of hands-on backend and API integration experience with Node.js, Express.js, and MongoDB",
    "On-site production deployments and live builds on Windows IIS servers via WinSCP",
    "Translating complex Figma mockups into pixel-accurate, fully responsive UIs",
    "Clean, maintainable code adhering to strict typing and DRY principles",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles size={14} />
            <span>Developer Background & Dossier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            {t("about.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Avatar & Quick Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col gap-6"
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
                Frontend Engineer (Healthcare & Fintech)
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
                  <span>Nearly 2 Years Experience</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200">
                  <Globe size={15} className="text-emerald-500 shrink-0" />
                  <span>English, Hindi</span>
                </div>
              </div>

              {/* Download Resume Action Button */}
              <div className="w-full pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={personalInfo.resumePdfUrl}
                  download="Abhijeet_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm transition-all"
                >
                  <FileText size={15} />
                  <span>Download Official Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Capsule */}
            <div className="pro-card rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span>Frontend Development</span>
                <span className="text-emerald-500 font-bold">
                  Core Specialization
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-[92%]" />
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 pt-2">
                <span>Backend & REST APIs</span>
                <span className="text-emerald-500 font-bold">
                  Full-Stack Integration
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-[78%]" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tabbed Dossier (Summary, Biodata, Education) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {/* Interactive Tab Selector */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80">
              <button
                onClick={() => setActiveTab("summary")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "summary"
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <FileText size={16} />
                <span>Professional Summary</span>
              </button>

              <button
                onClick={() => setActiveTab("biodata")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "biodata"
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <UserCheck size={16} />
                <span>Complete Biodata</span>
              </button>

              <button
                onClick={() => setActiveTab("education")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "education"
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <GraduationCap size={16} />
                <span>Education & Certs</span>
              </button>
            </div>

            {/* Tab 1: Professional Summary & Core Competencies */}
            <AnimatePresence mode="wait">
              {activeTab === "summary" && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-6"
                >
                  <div className="pro-card rounded-2xl p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Code size={20} className="text-emerald-500" />
                      <span>Executive Overview</span>
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                      {t("about.bio")}
                    </p>

                    {/* Core Strengths */}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                      Key Technical Strengths
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {coreStrengths.map((strength, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 flex items-start gap-2.5 leading-relaxed"
                        >
                          <CheckCircle
                            size={14}
                            className="text-emerald-500 shrink-0 mt-0.5"
                          />
                          <span>{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Complete Biodata Dossier Table */}
              {activeTab === "biodata" && (
                <motion.div
                  key="biodata"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="pro-card rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <UserCheck size={20} className="text-emerald-500" />
                        <span>Professional Biodata & Technical Dossier</span>
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Verified candidate details, domain specialization, and
                        stack credentials
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {biodataDetails.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col gap-1"
                      >
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          {item.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Education & Certifications */}
              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-6"
                >
                  {/* Education Card */}
                  <div className="pro-card rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center gap-2.5 mb-5">
                      <GraduationCap size={20} className="text-emerald-500" />
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {t("about.educationTitle")}
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

                  {/* Certifications Card */}
                  <div className="pro-card rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center gap-2.5 mb-4">
                      <Award size={20} className="text-emerald-500" />
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {t("about.certificationsTitle")}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {certificationsList.map((cert) => (
                        <div
                          key={cert.id}
                          className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3"
                        >
                          <CheckCircle
                            size={16}
                            className="text-emerald-500 shrink-0 mt-0.5"
                          />
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
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
