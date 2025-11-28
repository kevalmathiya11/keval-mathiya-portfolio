import { Experience, Project, SkillCategory, SocialLink } from './types';

export const HERO_DATA = {
  name: "Keval Mathiya",
  title: "Full-Stack Developer",
  tagline: "Crafting efficient systems with elegant user interfaces.",
  location: "Rajkot, Gujarat",
  contact: {
    email: "mathiyakeval14@gmail.com",
    phone: "+91 7984215947"
  }
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Botxbyte",
    role: "Full-Stack Developer",
    period: "July 2025 – Present",
    location: "Rajkot",
    details: [
      "Developed a scalable, component-driven Svelte frontend with reusable UI modules.",
      "Implemented structured app layout with global state management and dynamic routing.",
      "Integrated secure API layer using Axios with JWT authentication.",
      "Containerized frontend application using Docker for consistent deployment.",
      "Built AI-Management Service in FastAPI integrated with Browser-Agent."
    ]
  },
  {
    company: "WeyBee Solutions",
    role: "Intern",
    period: "Jan 2025 – Apr 2025",
    location: "Rajkot",
    details: [
      "Utilized Python, NumPy, Pandas, and Matplotlib for data analysis.",
      "Developed universal web scraping scripts for major e-commerce platforms (Amazon, Flipkart).",
      "Optimized scraping techniques to improve efficiency and handle dynamic structures."
    ]
  }
];

export const PROJECT_DATA: Project[] = [
  {
    title: "Job Board Platform",
    description: "A robust web application for managing job listings with secure authentication and email notifications.",
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Python"],
    link: "https://github.com/kevalmathiya11/job_board",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "GeoInsights",
    description: "Business insights platform using web scraping and sentiment analysis on customer reviews.",
    tags: ["React.js", "FastAPI", "Selenium", "NLP", "Machine Learning"],
    link: "https://github.com/kevalmathiya11/geo-insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Universal Scraper",
    description: "High-performance data extraction tool capable of parsing multiple e-commerce giants dynamically.",
    tags: ["Python", "Selenium", "Data Processing", "Automation"],
    link: "#",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "Frontend",
    items: ["React.js", "SvelteKit", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "Node.js", "PostgreSQL"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "Swagger", "Selenium"]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/kevalmathiya11", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/keval-mathiya-00251b222", icon: "Linkedin" },
  { platform: "Email", url: "mailto:mathiyakeval14@gmail.com", icon: "Mail" }
];