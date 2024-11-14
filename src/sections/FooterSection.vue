<script setup>
</script>
<template>
    <footer class="flex justify-center items-center text-text text-sm pb-8">
        <ul class="flex justify-evenly items-center gap-4 max-w-screen-sm mx-auto">
            <li title="github"><a class="p-4 github" href="https://github.com/Bartoloni00" target="_blank">Github</a></li>
            <li title="threads"><a class="p-4 threads" href="https://www.threads.net/@abrahambartoloni" target="_blank">Threads</a></li>
            <li title="linkedin"><a class="p-4 linkedin" href="https://www.linkedin.com/in/abraham-bartoloni/" target="_blank">Linkedin</a></li>
            <li title="youtube"><a class="p-4 youtube" href="https://www.youtube.com/@AbrahamBartoloni" target="_blank">Youtube</a></li>
        </ul>
    </footer>
</template>
<style scoped>
.github{
    content: url('icons/icons8-github-50.png');
    display: inline-block;
    transform: scale(0.65);
}
.threads{
    content: url('icons/icons8-hilos-48.png');
    display: inline-block;
    transform: scale(0.77);
}
.linkedin{
    content: url('icons/icons8-linkedin-50.png');
    display: inline-block;
    transform: scale(0.65);
}
.youtube{
    content: url('icons/icons8-youtube-50.png');
    display: inline-block;
    transform: scale(0.65);
}
.github:hover, .threads:hover, .linkedin:hover, .youtube:hover{
    transform: scale(0.85);
    transition: all 0.3s ease-in-out;
}
.threads:hover{
    transform: scale(0.95);
}
</style>