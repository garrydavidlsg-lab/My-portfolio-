
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Health Gates",
    description: "Enterprise hospital and pharmacy management system enabling patient history tracking and secure medicine disbursal. Focused on operational reliability and reducing manual coordination.",
    tech: ["Angular", "RxJS", ".NET", "REST API"],
    image: "https://picsum.photos/seed/health-gates/800/600",
    link: "#"
  },
  {
    title: "Quark AI",
    description: "Advanced billing correction workflow system integrated with Python-based APIs. Automated complex manual review processes using specialized Angular UI components.",
    tech: ["Angular", "AI Integration", "SCSS", "Python API"],
    image: "https://picsum.photos/seed/quark-ai/800/600",
    link: "#"
  },
  {
    title: "Loan Management System",
    description: "Streamlined lead management and customer onboarding modules for financial services, significantly reducing loan processing turnaround time.",
    tech: ["Angular", "Reactive Forms", "VAPT", "Angular Material"],
    image: "https://picsum.photos/seed/loan-system/800/600",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  // Core Engineering
  { name: 'Angular v8–v18', level: 100, category: 'core' },
  { name: 'React.js', level: 90, category: 'core' },
  { name: 'TypeScript', level: 100, category: 'core' },
  { name: 'JavaScript (ES6+)', level: 100, category: 'core' },
  { name: 'HTML5/CSS3', level: 100, category: 'core' },
  { name: 'Python', level: 70, category: 'core' },
  { name: 'RxJS', level: 95, category: 'core' },
  { name: 'Next.js', level: 85, category: 'core' },
  
  // AI & Backend
  { name: 'OpenAI API', level: 80, category: 'state' },
  { name: 'LangChain', level: 70, category: 'state' },
  { name: 'Node.js', level: 75, category: 'state' },
  { name: 'Prompt Engineering', level: 85, category: 'state' },
  { name: 'RAG Architecture', level: 65, category: 'state' },
  { name: 'Vector Databases', level: 60, category: 'state' },
  { name: 'FastAPI', level: 65, category: 'state' },
  { name: 'GraphQL', level: 70, category: 'state' },

  // UI Frameworks & Quality
  { name: 'Tailwind CSS', level: 95, category: 'testing' },
  { name: 'Angular Material', level: 100, category: 'testing' },
  { name: 'Unit Testing (Jest/Jasmine)', level: 90, category: 'testing' },
  { name: 'Security (VAPT)', level: 85, category: 'testing' },
  { name: 'Performance Opt.', level: 90, category: 'testing' },
  { name: 'Accessibility (WCAG)', level: 85, category: 'testing' },
  { name: 'Cypress', level: 80, category: 'testing' },
  { name: 'Framer Motion', level: 85, category: 'testing' },

  // Tools & Platforms
  { name: 'Git/GitHub', level: 100, category: 'other' },
  { name: 'Docker', level: 70, category: 'other' },
  { name: 'AWS (Basic)', level: 60, category: 'other' },
  { name: 'Figma', level: 80, category: 'other' },
  { name: 'Postman', level: 90, category: 'other' },
  { name: 'JIRA', level: 90, category: 'other' },
  { name: 'CI/CD Pipelines', level: 75, category: 'other' },
  { name: 'Vercel', level: 85, category: 'other' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Legal Solutions Group",
    role: "Senior Frontend Engineer",
    period: "APR 2024 – PRESENT",
    highlights: [
      "Leading the frontend architecture for enterprise-scale web applications using Angular and .NET.",
      "Integrating AI-driven features to automate complex workflows and enhance user decision-making.",
      "Mentoring junior developers and establishing best practices for code quality and scalability."
    ],
    projects: [
      {
        name: "Health Gates",
        description: "Hospital & pharmacy management system with patient history tracking and secure medicine disbursal.",
        tech: ["Angular", ".NET", "SQL Server"]
      },
      {
        name: "Quark AI",
        description: "Automated billing correction workflows integrated with Python-based APIs.",
        tech: ["Angular", "Python", "REST"]
      }
    ]
  },
  {
    company: "Manappuram Comptech and Consultants Ltd.",
    role: "Senior Angular Developer",
    period: "SEP 2021 – JAN 2024",
    highlights: [
      "Designed and developed modern Angular applications using reusable modules and component-driven architecture.",
      "Performed Angular version upgrades (v10–v16) and resolved VAPT findings for enhanced security.",
      "Improved application stability and performance through rendering optimization and change detection strategies."
    ],
    projects: [
      {
        name: "Loan Management System",
        description: "Lead management and customer onboarding modules reducing turnaround time.",
        tech: ["Angular", "Reactive Forms", "Material"]
      }
    ]
  },
  {
    company: "TechSolutions Inc.",
    role: "Frontend Developer",
    period: "JUN 2016 – AUG 2021",
    highlights: [
      "Developed responsive web applications using React and AngularJs.",
      "Collaborated with UX designers to implement pixel-perfect interfaces.",
      "Optimized frontend performance, reducing load times by 40%."
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        description: "Scalable e-commerce solution with real-time inventory management.",
        tech: ["React", "Redux", "Node.js"]
      }
    ]
  }
];
