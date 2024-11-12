<script setup>
import CodeLinks from './CodeLinks.vue';


const props = defineProps({
    proyecto: {
        cover: String,
        title: String,
        description: String,
        code: Object,
        id: Number
    }
})

</script>
<template>
    <div class="w-[400px] rounded-lg m-2 border border-background-secondary flex flex-col justify-between">
        <img :src="`../${props.proyecto.cover}`" :alt="`${props.proyecto.title}`" class="w-full rounded-lg mb-4 h-52 bg-red-400">
        <div class="px-2 flex flex-col justify-between h-full"> 
            <h3 class="text-primary font-bold text-center">{{ props.proyecto.title }}</h3>
            <p>{{ props.proyecto.description }}</p>

            <CodeLinks :links="props.proyecto.code" class="w-full flex justify-center items-center rounded-b-lg" />
        </div>
    </div>
</template>