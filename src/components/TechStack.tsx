import StackIcon from "tech-stack-icons";
import { Database } from 'lucide-react';
import { Language } from '../types';
import { TechStackProps } from '../types';
import { techs } from '../data.techStack';

function getYearsSince(sinceDate: string, referenceDate: Date = new Date()): number {
  const [year, month = 1, day = 1] = sinceDate.split('-').map(Number);
  const start = new Date(year, month - 1, day);

  let years = referenceDate.getFullYear() - start.getFullYear();
  const monthDiff = referenceDate.getMonth() - start.getMonth();
  const dayDiff = referenceDate.getDate() - start.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years--;
  }

  return Math.max(0, years);
}

function formatExperience(years: number, language: Language): string {
  if (years === 0) {
    return language === 'es' ? '< 1 año' : '< 1 year';
  }
  if (years === 1) {
    return language === 'es' ? '1 año' : '1 year';
  }
  return language === 'es' ? `${years} años` : `${years} years`;
}

export default function TechStack({ language }: TechStackProps) {
  const now = new Date();

  return (
    <section className="py-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, index) => {
            const years = getYearsSince(tech.since, now);

            return (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  language === 'es'
                    ? `Visitar sitio oficial de ${tech.name}`
                    : `Visit official ${tech.name} website`
                }
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
                    {formatExperience(years, language)}
                  </span>
                </div>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-primary/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}