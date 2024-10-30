<script setup>
import HeroSection from './sections/HeroSection.vue'
import AboutMe from './sections/AboutMe.vue'
import NavBar from './components/NavBar.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import MarqueeSkills from './sections/MarqueeSkills.vue'
</script>

<template>
    <NavBar/>
    <main class="max-w-screen-xl mx-auto">
      <HeroSection/>
      <AboutMe/>
      <ExperienceSection/>
      <MarqueeSkills/>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  min-height: 100vh;
}

* {
  scroll-behavior: smooth;
}
</style>
