<script setup lang="ts">
import TheCharacter from '@/components/TheCharacter.vue';
</script>

<template>
  <section class="section section--header header">
    <TheCharacter />
    <h1 class="header__headline headline">
      I am <span class="headline--accent">Denise</span>.
    </h1>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
  &__headline {
    color: $color--primary;
  }
  .headline--accent {
    color: $color--accent;
  }
}
</style>
