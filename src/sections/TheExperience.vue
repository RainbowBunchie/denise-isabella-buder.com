<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
</script>

<template>
  <section class="section section--experience experience" id="experience">
    <TheHeadline color="#2a2726" text="Experience" />
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.experience {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $color--accent;
}
</style>
