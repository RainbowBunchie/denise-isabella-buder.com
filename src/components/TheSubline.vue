<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  text: string;
  color?: 'dark' | 'light';
}

const props = defineProps<Props>();
const colorClass = computed(() =>
  props.color == 'dark' ? 'subline--dark' : 'subline--light'
);
</script>

<template>
  <h3 class="subline" :class="colorClass">
    {{ text }}
  </h3>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';
.subline {
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 2rem;
  &--dark {
    color: $color--secondary;
  }
  &--light {
    color: $color--primary;
  }
}
</style>
