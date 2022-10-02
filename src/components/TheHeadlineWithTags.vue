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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media only screen and (min-width: $breakpoint--desktop) {
    margin-top: 0;
  }
  &:first-child {
    margin-top: 0;
  }
  &::before {
    content: '';
    width: 25px;
    height: 25px;
    margin: 0 auto;
    position: absolute;
    background-color: $color--primary;
    top: -2rem;
    border-radius: 100%;
    transform: translateX(-50%);
    z-index: 2;
    left: 50%;
    @media only screen and (min-width: $breakpoint--desktop) {
      width: 30px;
      height: 30px;
    }
  }
  &::after {
    content: '';
    width: 100vw;
    position: absolute;
    left: calc(-50vw - 1rem);
    top: calc(-22px);
    border-top: 6px solid $color--accent;
    z-index: 1;

    @media only screen and (min-width: $breakpoint--desktop) {
      display: none;
    }
  }
  &:nth-child(even) {
    &::after {
      left: calc(50vw - 1rem);
    }
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
    max-width: 400px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    @media only screen and (min-width: $breakpoint--desktop) {
      max-width: none;
    }
  }
}
</style>
