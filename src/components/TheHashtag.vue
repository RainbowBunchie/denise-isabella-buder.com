<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  text: string;
  link?: string;
}
const props = defineProps<Props>();
const link = computed(() => props.link);
</script>

<template>
  <p
    :href="link ? link : ''"
    class="hashtag"
    :class="link ? 'hashtag--clickable' : ''"
  >
    {{ text }}
  </p>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';
.hashtag {
  border: 1px $color--primary solid;
  border-radius: 3rem;
  padding: 0.125rem 1rem;
  transition: all 0.2s ease;
  &:hover {
    background-color: $color--primary;
    color: $color--accent;
    cursor: help;
  }
  &--clickable {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
