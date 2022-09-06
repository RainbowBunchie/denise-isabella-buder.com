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
  padding: 6rem 5rem;
  position: relative;
  z-index: 50;
  display: block;
  gap: 5rem;

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
  }
  * {
    color: $color--text;
  }

  display: flex;
  &__text {
    z-index: 4;
  }
  &__img {
    border-radius: 100%;
    z-index: 4;
    width: auto;
    height: 400px;
    width: 400px;
  }
}
</style>
