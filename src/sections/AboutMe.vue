<script setup>
</script>
<template>
    <section class="flex justify-between items-start animate__animated animate__flash" id="about">
        <div class="flex flex-col items-start w-full pr-4">
            <h2 class="text-3xl mb-8">Sobre mi</h2>
            <div class="m-auto">
                <div class="pl-4">
                <p>
                <strong> Programador full-stack orientado a backend </strong>de Victoria, Entre Ríos, Argentina. <em>Dispuesto a viajar para nuevos desafíos.</em>
                </p>
                <p class="mt-2">
                    Soy una persona de <strong>fácil adaptación a diferentes roles y tecnologías</strong>, habilidad que adquirí durante mis estudios técnicos y trabajando en equipos de hasta 5 integrantes. Desempeñe roles de frontend, diseñador UI, planificador UX y backend, <em>participando en hasta 4 proyectos al mismo tiempo</em>.
                </p>
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
            <img src="../assets/yo.png" alt="" class="w-[800px]"/>
    </section>
</template>
<style scoped>
     p {
        max-width: 500px;
    }
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    h2::before,
    h2::after {
        content: "";
        flex: 1;
        height: 2px;
        background-color: #FF2D2022;
        margin: 0 10px;
    }

    h2::before {
        margin-left: 0;
    }

    h2::after {
        margin-right: 0;
    }

    
</style>