import { useState, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const TechStack = lazy(() => import('./components/TechStack'));
import { 
  TechStackSkeleton, 
  ExperienceSkeleton, 
  ProjectsSkeleton, 
  ContactSkeleton 
} from './components/Skeletons';
import { Language } from './types';
import { experiences, projects } from './data';

function App() {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <div className="min-h-screen text-text-primary">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Suspense fallback={<TechStackSkeleton />}>
        <TechStack language={language} />
      </Suspense>
      <Suspense fallback={<ExperienceSkeleton />}>
        <Experience language={language} experiences={experiences} />
      </Suspense>
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects language={language} projects={projects} />
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact language={language} />
      </Suspense>

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
