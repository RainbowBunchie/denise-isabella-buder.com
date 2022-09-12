<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  text: string;
  color: string;
}

const props = defineProps<Props>();
const color = computed(() => props.color);
</script>

<template>
  <div class="headline">
    <h2 class="headline__text">
      {{ text }}
    </h2>
    <span class="headline__backdrop">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';
.headline {
  position: relative;
  margin-bottom: 5rem;
  text-align: center;
  * {
    font-family: $font--heading;
    font-weight: 700;
    color: v-bind(color);
    text-transform: uppercase;
  }
  &__text {
    font-size: 3rem;
  }
  &__backdrop {
    font-size: 10rem;
    position: absolute;
    top: 50%;
    width: 100vw;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0.1;
  }
}
</style>
