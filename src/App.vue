<script setup lang="ts">
import { ref } from 'vue'

const cacheList = ref<string[]>([])
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cacheList">
        <component :is="Component" v-if="!route.meta.link" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>
