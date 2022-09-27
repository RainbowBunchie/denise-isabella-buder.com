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
      <p>{{ props.title }}</p>
      <p>{{ props.subtitle }}</p>
      <p v-if="labelInfo">{{ labelInfo }}</p>
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
    padding: 1em;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &:hover {
    }
    &::after {
      content: '\276F';
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.35s;
    }
  }
  &__content {
    max-height: 0;
    padding: 0 1em;
    background: white;
    transition: all 0.35s;
  }
}

// :checked
.item__input:checked {
  + .item__label {
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .item__content {
    max-height: 100vh;
    padding: 1em;
  }
}
</style>
