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
  &::before {
    content: '';
    z-index: 3;
    width: 100vw;
    top: -78px;
    height: 156px;
    position: absolute;
    background-size: contain;
    background-image: url("data:image/svg+xml,%3Csvg width='315' height='157' viewBox='0 0 315 157' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='78.5' cy='78.5' r='78.5' fill='%23bc1330'/%3E%3Cellipse cx='236' cy='78.5' rx='79' ry='78.5' fill='%232A2726'/%3E%3C/svg%3E%0A");
  }
  margin-top: 78px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $color--accent;
}
</style>
