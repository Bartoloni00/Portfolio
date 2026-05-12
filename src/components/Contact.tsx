import { Mail } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {

  const content = {
    title: { es: 'Contacto', en: 'Contact' },
    subtitle: { es: 'Hablemos sobre tu próximo proyecto', en: "Let's talk about your next project" },
    socialTitle: { es: 'Sígueme en', en: 'Follow me on' },
    emailCTA: { es: 'Trabajemos juntos', en: 'Work with me' },
  };

  const socialLinks = [
    { icon: Mail, img2: 'rrss/email.webp', href: 'mailto:bartoloniabraham@gmail.com', label: 'Email' },
    { img: 'rrss/linkedin.webp', img2: 'rrss/linkedin2.webp', href: 'https://www.linkedin.com/in/abraham-bartoloni/', label: 'LinkedIn' },
    { img: 'rrss/github.webp', img2: 'rrss/github3.webp', href: 'https://github.com/bartoloni00', label: 'GitHub' },
    { img: 'rrss/instagram.webp', img2: 'rrss/instagram2.webp', href: 'https://www.instagram.com/bartoloni00/', label: 'Instagram' },
    { img: 'rrss/tiktok.avif', img2: 'rrss/tik-tok3.webp', href: 'https://www.tiktok.com/@bartoloni003', label: 'TikTok' },
  ];

  return (
    <section id="contact" className="relative py-20 text-text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 animate-slideInUp">
            {content.title[language]}
          </h2>
          <p className="text-xl text-text-secondary animate-slideInUp delay-100">{content.subtitle[language]}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4 w-full">

          {/* EMAIL (col 1 - full height) */}
          <a
            href={socialLinks[0].href}
            aria-label={language === 'es' ? 'Enviar correo electrónico' : 'Send an email'}
            className="md:row-span-4 relative overflow-hidden rounded-2xl shadow-card group min-h-[140px] md:min-h-0"
          >
            {/* imagen base */}
            <img
              src={socialLinks[0].img2}
              alt={language === 'es' ? 'Fondo de contacto por email' : 'Email contact background'}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-all" />

            {/* contenido */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

              <Mail
                size={40}
                className="text-white mb-4 transition-transform duration-300 group-hover:scale-110"
              />

              <p className="text-xl font-bold text-white flex items-center gap-2 flex-col">
                <span>{socialLinks[0].label}</span>
                <span>{content.emailCTA[language]}</span>
              </p>

              <span className="text-sm text-white/80 mt-2 break-all opacity-0 group-hover:opacity-100 transition-all duration-300">
                {socialLinks[0].href.replace('mailto:', '')}
              </span>
            </div>
          </a>

          {/* GITHUB (col 2, filas 1-2) */}
          <a
            href={socialLinks[2].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={language === 'es' ? 'Ver mi perfil de GitHub' : 'View my GitHub profile'}
            className="md:row-span-2 relative overflow-hidden rounded-2xl shadow-card group min-h-[140px] md:min-h-0"
          >
            {/* imagen base */}
            <img
              src={socialLinks[2].img}
              alt="GitHub Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* hover slide (derecha → izquierda) */}
            <img
              src={socialLinks[2].img2}
              alt="GitHub Profile Preview"
              className="absolute inset-0 w-full h-full object-cover translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out"
            />

            {/* overlay oscuro */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

            {/* texto */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white text-xl font-bold">
                {socialLinks[2].label}
              </span>
            </div>
          </a>

          {/* LINKEDIN (col 3, filas 1-2) */}
          <a
            href={socialLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={language === 'es' ? 'Ver mi perfil de LinkedIn' : 'View my LinkedIn profile'}
            className="md:row-span-2 relative overflow-hidden rounded-2xl shadow-card group min-h-[140px] md:min-h-0"
          >
            <img
              src={socialLinks[1].img}
              alt="LinkedIn Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <img
              src={socialLinks[1].img2}
              alt="LinkedIn Profile Preview"
              className="absolute inset-0 w-full h-full object-cover translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white text-xl font-bold">
                {socialLinks[1].label}
              </span>
            </div>
          </a>

          {/* INSTAGRAM (fila 3 ocupa col 2 y 3) */}
          <a
            href={socialLinks[3].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={language === 'es' ? 'Ver mi perfil de Instagram' : 'View my Instagram profile'}
            className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-card group min-h-[140px] md:min-h-0"
          >
            <img
              src={socialLinks[3].img}
              alt="Instagram Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <img
              src={socialLinks[3].img2}
              alt="Instagram Profile Preview"
              className="absolute inset-0 w-full h-full object-cover -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white text-xl font-bold">
                {socialLinks[3].label}
              </span>
            </div>
          </a>

          {/* TIKTOK (fila 4 ocupa col 2 y 3) */}
          <a
            href={socialLinks[4].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={language === 'es' ? 'Ver mi perfil de TikTok' : 'View my TikTok profile'}
            className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-card group min-h-[140px]"
          >
            <img
              src={socialLinks[4].img}
              alt="TikTok Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <img
              src={socialLinks[4].img2}
              alt="TikTok Profile Preview"
              className="absolute inset-0 w-full h-full object-cover translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white text-xl font-bold">
                {socialLinks[4].label}
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
