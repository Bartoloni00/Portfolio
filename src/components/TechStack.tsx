import StackIcon from "tech-stack-icons";
import { Database } from 'lucide-react';
import { Language } from '../types';

interface TechStackProps {
  language: Language;
}

export default function TechStack({ language }: TechStackProps) {
  const techs = [
    { name: 'Node.js', icon: 'nodejs', url: 'https://nodejs.org/', years: 4 },
    { name: 'Linux', icon: 'linux', url: 'https://www.linux.org/', years: 4 },
    { name: 'Laravel', icon: 'laravel', url: 'https://laravel.com/', years: 3 },
    { name: 'MySQL', icon: 'mysql', url: 'https://www.mysql.com/', years: 3 },
    { name: 'React', icon: 'react', url: 'https://react.dev/', years: 2 },
    { name: 'TypeScript', icon: 'typescript', url: 'https://www.typescriptlang.org/', years: 2 },
    { name: 'AWS', icon: 'aws', url: 'https://aws.amazon.com/', years: 1 },
    { name: 'DynamoDB', icon: 'database', url: 'https://aws.amazon.com/dynamodb/', isLucide: true, years: 1 },
    { name: 'Docker', icon: 'docker', url: 'https://www.docker.com/', years: 1 },
  ];

  return (
    <section className="py-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={language === 'es' ? `Visitar sitio oficial de ${tech.name}` : `Visit official ${tech.name} website`}
              className="group relative flex items-center gap-3 bg-neutral-800/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-xl transition-all duration-300 hover:border-primary/50 hover:bg-neutral-800/60 hover:-translate-y-1 animate-slideInUp cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-8 h-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                {tech.isLucide ? (
                  <Database className="text-white" />
                ) : (
                  <StackIcon name={tech.icon as any} />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-text-primary/70 font-semibold text-sm tracking-tight group-hover:text-text-primary transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">
                  {tech.years} {tech.years === 1 
                    ? (language === 'es' ? 'año' : 'year') 
                    : (language === 'es' ? 'años' : 'years')}
                </span>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
