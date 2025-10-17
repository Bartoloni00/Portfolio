import { ArrowRight, ChevronDown } from 'lucide-react';
import { Language } from '../types';

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
      es: 'Desarrollador FullStack | Backend',
      en: 'FullStack | Backend Developer',
    },
    tagline: {
      es: "Me destaco por construir APIs robustas y eficientes aplicando Clean Architecture,DDD, MVC y monolitos modulares, asegurando soluciones escalables y mantenibles. Trabajo principalmente con PHP, Laravel, Node.js, Express, Typescript y React, y me adapto con facilidad a nuevas tecnologías y entornos de desarrollo.",
      en: "I excel at building robust and efficient APIs by applying Clean Architecture, DDD, MVC, and modular monoliths, ensuring scalable and maintainable solutions. I primarily work with PHP, Laravel, Node.js, Express, Typescript, and React, and I adapt easily to new technologies and development environments.",
    },
    cta: {
      es: 'Ver mi trabajo',
      en: 'View my work',
    },
  };

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
                <span className="text-primary">Bartoloni</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-text-secondary font-semibold animate-slideInLeft delay-200">
                {content.role[language]}
              </p>
            </div>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 animate-slideInLeft delay-300">
              {content.tagline[language]}
            </p>

            <button
              onClick={handleScroll}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-neutral-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-card animate-slideInLeft delay-400"
            >
              {content.cta[language]}
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Imagen */}
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScroll}
          className="p-2 rounded-full bg-primary hover:bg-primary-dark text-neutral-900 transition-colors shadow-card"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}