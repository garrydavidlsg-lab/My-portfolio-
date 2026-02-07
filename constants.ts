
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
  { name: 'TypeScript', level: 100, category: 'core' },
  { name: 'RxJS', level: 100, category: 'core' },
  { name: 'JavaScript (ES6+)', level: 100, category: 'core' },
  { name: 'HTML5/CSS3', level: 100, category: 'core' },
  { name: 'SCSS', level: 100, category: 'core' },
  
  // Angular Architecture
  { name: 'Reactive Forms', level: 100, category: 'state' },
  { name: 'Dependency Injection', level: 100, category: 'state' },
  { name: 'Routing & Guards', level: 100, category: 'state' },
  { name: 'Interceptors', level: 100, category: 'state' },
  { name: 'State Management', level: 100, category: 'state' },
  { name: 'Change Detection Opt.', level: 100, category: 'state' },

  // UI Frameworks & Quality
  { name: 'Angular Material', level: 100, category: 'testing' },
  { name: 'PrimeNG', level: 100, category: 'testing' },
  { name: 'Bootstrap', level: 100, category: 'testing' },
  { name: 'Unit Testing', level: 100, category: 'testing' },
  { name: 'Security (VAPT)', level: 100, category: 'testing' },
  { name: 'Bundle Optimization', level: 100, category: 'testing' },

  // Tools & Platforms
  { name: 'MetaGPT X', level: 100, category: 'other' },
  { name: 'Figma Make', level: 100, category: 'other' },
  { name: 'Git/GitHub/GitLab', level: 100, category: 'other' },
  { name: 'Postman', level: 100, category: 'other' },
  { name: 'Chrome DevTools', level: 100, category: 'other' },
  { name: 'Burp Suite', level: 100, category: 'other' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Legal Solutions Group",
    role: "Software Engineer",
    period: "APR 2024 – JAN 2026",
    highlights: [
      "Collaborated with cross-functional teams to develop and maintain enterprise-scale web applications using Angular and .NET.",
      "Leveraged advanced UI prototyping with MetaGPT X and Figma Make to accelerate frontend development.",
      "Maintained high standards of code quality, scalability, and optimized rendering for large data-driven systems."
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
      },
      {
        name: "MyPetsQR",
        description: "QR-enabled pet health platform for secure access to medical records and vaccination history.",
        tech: ["Angular", "QR Integration", "Responsive UI"]
      },
      {
        name: "Bilr",
        description: "Globalization of .NET MVC application with multi-language support.",
        tech: [".NET MVC", "i18n", "C#"]
      }
    ]
  },
  {
    company: "Manappuram Comptech and Consultants Ltd.",
    role: "Angular Developer",
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
      },
      {
        name: "Smart Form Builder",
        description: "Configurable, dynamic form builder for non-technical teams.",
        tech: ["Angular", "Dynamic Forms", "Metadata-driven UI"]
      }
    ]
  }
];
