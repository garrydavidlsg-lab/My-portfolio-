
export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'core' | 'state' | 'testing' | 'other';
}

export interface ExperienceProject {
  name: string;
  description: string;
  tech: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  projects?: ExperienceProject[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
