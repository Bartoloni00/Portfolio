<script setup>
import CommonButton from './CommonButton.vue';

</script>
<template>
<header class="mt-4 max-w-screen-xl mx-auto flex justify-between items-center">
    <span>
        <a href="#" class="animate- transition-all hover:text-primary border-2 border-text px-4 py-2">J.A.B.</a>
    </span>
    
    <span>
        <a href="#" class="animate- transition-all hover:text-primary border-2 border-text px-4 py-2">Theme</a>
    </span>
</header>
    <div class="w-[800px] mx-auto color relative">
    <img src="/giphy.webp" alt="pc animada" class="m-auto mt-4 top-0 left-0 h-[300px] object-cover">
    <img src="/myface.png" alt="foto de abraham bartoloni" class="absolute bottom-[-75px] left-[32px] h-[150px] object-cover">
    <CommonButton class="absolute bottom-[-65px] right-[30px] h-[50px] object-cover">Descargar CV</CommonButton>

    </div>
</template>
<style scoped>
.color{
    background-color: #84feae;
}
img[alt="foto de abraham bartoloni"]{
    /*clip-path: circle(50% at 50% 50%);*/
    border: 4px solid #f2f2f2;
    border-radius: 50%;
}
</style>