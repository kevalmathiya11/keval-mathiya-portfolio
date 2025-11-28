export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
