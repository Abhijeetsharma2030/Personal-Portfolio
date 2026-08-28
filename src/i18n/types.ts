import { Language } from '../types/portfolio';

export interface TranslationDictionary {
  // Navigation
  'nav.home': string;
  'nav.about': string;
  'nav.skills': string;
  'nav.experience': string;
  'nav.projects': string;
  'nav.contact': string;
  'nav.resume': string;
  'nav.getInTouch': string;

  // Hero Section
  'hero.badge': string;
  'hero.greeting': string;
  'hero.headline': string;
  'hero.subtext': string;
  'hero.cta.projects': string;
  'hero.cta.contact': string;
  'hero.cta.resume': string;
  'hero.coreSkills': string;
  'hero.yearsExp': string;

  // Metrics Section
  'metrics.title': string;
  'metrics.subtitle': string;
  'metrics.hms.title': string;
  'metrics.hms.subtitle': string;
  'metrics.hms.desc': string;
  'metrics.loan.title': string;
  'metrics.loan.subtitle': string;
  'metrics.loan.desc': string;
  'metrics.iis.title': string;
  'metrics.iis.subtitle': string;
  'metrics.iis.desc': string;
  'metrics.vdom.title': string;
  'metrics.vdom.subtitle': string;
  'metrics.vdom.desc': string;

  // About Section
  'about.title': string;
  'about.subtitle': string;
  'about.bio': string;
  'about.locationLabel': string;
  'about.emailLabel': string;
  'about.roleLabel': string;
  'about.educationTitle': string;
  'about.certificationsTitle': string;

  // Skills Section
  'skills.title': string;
  'skills.subtitle': string;
  'skills.filter.all': string;
  'skills.filter.frontend': string;
  'skills.filter.backend': string;
  'skills.filter.devops': string;
  'skills.intro': string;
  'skills.proficiency': string;

  // Experience Section
  'experience.title': string;
  'experience.subtitle': string;
  'experience.itdose.role': string;
  'experience.itdose.desc': string;
  'experience.mingle.role': string;
  'experience.mingle.desc': string;
  'experience.mantra.role': string;
  'experience.mantra.desc': string;
  'experience.present': string;

  // Projects Section
  'projects.title': string;
  'projects.subtitle': string;
  'projects.filter.all': string;
  'projects.filter.fullstack': string;
  'projects.filter.realtime': string;
  'projects.filter.ml': string;
  'projects.viewLive': string;
  'projects.viewCode': string;
  'projects.viewDetails': string;
  'projects.techStack': string;
  'projects.highlights': string;
  'projects.foodDelivery.desc': string;
  'projects.foodDelivery.longDesc': string;
  'projects.chatApp.desc': string;
  'projects.chatApp.longDesc': string;
  'projects.cropSystem.desc': string;
  'projects.cropSystem.longDesc': string;
  'projects.twitterSentiment.desc': string;
  'projects.twitterSentiment.longDesc': string;

  // Contact Section
  'contact.title': string;
  'contact.subtitle': string;
  'contact.form.name': string;
  'contact.form.namePlaceholder': string;
  'contact.form.email': string;
  'contact.form.emailPlaceholder': string;
  'contact.form.inquiryType': string;
  'contact.form.inquiryEnterprise': string;
  'contact.form.inquiryHiring': string;
  'contact.form.inquiryFreelance': string;
  'contact.form.inquiryOther': string;
  'contact.form.subject': string;
  'contact.form.subjectPlaceholder': string;
  'contact.form.message': string;
  'contact.form.messagePlaceholder': string;
  'contact.form.submit': string;
  'contact.form.submitting': string;
  'contact.form.success': string;
  'contact.form.copyEmail': string;
  'contact.form.copied': string;
  'contact.info.location': string;
  'contact.info.email': string;
  'contact.info.responseRate': string;

  // Footer
  'footer.builtWith': string;
  'footer.rights': string;
  'footer.backToTop': string;
}

export type TranslationKey = keyof TranslationDictionary;
export type TranslationsMap = Record<Language, TranslationDictionary>;

