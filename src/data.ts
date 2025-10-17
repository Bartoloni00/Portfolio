import { ExperienceItem, ProjectItem } from './types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: {
      es: 'Backend Developer',
      en: 'Backend Developer'
    },
    company: 'TelePagos',
    period: {
      es: 'junio de 2025 - agosto de 2025',
      en: 'June 2025 - August 2025'
    },
    description: {
      es: 'Diseñé e implementé módulos backend en Laravel aplicando Clean Architecture dentro de un monolito modular. Optimicé una base de datos de más de 200 tablas, resolviendo errores críticos y asegurando estabilidad. Documenté y validé APIs con Swagger, mejorando la comunicación con frontend.',
      en: 'Designed and implemented backend modules in Laravel using Clean Architecture within a modular monolith. Optimized a database of over 200 tables, resolving critical errors and ensuring stability. Documented and validated APIs with Swagger, improving frontend communication.'
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'Swagger', 'Node.js', 'Docker']
  },
  {
    id: 'exp-2',
    role: {
      es: 'Consultor IT',
      en: 'IT Consultant'
    },
    company: 'IT Point Seguridad e Informática',
    period: {
      es: 'mayo de 2024 - abril de 2025',
      en: 'May 2024 - April 2025'
    },
    description: {
      es: 'Optimización y mantenimiento de sistemas Windows y Linux, resolución de fallas críticas, ajustes avanzados de configuración y mejora de rendimiento de equipos. Soporte de hardware y administración de servidores.',
      en: 'Optimization and maintenance of Windows and Linux systems, resolving critical failures, advanced configuration adjustments, and improving system performance. Hardware support and server administration.'
    },
    technologies: ['Windows', 'Linux', 'Hardware', 'Networking']
  },
  {
    id: 'exp-3',
    role: {
      es: 'Tutor Privado',
      en: 'Private Tutor'
    },
    company: 'Autónomo',
    period: {
      es: 'abril de 2024 - marzo de 2025',
      en: 'April 2024 - March 2025'
    },
    description: {
      es: 'Tutor especializado en PHP (Laravel 10 y 11), Node y React. Diseñé clases personalizadas adaptadas a cada estudiante, aumentando su comprensión y aplicación práctica en desarrollo web.',
      en: 'Tutor specialized in PHP (Laravel 10 & 11), Node, and React. Designed personalized lessons adapted to each student, improving their understanding and practical application in web development.'
    },
    technologies: ['PHP', 'Laravel', 'Node.js', 'React', 'Vue.js']
  },
  {
    id: 'exp-4',
    role: {
      es: 'Profesor Invitado en Desarrollo de Software',
      en: 'Guest Lecturer in Software Development'
    },
    company: 'Instituto Superior Gaspar L. Benavento',
    period: {
      es: '2024 y 2025',
      en: '2022 and 2025'
    },
    description: {
      es: 'Orador invitado durante dos años consecutivos en el Instituto Superior Gaspar L. Benavento, presentando el ciclo de vida del desarrollo de software a +30 estudiantes, aportando conocimientos prácticos y motivando el interés por la programación.',
      en: 'Guest speaker for two consecutive years at the Instituto Superior Gaspar L. Benavento, presenting the software development lifecycle to over 30 students, providing practical knowledge and inspiring interest in programming.'
    },
    technologies: [
      'Software Architecture',
      'API Design',
      'Mentoring',
      'Technical Communication',
      'Teaching',
      'Presentation Skills'
    ]
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
    image: '/handystock.png'
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
    image: '/esmeralda.png'
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
    image: '/barbrain.png'
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
    image: '/hijitus2.png'
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
