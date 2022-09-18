<script setup lang="ts">
import Header from '@/sections/TheHeader.vue';
import About from '@/sections/TheAbout.vue';
import Skill from '@/sections/TheSkill.vue';
import Work from '@/sections/TheWork.vue';
import TheExperience from '../sections/TheExperience.vue';
</script>

<template>
  <main>
    <Header />
    <About />
    <Skill />
    <TheExperience />
    <Work />
  </main>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
