<script setup>
import 'primeicons/primeicons.css'

const props = defineProps({
    job: {
        title: String,
        description: String,
        url: String,
        image: String,
        location: String,
        date: String
    }
})
</script>
<template>
<article class="p-4">
    
    <div class="flex justify-between flex-wrap mb-4">
                <h3 class="font-bold ">{{ props.job.title }} <span class="font-normal"> en {{ props.job.company }}</span></h3>
                <span>{{ props.job.date }}</span>
            </div>
    <div class="flex justify-between">
        <img :src="`..${props.job.image}`" :alt="`${props.job.company} Logo`" class="h-64 mx-auto my-auto clip">

        <div>
            <span class="text-text"><i class="pi pi-map-marker mr-1"></i> {{ props.job.location }}</span>

            <ul class="mt-4">
                <li v-for="responsibility in props.job.responsibilities" :key="responsibility" class="mb-2 text-text flex items-start justify-start">
                    <i class="pi pi-check-circle"></i> <span class="ml-2 inline-block">{{ responsibility }}</span>
                </li>
            </ul>
        </div>
    </div>
    <ul class="flex flex-wrap gap-2 justify-center mt-2">
        <li v-for="skill in props.job.skills" :key="skill" class="mb-2 border border-primary/45 py-2 px-4 rounded-md bg-primary/10 text-text">
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