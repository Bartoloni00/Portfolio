<script setup>
import 'animate.css';
</script>
<template>
    <section class="mt-24 mx-8">
        <h1 class="font-bold text-3xl animate__animated animate__backInLeft text-text2">Jonathan Abraham Bartoloni</h1>
        <p class="animate__animated animate__backInRight text-text2 font-semibold my-2">
            Desarrollando para facilitarle la vida a las personas.
        </p>
        <p class="animate__animated animate__backInRight text-text2 font-semibold">
            Programador Full-Stack orientado a Backend, Apasionado por linux, Asesor IT.
        </p>
        <ul class="flex text-text2 font-normal mt-4 gap-4 items-center">
            <li class="work">Disponible</li>
            <li class="birthday">18-04-2000</li>
            <li class="date">Programando desde 2020</li>
        </ul>
</section>
</template>
<style scoped>
.work::before, .birthday::before, .date::before{
    content: url('/icons/icons8-work-50.png');
    display: inline-block;
    transform: scale(0.5);
}
.work, .birthday, .date{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.birthday::before{
    content: url('/icons/icons8-birthday-50.png');
}
.date::before{
    content: url('/icons/icons8-date-50.png');
}
</style>