<script setup>

import URL from '../utils/URL';
const props = defineProps({
    source: {
        type: Object
    }
})
console.log(props.source)

</script>
<template>
    <div class="my-4">
        <img v-if="props.source.img" :src="`${URL}${props.source.img}`" :alt="props.source.alt" class="h-80 rounded-lg w-full object-cover">
    </div>
</template>