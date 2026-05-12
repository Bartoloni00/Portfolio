export interface Translation<T = string> {
  es: T;
  en: T;
}

export interface ExperienceItem {
  id: string;
  role: Translation; // Por defecto es string
  company: string;
  period: Translation;
  description: Translation;
  items?: Translation<string[]>; // Aquí le pasas que la traducción es de un array
  technologies: string[];
  image?: string;
}

export interface ProjectItem {
  id: string;
  title: Translation;
  description: Translation;
  techStack: string[];
  image?: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export type Language = 'es' | 'en';