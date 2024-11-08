<script setup>
import CardSkill from '../components/CardSkill.vue';
import { Vue3Marquee } from 'vue3-marquee'

import skills from '../utils/skills';
const Array = skills;
const phrases = ['Tecnologias que manejo', 'Programas con los que trabajo', 'Herramientas que uso', 'Lenguajes de programación que conozco', 'Framework que utilizo'];

</script>
<template>
    <section class="my-16 rotate-2">
        <h2 class="text-3xl text-text text-center mb-4">Lenguajes y tecnologias que manejo</h2>
        <Vue3Marquee :pause-on-hover="true" :duration="50" direction="reverse">
            <CardSkill class="card m-4" v-for="skill in Array" :key="skill.name" :skill="skill" />
        </Vue3Marquee>
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