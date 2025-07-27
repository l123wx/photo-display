<script setup lang="ts">
import { ref } from 'vue'

const imagePath = ref('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80')
// const imagePath = ref('/photo_1.png')
</script>

<template>
  <div class="container" :style="{ backgroundImage: `url(${imagePath})` }">
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 80%; height: 100%;">
      <div style="flex: 1" />
      <div class="image">
        <img :src="imagePath">
      </div>
      <div class="info">
        <div>
          <img src="/nikon.png" style="height: 16px;">
          <span>NIKON Z 30</span>
        </div>
        <div>
          <span v-for="(text, index) in ['52mm', 'F5.3', '1/1000s', 'ISO1250']" :key="index">
            {{ text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    height: 100vh;
    background-size: cover;
    background-position: center;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      backdrop-filter: blur(14px);
      /* mask: linear-gradient(transparent, black 60%); */
    }

    .image {
      position: relative;
      z-index: 1;
      max-height: 80%;
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

    .info {
      color: #fff;
      font-weight: lighter;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      flex: 1 0;
      z-index: 1;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }
}
</style>
