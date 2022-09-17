<script setup lang="ts">
// interface Props {
//   img: string;
//   headline: string;
//   text: string;
// }

// defineProps<Props>();
</script>

<template>
  <div class="text-image">
    <div class="text-image__text">
      <h3>Hey there!</h3>
      <p>
        I am a 26-year-old web developer with a passion for creative and exiting
        frontends. I began my journey with development in 2015 were I learned
        bits of HTML, CSS and JS at school and fell in love with programming. So
        I decided to expand my skills at university where I studied web
        development and got my Master's degree (MSc) in 2021. I learned tons of
        programming languages, programming tools and basic coding concepts. Now
        I work as a fulltime web developer and make computer go beep beep boop
        professionally. I still love learning about new and modern (web)
        technologies so I am always looking for new frameworks, tools and
        challenges.
      </p>
    </div>
    <img class="text-image__img" src="../assets/images/me2.png" />
  </div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';
.text-image {
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (min-width: $breakpoint--desktop) {
    gap: 5rem;
    padding: 6rem 5rem;
    flex-direction: row;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    z-index: 0;
    background-color: $color--secondary;
    height: calc(400px + 12rem);
    width: calc(100% - (400px + 12rem) / 2);
    display: none;
    @media only screen and (min-width: $breakpoint--desktop) {
      display: block;
    }
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 100%;
    background-color: $color--secondary;
    height: calc(400px + 12rem);
    width: calc(400px + 12rem);
    display: none;

    @media only screen and (min-width: $breakpoint--desktop) {
      display: block;
    }
  }
  * {
    color: $color--text;
  }

  &__text {
    z-index: 4;
    background-color: $color--secondary;
    padding: 0 3rem 3rem 3rem;
    max-width: 600px;
    position: relative;

    @media only screen and (min-width: $breakpoint--desktop) {
      background-color: transparent;
      padding: 0;
      max-width: none;
    }

    &::before {
      content: '';
      position: absolute;
      height: calc(100vw - 2rem);
      width: 100%;
      max-height: 600px;
      top: -50vw;
      border-radius: 0;
      left: 0;
      background-color: $color--secondary;
      @media only screen and (min-width: calc(600px + 6rem)) {
        top: -300px;
      }
      @media only screen and (min-width: $breakpoint--desktop) {
        display: none;
      }
    }
  }
  &__img {
    border-radius: 100%;
    z-index: 4;
    height: 100vw;
    width: 100vw;
    max-width: 600px;
    max-height: 600px;
    background-color: $color--secondary;
    padding: 3rem;
    position: relative;
    @media only screen and (min-width: $breakpoint--desktop) {
      flex-direction: row;
      height: 400px;
      width: 400px;
      padding: 0;
    }
  }
}
</style>
