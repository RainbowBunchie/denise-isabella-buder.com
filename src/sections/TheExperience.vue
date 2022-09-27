<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheAccordion from '../components/TheAccordion.vue';
const work = [
  {
    title: 'Web Developer',
    subtitle: '@Nolimits Digital Business GmbH',
    labelInfo: '2019-2021',
    content: 'content',
  },
  {
    title: 'Web Developer',
    subtitle: '@MMCAgentur',
    labelInfo: '2019-2021',
    content: 'content',
  },
  {
    title: 'Web Developer',
    subtitle: '@nmc',
    labelInfo: '2019-2021',
    content: 'content',
  },
  {
    title: 'Web Developer',
    subtitle: '@Nkeine ahnung',
    labelInfo: '2019-2021',
    content: 'content',
  },
];
const experience = {};
</script>

<template>
  <section class="section section--experience experience" id="experience">
    <TheHeadline color="#2a2726" text="Experience" />
    <TheAccordion :items="work" />
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.experience {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $color--accent;
}
</style>
