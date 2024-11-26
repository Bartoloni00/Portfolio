<script setup>
import { ref, watch } from 'vue';
import proyects from '../utils/proyects.js';
import skills from '../utils/skills.js';
import PublishCard from '../components/PublishCard.vue';

const filtros = ref({
    rol: 'all',
    tecnologia: 'all',
    ano: 'all'
});

const proyectos = ref(proyects);

const filterProyects = () => {
    let filteredProjects = proyects;
    
    
    console.log(filtros.value);
    
    if (filtros.value.rol !== 'all') {
        filteredProjects = filteredProjects.filter(proyecto => proyecto.rol === filtros.value.rol);
        console.log(filteredProjects);
        
    }
    if (filtros.value.tecnologia !== 'all') {
        filteredProjects = filteredProjects.filter(proyecto => proyecto.technologies.includes(filtros.value.tecnologia));
    }
    if (filtros.value.ano !== 'all') {
        filteredProjects = filteredProjects.filter(proyecto => proyecto.date.includes(filtros.value.ano));
    }
    
    proyectos.value = filteredProjects;
};

// Watch for changes in filtros and apply the filter function
watch(filtros, filterProyects, { deep: true });

// Initialize with default filters
filterProyects();

</script>

<template>
<section>
    <header>
        <h2>Filtrar proyectos</h2>
        <form action="#" class="mb-8">
            <div class="w-full flex justify-between items-center gap-8 mb-4">
                <label class="w-1/4 flex justify-center items-center">
                    <input type="radio" name="rol" value="Fullstack Developer" class="peer sr-only" @change="filtros.rol = $event.target.value">
                    <span class="peer-checked:bg-primary/20 border border-text/10 peer-checked:text-text2 w-full h-full text-center py-2 rounded cursor-pointer">
                        Full Stack
                    </span>
                </label>
                <label class="w-1/4 flex justify-center items-center">
                    <input type="radio" name="rol" value="Backend Developer" class="peer sr-only" @change="filtros.rol = $event.target.value">
                    <span class="peer-checked:bg-primary/20 border border-text/10 peer-checked:text-text2 w-full h-full text-center py-2 rounded cursor-pointer">
                        Backend
                    </span>
                </label>
                <label class="w-1/4 flex justify-center items-center">
                    <input type="radio" name="rol" value="Frontend Developer" class="peer sr-only" @change="filtros.rol = $event.target.value">
                    <span class="peer-checked:bg-primary/20 border border-text/10 peer-checked:text-text2 w-full h-full text-center py-2 rounded cursor-pointer">
                        Frontend
                    </span>
                </label>
                <label class="w-1/4 flex justify-center items-center">
                    <input type="radio" name="rol" value="all" class="peer sr-only" checked @change="filtros.rol = $event.target.value">
                    <span class="peer-checked:bg-primary/20 border border-text/10 peer-checked:text-text2 w-full h-full text-center py-2 rounded cursor-pointer">
                        Todos
                    </span>
                </label>
            </div>
            <div class="w-full flex justify-between items-center gap-8 mb-4">
                <select name="ano" id="ano" class="w-1/2 text-center py-2 rounded cursor-pointer bg-primary/20 border border-text/10" @change="filtros.ano = $event.target.value">
                    <option value="all">---- Seleccionar año ----</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
                <select name="skill" id="skill" class="w-1/2 text-center py-2 rounded cursor-pointer bg-primary/20 border border-text/10" @change="filtros.tecnologia = $event.target.value">
                    <option value="all">---- Seleccionar tecnologia ----</option>
                    <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{ skill.name }}</option>
                </select>
            </div>
        </form>
    </header>
    <section class="flex flex-wrap justify-between" v-for="proyecto in proyectos" :key="proyecto.id">
        <PublishCard :tag="`${String.fromCodePoint(0x1F4BB)} ${proyecto.rol}`" :content="{
            title: proyecto.title,
            date: proyecto.date,
            place: 'Argentina',
            source: {
                img: '/public/'+proyecto.cover,
                alt: 'Imagen de ' + proyecto.title + ' siendo utilizada'
            }
        }"
        class="w-full"
        >
        <p>
            {{ proyecto.description }}
        </p>
        <h2 class="my-4">Tecnologias utilizadas:</h2>
        <ul class="flex flex-wrap gap-2 justify-center mt-2">
            <li v-for="tecnologies in proyecto.technologies" :key="tecnologies" class="mb-2 border border-primary/45 py-1 px-2 rounded-md bg-primary/10 text-text text-xs font-semibold">
                {{ tecnologies }}
            </li>
        </ul>
        </PublishCard>
    </section>
</section>
</template>

<style scoped>
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h2::before,
    h2::after {
        content: "";
        flex: 1;
        height: 2px;
        background-color: #FF2D2044;
        margin: 0 10px;
    }

    h2::before {
        margin-left: 0;
    }

    h2::after {
        margin-right: 0;
    }
</style>