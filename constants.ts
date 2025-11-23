import {
  Education,
  Experience,
  Project,
  SkillCategory,
  ContactInfo,
} from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: '+91 7984215947',
  email: 'mathiyakeval14@gmail.com',
  location: 'Rajkot, Gujarat',
  linkedin: 'https://www.linkedin.com/in/keval-mathiya-00251b222',
  github: 'https://github.com/kevalmathiya11',
};

export const EDUCATION_DATA: Education[] = [
  {
    institution:
      'Gujarat Technological University - Lukhdhirji Engineering College',
    location: 'Morbi, Gujarat',
    degree: 'Bachelor of Engineering - Information Technology',
    duration: 'Aug 2021 - May 2025',
    details: 'CGPA: 8.05 / 10',
  },
  {
    institution: 'SMT. V.S. SHAH HIGH SCHOOL',
    location: 'Wankaner, Gujarat',
    degree: 'H.S.C',
    duration: 'June 2019 – Aug 2021',
    details: 'Percentage: 86.76 %',
  },
  {
    institution: 'K.K. SHAH HIGH SCHOOL',
    location: 'Wankaner, Gujarat',
    degree: 'S.S.C',
    duration: 'May 2018 – March 2019',
    details: 'Percentage: 89.17 %',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Botxbyte',
    location: 'Rajkot, Gujarat',
    duration: 'July 2025 – Current',
    points: [
      'Developed a scalable, component-driven Svelte frontend with reusable UI modules (WaybackChart, Stepper, SourceArticleSelector) to improve reusability and maintainability.',
      'Implemented a structured application layout with shared global state management, dynamic routing, and interactive pages powered by URL-driven state for filtering, pagination, and deep linking.',
      'Integrated a secure API layer using Axios with JWT authentication for protected data access.',
      'Containerized the frontend application using Docker, enabling efficient and consistent deployment across environments.',
      'Built an AI-Management Service in FastAPI integrated with a Browser-Agent for automated browsing workflows and intelligent task handling.',
    ],
  },
  {
    role: 'Intern',
    company: 'WeyBee Solutions',
    location: 'Rajkot, Gujarat',
    duration: 'Jan 2025 – Apr 2025',
    points: [
      'Learned Python, NumPy, Pandas, Matplotlib, and Seaborn to analyze and visualize data.',
      'Gained experience in web scraping using Selenium to extract structured data from websites.',
      'Developed a universal web scraping script capable of extracting data from multiple e-commerce platforms, including Chrono24, Amazon, Flipkart, Meesho, Myntra, Snapdeal, and Ajio.',
      'Optimized scraping techniques to improve efficiency and handle different website structures dynamically.',
      'Explored data processing and manipulation for extracting meaningful insights from scraped data.',
    ],
  },
];

export const PROJECT_DATA: Project[] = [
  {
    title: 'Job Board',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'SMTP'],
    description: [
      'Built a Job Board web application enabling users to manage job listings.',
      'Implemented user authentication with JWT-based login and token access control.',
      'Integrated email notifications using SMTP for confirmation emails.',
      'Developed RESTful APIs for job management with pagination and filtering support.',
      'Utilized environment variables and modular project structure for secure, maintainable code.',
    ],
    link: 'https://github.com/kevalmathiya11/job_board',
  },
  {
    title: 'GeoInsights',
    techStack: ['React.js', 'FastAPI', 'Selenium', 'LDA', 'Sentiment Analysis'],
    description: [
      'Developed a web-based business insights platform retrieving company details from Google Maps via scraping.',
      'Implemented sentiment analysis on customer reviews (positive, negative, neutral).',
      'Integrated LDA (Latent Dirichlet Allocation) analysis to extract key topics from reviews.',
      'Utilized React.js for interactive frontend and FastAPI for backend efficient data processing.',
    ],
  },
];

export const SKILL_DATA: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'JavaScript'],
  },
  {
    category: 'Frameworks & Backend',
    skills: ['FastAPI', 'Django', 'SvelteKit', 'Node.js (Open to Exploring)'],
  },
  {
    category: 'Frontend',
    skills: ['SvelteKit', 'React.js (Open to Exploring)'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Swagger', 'Docker', 'Tailwind CSS', 'Git'],
  },
  {
    category: 'Spoken Languages',
    skills: ['English', 'Gujarati', 'Hindi'],
  },
];
