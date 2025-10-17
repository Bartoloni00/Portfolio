import { Globe, Menu, X } from 'lucide-react';
import { Language } from '../types';
import { useState } from 'react';

interface NavigationProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = {
    es: ['Inicio', 'Experiencia', 'Proyectos', 'Contacto'],
    en: ['Home', 'Experience', 'Projects', 'Contact']
  };

  const sections = ['hero', 'experience', 'projects', 'contact'];

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-onyx/95 backdrop-blur-sm shadow-lg z-40 border-b border-sand/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleScroll('hero')}
              className="text-2xl font-bold text-white hover:text-honey transition-colors drop-shadow-sm"
            >
              JAB
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item, index) => (
              <button
                key={item}
                onClick={() => handleScroll(sections[index])}
                className="relative text-white font-medium transition-all duration-200 group"
              >
                <span className="group-hover:text-honey transition-colors duration-200 drop-shadow-sm">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-honey transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* Language button */}
            <button
              onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 px-4 py-2 border-2 border-honey text-white bg-transparent rounded-lg font-semibold 
                         hover:bg-honey hover:text-onyx transition-all duration-300 shadow-md hover:shadow-honey/30 hover:border"
            >
              <Globe size={18} />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-honey/10 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-onyx border-t border-sand/10 animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            {navItems[language].map((item, index) => (
              <button
                key={item}
                onClick={() => handleScroll(sections[index])}
                className="block w-full text-left px-3 py-2 rounded-lg text-white hover:text-honey hover:bg-honey/10 transition-colors"
              >
                {item}
              </button>
            ))}

            {/* Language button mobile */}
            <button
              onClick={() => {
                onLanguageChange(language === 'es' ? 'en' : 'es');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 border-2 border-honey text-honey rounded-lg font-semibold 
                         hover:bg-honey hover:text-onyx transition-all duration-300 shadow-md hover:shadow-honey/30"
            >
              <Globe size={18} />
              {language === 'es' ? 'English' : 'Español'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
