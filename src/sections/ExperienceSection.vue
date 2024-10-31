<script setup>
import JobCard from '../components/JobCard.vue';
import jobExperience from '../utils/jobExperience';
</script>
<template>
    <section class="mt-16">
        <h2 class="text-3xl text-text text-center">Experiencia</h2>
        <div class="flex flex-wrap justify-between gap-4 mx-auto">
            <JobCard class="max-w-sm mx-4 my-4" v-for="job in jobExperience" :key="job.title" :job="job"/>
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