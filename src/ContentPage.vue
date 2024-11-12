<script setup>
import { onMounted, ref } from 'vue';


const hash = ref(window.location.hash);
const updateHash = () => {
      hash.value = window.location.hash;
      console.log('hash', hash.value);
      
    };

    onMounted(() => {
      window.addEventListener('hashchange', updateHash);
      console.log('mounted', hash.value);
      
    });

</script>
<template>

</template>