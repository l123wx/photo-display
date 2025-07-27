<script setup lang="ts">
import { ref } from 'vue'

import Carousel from './Carousel.vue'

const imageList = ref([
  '/image-872565309.jpg',
  '/IMG_6606.jpeg',
  '/photo_2.jpg',
  '/p1010478-1.jpg',
  '672889c4dcc11.webp',
  'YUA_0758.JPG',
])
</script>

<template>
  <Carousel :image-list="imageList" />
</template>

<style scope>
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 150px;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }

    a:hover {
      color: #747bff;
    }

    button {
      background-color: #f9f9f9;
    }
  }
</style>
