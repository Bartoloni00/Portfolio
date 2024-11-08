const proyects = [
    {
        id: 1,
        title: 'Aragoge',
        rol: 'Backend Developer',
        description: 'Aragoge tiene como misión crear un punto de encuentro entre atletas y profesionales del deporte, facilitando la contratación de entrenadores, preparadores físicos, nutricionistas y terapeutas que se ajusten a las necesidades de los atletas. Al mismo tiempo, la plataforma ofrece a los profesionales del deporte la oportunidad de crecer profesionalmente, expandiendo su base de clientes y gestionando sus servicios desde un único lugar.',
        code: {
            backend: 'https://github.com/bartoloni00/aragoge-backend',
        },
        cover: 'proyects/aragoge.png',
        technologies: ['Laravel', 'MySQL', 'Git', 'PHP'],
    },
    {
        id: 2,
        title: 'BarBrainDB',
        rol: 'Fullstack Developer',
        description: 'Buscador de tragos y cocteles, Construccion de una api que contenga una gran variedad de tragos y cocteles de todo tipo y de todo el mundo',
        code: {
            backend: 'https://github.com/Bartoloni00/barBrainDB',
            frontend: 'https://github.com/Bartoloni00/barBrainApp',
        },
        cover: 'proyects/barbraindb.jpg',
        technologies: ['Node.js', 'Express', 'MongoDB', 'Vue.js', 'TailwindCSS', 'Git'],
    },
    {
        id: 3,
        title: 'Hijitus-API',
        rol: 'Backend Developer',
        description: 'Api open-source creada por mi la cual contiene todos los personajes de hijitus. Este proyecto tuvo bastante apoyo en redes sociales y varias personas quisieron colaborar conmi proyecto y me ayudaron a crear el proyecto',
        code: {
            backend: 'https://github.com/Bartoloni00/hijitus-api',
        },
        cover: 'proyects/Hijitus-api.png',
        technologies: ['Node.js', 'Express', 'TypeScript', 'Jest', 'Git'],
    },
    {
        id: 4,
        title: 'Bookstore',
        rol: 'Fullstack Developer',
        description: 'Tienda de libros, Creada con Laravel junto a Ezequiel Arevalo. Este proyecto fue construido para la materia de "Portales y comercio electronico"',
        code: {
            app: 'https://github.com/Bartoloni00/bookstore',
        },
        cover: 'proyects/hijitus-web.png',
        technologies: ['Laravel', 'MySQL', 'Git', 'Bootstrap', 'JavaScript', 'PHP', 'Blade', 'html', 'css'],
    },
    {
        id: 5,
        title: 'CuevanaGames',
        rol: 'Fullstack Developer',
        description: 'Tienda de videojuegos creada junto a Ezequiel Arevalo para la materia de "Clientes Web mobile"',
        code: {
            app: 'https://github.com/Bartoloni00/CuevanaGames',
        },
        cover: 'proyects/cuevanagames.png',
        technologies: ['Vue.js', 'TailwindCSS', 'Git', 'Firebase', 'JavaScript', 'html', 'css'],
    },
    {
        id: 6,
        title: 'ChatLand',
        rol: 'Fullstack Developer',
        description: 'Aplicacion de chat para escritorio creada con PHP y MySQL vanilla',
        code: {
            app: 'https://github.com/Bartoloni00/ChatLand',
        },
        cover: 'proyects/chatland.png',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        technologies: ['PHP', 'MySQL', 'Git', 'JavaScript', 'html', 'css'],
    },
    {
        id: 7,
        title: 'TrainEmpire',
        rol: 'Fullstack Developer',
        description: 'Marketplace para contratar entrenadores personales para la materia "Programacion II"',
        code: {
            app: 'https://github.com/Bartoloni00/TrainEmpire',
        },
        cover: 'proyects/trainempire.png',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        technologies: ['PHP', 'MySQL', 'Git', 'JavaScript', 'html', 'css', 'Bootstrap'],
    },
    {
        id: 8,
        title: 'Task-tracker',
        rol: 'Backend Developer',
        description: 'Aplicacion de consola creada para cumplir el reto de roadmap.sh',
        code: {
            app: 'https://github.com/Bartoloni00/Task-Tracker',
        },
        cover: 'proyects/task-tracker.png',
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        technologies: ['JavaScript', 'Git', 'Node.js', 'TypeScript'],
    },
    {
        id: 9,
        title: 'SunHunter',
        rol: 'Frontend Developer',
        description: 'Aplicacion del clima con tematica ¿Donde y con que voy a tomar el mate de hoy?',
        code: {
            app: 'https://github.com/Bartoloni00/SunHunter',
        },
        cover: 'proyects/sunhunter.png',
        technologies: ['Vue.js', 'Vite.js','TailwindCSS', 'Git', 'JavaScript', 'html', 'css'],
    },
    {
        id: 10,
        title: 'SlotMachine',
        rol: 'Frontend Developer',
        description: 'Maquina tragamonedas con tematica Argentina',
        code: {
            app: 'https://github.com/Bartoloni00/slotMachine',
        },
        cover: 'proyects/slotmachine.png',
        technologies: ['html', 'css', 'JavaScript','Git'],
    },
    {
        id: 11,
        title: 'JokesApp',
        rol: 'Frontend Developer',
        description: 'Aplicacion de generacion de bromas aleatorias estilo chuck norris en la cual podes elegir el lenguaje de la broma y cambiar el nombre de la persona a la que esta dirigida',
        code: {
            app: 'https://github.com/Bartoloni00/jokesApp',
        },
        cover: 'proyects/jokesApp.png',
        video: 'https://www.youtube.com/watch?v=IRYIpdR-8vc',
        technologies: ['vue.js', 'tailwindcss', 'git', 'javascript', 'html', 'css'],
    },
    {
        id: 12,
        title: 'Liobarton',
        rol: 'Frontend Developer',
        description: 'PWA de seguimiento de criptomonedas',
        code: {
            app: 'https://github.com/Bartoloni00/liobarton',
        },
        cover: 'proyects/Liobarton.png',
        technologies: ['javascript', 'html', 'css'],
    },
    {
        id: 13,
        title: 'CurrencyConverter',
        rol: 'Frontend Developer',
        description: 'Aplicacion de conversion de divisas',
        code: {
            app: 'https://github.com/Bartoloni00/currency-converter',
        },
        cover: 'proyects/currencyConverter.png',
        technologies: ['javascript', 'php', 'html', 'css'],
    }
]

export default proyects