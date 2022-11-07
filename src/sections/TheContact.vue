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
      If you have any questions or just want to say hello, feel free to contact
      me via my socials below or send me an email! I’ll be happy to hear from
      you. For further information about me you can also download my CV here.
      <a class="contact__download" download href="."> Download resume </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.contact {
  min-height: 0;
  padding: 0;
  position: relative;

  @media only screen and (min-width: $breakpoint--tablet) {
    margin-top: 300px;
  }

  &__download {
    color: $color--secondary;
    text-transform: uppercase;
    font-weight: 600;
    font-style: italic;
    text-decoration: none;
    margin-top: 0.5rem;
    padding-left: 45px;
    transition: padding-left 0.25s ease-in-out;
    &::before {
      content: '';
      width: 40px;
      height: 6px;
      background-color: $color--secondary;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%) skew(-12deg);
      transition: all 0.25s ease-in-out;
      max-width: 40px;
    }
    &:hover {
      padding-left: 75px;
      &::before {
        width: 70px;
        max-width: 70px;
      }
    }
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
      border-top-right-radius: 350px;
      border-bottom-right-radius: 350px;
      height: 450px;
      position: absolute;
      font-size: 2rem;
      width: 100%;
      padding: 0 10rem 0 8rem;
    }
  }
}
</style>
