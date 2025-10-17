export interface Translation {
    es: string;
    en: string;
  }
  
  export interface ExperienceItem {
    id: string;
    role: Translation;
    company: string;
    period: Translation;
    description: Translation;
    technologies: string[];
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
  