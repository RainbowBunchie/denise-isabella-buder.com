<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <nav class="nav nav--small">
    <RouterLink :to="{ name: 'home' }" exact>Zurück zur Startseite</RouterLink>
  </nav>
</template>
<style scoped lang="scss">
@import '../assets/variables.scss';

.nav--small {
  position: fixed;
  z-index: 7000;
  left: 1rem;
  top: 1rem;

  a {
    color: $color--primary;
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    transition: padding-left 0.25s ease-in-out;
  }
}
</style>
