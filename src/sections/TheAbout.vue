<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheTextImage from '../components/TheTextImage.vue';
</script>

<template>
  <section class="section section--about about" id="about">
    <TheHeadline color="#2a2726" text="About me" />
    <div class="container">
      <TheTextImage></TheTextImage>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $color--accent;
}
</style>
