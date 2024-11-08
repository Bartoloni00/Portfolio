<script setup>
import proyects from '../utils/proyects.js'
import ProyectCard from '../components/ProyectCard.vue'
</script>
<template>
<section>
    <h2 class="text-3xl text-text text-center mb-4" id="proyects">Mis principales proyectos</h2>
    <section class="flex flex-wrap justify-between">
        <ProyectCard v-for="proyecto in proyects" :key="proyecto.id" :proyecto="proyecto" />
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