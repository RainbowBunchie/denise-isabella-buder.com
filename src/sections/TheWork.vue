<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheProject from '../components/TheProject.vue';
// interface Project {
//   title: string;
//   description: string;
//   people: { name: string; link?: string }[];
//   imagePosition: string;
// }

const projects = [
  {
    title: 'Turtlet',
    description:
      'slow media messaging web and app that counters the fast moving zeitgeist of our digital society by giving more emotional value and individualism to its messages (so called ”Turtlets”)',
    people: [
      {
        name: 'Lukas Seiwald',
        link: 'https://www.linkedin.com/in/lukas-seiwald-969139146/',
      },
      {
        name: 'Sandra Zecha',
        link: 'https://www.linkedin.com/in/lukas-seiwald-969139146/',
      },
    ],
    imagePosition: 'right',
  },
  {
    title: 'Turtlet',
    description:
      'slow media messaging web and app that counters the fast moving zeitgeist of our digital society by giving more emotional value and individualism to its messages (so called ”Turtlets”)',
    people: [{ name: 'Lukas Seiwald' }],
    imagePosition: 'left',
  },
];
</script>

<template>
  <section class="section section--work work" id="work">
    <div class="container">
      <TheHeadline color="#2a2726" text="Projects" />
      <TheProject
        v-for="(project, index) in projects"
        :key="project.title"
        :imagePosition="(index + 1) % 2 === 0 ? 'left' : 'right'"
        :people="project.people"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.work {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $color--accent;
}
</style>
