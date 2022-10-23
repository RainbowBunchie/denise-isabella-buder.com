<script setup lang="ts">
import TheCharacter from '@/components/TheCharacter.vue';
import { defineComponent } from 'vue';
import { VueTyped } from 'vue3-typed.js';

defineComponent({
  components: {
    VueTyped,
  },
});
</script>

<template>
  <section class="section section--header header">
    <TheCharacter />
    <h1 class="header__headline headline">
      I am&#160;
      <span class="headline__accent">
        <vue-typed
          :startDelay="1000"
          :typeSpeed="50"
          :backSpeed="50"
          :backDelay="2500"
          loop
          smartBackspace
          :strings="['Denise.', 'a web developer.', 'a designer.']"
        >
        </vue-typed>
      </span>
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
  padding: 0;
  &__headline {
    color: $color--primary;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .headline__accent {
    color: $color--accent;
  }
}
</style>
