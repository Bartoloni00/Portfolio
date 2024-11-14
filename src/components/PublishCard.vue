<script setup>
import CommonTag from './CommonTag.vue';
import SourceCard from './SourceCard.vue';

const props = defineProps({
    tag: {
        type: String,
        default: 'Frontend'
    },
    content: {
        type: Object,
        default: () => {
            return {
                title: 'Hola mundo',
                date: '2024-11-13',
                place: 'Victoria, Entre Ríos, Argentina',
                source: {
                    img: '/public/walking.jpg',
                    alt: 'Imagen de abraham bartoloni caminando por la costanera'
                }
            }
        }
    }
})
console.log(props.content.source);

</script>
<template>
    <article class="mx-8 hover:bg-background-secondary/40 transition-all ease-in-out duration-300 p-4 rounded-xl">
        <header class="flex justify-start items-center gap-2 w-full mb-4">
            <img src="/public/myface.png" alt="bartoloni abraham avatar programador" class="w-12 h-12 rounded-full border-2 border-white">
            <div>
                <p><span class="font-bold">Abraham</span> • <span class="font-normal text-sm">{{ props.content.date }}</span></p>
                <CommonTag>{{ props.tag }}</CommonTag>
            </div>
        </header>
        <main class="ml-12">
            <h2 v-if="props.content.title" class="text-2xl font-bold mb-2">{{ props.content.title }}</h2>
            <p>
                <slot>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat accusamus earum magni, obcaecati eveniet assumenda nostrum nemo, alias necessitatibus porro doloremque, nam voluptas iure dolorem? Nemo adipisci quis inventore repellendus!</slot>
            </p>
            <SourceCard :source="props.content.source" />
        </main>
        <footer class="flex items-start ml-6">
            <span class="font-normal text-sm place ">{{ props.content.place }}</span>
        </footer>
    </article>
</template>
<style scoped>
.place::before{
    content: url('icons/alfiler.png');
    display: inline-block;
    transform: scale(0.35);
}
.place{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>