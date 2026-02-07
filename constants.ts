
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Enterprise Systems Dashboard",
    description: "A high-performance Angular 18 management system optimized for real-time data visualization and telemetry tracking using reactive primitives.",
    tech: ["Angular", "RxJS", "Signals", "Tailwind"],
    image: "https://picsum.photos/seed/tech-grid/800/600",
    link: "#"
  },
  {
    title: "Global E-commerce Infrastructure",
    description: "Enterprise-scale e-commerce solution featuring advanced server-side rendering (SSR) and optimized core web vitals for global markets.",
    tech: ["Angular", "NGRX", "SSR", "Stripe"],
    image: "https://picsum.photos/seed/tech-shop/800/600",
    link: "#"
  },
  {
    title: "Real-time Communication Nexus",
    description: "Low-latency collaborative platform utilizing WebSockets and reactive state management for high-concurrency data synchronization.",
    tech: ["Angular", "Firebase", "WebSockets"],
    image: "https://picsum.photos/seed/tech-chat/800/600",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: 'Angular Architecture', level: 98, category: 'core' },
  { name: 'Reactive Programming', level: 92, category: 'core' },
  { name: 'Signals & State', level: 90, category: 'core' },
  { name: 'NGRX / Redux', level: 88, category: 'state' },
  { name: 'Automated Testing', level: 85, category: 'testing' },
  { name: 'CI/CD Pipelines', level: 82, category: 'other' },
  { name: 'TypeScript', level: 95, category: 'core' },
  { name: 'NX Monorepos', level: 85, category: 'other' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Global Tech Solutions",
    role: "Lead Frontend Architect",
    period: "2021 - Present",
    highlights: [
      "Optimized enterprise change detection strategies, resulting in a 30% performance increase for data-heavy views.",
      "Led the migration of legacy monolithic applications to a modular NX workspace architecture.",
      "Established standard UI/UX patterns and component libraries used across multiple global product teams."
    ],
    projects: [
      {
        name: "Enterprise Grid System",
        description: "High-throughput data grid for managing multi-region cloud resources.",
        tech: ["Angular 18", "Signals", "SCSS"]
      },
      {
        name: "Core Component Library",
        description: "Standardized Design System implemented across 10+ internal platforms.",
        tech: ["NX", "Storybook", "Tailwind"]
      }
    ]
  },
  {
    company: "Signal Flow Analytics",
    role: "Senior Frontend Engineer",
    period: "2018 - 2021",
    highlights: [
      "Architected reactive state management solutions handling real-time high-velocity data streams.",
      "Implemented advanced lazy loading and tree-shaking techniques, reducing initial bundle sizes by 40%.",
      "Directed the frontend implementation of highly accessible user interfaces following WCAG 2.1 guidelines."
    ],
    projects: [
      {
        name: "Real-time Monitoring Suite",
        description: "Analytics platform for tracking infrastructure health in real-time.",
        tech: ["RxJS", "Angular Material", "WebSockets"]
      },
      {
        name: "Scalable E-commerce Storefront",
        description: "Mobile-first storefront optimized for high-performance delivery.",
        tech: ["Angular Universal", "Redux", "Jest"]
      }
    ]
  }
];
