<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import { onMounted, ref } from 'vue'

import PhotoInfo from './PhotoInfo.vue'

defineProps<{
  imageList: string[]
}>()

const [emblaRef, emblaApi] = emblaCarouselVue()

const activeImageIndex = ref(0)

onMounted(() => {
  emblaApi.value?.on('select', (emblaApi) => {
    activeImageIndex.value = emblaApi.selectedScrollSnap()
  })
})
</script>

<template>
  <div>
    <div class="background">
      <transition-group name="background">
        <img v-for="(imagePath, index) in imageList" v-show="activeImageIndex === index" :key="imagePath" :src="imagePath">
      </transition-group>
    </div>
    <div ref="emblaRef" class="embla">
      <div class="embla__container">
        <div v-for="imagePath in imageList" :key="imagePath" class="embla__slide">
          <div class="image-container">
            <div style="flex: 1" />
            <div class="image">
              <img :src="imagePath">
            </div>
            <PhotoInfo :image-path="imagePath" style="flex: 1 0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .embla {
    overflow: hidden;
    height: 100vh;
    position: relative;
    z-index: 10;
  }
  .embla__container {
    display: flex;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }

  .background {
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      backdrop-filter: blur(14px);
      z-index: 5;
    }

    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }

    .background-enter-active,
    .background-leave-active {
      transition: opacity .5s ease;
    }
    .background-leave-to {
      opacity: 0;
    }
    .background-enter-active {
      z-index: 0;
    }
    .background-leave-active {
      z-index: 1;
    }
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .image {
      position: relative;
      z-index: 1;
      max-height: 80%;
      max-width: 80%;
      flex: 8;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.5);
        border-radius: 22px;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
