import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Language } from './types';
import { experiences, projects } from './data';

function App() {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <div className="min-h-screen text-text-primary">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Experience language={language} experiences={experiences} />
      <Projects language={language} projects={projects} />
      <Contact language={language} />

      <footer className="bg-neutral-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-primary">
            © {new Date().getFullYear()} Jonathan Abraham Bartoloni.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
