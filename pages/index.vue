<template>
    <div>
        <LoadingPage />
        <Header />
        <section class="h-[89vh] w-[80%] mx-auto flex justify-between items-center ">
            <article class="xl:w-full xl:space-y-4">
                <h2 class="text-5xl font-bold uppercase">Descubre cuadros artesanales en cerámica, únicos y atemporales
                </h2>
                <p class="w-4/5 text-pretty">Encarga cuadros cerámicos únicos a medida o elige entre una selección de obras exclusivas listas para
                    la venta, todo con la calidad artesanal que distingue a cada pieza.</p>
                <div class="flex gap-6">
                    <NuxtLink to="/obras" class="bg-[#C5A805] text-white px-5 py-3">Ver obras</NuxtLink>
                    <NuxtLink to="/encargo" class="bg-[#D07A13] text-white px-5 py-3">Hacer encargo</NuxtLink>
                </div>
            </article>

            <img class="xl:w-2/5" src="/public/imgs/obras.png" alt="">

        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero {
    height: calc(100vh - 82px);
}
</style>