<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheAccordion from '../components/TheAccordion.vue';
import TheSubline from '../components/TheSubline.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.section--experience',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
    .fromTo(
      '.section--experience .headline__text',
      { top: 100 },
      { top: -100 },
      0
    )
    .fromTo(
      '.section--experience .headline__backdrop',
      { top: '25%' },
      { top: '75%' },
      0
    )
    .fromTo('.section--experience .container', { top: 50 }, { top: -50 }, 0);
});
const work = [
  {
    title: 'Web Developer',
    subtitle: '@ Nolimits Digital Business GmbH',
    labelInfo: '2021-now',
    content:
      'Rub my belly hiss. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Ignore the squirrels, youll never catch them anyway stretch out on bed or slap the dog because cats rule cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Enslave the hooman',
  },
  {
    title: 'Frontend Developer',
    subtitle: '@ MMCAgentur',
    labelInfo: '2018-2018',
    content:
      'Rub my belly hiss. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Ignore the squirrels, youll never catch them anyway stretch out on bed or slap the dog because cats rule cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Enslave the hooman',
  },
  {
    title: 'Graphic and web desinger',
    subtitle: '@ Raiffeisenbank Salzburg',
    labelInfo: '2015-2015',
    content:
      'Rub my belly hiss. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Ignore the squirrels, youll never catch them anyway stretch out on bed or slap the dog because cats rule cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Enslave the hooman',
  },
  {
    title: 'Graphic designer',
    subtitle: '@ nmc Salzburg',
    labelInfo: '2014-2014',
    content:
      'Rub my belly hiss. Refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am. Ignore the squirrels, youll never catch them anyway stretch out on bed or slap the dog because cats rule cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Enslave the hooman',
  },
];
const education = [
  {
    title: 'Master of Science in Engineering',
    subtitle: '@ University of Applied Sciences Salzburg',
    labelInfo: '2019-2021',
    content: `I attended the MultiMediaTechnology department with main focus on web engineering.
              My master's thesis focused on emotions in e-learning applications and the impact of emotional design on the learning experience of elementary school children.
              I graduated with a good success (1,74).`,
  },
  {
    title: 'Bachelor of Science in Engineering',
    subtitle: '@ University of Applied Sciences Salzburg',
    labelInfo: '2016-2019',
    content: `I attended the MultiMediaTechnology department with main focus on web development.
              My first bachelor's thesis was about the theory on detecting depression with social media mining and the second focused on identification hrough face and speaker recognition on the web (theory and practical).
              I graduated with a good success (1,45).`,
  },
  {
    title: 'A-level',
    subtitle: '@ HTBLuVA Salzburg',
    labelInfo: '2011-2016',
    content:
      'I attended the graphic and communication design department. Besides general education the school taught how to compose print and screen designs including logos, fonts, magazines, illustrations, packagings, websites/apps, corporate designs and many more. The studies also included web development (HTML, CSS, JavaScript, CMS) advertising, photography, screen printing, media theroy and art history. I graduated with an excellent success.',
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
  padding-bottom: 2.5rem;

  @media only screen and (min-width: $breakpoint--tablet) {
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: $breakpoint--desktop) {
    padding-bottom: 10rem;
  }

  @media only screen and (min-width: $breakpoint--large-desktop) {
    padding-bottom: 15rem;
  }
}
</style>
