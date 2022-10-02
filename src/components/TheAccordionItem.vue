<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  title: string;
  subtitle: string;
  labelInfo?: string;
  content: string;
}
const props = defineProps<Props>();
const uniqueId = computed(
  () => `${props.title.replace(/\s/g, '')}${props.subtitle.replace(/\s/g, '')}`
);
</script>

<template>
  <div class="accordion__item item">
    <input class="item__input" type="checkbox" :id="uniqueId" />
    <label class="item__label label" :for="uniqueId">
      <p class="label__title">{{ props.title }}</p>
      <p class="label__subtitle">{{ props.subtitle }}</p>
      <p class="label__info" v-if="labelInfo">{{ labelInfo }}</p>
    </label>
    <div class="item__content">
      {{ props.content }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.item {
  width: 100%;
  color: white;
  overflow: hidden;
  &__input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  &__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem 1rem 70px;
    background-color: $color--secondary;
    font-weight: bold;
    cursor: pointer;
    height: 88px;
    position: relative;
    border-top-left-radius: 44px;
    border-bottom-left-radius: 44px;
    margin-top: 1.5rem;
    * {
      font-size: 1.1rem;
      line-height: 1;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
    }

    @media only screen and (min-width: $breakpoint--tablet) {
      margin-top: 0;
      padding: 1rem 2rem 1rem 88px;

      * {
        font-size: 1.25rem;
      }
    }

    &::before {
      content: '';
      width: 1.2rem;
      height: 0.7rem;
      text-align: center;
      position: absolute;
      left: 30px;
      top: 50%;
      transform: translateY(-55%) rotate(180deg);
      transition: transform 0.75s ease;
      background-image: $svg--arrow;
      background-repeat: no-repeat;
      background-size: contain;
      transform-origin: 50% 50%;
      @media only screen and (min-width: $breakpoint--tablet) {
        width: 1.4rem;
        height: 0.9rem;
        left: 38px;
      }
    }

    .label__title {
      text-transform: uppercase;
      font-weight: 900;
    }
    .label__subtitle {
      width: 100%;
    }
    .label__info {
      position: absolute;
      top: -1.25rem;
      text-transform: uppercase;
      font-weight: 900;
      right: 0;
      margin-bottom: 2rem;
      color: $color--secondary;
      @media only screen and (min-width: $breakpoint--tablet) {
        right: 2rem;
        top: 1rem;
        color: $color--primary;
      }
    }
  }
  &__content {
    height: 100%;
    max-height: 0;
    padding: 0 2rem 0 20px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    margin-left: 50px;
    overflow: hidden;
    opacity: 0.2;
    // closing
    transition: max-height 1.5s cubic-bezier(0, 1, 0, 1),
      padding 0.5s ease-in-out, opacity 0.5s ease-in-out;
    @media only screen and (min-width: $breakpoint--tablet) {
      margin-left: 68px;
    }
  }
}

// :checked
.item__input:checked {
  + .item__label {
    &::before {
      transform: translateY(-55%) rotate(0deg);
    }
  }
  ~ .item__content {
    opacity: 1;
    max-height: 100vh;
    // opening
    transition: max-height 1.5s ease-in-out, padding 0.5s ease-in-out,
      opacity 0.5s ease-in-out;
    padding: 1rem 2rem 1rem 20px;
  }
}
</style>
