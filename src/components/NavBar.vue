<script setup>
import CommonButton from './CommonButton.vue';
</script>
<template>
    <header class="flex justify-between w-full max-w-screen-xl mx-auto h-10 items-center mt-2 text-text font-bold">
        <span class="bg-background-secondary px-4 rounded-full h-full flex items-center outline outline-2 outline-textSecondary/30 hover:outline-primary/30">
            <a href="#" class="hover:scale-105 transition-all hover:text-primary">Bartoloni</a>
        </span>
        <nav class="flex gap-6  bg-background-secondary px-4 rounded-full h-full items-center outline outline-2 outline-textSecondary/30 hover:outline-primary/30">
            <ul class="flex gap-4">
                <li class=" hover:text-primary hover:scale-105 transition-all "><a href="#about">Sobre mi</a></li>
                <li class=" hover:text-primary hover:scale-105 transition-all"><a href="#experience">Experiencia</a></li>
                <li class=" hover:text-primary hover:scale-105 transition-all"><a href="#proyects">Proyectos</a></li>
                <li class=" hover:text-primary hover:scale-105 transition-all "><a href="#contact">Contactame</a></li>
            </ul>
        </nav>
        <CommonButton></CommonButton>
    </header>
</template>