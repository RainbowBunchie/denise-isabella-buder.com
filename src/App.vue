<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from './layout/TheNavigation.vue';
</script>

<template>
  <header>
    <Navigation />
  </header>

  <RouterView />
</template>

<style scoped labg="scss"></style>
