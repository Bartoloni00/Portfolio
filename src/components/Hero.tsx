import { ArrowRight, FileDown } from 'lucide-react';
import { Language } from '../types';
import '../css/hero.css';
import { useState, useEffect } from 'react';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const content = {
    greeting: {
      es: 'Hola, soy',
      en: "Hi, I'm",
    },
    role: {
      es: 'Backend Developer | Full Stack Engineer',
      en: 'Backend Developer | Full Stack Engineer',
    },
    tagline: {
      es: "Construyo sistemas escalables y APIs robustas que funcionan en producción real. Especializado en entornos complejos del sector financiero, aplico Clean Architecture, DDD y monolitos modulares para desarrollar soluciones mantenibles, performantes y listas para crecer. Participo en todo el ciclo: arquitectura, desarrollo, integración, deploy e infraestructura en AWS.",
      en: "I build scalable systems and robust APIs that run in real production environments. Specialized in complex financial systems, I apply Clean Architecture, DDD, and modular monoliths to deliver maintainable, high-performance solutions ready to scale. I contribute across the entire lifecycle: architecture, development, integration, deployment, and AWS infrastructure.",
    },
    cv: {
      es: 'Descargar CV',
      en: 'Download CV',
    },
    cta: {
      es: 'Ver mi trabajo',
      en: 'View my work',
    },
  };

  const cvFile = language === 'es' ? '/cv/es-cv-abraham-bartoloni.pdf' : '/cv/en-cv-abraham-bartoloni.pdf';

  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const sections = ['hero', 'experience', 'projects', 'contact'];


  const handleScroll = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      const current = sections.find((section) => {
      const el = document.getElementById(section);
      if (!el) return false;

      const rect = el.getBoundingClientRect();
      return rect.top <= 200 && rect.bottom >= 200;
    });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);


  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden text-text-primary pt-16">
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] py-12 gap-12">
          {/* Texto */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-text-secondary font-medium animate-slideInLeft">
                {content.greeting[language]}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-slideInLeft delay-100">
                Jonathan Abraham
                <br />
                <span>Bartoloni</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold animate-slideInLeft delay-200 text-primary">
                {content.role[language]}
              </p>
            </div>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 animate-slideInLeft delay-300">
              {content.tagline[language]}
            </p>

            <div className="flex gap-4">
             <a
                href={cvFile}
                download
                className="inline-flex items-center gap-2 text-sm md:text-base px-6 py-3 border border-primary text-primary font-semibold rounded-lg transition-all hover:bg-primary/10"
              >
                {content.cv[language]}
                <FileDown size={18} />
              </a>
              <button
                onClick={handleScroll}
                className="inline-flex items-center gap-2 text-sm md:text-base px-8 py-4 bg-primary text-neutral-900 font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-primary-dark"
              >
                {content.cta[language]}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex-1 max-w-md lg:max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-dark rounded-2xl transform rotate-3 opacity-70 animate-pulse-slow" />
              <div className="relative bg-neutral-800 rounded-2xl p-2 shadow-card transform hover:rotate-0 transition-transform duration-300">
                <img
                  src="/image3.png"
                  alt="Jonathan Abraham Bartoloni"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flecha scroll */}
<div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
  {/* Progress bar */}
  <div className="w-1 h-40 bg-white/10 rounded-full overflow-hidden">
    <div
      className="bg-primary w-full transition-all duration-200"
      style={{ height: `${scrollProgress}%` }}
    />
  </div>

  {/* Dots */}
  <div className="flex flex-col gap-3">
    {sections.map((section) => (
      <button
        title={section}
        key={section}
        onClick={() => handleScroll(section)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          activeSection === section
            ? 'bg-primary scale-125 shadow-lg'
            : 'bg-white/30 hover:bg-white/60'
        }`}
      />
    ))}
  </div>
</div>
    </section>
  );
}