<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheHeadlineWithTags from '../components/TheHeadlineWithTags.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.section--skillset',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
    .fromTo(
      '.section--skillset .headline__text',
      { top: 100 },
      { top: -100 },
      0
    )
    .fromTo(
      '.section--skillset .headline__backdrop',
      { top: '25%' },
      { top: '75%' },
      0
    )
    .fromTo('.section--skillset .container', { top: 50 }, { top: -50 }, 0);
});

const skills = [
  {
    headline: 'Sprachen',
    tags: [
      {
        text: 'HTML',
      },
      {
        text: 'CSS',
      },
      {
        text: 'SASS',
      },
      {
        text: 'JavaScript',
      },
      {
        text: 'Typescript',
      },
      {
        text: 'Python',
      },
      {
        text: 'SQL',
      },
    ],
  },
  {
    headline: 'Frameworks & Tools',
    tags: [
      {
        text: 'Vue.js',
      },
      {
        text: 'React',
      },
      {
        text: 'React Native',
      },

      {
        text: 'Node.js',
      },
      {
        text: 'webpack',
      },
      {
        text: 'GitHub Actions',
      },
      {
        text: 'Docker',
      },
      {
        text: 'Shopware 5 & 6',
      },
    ],
  },
  {
    headline: 'Design',
    tags: [
      {
        text: 'Figma',
      },
      {
        text: 'Photoshop',
      },
      {
        text: 'Illustrator',
      },
      {
        text: 'InDesign',
      },
      {
        text: 'Lightroom',
      },
      {
        text: 'Adobe XD',
      },
    ],
  },
];
</script>

<template>
  <section class="section section--skillset skillset" id="skillset">
    <TheHeadline color="rgb(188, 19, 48)" text="Skillset" />
    <div class="container">
      <div class="skillset__skills">
        <template :key="skill.headline" v-for="skill in skills">
          <TheHeadlineWithTags :headline="skill.headline" :tags="skill.tags"
        /></template>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.skillset {
  width: 100%;
  align-items: center;
  min-height: 100vh;
  background-color: $color--secondary;
  display: flex;
  flex-direction: column;

  &__skills {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    flex-wrap: wrap;
    @media only screen and (min-width: $breakpoint--desktop) {
      margin-top: 7.5rem;
      flex-direction: row;
      align-items: flex-start;
    }
    &::before {
      content: '';
      width: 100vw;
      position: absolute;
      left: 50%;
      top: calc(-19px);
      transform: translateX(-50%);
      border-top: 8px solid $color--accent;
      display: none;
      @media only screen and (min-width: $breakpoint--desktop) {
        display: flex;
      }
    }
  }
}
</style>
