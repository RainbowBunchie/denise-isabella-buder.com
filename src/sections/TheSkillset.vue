<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheHeadlineWithTags from '../components/TheHeadlineWithTags.vue';

const skills = [
  {
    headline: 'Languages',
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
      {
        text: 'Java',
      },
      {
        text: 'C#',
      },
      {
        text: 'Ruby',
      },
    ],
  },
  {
    headline: 'Frameworks & Tools',
    tags: [
      {
        text: 'React',
      },
      {
        text: 'React Native',
      },
      {
        text: 'Redux',
      },
      {
        text: 'Vue.js',
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
        text: 'jest',
      },
      {
        text: 'Docker',
      },
      {
        text: 'Shopware 5 & 6',
      },
      {
        text: 'Express',
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
