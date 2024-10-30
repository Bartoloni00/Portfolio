<script setup>
import 'animate.css';
import CommonButton from '../components/CommonButton.vue';

</script>
<template>
    <section class="flex flex-col justify-center items-center gap-8 min-h-screen">
        <h1 class="text-center text-9xl font-extrabold animate__animated animate__backInLeft text-text">Bartoloni Abraham</h1>
        <p class="text-center text-3xl animate__animated animate__backInRight text-primary font-bold">
            Desarrollando para facilitarle la vida a las personas, <span class="text-xl text-text">Programador full-stack orientado a backend.</span>
        </p>
        <div class="flex justify-center items-center gap-4">
            <CommonButton class="h-12 w-32"></CommonButton>
            <CommonButton class="h-12 w-32">Contactame</CommonButton> 
        </div>
    </section>
</template>