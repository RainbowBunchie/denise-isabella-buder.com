<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <nav class="nav nav--main">
    <RouterLink
      :class="$route.fullPath.includes('#about') ? 'router-link--active' : ''"
      :to="{ name: 'home', hash: '#about' }"
      exact
      >About</RouterLink
    >
    <RouterLink
      :class="$route.fullPath.includes('#skill') ? 'router-link--active' : ''"
      :to="{ name: 'home', hash: '#skill' }"
      exact
      >Skillset</RouterLink
    >
    <RouterLink
      :class="
        $route.fullPath.includes('#experience') ? 'router-link--active' : ''
      "
      exact
      :to="{ name: 'home', hash: '#experience' }"
      >Experience</RouterLink
    >
    <RouterLink
      :class="$route.fullPath.includes('#work') ? 'router-link--active' : ''"
      :to="{ name: 'home', hash: '#work' }"
      exact
      >Projects</RouterLink
    >
  </nav>
</template>
<style scoped lang="scss">
@import '../assets/variables.scss';

.nav--main {
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 7000;
  display: flex;
  flex-direction: column;
  a {
    color: $color--primary;
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    &.router-link--active {
      padding-left: calc(50px + 0.5rem);
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: calc(50%);
        transform: translateY(-50%);
        width: 50px;
        height: 4px;
        background-color: $color--primary;
      }
      font-style: italic;
    }
  }
}
</style>
