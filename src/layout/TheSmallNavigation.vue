<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <nav class="nav nav--small">
    <RouterLink :to="{ name: 'home' }" exact>Zur Startseite</RouterLink>
  </nav>
</template>
<style scoped lang="scss">
@import '../assets/variables.scss';

.nav--small {
  position: fixed;
  z-index: 7000;
  top: 0;
  left: 0;
  padding: 1rem 1rem 0.5rem;
  background-color: $color--secondary;

  @media only screen and (min-width: $breakpoint--large-desktop) {
    padding: 0;
    top: 1rem;
    left: 1rem;
    background-color: $color--secondary;
  }

  a {
    color: $color--primary;
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    transition: opacity 0.5s ease;
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
