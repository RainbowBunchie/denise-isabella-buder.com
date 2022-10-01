<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheAccordion from '../components/TheAccordion.vue';
import TheSubline from '../components/TheSubline.vue';
const work = [
  {
    title: 'Web Developer',
    subtitle: '@ Nolimits Digital Business GmbH',
    labelInfo: '2021-now',
    content:
      'Rub my belly hiss. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Ignore the squirrels, youll never catch them anyway stretch out on bed or slap the dog because cats rule cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Enslave the hooman',
  },
  {
    title: 'Frontend Developer (trainee)',
    subtitle: '@ MMCAgentur',
    labelInfo: '2018-2018',
    content:
      'Rub my belly hiss. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Ignore the squirrels, youll never catch them anyway stretch out on bed or slap the dog because cats rule cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Enslave the hooman',
  },
  {
    title: 'Graphic and web desinger (trainee)',
    subtitle: '@ Raiffeisenbank Salzburg',
    labelInfo: '2015-2015',
    content:
      'Rub my belly hiss. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Ignore the squirrels, youll never catch them anyway stretch out on bed or slap the dog because cats rule cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Enslave the hooman',
  },
  {
    title: 'Graphic designer (trainee)',
    subtitle: '@ nmc Salzburg',
    labelInfo: '2014-2014',
    content:
      'Rub my belly hiss. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Ignore the squirrels, youll never catch them anyway stretch out on bed or slap the dog because cats rule cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Enslave the hooman',
  },
];
const education = [
  {
    title: 'Master of Science in Engineering (Web Engineering)',
    subtitle: '@ University of Applied Sciences Salzburg',
    labelInfo: '2019-2021',
    content: 'content',
  },
  {
    title: 'Bachelor of Science in Engineering (Web Engineering)',
    subtitle: '@ University of Applied Sciences Salzburg',
    labelInfo: '2016-2019',
    content: 'content',
  },
  {
    title: 'A-level (Graphic & communication design)',
    subtitle: '@ HTBLuVA Salzburg',
    labelInfo: '2011-2016',
    content: 'content',
  },
];
</script>

<template>
  <section class="section section--experience experience" id="experience">
    <TheHeadline color="#2a2726" text="Experience" />
    <div class="container">
      <TheSubline text="Work" color="dark"></TheSubline>
      <TheAccordion :items="work" />
      <TheSubline text="Education" color="dark"></TheSubline>
      <TheAccordion :items="education" />
    </div>
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
  padding-bottom: 15rem;
}
</style>
