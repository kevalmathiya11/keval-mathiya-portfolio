export interface Education {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  details: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
}

export interface Project {
  title: string;
  techStack: string[];
  description: string[];
  link?: string;
  ongoing?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
}
