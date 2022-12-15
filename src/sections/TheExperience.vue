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
    subtitle: '@Nolimits Digital Business GmbH',
    labelInfo: '2021-now',
    content:
      'Fullstack developer with focus on frontend development, implementation and support of new and existing projects in the area of e-commerce, server infrastructure, creation of development environments, CI/CD , performing code reviews, assisting with design tasks',
  },
  {
    title: 'Frontend Developer',
    subtitle: '@ MMCAgentur',
    labelInfo: '2018-2018',
    content:
      'Implementation and support of the frontend of existing and new customer projects',
  },
  {
    title: 'Graphic and web desinger',
    subtitle: '@ Raiffeisenbank Salzburg',
    labelInfo: '2015-2015',
    content:
      'Graphic design of various print products such as flyers, posters and booklets, creation of illustrations, administration of the internal CMS for various internal websites',
  },
  {
    title: 'Graphic designer',
    subtitle: '@ nmc Salzburg',
    labelInfo: '2014-2014',
    content:
      'Graphic design of various print products such as flyers, posters and stickers',
  },
];
const education = [
  {
    title: 'Master of Science in Engineering',
    subtitle: '@ University of Applied Sciences Salzburg',
    labelInfo: '2019-2021',
    content: `<b>Degree programme:</b> MultiMediaTechnology with specialisation in web engineering <br>
              <b>Master thesis:</b> "Emotions in e-learning applications: The effects of emotional design on the learning experience of primary school children" <br>
              <b>Final grade:</b> good success (overall grade of 1.75) <br>
              <b>Extra-curricular activities:</b> deputy class representative, organization and moderation of <a href="lude.cat">lude.cat</a>`,
  },
  {
    title: 'Bachelor of Science in Engineering',
    subtitle: '@ University of Applied Sciences Salzburg',
    labelInfo: '2016-2019',
    content: `<b>Degree programme:</b> MultiMediaTechnology with specialisation in web development <br>
              <b>Bachelor thesis 1:</b> "Detecting depression with the help of social media mining". <br>
              <b>Bachelor thesis 2:</b> "Identification on the web by face and speaker recognition". <br>
              <b>Final grade:</b> good success (overall grade of 1.45)`,
  },
  {
    title: 'A-level',
    subtitle: '@ HTBLuVA Salzburg',
    labelInfo: '2011-2016',
    content: `<b>Focus:</b> Graphic and communication design
              <b>Final grade:</b> excellent success`,
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
