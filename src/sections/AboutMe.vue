<script setup>
import PublishCard from '../components/PublishCard.vue';
</script>
<template>
    <section class="flex flex-col duration-1000 ease-in-out mt-8" id="about" v-animateonscroll="{ enterClass: 'animate-zoomin', leaveClass: 'animate-fadeout' }" >
        <PublishCard tag="&#x1F680; Buscando resolver problemas" :content="{
            title: 'Me presento:',
            date: '2024-11-13',
            place: 'Victoria, Entre Ríos, Argentina',
            source: {
                    img: '/public/walking.jpg',
                    alt: 'Imagen de abraham bartoloni caminando por la costanera'
                }
        }">
        <p>
        <strong> Programador full-stack orientado a backend </strong>de Victoria, Entre Ríos, Argentina. <em>Dispuesto a viajar para nuevos desafíos.</em>
        </p>
        <p class="mt-2">
            Soy una persona de <strong>fácil adaptación a diferentes roles y tecnologías</strong>, habilidad que adquirí durante mis estudios técnicos en <a href="https://davinci.edu.ar/carreras" target="_blank">"Escuela de Arte Multimedial Leonardo Da Vinci"</a> y trabajando en equipos de hasta 5 integrantes. Desempeñe roles de frontend, diseñador UI, planificador UX y backend, <em>participando en hasta 4 proyectos al mismo tiempo</em>.
        </p>
        <p>
            <strong>Esto me ha permitido tener una visión integral y resolver problemas desde diferentes ángulos</strong>, asegurando siempre la calidad y el cumplimiento de los plazos.
        </p>
        </PublishCard>
        <PublishCard tag="&#x1F5E3; Hablando sobre desarrollo de software" :content="{
            title: '',
            date: '2024-06-03',
            place: 'Instituto Gaspar Benavento, Victoria, Entre Ríos, Argentina',
            source: {
                    img: '/public/charla.jpg',
                    alt: 'Imagen de abraham bartoloni dando una charla sobre el proceso de desarrollo de software'
                }
        }">
        Hace algunos meses tuve el honor de <strong> impartir una charla sobre "El proceso de desarrollo de software"</strong> a 20 estudiantes de la carrera de "Análisis de datos y desarrollo de software" del <a href="https://isgbenavento-vitoria-ers.infd.edu.ar/sitio/">"Instituto superior Gaspar Benavento"</a>. Fue una experiencia increíble compartir mis conocimientos y hablar de lo que me apasiona.
        </PublishCard>
    </section>
</template>
<style scoped>
strong {
    color: #173321
}
    /*

                <p>
                    <strong>Esto me ha permitido tener una visión integral y resolver problemas desde diferentes ángulos</strong>, asegurando siempre la calidad y el cumplimiento de los plazos.
                </p>
                </div>
                <h3 class="text-xl mt-4 pl-4">¿Qué me motiva?</h3>
                <p  class="pl-4">Crear cosas que le hagan la vida más fácil a la gente.</p>
                <h3 class="text-xl mt-4 pl-4">Formacion</h3>
                <p  class="pl-4">A punto de graduarme como <strong>"Tecnico superior en diseño y programación web"</strong> en Escuela de arte multimedial Leonardo Da Vinci.</p>
            </div> 
        </div> 
     */
</style>