import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {

  const content = {
    title: { es: 'Contacto', en: 'Contact' },
    subtitle: { es: 'Hablemos sobre tu próximo proyecto', en: "Let's talk about your next project" },
    socialTitle: { es: 'Sígueme en', en: 'Follow me on' }
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:bartoloniabraham@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abraham-bartoloni/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/bartoloni00', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="relative py-20 text-text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 animate-slideInUp">
            {content.title[language]}
          </h2>
          <p className="text-xl text-text-secondary animate-slideInUp delay-100">{content.subtitle[language]}</p>
        </div>

          <div className="flex items-center justify-center gap-4">
            <div className="bg-neutral-800 p-8 rounded-xl min-w-[320px] shadow-card">
              <h3 className="text-2xl font-bold text-primary mb-6">{content.socialTitle[language]}</h3>
              <div className="space-y-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-700 transition-colors group"
                  >
                    <div className="bg-primary-dark p-3 rounded-lg text-neutral-900 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
