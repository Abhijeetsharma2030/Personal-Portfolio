import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  Copy,
  Clock,
  Sparkles,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';
import { useTranslations } from '../hooks/useTranslations';
import { useClipboard } from '../hooks/useClipboard';

export const Contact: React.FC = () => {
  const { t } = useTranslations();
  const { hasCopied, copy } = useClipboard();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      inquiryType: 'enterprise',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Contact message received:', data);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles size={14} />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="pro-card rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <div className="flex flex-col gap-4">
                {/* Email Info Card with Copy Button */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copy(personalInfo.email)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 ${
                      hasCopied
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                    }`}
                    title="Copy Email"
                  >
                    {hasCopied ? (
                      <>
                        <Check size={14} />
                        <span>{t('contact.form.copied')}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>{t('contact.form.copyEmail')}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                      Location & Availability
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {personalInfo.location} (Open to Onsite & Remote)
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                      Direct Contact Phone
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 pt-2">
                <Clock size={15} className="text-emerald-500" />
                <span>{t('contact.info.responseRate')}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="pro-card rounded-3xl p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* Name & Email in Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                      {t('contact.form.name')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t('contact.form.namePlaceholder')}
                      {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      })}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/90 border ${
                        errors.name
                          ? 'border-rose-500'
                          : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                      } text-slate-900 dark:text-white outline-none transition-all`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                      {t('contact.form.email')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      {...register('email', {
                        required: 'Email address is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/90 border ${
                        errors.email
                          ? 'border-rose-500'
                          : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                      } text-slate-900 dark:text-white outline-none transition-all`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Inquiry Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                    {t('contact.form.inquiryType')}
                  </label>
                  <select
                    {...register('inquiryType')}
                    className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-emerald-500 transition-all"
                  >
                    <option value="enterprise">
                      {t('contact.form.inquiryEnterprise')}
                    </option>
                    <option value="hiring">
                      {t('contact.form.inquiryHiring')}
                    </option>
                    <option value="freelance">
                      {t('contact.form.inquiryFreelance')}
                    </option>
                    <option value="other">
                      {t('contact.form.inquiryOther')}
                    </option>
                  </select>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                    {t('contact.form.subject')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    {...register('subject', {
                      required: 'Subject is required',
                      minLength: { value: 3, message: 'Subject must be at least 3 characters' },
                    })}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/90 border ${
                      errors.subject
                        ? 'border-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                    } text-slate-900 dark:text-white outline-none transition-all`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                    {t('contact.form.message')} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t('contact.form.messagePlaceholder')}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters long',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/90 border ${
                      errors.message
                        ? 'border-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                    } text-slate-900 dark:text-white outline-none transition-all resize-y`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto self-start inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-md shadow-emerald-500/20 transition-all hover:translate-y-[-1px] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t('contact.form.submitting')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>{t('contact.form.submit')}</span>
                    </>
                  )}
                </button>

                {/* Success Feedback Alert */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5"
                    >
                      <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                      <span>{t('contact.form.success')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
