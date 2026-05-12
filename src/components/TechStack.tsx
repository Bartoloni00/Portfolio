import StackIcon from "tech-stack-icons";
import { Database } from 'lucide-react';
import { Language } from '../types';

interface TechStackProps {
  language: Language;
}

export default function TechStack({ language }: TechStackProps) {
  const techs = [
    { name: 'AWS', icon: 'aws', url: 'https://aws.amazon.com/' },
    { name: 'Laravel', icon: 'laravel', url: 'https://laravel.com/' },
    { name: 'Node.js', icon: 'nodejs', url: 'https://nodejs.org/' },
    { name: 'DynamoDB', icon: 'database', url: 'https://aws.amazon.com/dynamodb/', isLucide: true },
    { name: 'MySQL', icon: 'mysql', url: 'https://www.mysql.com/' },
    { name: 'React', icon: 'react', url: 'https://react.dev/' },
    { name: 'TypeScript', icon: 'typescript', url: 'https://www.typescriptlang.org/' },
    { name: 'Docker', icon: 'docker', url: 'https://www.docker.com/' },
    { name: 'Linux', icon: 'linux', url: 'https://www.linux.org/' },
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
              <span className="text-text-primary/70 font-semibold text-sm tracking-tight group-hover:text-text-primary transition-colors">
                {tech.name}
              </span>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
