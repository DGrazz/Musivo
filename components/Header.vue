<template>
    <header class="flex justify-between items-center px-[10%] py-6 border-b border-black">
        <h1 class="text-2xl font-bold">MUSIVO</h1>
        <nav class="space-x-10 text-sm">
            <NuxtLink to="/">Inicio</NuxtLink>
            <NuxtLink to="/obras">Obras</NuxtLink>
            <NuxtLink to="/colecciones">Colecciones</NuxtLink>
            <NuxtLink to="/obras-vendidas">Obras vendidas</NuxtLink>
            <NuxtLink to="/encargo">Encargo</NuxtLink>
            <NuxtLink to="/historia">Historia</NuxtLink>
            <NuxtLink to="/sobre-nosotros">Sobre nosotros</NuxtLink>
        </nav>
        <IconsCart class="size-6"/>
    </header>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>