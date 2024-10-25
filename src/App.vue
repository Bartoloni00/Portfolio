<script setup>
import HeroSection from './sections/HeroSection.vue'
import AboutMe from './sections/AboutMe.vue'
import NavBar from './components/NavBar.vue'
import MarqueeSkills from './sections/MarqueeSkills.vue';
</script>

<template>
    <NavBar/>
    <main>
      <HeroSection/>
      <AboutMe/>
      <MarqueeSkills/>
  </main>
</template>

<style scoped>
/*.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}*/
main {
  width: 100%;
  min-height: 100vh;
}
</style>
