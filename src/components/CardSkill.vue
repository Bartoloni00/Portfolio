<script setup>
const props = defineProps({
    skill: {
        name: String,
        url: String,
        description: String,
        image: String
    }
})

</script>
<template>
   <a :href="props.skill.url" target="_blank" rel="noopener noreferrer">
    <article class="flex flex-col relative w-48 h-72 border border-black rounded-lg bg-white shadow-lg overflow-hidden" :title="props.skill.description">
        <div class="flex flex-col items-center absolute top-0 left-1">
            <span class="text-ml font-bold">{{ props.skill.name }}</span>
            <img :src="`..${props.skill.image}`" alt="skill" class="w-8 h-8">
        </div>
        <img :src="`..${props.skill.image}`" alt="" class="w-24 h-24 mx-auto my-auto">
        <div class="flex flex-col absolute bottom-0 right-2 transform rotate-180">
            <span class="text-ml  text-center font-bold">{{ props.skill.name }}</span>
            <img :src="`..${props.skill.image}`" alt="skill" class="w-8 h-8">
        </div>
    </article>
   </a>
</template>