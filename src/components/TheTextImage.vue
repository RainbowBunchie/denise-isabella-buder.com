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
      <h3>Heyjo!</h3>
      <p>
        Ich bin Denise und ich bin Webentwicklerin und -designerin mit Standort
        in Salzburg, Österreich. Meine Reise in die Webentwicklung begann 2015
        als mir in der Schule die Basics von HTML, CSS und JavaScript
        beigebracht wurden und ich so meine Liebe für die Programmierung
        entdeckten konnte. Nun, Jahre später, mit einem Masterabschluss in
        MultiMediaTechnology (Web Engineering), arbeite ich als
        (Fullstack-)Webentwicklerin, mit derzeitigem Fokus auf Frontend. Ich
        probiere mich gerne an neuen und innovtiven Technologien/Trends und bin
        daher immer auf der Suche nach neuen Frameworks, Tools und
        Herausforderungen.
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
  width: 100%;
  align-items: center;

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
    top: 50%;
    z-index: 0;
    background-color: $color--secondary;
    height: calc(400px + 12rem);
    width: calc(100% - (400px + 12rem) / 2);
    display: none;
    transform: translateY(-50%);
    @media only screen and (min-width: $breakpoint--desktop) {
      display: block;
    }
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
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
    padding: 0 2rem 3rem;
    max-width: 600px;
    position: relative;
    &::before {
      content: '';
      height: calc(100vw - 2rem);
      left: 0;
      width: 100%;
      top: calc(-100vw + 3rem);
      border-top-left-radius: 100%;
      border-top-right-radius: 100%;
      position: absolute;
      background-color: $color--secondary;
      @media only screen and (min-width: calc(600px + 2rem)) {
        height: 600px;
        top: calc(-600px + 2rem);
      }
      @media only screen and (min-width: $breakpoint--desktop) {
        display: none;
      }
    }

    @media only screen and (min-width: $breakpoint--desktop) {
      background-color: transparent;
      padding: 0;
      max-width: none;
    }
  }
  &__img {
    border-radius: 100%;
    z-index: 4;
    height: calc(100vw - 3rem);
    width: calc(100vw - 3rem);
    background-color: $color--secondary;
    padding: 2rem;
    position: relative;
    @media only screen and (min-width: calc(600px + 2rem)) {
      flex-direction: row;
      height: calc(600px - 4rem);
      width: calc(600px - 4rem);
      padding: 0;
    }
    @media only screen and (min-width: $breakpoint--desktop) {
      width: 400px;
      height: 400px;
    }
  }
}
</style>
