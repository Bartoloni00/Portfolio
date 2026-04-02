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
  };

  return (
    <section id="experience" className="relative py-20 text-text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-primary animate-slideInUp">
          {content.title[language]}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              onClick={() => setSelectedExperience(exp)}
              className={`bg-neutral-800 p-6 rounded-2xl shadow-card hover:shadow-2xl border border-transparent hover:border-primary transition-all transform hover:-translate-y-2 cursor-pointer animate-slideInUp delay-${index * 100}`}
            >
              <div className="flex items-start gap-4">
                  {
                    exp.image ? (
                      <img src={exp.image} alt={exp.company} className="w-16 h-16 object-contain rounded-lg flex-shrink-0 " />
                    ) : (
                <div className="bg-primary-dark p-3 rounded-lg flex-shrink-0 text-neutral-900">
                      <Briefcase size={24} />
                </div>
                    )
                  }
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-text-primary">{exp.role[language]}</h3>
                  <p className="text-text-secondary font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-text-secondary opacity-80">{exp.period[language]}</p>
                </div>
              </div>
            </div>
          ))}
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