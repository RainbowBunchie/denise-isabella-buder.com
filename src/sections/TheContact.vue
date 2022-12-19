<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.section--work',
        scrub: 1,
        start: '90% 50%',
        end: 'bottom top',
      },
    })
    .fromTo('.section--contact', { top: 175 }, { top: -50 }, 0);
});
</script>

<template>
  <section class="section section--contact contact">
    <div class="container">
      Hast du Fragen, Anregungen oder willst einfach nur Hallo sagen? Dann melde
      dich gerne via meinen sozialen Netzwerken oder via E-Mail. <br />
      Ich freue mich auf deine Nachricht!
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.contact {
  min-height: 0;
  padding: 0;
  height: 0;
  position: relative;
  background-color: $color--secondary;

  @media only screen and (min-width: $breakpoint--tablet) {
    height: auto;
  }

  .container {
    position: relative;
    min-height: 0;
    background-color: $color--accent;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    z-index: 50;
    font-size: 1.5rem;
    font-weight: 600;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 0 2rem;
    @media only screen and (min-width: $breakpoint--tablet) {
      max-width: 1200px;
      border-top-right-radius: 350px;
      border-bottom-right-radius: 350px;
      position: absolute;
      width: calc(100vw - 4rem);
      padding: 4rem 7rem 4rem 3rem;
      font-size: 1.7rem;
    }
    @media only screen and (min-width: $breakpoint--desktop) {
      padding: 5rem 7rem 5rem 3rem;
      font-size: 2rem;
    }
    @media only screen and (min-width: $breakpoint--large-desktop) {
      width: calc(100vw - 4rem);
      padding: 6rem 10rem 6rem 8rem;
      font-size: 2rem;
    }
  }
}
</style>
