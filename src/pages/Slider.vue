<template>
  <div class="flex flex-wrap w-full relative">
    <div v-for="(color, index) in sliders" :key="color" class="absolute w-full">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="color"
          style="height: 450px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 440px">
      <div class="absolute w-full bottom-0 flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="index"
          @click="makeActive(index)"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
          :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>
    <!-- 
    <div class="my-10 flex w-full">
      <div class="mx-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing">Slider Carousel</h1>
        </transition>
        <button
          @click="isTitleShowing = !isTitleShowing"
          class="px-2 rounded border"
        >
          Toggle Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {

  methods:{
      makeActive(index){
          this.currentSlide = index;
      }

  },  
  data() {
    return {
      currentSlide: 0,
      interval: "",
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-green-600","bg-red-600"],
      isTitleShowing: false,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.sliders.length;
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
</style>