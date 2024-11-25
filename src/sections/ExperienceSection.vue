<script setup>
import jobExperience from '../utils/jobExperience';
import PublishCard from '../components/PublishCard.vue';

const imgs = ['tutoria.jpg', 'it-point.jpeg', 'sol-victoria-hotel-spa.jpg'];
const emojis = [
    String.fromCodePoint(0x1F9D1, 0x200D, 0x1F3EB),
    String.fromCodePoint(0x1F4BB),
    String.fromCodePoint(0x1F3B0)
];
</script>
<template>
    <section class="mt-16">
        <h2 class="text-3xl text-text text-center" id="experience">Experiencia</h2>
        <div v-for="job, index in jobExperience" :key="job.title" :job="job">
            <PublishCard :tag="`${emojis[index]} ${job.company}`" :content="{
            title: job.title,
            date: job.date,
            place: job.location,
            source: {
                    img: '/public/'+ imgs[index],
                    alt: job.title + ' en ' + job.company,
                }
        }">
        <ul class="mt-2">
            <li v-for="responsibility in job.responsibilities" :key="responsibility" class="mb-2 text-text flex items-start justify-start">
                <i class="pi pi-check-circle" title="tiempo en la empresa"></i> <span class="ml-2 inline-block">{{ responsibility }}</span>
            </li>
        </ul>
        <ul class="flex flex-wrap gap-2 justify-center mt-2">
            <li v-for="skill in job.skills" :key="skill" class="mb-2 border border-primary/45 py-1 px-2 rounded-md bg-primary/10 text-text text-xs font-semibold">
                {{ skill }}
            </li>
        </ul>
        </PublishCard>
        </div>
    </section>
</template>
<style scoped>
  p {
        max-width: 500px;
    }
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    h2::before,
    h2::after {
        content: "";
        flex: 1;
        height: 2px;
        background-color: #FF2D2022;
        margin: 0 10px;
    }

    h2::before {
        margin-left: 0;
    }

    h2::after {
        margin-right: 0;
    }
</style>