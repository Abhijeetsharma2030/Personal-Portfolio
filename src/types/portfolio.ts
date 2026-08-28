export type Language = 'en' | 'hi';

export type ThemeMode = 'dark' | 'light';

export interface NavItem {
  id: string;
  labelKey: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'instagram' | 'external';
  ariaLabel: string;
  displayText?: string;
}

export interface MetricHighlight {
  id: string;
  titleKey: string;
  subtitleKey: string;
  value: string;
  suffix?: string;
  descriptionKey: string;
  iconName: 'Building2' | 'CreditCard' | 'Server' | 'Cpu' | 'ShieldCheck' | 'Zap';
  badge: string;
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'devops';

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops';
  proficiency: number;
  iconName?: string;
  experienceLevel: string;
  highlight?: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  roleKey: string;
  period: string;
  locationKey: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  descriptionKey: string;
  points: string[];
  technologies: string[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'fullstack' | 'realtime' | 'ml' | 'frontend';
  descriptionKey: string;
  longDescriptionKey?: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  metrics?: string[];
  architecturePoints?: string[];
  featured: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degreeKey: string;
  duration: string;
  location: string;
  grade?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  inquiryType: 'enterprise' | 'freelance' | 'hiring' | 'other';
  message: string;
}

export interface PersonalInfo {
  name: string;
  roleKey: string;
  headlineKey: string;
  subtextKey: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  experienceYears: string;
  statusKey: string;
  avatarBlob: string;
  avatarAbout: string;
}
