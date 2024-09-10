<template>
    <div v-if="loadingVisible" class="w-full h-screen overflow-hidden absolute top-0 left-0">
        <h1 v-if="titleVisible"
            class="z-20 font-instrument text-4xl text-white text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-fade-out animate-delay-1000">
            Bienvenido a <span class="font-inter font-bold text-5xl">Musivo</span></h1>
        <div class="bg-black-custom w-1/2 h-screen absolute top-0 left-0 animate-slide-full-left "></div>
        <div class="bg-black-custom w-1/2 h-screen absolute top-0 right-0 animate-slide-full-right"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loadingVisible: true,
      titleVisible: true,
      totalSeconds: 4,
    };
  },
  mounted() {
    setTimeout(() => {
      this.titleVisible = false;
    }, 1600);
    // Set a timeout to hide the component after the animations complete
    setTimeout(() => {
      this.loadingVisible = false;
    }, this.totalSeconds * 1000); // 2s (slide animation) + 2s (delay) = 4s total
  }
}
</script>

<style scoped>
@keyframes disableLoading{
    0%{
        display: block;
    }

    100%{
        display: none;
    }
}

@keyframes slide-out-full-left {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50vw);
    }
}
@keyframes slide-out-full-right {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(50vw);
    }
}

.animate-slide-full-left {
    animation: slide-out-full-left 2s ease-out both;
    animation-delay: 2s;
}

.animate-slide-full-right {
    animation: slide-out-full-right 2s ease-out both;
    animation-delay: 2s;
}
</style>