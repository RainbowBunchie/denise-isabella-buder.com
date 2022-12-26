<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheTextImage from '../components/TheTextImage.vue';
import { onMounted } from 'vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.section--about',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
    .fromTo('.section--about .headline__text', { top: 100 }, { top: -100 }, 0)
    .fromTo(
      '.section--about .headline__backdrop',
      { top: '25%' },
      { top: '75%' },
      0
    )
    .fromTo('.section--about .container', { top: 50 }, { top: -50 }, 0);
});
</script>

<template>
  <section class="section section--about about" id="about">
    <TheHeadline color="#2a2726" text="Über mich" />
    <div class="container">
      <TheTextImage></TheTextImage>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.about {
  margin-top: calc(100vh + 50px);
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $color--accent;

  @media only screen and (min-width: $breakpoint--tablet) {
    margin-top: calc(100vh + 120px);
  }
  @media only screen and (min-width: $breakpoint--desktop) {
    margin-top: calc(100vh + 120px);
  }
  @media only screen and (min-width: $breakpoint--large-desktop) {
    margin-top: calc(100vh + 156px);
  }

  &::before {
    content: '';
    z-index: 3;
    width: 100vw;
    top: -49px;
    height: 50px;
    position: absolute;
    background-size: contain;
    background-repeat: repeat-x;
    background-image: url("data:image/svg+xml,%3Csvg width='317' height='158' viewBox='0 0 317 158' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M158 79C158 35.3695 122.63 0 79 0C35.3695 0 0 35.3695 0 79V158H79H237.504H317V80.1191C316.398 123.234 281.035 158 237.504 158C193.594 158 158 122.631 158 79Z' fill='%23BC1330'/%3E%3C/svg%3E%0A");
    @media only screen and (min-width: $breakpoint--tablet) {
      top: -77px;
      height: 78px;
    }
    @media only screen and (min-width: $breakpoint--desktop) {
      top: -119px;
      height: 120px;
    }
    @media only screen and (min-width: $breakpoint--large-desktop) {
      top: -156px;
      height: 156px;
    }
  }
}
</style>
