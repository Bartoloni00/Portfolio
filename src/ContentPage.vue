<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import AboutMe from './sections/AboutMe.vue';
import ExperienceSection from './sections/ExperienceSection.vue';
import MyProyects from './sections/MyProyects.vue';

const hash = ref(window.location.hash);
const updateHash = () => {
  hash.value = window.location.hash;
};

onMounted(() => {
  window.addEventListener('hashchange', updateHash);
  console.log('mounted', hash.value);
});

watch(hash, () => {
  console.log('watch', hash.value);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateHash);
});

</script>

<template>
  <div>
    
    <template v-if="hash == '#experience'">
      <ExperienceSection />
    </template>
    <template v-else-if="hash == '#proyects'">
      <MyProyects />
    </template>
    <template v-else-if="hash == '#rrss'">
      <p>redes sociales</p>
    </template>
    <template v-else>
      {{ console.log(hash) }}
      <AboutMe />
    </template>
  </div>
</template>