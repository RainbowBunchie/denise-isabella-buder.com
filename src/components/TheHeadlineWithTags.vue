<script setup lang="ts">
import TheHashtag from './TheHashtag.vue';
interface Props {
  headline: string;
  tags: { text: string; url?: string }[];
}
const props = defineProps<Props>();
</script>

<template>
  <div class="headline-with-tags">
    <h3 class="headline-with-tags__headline">
      {{ props.headline }}
    </h3>
    <div class="headline-with-tags__tags tags">
      <TheHashtag
        :key="technology.text"
        v-for="technology in props.tags"
        :text="technology.text"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.headline-with-tags {
  flex: 1;
  &::before {
    content: '';
    width: 30px;
    height: 30px;
    margin: 0 auto;
    position: absolute;
    background-color: $color--primary;
    left: 50%;
    top: -2rem;
    border-radius: 100%;
    transform: translateX(-50%);
  }
  &__headline {
    margin: 1rem 0 2rem;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    font-style: italic;
  }
  &__tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
