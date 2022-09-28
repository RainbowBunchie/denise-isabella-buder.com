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
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
      reiciendis!
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
    justify-content: space-between;
    padding: 1em 2rem 1rem 88px;
    background-color: $color--secondary;
    font-weight: bold;
    cursor: pointer;
    height: 88px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    border-top-left-radius: 44px;
    border-bottom-left-radius: 44px;
    align-items: center;
    * {
      font-size: 1.25rem;
      line-height: 1;
    }
    /* Icon */
    &:hover {
    }
    &::before {
      content: '\276F';
      width: 1em;
      height: 1em;
      text-align: center;
      position: absolute;
      left: 44px;
      top: 50%;
      transform: translateY(-55%) rotate(90deg);
      transition: transform 0.5s ease;
      transform-origin: 50% 50%;
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
      right: 2rem;
      top: 1rem;
      text-transform: uppercase;
      font-weight: 900;
    }
  }
  &__content {
    max-height: 0;
    height: 100%;
    padding: 0 2rem 0 20px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    margin-left: 68px;

    // transition: all 0.35s;
  }
}

// :checked
.item__input:checked {
  + .item__label {
    &::before {
      transform: translateY(-55%) rotate(-90deg);
    }
  }
  ~ .item__content {
    max-height: 100vh;
    // padding: 1em;
  }
}
</style>
