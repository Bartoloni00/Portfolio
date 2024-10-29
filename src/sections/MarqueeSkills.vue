<script setup>
import CardSkill from '../components/CardSkill.vue';
import { Vue3Marquee } from 'vue3-marquee'

import skills from '../utils/skills';
const Array = skills;
const phrases = ['Tecnologias que manejo', 'Programas con los que trabajo', 'Herramientas que uso', 'Lenguajes de programación que conozco', 'Framework que utilizo'];

/*
arreglar imagen de windows, centos, JS, github
*/
</script>
<template>
    <section class="my-10">
            <div class="flex justify-center items-center w-screen h-12">
                <Vue3Marquee
                    direction="reverse"
                    :duration="200"
                >
                    <div v-for="prase in phrases" :key="prase">
                        <span
                            class="text-xl text-center text-text m-16"
                        >
                        {{ prase }}
                        </span>
                    </div>
                </Vue3Marquee>
            </div>
        <Vue3Marquee :pause-on-hover="true" :duration="50">
            <CardSkill class="card mx-4" v-for="skill in Array" :key="skill.name" :skill="skill" />
        </Vue3Marquee>
            <div class="flex justify-center items-center w-screen h-12">
                <Vue3Marquee
                    direction="reverse"
                    :duration="200"
                >
                <div v-for="prase in phrases" :key="prase">
                    <span
                        class="text-xl text-center text-text m-16"
                    >
                    {{ prase }}
                    </span>
                </div>
                </Vue3Marquee>
            </div>
    </section>
</template>