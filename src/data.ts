import { ExperienceItem, ProjectItem } from './types';
const baseUrl = import.meta.env.BASE_URL;

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
      es: 'Responsable técnico principal en el desarrollo E2E del MVP y mejora continua de una aplicación móvil (iOS y Android), backoffice y API, desde el kickoff hasta la publicación en tiendas (~95% de ownership técnico y delegación de tareas). Arquitecto soluciones con React + Ionic, Laravel y PostgreSQL, con flujos asíncronos basados en eventos (Redis, Laravel Horizon, jobs), infraestructura en Railway y AWS S3, CI/CD con GitHub Actions, evolución de app logística (Android API 34 a 36 y encriptación de datos) y rediseño de plataforma financiera (broker), reduciendo un endpoint en tiempo real de ~40s a ~600 ms y alcanzando ~90% de cobertura de tests en backend.',
      en: 'Main technical lead for the end-to-end development of an MVP mobile app (iOS & Android), backoffice, and API, from kickoff to store deployment (~95% technical ownership and task delegation). Architect solutions using React + Ionic, Laravel, and PostgreSQL, with event-driven async workflows (Redis, Laravel Horizon, background jobs), Railway and AWS S3 infrastructure, CI/CD via GitHub Actions, logistics mobile app evolution (Android API 34 to 36 and user data encryption), and financial platform (broker) redesign, cutting a real-time endpoint from ~40s to ~600ms and reaching ~90% backend test coverage.'
    },
    items: {
      es: [
        'Liderazgo técnico E2E de MVP móvil (iOS/Android), backoffice y API (~95% de desarrollo) con React + Ionic, Laravel y PostgreSQL.',
        'Flujos asíncronos y colas con Redis y Laravel Horizon para auditoría, reportes y notificaciones, más CI/CD en Railway, AWS S3 y GitHub Actions.',
        'Migración de app logística Ionic de Android API 34 a 36, esquema de encriptación de datos de usuario y mejoras de UX.',
        'Rediseño de plataforma financiera (broker) bajando un endpoint en tiempo real de ~40s a ~600 ms y ~90% de cobertura de tests en CI/CD.'
      ],
      en: [
        'End-to-end technical lead for mobile MVP (iOS & Android), backoffice, and API (~95% development) with React + Ionic, Laravel, and PostgreSQL.',
        'Async event workflows, Redis, and Laravel Horizon for auditing, reporting, and notifications, plus CI/CD on Railway, AWS S3, and GitHub Actions.',
        'Logistics Ionic app migration from Android API 34 to 36, user data encryption schema, and UX improvements.',
        'Financial broker platform redesign cutting a real-time endpoint from ~40s to ~600ms and ~90% backend test coverage in CI/CD.'
      ]
    },
    technologies: [
      'Laravel',
      'React',
      'Ionic',
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
      es: 'Full Stack Freelance Developer',
      en: 'Full Stack Developer (Freelance)'
    },
    company: 'Proyectos para clientes',
    period: {
      es: 'Proyectos recientes',
      en: 'Recent projects'
    },
    description: {
      es: 'Participación en arquitectura, backend y frontend de soluciones web y móviles a medida junto a equipos reducidos. Recuperación y reescritura de una aplicación crítica en 14 días y diseño de una arquitectura SaaS multitenant.',
      en: 'Architected and developed custom web and mobile solutions alongside small cross-functional teams. Rescued and rewrote a mission-critical application in 14 days and designed a multi-tenant SaaS architecture.'
    },
    items: {
      es: [
        'Recuperación y reescritura de una aplicación crítica en 14 días.',
        'Diseño de arquitectura SaaS multitenant.',
        'Desarrollo full stack junto a equipos pequeños en soluciones web y móviles.'
      ],
      en: [
        'Rescued and rewrote a mission-critical application in 14 days.',
        'Designed a multi-tenant SaaS architecture.',
        'Full-stack web and mobile development alongside small teams.'
      ]
    },
    technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'Laravel', 'MySQL', 'TypeScript'],
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
      es: 'Diseño e implementación desde cero de un módulo backend en Laravel aplicando Clean Architecture. Optimización de consultas y acceso a una base MySQL de más de 200 tablas, resolución de errores críticos en producción y documentación/validación de endpoints con Swagger.',
      en: 'Built a modular backend feature from scratch using Clean Architecture in Laravel, ensuring long-term scalability and maintainability. Optimized queries across a 200+ table MySQL database, resolved critical production issues, and documented and validated API endpoints with Swagger.'
    },
    items: {
      es: [
        'Módulo backend desde cero en Laravel aplicando Clean Architecture.',
        'Optimización de consultas y acceso a base MySQL de +200 tablas y resolución de fallas críticas en producción.',
        'Documentación y validación de endpoints API con Swagger.'
      ],
      en: [
        'Backend module built from scratch in Laravel using Clean Architecture.',
        'Query and access optimization across a 200+ table MySQL database and critical production issue resolution.',
        'API endpoint documentation and validation with Swagger.'
      ]
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'Swagger'],
    image: `${baseUrl}experience/telepagos_logo.jpeg`
  },
  {
    id: 'exp-4',
    role: {
      es: 'Consultor IT',
      en: 'IT Service Management Consultant'
    },
    company: 'IT Point',
    period: {
      es: 'mayo de 2024 - abril de 2025',
      en: 'May 2024 - Apr 2025'
    },
    description: {
      es: 'Diagnóstico, resolución y optimización de problemas de software y hardware en entornos Windows y Linux.',
      en: 'Diagnosed, optimized, and resolved software and hardware issues across Windows and Linux environments.'
    },
    items: {
      es: [
        'Diagnóstico y resolución de fallas de software y hardware en Windows y Linux.',
        'Optimización y mantenimiento de entornos operativos.'
      ],
      en: [
        'Diagnostics and resolution of software and hardware issues across Windows and Linux.',
        'System optimization and maintenance.'
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
      es: 'Clases personalizadas y mentoría técnica 1 a 1 en PHP, Laravel, Node.js y React enfocado en proyectos reales y mejora del rendimiento práctico de los estudiantes.',
      en: 'Provided 1-on-1 technical mentoring and tailored lessons in PHP, Laravel, Node.js, and React for production-grade projects and practical student performance.'
    },
    items: {
      es: [
        'Mentoría técnica 1 a 1 y clases personalizadas en PHP, Laravel, Node.js y React.',
        'Acompañamiento en proyectos reales y mejora práctica del rendimiento de los estudiantes.'
      ],
      en: [
        '1-on-1 technical mentoring and tailored lessons in PHP, Laravel, Node.js, and React.',
        'Guidance on real-world projects and practical student performance improvement.'
      ]
    },
    technologies: ['PHP', 'Laravel', 'Node.js', 'React'],
    image: `${baseUrl}experience/tutoria.jpg`
  }
];

export const projects: ProjectItem[] = [
  // ------------------ Proyectos profesionales destacados ------------------
  {
    id: 'proj-1',
    title: {
      es: 'Handystock - Plataforma de Gestión para Pequeños Comercios',
      en: 'Handystock - Management Platform for Small Businesses'
    },
    description: {
      es: 'Sistema para optimizar la gestión de inventarios y operaciones en pequeños comercios, con backend en Laravel como monolito modular aplicando Clean Architecture, frontend en React con TailwindCSS y Atomic design. Base de datos MySQL multi-tenant con SQL avanzado, módulo de análisis de datos para decisiones estratégicas del cliente, documentación con Swagger, pruebas con PHPUnit y carga masiva de productos vía Excel.',
      en: 'System to optimize inventory and operations management for small businesses, with backend in Laravel as a modular monolith applying Clean Architecture, frontend in React with TailwindCSS and Atomic design. Multi-tenant MySQL database with advanced SQL, data analysis module to support client decision-making, Swagger documentation, PHPUnit testing, and bulk product upload via Excel.'
    },
    techStack: [
      'Laravel',
      'React',
      'TailwindCSS',
      'MySQL',
      'Advanced SQL',
      'Data Analysis',
      'Swagger',
      'PHPUnit',
      'Atomic Design',
      'Excel Import',
      'Docker'
    ],
    links: {
      github: 'https://github.com/Bartoloni00/HandyStock',
      demo: 'https://www.linkedin.com/posts/abraham-bartoloni_desarrollo-backend-reactjs-activity-7380942507389464576-4e-B?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIriZAB9ygubIpVIL1xuh4Zn92BQUVjtYA'
    },
    image: `${baseUrl}/projects/handystock.png`
  },
  {
    id: 'proj-2',
    title: {
      es: 'Esmeralda Presupuestos',
      en: 'Esmeralda Budgets'
    },
    description: {
      es: 'Aplicación full stack para generar presupuestos, con backend en Node.js aplicando Clean Architecture, inyección de dependencias, validaciones con Zod y conexión a MySQL. Frontend en React + TypeScript + TailwindCSS. Proyecto entregado estable y listo para producción, usado por su primer cliente: una pastelería local.',
      en: 'Full stack application for generating budgets, with backend in Node.js applying Clean Architecture, dependency injection, validations with Zod, and MySQL connection. Frontend in React + TypeScript + TailwindCSS. Project delivered stable and production-ready, used by its first client: a local bakery.'
    },
    techStack: ['Node.js', 'React', 'TypeScript', 'TailwindCSS', 'MySQL', 'Zod', 'Clean Architecture', 'Dependency Injection', 'Vite', 'React Router'],
    links: {
      github: 'https://github.com/Bartoloni00/EsmeraldaPresupuestos',
      demo: ''
    },
    image: `${baseUrl}/projects/esmeralda.png`
  },
  {
    id: 'proj-3',
    title: {
      es: 'App de Créditos – Plataforma No Country',
      en: 'Credit Application – No Country Platform'
    },
    description: {
      es: 'Aplicación para gestión de créditos con un equipo de 9 desarrolladores. Lideré el backend y asumí rol de arquitecto de software. Sistema basado en Monolito Modular con Clean Architecture y DDD, dividido en módulos (Solicitudes de Crédito, Pymes, Documentos, Operaciones y Seguridad), cada uno con sus casos de uso y entidades bien definidas.',
      en: 'Credit management application with a team of 9 developers. Led the backend and acted as software architect. System based on Modular Monolith with Clean Architecture and DDD, divided into modules (Credit Requests, SMEs, Documents, Operations, and Security), each with defined use cases and entities.'
    },
    techStack: [
      'Node.js',
      'TypeScript',
      'Express',
      'Prisma',
      'CORS',
      'Multer',
      'Clean Architecture',
      'DDD',
      'Monolithic Modular Architecture'
    ],
    links: {
      github: 'https://github.com/No-Country-simulation/Equipo_15_WebApp/tree/dev',
      demo: ''
    }
  },

  // ------------------ Proyectos personales / open-source ------------------
  {
    id: 'proj-4',
    title: {
      es: 'BarBrainDB - App de Recetas de Tragos',
      en: 'BarBrainDB - Cocktail Recipes App'
    },
    description: {
      es: 'API para recopilación de datos de tragos, diseñada para barmans y entusiastas de la mixología. Permite descubrir y crear bebidas, con una base de datos robusta y actualizada. Frontend con Vue 3 y TailwindCSS, backend en Node.js con Express y MongoDB.',
      en: 'API for cocktail data collection, designed for bartenders and mixology enthusiasts. Allows discovering and creating drinks, with a robust and up-to-date database. Frontend with Vue 3 and TailwindCSS, backend in Node.js with Express and MongoDB.'
    },
    techStack: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'Vue 3', 'TailwindCSS'],
    links: {
      github: 'https://github.com/Bartoloni00/barBrainDB',
      demo: 'https://vm.tiktok.com/ZMAXbvKND/'
    },
    image: `${baseUrl}/projects/barbrain.png`
  },
  {
    id: 'proj-5',
    title: {
      es: 'Hijitus-API - API de Superhéroe Argentino',
      en: 'Hijitus-API - Argentine Superhero API'
    },
    description: {
      es: 'API construida en TypeScript con Node.js y Express.js, siguiendo arquitectura MVC. Permite a desarrolladores contribuir y experimentar, inspirada en APIs populares como Rick and Morty API. Testing con Jest y Supertest, actualmente usando un archivo JSON para gestión de datos.',
      en: 'API built in TypeScript with Node.js and Express.js, following MVC architecture. Allows developers to contribute and experiment, inspired by popular APIs like Rick and Morty API. Testing with Jest and Supertest, currently using a JSON file for data management.'
    },
    techStack: ['Node.js', 'Express', 'TypeScript', 'Jest', 'Supertest', 'JSON', 'Cors', 'Nodemon', 'MVC'],
    links: {
      github: 'https://github.com/Bartoloni00/hijitus-api',
      demo: ''
    },
    image: `${baseUrl}/projects/hijitus2.png`
  },
  {
    id: 'proj-6',
    title: {
      es: 'Bookstore - Tienda eCommerce (Proyecto Académico)',
      en: 'Bookstore - eCommerce Store (Academic Project)'
    },
    description: {
      es: 'E-commerce desarrollado en Laravel 10 como proyecto académico. Backend estructurado bajo arquitectura MVC, frontend con vistas Blade, carga, gestión y optimización de imágenes, integración de pagos con Mercado Pago Checkout Pro 3.0 y manejo de emails con Mailtrap. Frontend enriquecido con CSS, JavaScript y Bootstrap 5.',
      en: 'E-commerce developed in Laravel 10 as an academic project. Backend structured using MVC architecture, frontend with Blade templates, image uploading, management and optimization, payment integration with Mercado Pago Checkout Pro 3.0, and email handling with Mailtrap. Frontend enhanced with CSS, JavaScript, and Bootstrap 5.'
    },
    techStack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap 5', 'JavaScript', 'CSS', 'Mailtrap', 'Mercado Pago Checkout Pro', 'Image Optimization'],
    links: {
      github: 'https://github.com/Bartoloni00/bookstore',
      demo: ''
    }
  }
];
