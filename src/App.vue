<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from './layout/TheNavigation.vue';
import Footer from './layout/TheFooter.vue';
</script>

<template>
  <header>
    <Navigation />
  </header>

  <RouterView />
  <Footer />
</template>

<style scoped labg="scss"></style>
