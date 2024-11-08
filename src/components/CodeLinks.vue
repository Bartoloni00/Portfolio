<script setup>
const props = defineProps({
    links: Object
})
</script>
<template>
    <a v-if="props.links.app" :href="props.links.app" target="_blank" class="py-2 border border-primary text-text">
        <span class="font-normal text-center mb-4">Ver codigo del proyecto</span>
    </a>
    <a v-else-if="props.links.backend && !props.links.frontend" :href="props.links.backend" target="_blank" class="py-2 border border-primary text-text">
        <span class="font-normal text-center mb-4">Ver backend</span>
    </a>
    <div v-else-if="props.links.backend && props.links.frontend" class="w-full flex justify-center items-center">
        <a :href="props.links.backend" target="_blank" class="py-2 border border-primary text-text">
            <span class="font-normal text-center mb-4">Ver frontend</span>
        </a>
        <a :href="props.links.frontend" target="_blank" class="py-2 border border-primary text-text">
            <span class="font-normal text-center mb-4">Ver backend</span>
        </a>
    </div>
</template>