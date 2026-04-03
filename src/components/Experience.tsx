import { Briefcase } from 'lucide-react';
import { useState } from 'react';
import { Language, ExperienceItem } from '../types';
import Modal from './Modal';

interface ExperienceProps {
  language: Language;
  experiences: ExperienceItem[];
}

export default function Experience({ language, experiences }: ExperienceProps) {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const content = {
    title: { es: 'Experiencia', en: 'Experience' },
    technologies: { es: 'Tecnologías', en: 'Technologies' },
    details: { es: 'Ver detalles', en: 'View details' },
  };

  return (
    <section id="experience" className="relative py-24 text-text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Título Principal - Centrado y Amarillo */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-24 text-primary animate-slideInUp tracking-tight">
          {content.title[language]}
        </h2>

        {/* Contenedor de la Timeline */}
        <div className="relative">
          
          {/* Línea Central (Eje) - Solo visible en Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-700 transform -translate-x-1/2 hidden md:block" />

          {/* Mapeo de Experiencias */}
          <div className="space-y-16 md:space-y-0 relative">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={exp.id} className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''} group relative`}>
                  
                  {/* 1. Bloque de Contenido (Tarjeta) */}
                  <div className="w-full md:w-[calc(50%-40px)] animate-slideInUp" style={{ animationDelay: `${index * 150}ms` }}>
                    <div 
                      onClick={() => setSelectedExperience(exp)}
                      className="bg-neutral-900 p-5 sm:p-6 md:p-8 rounded-3xl border border-neutral-800 hover:border-primary/40 transition-all duration-300 shadow-xl cursor-pointer transform"
                    >
                      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:items-center gap-4 mb-5">
                        {/* Logo o Icono Maletín */}
                        {exp.image ? (
                          <img src={exp.image} alt={exp.company} className="w-24 h-24 object-contain rounded-2xl p-2 flex-shrink-0" />
                        ) : (
                          <div className="bg-primary/10 p-5 rounded-2xl text-primary flex-shrink-0">
                            <Briefcase size={28} />
                          </div>
                        )}
                        
                        {/* Encabezado */}
                        <div className="text-center md:text-left">
                          <h3 className="text-2xl font-bold text-text-primary transition-colors leading-tight">
                            {exp.role[language]}
                          </h3>

                          <p className="text-lg text-text-secondary font-semibold mt-0.5">
                            {exp.company}
                          </p>

                          <p className="text-sm text-primary/80 font-semibold mt-1 md:hidden">
                            {exp.period[language]}
                          </p>
                        </div>
                      </div>

                      {/* UX: Logros Clave (Items) - Lista de puntos */}
                      <ul className="space-y-3.5 mb-7 text-text-secondary">
                        {exp.items?.[language].slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                            {/* Punto Amarillo Minimalista */}
                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Pie de Tarjeta - Tech y Link */}
                      <div className="flex items-center justify-between mt-5 pt-5 border-t border-neutral-800/60">
                        <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                          {exp.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="text-xs px-2.5 py-1 bg-neutral-800 rounded-md text-text-secondary font-medium">
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 3 && (
                            <span className="text-xs px-2 py-1 text-text-secondary/60">
                              +{exp.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-bold text-primary group-hover:underline whitespace-nowrap">
                          {content.details[language]} →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 2. Nodo Central (Círculo Amarillo con Borde) - Solo Desktop */}
                  <div className="absolute left-1/2 top-1/2 w-8 h-8 rounded-full bg-primary border-4 border-[#111111] transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block shadow-[0_0_15px_rgba(255,193,7,0.3)] transition-transform duration-300 group-hover:scale-125" />

                  {/* 3. Bloque de Fecha (Opuesto a la tarjeta) - Solo Desktop */}
                  <div className="w-full md:w-[calc(50%-40px)] text-center hidden md:block animate-slideInUp" style={{ animationDelay: `${index * 150}ms` }}>
                    <p className="text-xl font-bold text-text-secondary/80 uppercase tracking-widest">
                      {exp.period[language]}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      <Modal isOpen={!!selectedExperience} onClose={() => setSelectedExperience(null)}>
        {selectedExperience && (
          <div className="space-y-6 text-text-primary">
            <div className="flex items-start gap-4">
              {
                    selectedExperience.image ? (
                      <img src={selectedExperience.image} alt={selectedExperience.company} className="w-48 h-48 object-contain rounded-lg flex-shrink-0 " />
                    ) : (
                <div className="bg-primary-dark p-3 rounded-lg flex-shrink-0 text-neutral-900">
                      <Briefcase size={24} />
                </div>
                    )
              }
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2">{selectedExperience.role[language]}</h2>
                <p className="text-xl text-text-secondary font-semibold">{selectedExperience.company}</p>
                <p className="text-text-secondary mt-1 opacity-80">{selectedExperience.period[language]}</p>
              </div>
            </div>

            <div className="border-t border-neutral-700 pt-6">
              <p className="text-gray-300 leading-relaxed text-lg">{selectedExperience.description[language]}</p>
            </div>

            <div className="border-t border-neutral-700 pt-6">
              <h3 className="text-lg font-semibold text-primary mb-3">{content.technologies[language]}</h3>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-neutral-700 text-text-primary rounded-lg font-medium border border-neutral-600 hover:border-primary transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}