<script setup>
import 'primeicons/primeicons.css'

const props = defineProps({
    job: {
        title: String,
        description: String,
        url: String,
        location: String,
        date: String
    }
})
</script>
<template>
<article class="p-4">
        <h3 class="font-bold text-center">{{ props.job.title }} </h3>
        <a :href="`${props.job.url}`" target="_blank" class="text-text hover:text-primary transition-all animate__animated hover:animate__backInRight">
            <p class="font-normal text-center mb-4">{{ props.job.company }}</p>
        </a>
    <div class="flex justify-between items-center flex-col">
        <ul class="flex gap-2 justify-start items-start w-full flex-col">
            <li class="text-text"><i class="pi pi-map-marker mr-1" title="Lugar de trabajo"></i> {{ props.job.location }}</li>
            <li><i class="pi pi-calendar mr-1 mb-8" title="tiempo en la empresa"></i> {{ props.job.date }}</li>
        </ul>
        <ul class="mt-2">
            <li v-for="responsibility in props.job.responsibilities" :key="responsibility" class="mb-2 text-text flex items-start justify-start">
                <i class="pi pi-check-circle" title="tiempo en la empresa"></i> <span class="ml-2 inline-block">{{ responsibility }}</span>
            </li>
        </ul>
    </div>
    <ul class="flex flex-wrap gap-2 justify-center mt-2">
        <li v-for="skill in props.job.skills" :key="skill" class="mb-2 border border-primary/45 py-1 px-2 rounded-md bg-primary/10 text-text text-xs font-semibold">
            {{ skill }}
        </li>
    </ul>
</article>
</template>
<style scoped>
p, li {
    max-width: 500px;
}
img {
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}
i {
    color: green;
}
.mb-2 .inline-block {
    position: relative;
    top: -2px; /* Adjust the value to your preference (2-4px) */
}
</style>