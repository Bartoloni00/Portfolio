<script setup>
import HeroSection from './sections/HeroSection.vue'
import FooterSection from './sections/FooterSection.vue'
import HeaderBanner from './components/HeaderBanner.vue'
import NavBar from './components/NavBar.vue'
import ContentPage from './ContentPage.vue'
</script>

<template>
    <HeaderBanner/>
    <main class="max-w-[800px] mx-auto">
      <HeroSection/>
      <NavBar/>
      <ContentPage/>
  </main>
  <FooterSection/>
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
