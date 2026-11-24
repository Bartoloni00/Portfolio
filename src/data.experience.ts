import { ExperienceItem } from './types';
import { baseUrl } from './config';
export const experiences: ExperienceItem[] = [
    {
    id: 'exp-1',
    role: {
        es: 'Software Engineer (Full Stack)',
        en: 'Software Engineer (Full Stack)'
    },
    company: 'Syloper',
    period: {
        es: 'diciembre de 2025 - actualidad',
        en: 'Dec 2025 - Present'
    },
    description: {
        es: 'Responsable técnico principal de la implementación end-to-end de una plataforma para la gestión de solicitudes de mantenimiento y garantías de maquinaria agropecuaria. Desde el kickoff hasta su publicación y operación, participo en el diseño de arquitectura y desarrollo de aproximadamente el 95% de sus componentes técnicos: PWA, Backoffice, API, base de datos, infraestructura y CI/CD. También participo en otros proyectos de la empresa, abordando problemas de rendimiento, evolución de aplicaciones móviles y modernización de plataformas financieras.',
        en: 'Main technical contributor to the end-to-end implementation of a platform for managing maintenance requests and agricultural machinery warranties. From kickoff to deployment and operation, I participate in architecture design and develop approximately 95% of its technical components: PWA, backoffice, API, database, infrastructure, and CI/CD. I also contribute to other company projects, addressing performance bottlenecks, mobile application evolution, and financial platform modernization.'
    },
    items: {
        es: [
        'Diseño e implementación de arquitectura full stack para una plataforma productiva, incluyendo autenticación, modelo de datos, operaciones offline y separación de responsabilidades entre PWA, Backoffice y API.',
        'Implementación de procesos asíncronos y desacoplados para auditoría, reportes y notificaciones mediante eventos, Redis, Laravel Horizon y jobs.',
        'Diseño y configuración de infraestructura en Railway y AWS S3, automatización de deployments con GitHub Actions y configuración de observabilidad.',
        'Optimización de plataforma financiera: reducción de aproximadamente 40 segundos a 600 ms en un endpoint de información financiera en tiempo real.',
        'Evolución de aplicación móvil logística: migración de Android API 34 a 36, implementación de mecanismos de encriptación de datos y mejoras de UX.',
        'Implementación de aproximadamente 90% de cobertura de tests unitarios y de feature en backend, integrados al pipeline de CI/CD.',
        'Participación en refinamientos, estimaciones, code reviews y decisiones técnicas junto a PO, CTO, QA y clientes.'
        ],
        en: [
        'Designed and implemented the full-stack architecture of a production platform, including authentication, data modeling, offline operations, and separation of concerns between PWA, backoffice, and API.',
        'Implemented asynchronous and decoupled workflows for auditing, reporting, and notifications using events, Redis, Laravel Horizon, and background jobs.',
        'Designed and configured infrastructure on Railway and AWS S3, automated deployments with GitHub Actions, and established observability.',
        'Optimized a financial platform, reducing a real-time financial data endpoint from approximately 40 seconds to 600 ms.',
        'Evolved a logistics mobile application through Android API 34 to 36 migration, user data encryption mechanisms, and UX improvements.',
        'Implemented approximately 90% backend test coverage through unit and feature tests integrated into the CI/CD pipeline.',
        'Participated in refinements, estimations, code reviews, and technical decisions alongside PO, CTO, QA, and clients.'
        ]
    },
    technologies: [
        'Laravel',
        'React',
        'Ionic',
        'TypeScript',
        'PostgreSQL',
        'Redis',
        'Laravel Horizon',
        'AWS S3',
        'Railway',
        'GitHub Actions'
    ],
    image: `${baseUrl}experience/syloper_logo.jpeg`
    },
    {
    id: 'exp-2',
    role: {
        es: 'Full Stack Developer (Freelance)',
        en: 'Full Stack Developer (Freelance)'
    },
    company: 'Proyectos para clientes',
    period: {
        es: 'Proyectos independientes',
        en: 'Independent projects'
    },
    description: {
        es: 'Desarrollo de soluciones de software a medida, participando en todo el ciclo de vida de los proyectos: desde la captación de clientes y el relevamiento de necesidades hasta el diseño de arquitectura, desarrollo y entrega. Experiencia construyendo productos para distintos negocios, incluyendo sistemas de gestión, plataformas SaaS multitenant y aplicaciones web. Comunicación directa con clientes para transformar necesidades de negocio en soluciones técnicas.',
        en: 'Developed custom software solutions, participating throughout the entire project lifecycle: from client acquisition and requirements gathering to architecture design, implementation, and delivery. Built products for different businesses, including management systems, multi-tenant SaaS platforms, and web applications. Worked directly with clients to translate business needs into technical solutions.'
    },
    items: {
        es: [
        'Desarrollo de una plataforma para la creación y gestión de presupuestos para pastelerías.',
        'Diseño y desarrollo de un sistema SaaS de gestión para almacenes.',
        'Diseño de una plataforma SaaS multitenant para la gestión de reservas de restaurantes y seguimiento de clientes, preparada para integrarse con el sistema de leads del cliente.',
        'Recuperación y reescritura de una aplicación crítica en un plazo de 14 días.',
        'Gestión directa de clientes, relevamiento de requerimientos, definición de soluciones y decisiones de arquitectura.',
        'Desarrollo full stack y participación integral en la entrega de los productos.'
        ],
        en: [
        'Developed a platform for creating and managing quotes for pastry businesses.',
        'Designed and developed a SaaS management system for grocery stores.',
        'Designed a multi-tenant SaaS platform for restaurant reservations and customer tracking, prepared for integration with the client’s lead management system.',
        'Rescued and rewrote a mission-critical application within 14 days.',
        'Managed direct client relationships, gathered requirements, defined solutions, and participated in architectural decisions.',
        'Full-stack development and end-to-end product delivery.'
        ]
    },
    technologies: [
        'Node.js',
        'Express',
        'React',
        'MongoDB',
        'Laravel',
        'MySQL',
        'TypeScript'
    ],
    image: `${baseUrl}experience/freelance.jpeg`
    },
    {
    id: 'exp-3',
    role: {
        es: 'Backend Developer (Laravel)',
        en: 'Backend Developer (Laravel)'
    },
    company: 'Telepagos',
    period: {
        es: 'junio de 2025 - octubre de 2025',
        en: 'Jun 2025 - Oct 2025'
    },
    description: {
        es: 'Desarrollo de un módulo backend desde cero en Laravel, aplicando Clean Architecture dentro de un sistema existente. Trabajo sobre una base MySQL de más de 200 tablas, optimización de consultas y resolución de problemas críticos en producción.',
        en: 'Developed a backend module from scratch using Laravel and Clean Architecture within an existing system. Worked with a MySQL database containing over 200 tables, optimizing queries and resolving critical production issues.'
    },
    items: {
        es: [
        'Diseño e implementación de un módulo backend aplicando Clean Architecture.',
        'Análisis y optimización de consultas sobre una base de datos MySQL de más de 200 tablas.',
        'Resolución de errores críticos y documentación de endpoints mediante Swagger.',
        'Colaboración mediante pair programming y revisiones técnicas.'
        ],
        en: [
        'Designed and implemented a backend module using Clean Architecture.',
        'Analyzed and optimized queries across a MySQL database with over 200 tables.',
        'Resolved critical issues and documented API endpoints using Swagger.',
        'Collaborated through pair programming and technical reviews.'
        ]
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'Swagger'],
    image: `${baseUrl}experience/telepagos_logo.jpeg`
    },
    {
    id: 'exp-4',
    role: {
        es: 'Consultor IT',
        en: 'IT Support Consultant'
    },
    company: 'IT Point',
    period: {
        es: 'mayo de 2024 - abril de 2025',
        en: 'May 2024 - Apr 2025'
    },
    description: {
        es: 'Diagnóstico, mantenimiento y resolución de problemas de software y hardware en entornos Windows y Linux, incluyendo optimización de sistemas operativos y soporte técnico.',
        en: 'Diagnosed, maintained, and resolved software and hardware issues across Windows and Linux environments, including operating system optimization and technical support.'
    },
    items: {
        es: [
        'Diagnóstico y resolución de problemas de software y hardware.',
        'Mantenimiento y optimización de sistemas Windows y Linux.',
        'Configuración de equipos y soporte técnico a usuarios.'
        ],
        en: [
        'Diagnosed and resolved software and hardware issues.',
        'Maintained and optimized Windows and Linux systems.',
        'Configured equipment and provided technical support.'
        ]
    },
    technologies: ['Windows', 'Linux', 'Hardware'],
    image: `${baseUrl}experience/itPoint_logo.jpeg`
    },
    {
    id: 'exp-5',
    role: {
        es: 'Tutor Privado de Programación',
        en: 'Programming Mentor'
    },
    company: 'Freelance',
    period: {
        es: 'abril de 2024 - marzo de 2025',
        en: 'Apr 2024 - Mar 2025'
    },
    description: {
        es: 'Mentoría individual en desarrollo web, acompañando estudiantes en proyectos prácticos y en la aplicación de buenas prácticas de programación.',
        en: 'Provided individual programming mentorship, guiding students through practical web development projects and the application of software engineering best practices.'
    },
    items: {
        es: [
        'Clases personalizadas de PHP, Laravel, Node.js y React.',
        'Acompañamiento en proyectos reales y resolución de problemas técnicos.',
        'Enfoque en buenas prácticas, comprensión de conceptos y autonomía técnica.'
        ],
        en: [
        'Personalized lessons in PHP, Laravel, Node.js, and React.',
        'Guidance through real-world projects and technical problem-solving.',
        'Focused on best practices, conceptual understanding, and technical independence.'
        ]
    },
    technologies: ['PHP', 'Laravel', 'Node.js', 'React'],
    image: `${baseUrl}experience/tutoria.jpg`
    }
];