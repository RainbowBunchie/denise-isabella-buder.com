<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  text: string;
  color: string;
}

const props = defineProps<Props>();
const cssVars = computed(() => '--color:' + props.color);
</script>

<template>
  <div class="headline">
    <h2 :style="cssVars" :class="cssVars" class="headline__text">
      {{ text }}
    </h2>
    <span :style="cssVars" class="headline__backdrop">{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';
.headline {
  position: relative;
  * {
    font-family: $font--heading;
    font-weight: 700;
    color: var(--color);
  }
  &__headline {
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
    opacity: 0.5;
  }
}
</style>
