import { Code2, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { Language, ProjectItem } from '../types';
import Modal from './Modal';

interface ProjectsProps {
  language: Language;
  projects: ProjectItem[];
}

export default function Projects({ language, projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const content = {
    title: { es: 'Proyectos', en: 'Projects' },
    techStack: { es: 'Stack Tecnológico', en: 'Tech Stack' },
    links: { es: 'Enlaces', en: 'Links' },
    github: { es: 'Ver en GitHub', en: 'View on GitHub' },
    demo: { es: 'Ver Demo', en: 'View Demo' }
  };

  return (
    <section id="projects" className="relative py-24 text-text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 text-primary animate-slideInUp">
          {content.title[language]}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={language === 'es' ? `Ver detalles del proyecto ${project.title.es}` : `View details for project ${project.title.en}`}
              className={`p-6 rounded-2xl shadow-card hover:shadow-2xl border border-neutral-800 hover:border-primary transition-all transform hover:-translate-y-1 cursor-pointer animate-slideInUp delay-${index * 100} flex flex-col text-left w-full`}
            >
             {
                project.image
                ? <img 
                    src={project.image} 
                    alt={project.title[language]} 
                    width="400"
                    height="180"
                    loading="lazy"
                    className="w-full h-[180px] rounded-xl object-cover mb-5" 
                  /> 
                :
               <div className="bg-gradient-to-br from-primary to-primary-dark p-4 rounded-xl mb-5 flex items-center justify-center h-[180px] group-hover:scale-102 transition-transform">
                  <Code2 size={48} className="text-white drop-shadow-md" />
             </div>
             }
              <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors min-h-[3.5rem] flex items-center">
                {project.title[language]}
              </h3>
              <p className="text-gray-400 line-clamp-3 leading-relaxed group-hover:text-gray-300 transition-colors min-h-[4.5rem]">
                {project.description[language]}
              </p>
              <div className="mt-auto pt-5 flex flex-wrap gap-2 min-h-[2.5rem] content-start">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-primary text-neutral-900 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs px-2.5 py-1 bg-neutral-700 text-gray-300 rounded-lg">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} language={language}>
        {selectedProject && (
          <div className="space-y-6 text-text-primary">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {
                    selectedProject.image ? (
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title[language]} 
                        width="240"
                        height="300"
                        className="w-full sm:w-60 object-contain rounded-2xl p-2 bg-neutral-800/50 flex-shrink-0" 
                      />
                    ) : (
                <div className="bg-primary/10 p-6 rounded-2xl text-primary flex-shrink-0">
                      <Code2 size={32} />
                </div>
                    )
              }
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-3xl font-bold text-primary">{selectedProject.title[language]}</h2>
              </div>
            </div>

            <div className="border-t border-neutral-700 pt-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                {selectedProject.description[language]}
              </p>
            </div>

            <div className="border-t border-neutral-700 pt-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                {content.techStack[language]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-neutral-700 text-text-primary rounded-lg font-medium border border-neutral-600 hover:border-primary transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.links && (
              <div className="border-t border-neutral-700 pt-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {content.links[language]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium bg-neutral-800 text-text-primary hover:bg-primary hover:text-neutral-900 transition-all transform hover:-translate-y-1"
                    >
                      <Github size={18} />
                      {content.github[language]}
                    </a>
                  )}
                  {selectedProject.links.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium bg-primary text-neutral-900 hover:bg-primary-dark transition-all transform hover:-translate-y-1"
                    >
                      <ExternalLink size={18} />
                      {content.demo[language]}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}