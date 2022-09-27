<script setup lang="ts">
import { computed } from 'vue';
import TheAccordionItem from './TheAccordionItem.vue';
interface Props {
  items: {
    title: string;
    subtitle: string;
    labelInfo?: string;
    content: string;
  }[];
}
const props = defineProps<Props>();
</script>

<template>
  <div class="accordion">
    <TheAccordionItem
      :key="item.title"
      v-for="item in props.items"
      :title="item.title"
      :subtitle="item.subtitle"
      :labelInfo="item.labelInfo"
      :content="item.content"
    />
  </div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';
.accordion {
}
</style>
