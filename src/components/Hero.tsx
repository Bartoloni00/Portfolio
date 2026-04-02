import { ArrowRight, ChevronDown, FileDown } from 'lucide-react';
import { Language } from '../types';
import '../css/hero.css';

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
      es: "Desarrollo APIs robustas y sistemas backend escalables en entornos productivos complejos, especialmente en el sector financiero. Trabajo con Clean Architecture, DDD y monolitos modulares, participando en todo el ciclo de vida del software: diseño, desarrollo, integración, deploy e infraestructura en AWS. Utilizo principalmente Laravel, Node.js, TypeScript y React, y me adapto rápidamente a nuevos desafíos y tecnologías.",
      en: "I build robust APIs and scalable backend systems in complex production environments, particularly in the financial sector. I work with Clean Architecture, DDD, and modular monoliths, contributing across the entire software lifecycle: design, development, integration, deployment, and AWS infrastructure. I primarily use Laravel, Node.js, TypeScript, and React, and quickly adapt to new challenges and technologies.",
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

  const handleScroll = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg transition-all hover:bg-primary/10"
              >
                {content.cv[language]}
                <FileDown size={18} />
              </a>
              <button
                onClick={handleScroll}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-neutral-900 font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-primary-dark"
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
<div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
  <span className="label bg-primary text-neutral-900 px-4 py-2 rounded-full mb-2">
    Conoceme mas
  </span>

  <button
    onClick={handleScroll}
    className="arrow p-2 rounded-full bg-primary text-neutral-900 shadow-card"
    aria-label="Scroll down"
  >
    <ChevronDown size={24} />
  </button>
</div>
    </section>
  );
}