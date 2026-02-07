
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
  // Core Engineering
  { name: 'Angular 18+', level: 100, category: 'core' },
  { name: 'TypeScript', level: 100, category: 'core' },
  { name: 'RxJS', level: 100, category: 'core' },
  { name: 'Angular Signals', level: 100, category: 'core' },
  { name: 'Standalone Components', level: 100, category: 'core' },
  { name: 'Control Flow Syntax', level: 100, category: 'core' },
  { name: 'Custom Directives', level: 100, category: 'core' },
  { name: 'Advanced Dependency Injection', level: 100, category: 'core' },
  { name: 'Zone.js Optimization', level: 100, category: 'core' },
  { name: 'Change Detection Strategies', level: 100, category: 'core' },
  { name: 'Angular Elements', level: 100, category: 'core' },
  
  // State Management
  { name: 'NgRx Store/Effects', level: 100, category: 'state' },
  { name: 'NgRx Component Store', level: 100, category: 'state' },
  { name: 'NgRx Signal Store', level: 100, category: 'state' },
  { name: 'Akita', level: 100, category: 'state' },
  { name: 'NGXS', level: 100, category: 'state' },
  { name: 'Reactive Primitives', level: 100, category: 'state' },

  // Quality & Testing
  { name: 'Cypress E2E', level: 100, category: 'testing' },
  { name: 'Playwright', level: 100, category: 'testing' },
  { name: 'Jest', level: 100, category: 'testing' },
  { name: 'Karma & Jasmine', level: 100, category: 'testing' },
  { name: 'Angular Testing Library', level: 100, category: 'testing' },
  { name: 'Spectator', level: 100, category: 'testing' },
  { name: 'Lighthouse Performance', level: 100, category: 'testing' },

  // Ecosystem & Tooling
  { name: 'NX Monorepos', level: 100, category: 'other' },
  { name: 'Module Federation', level: 100, category: 'other' },
  { name: 'Micro-frontends', level: 100, category: 'other' },
  { name: 'Docker & Kubernetes', level: 100, category: 'other' },
  { name: 'CI/CD (GitHub Actions)', level: 100, category: 'other' },
  { name: 'Tailwind CSS', level: 100, category: 'other' },
  { name: 'SCSS / SASS', level: 100, category: 'other' },
  { name: 'Angular Universal (SSR)', level: 100, category: 'other' },
  { name: 'Analog.js', level: 100, category: 'other' },
  { name: 'Webpack / Vite', level: 100, category: 'other' },
  { name: 'Compodoc', level: 100, category: 'other' }
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
        description: "High-throughput data grid for managing multi-region cloud resources with real-time updates.",
        tech: ["Angular 18", "Signals", "SCSS", "RxJS"]
      },
      {
        name: "Core Design System",
        description: "Centralized UI library serving 15+ internal platforms with WCAG 2.1 AA compliance.",
        tech: ["NX", "Storybook", "Tailwind", "Angular Elements"]
      },
      {
        name: "Inventory Command Center",
        description: "Global logistics portal with predictive search and complex state management.",
        tech: ["NgRx", "Module Federation", "Web Workers"]
      },
      {
        name: "Telemetry Visualizer",
        description: "Real-time engine performance tracker utilizing Canvas and Angular optimized change detection.",
        tech: ["Angular", "D3.js", "WebSockets"]
      },
      {
        name: "Self-Service Cloud Portal",
        description: "Multi-tenant orchestration layer for rapid cloud environment provisioning.",
        tech: ["Angular", "Cypress", "OpenAPI"]
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
        name: "Live Analytics Hub",
        description: "Dashboard for visualizing gigabytes of incoming logs in real-time.",
        tech: ["RxJS", "Angular Material", "WebSockets"]
      },
      {
        name: "E-commerce Optimization",
        description: "SEO-focused migration to Angular Universal increasing conversion rates by 12%.",
        tech: ["Angular Universal", "SSR", "V8 Optimization"]
      },
      {
        name: "Customer Loyalty Engine",
        description: "Gamified reward system with offline capability and service worker synchronization.",
        tech: ["PWA", "Firebase", "Angular Service Workers"]
      },
      {
        name: "Financial Data Pipeline",
        description: "Secure, high-integrity financial report generator with complex validation logic.",
        tech: ["Reactive Forms", "NgRx Store", "Jest"]
      }
    ]
  }
];
