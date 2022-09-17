<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
</script>

<template>
  <section class="section section--skill skill" id="skill">
    <TheHeadline color="rgb(188, 19, 48)" text="My Skillset" />
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.skill {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $color--secondary;
}
</style>
