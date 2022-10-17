<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <input class="nav__input" id="burger" type="checkbox" />
  <label for="burger">
    <div class="nav__burger burger">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span></div
  ></label>
  <nav class="nav nav--main">
    <RouterLink
      :class="$route.fullPath.includes('#about') ? 'router-link--active' : ''"
      :to="{ name: 'home', hash: '#about' }"
      exact
      >About</RouterLink
    >
    <RouterLink
      :class="
        $route.fullPath.includes('#skillset') ? 'router-link--active' : ''
      "
      :to="{ name: 'home', hash: '#skillset' }"
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
$burger-height: 32px;
$burger-width: 36px;

.burger {
  width: $burger-width;
  height: $burger-height;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 50000;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  @media only screen and (min-width: $breakpoint--tablet) {
    display: none;
  }
  &::before {
    content: '';
    background-color: $color--secondary;
    width: 125px;
    height: 125px;
    position: absolute;
    transform-origin: bottom center;
    bottom: -1rem;
    right: -1rem;
    transform: skew(-45deg);
  }
  &__line {
    height: 6px;
    width: $burger-width;
    background-color: $color--primary;
    display: block;
    transition: all 0.25s ease-in-out;
    &:nth-child(2) {
      margin-top: 8px;
    }
    &:nth-child(3) {
      margin-top: 8px;
    }
  }
}

.nav__input {
  display: none;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: -100vw;
  &:checked {
    margin-left: 50px;
    + label {
      .burger__line {
        &:first-child {
          transform-origin: top center;
          transform: translateY($burger-height / 2) rotateZ(45deg);
        }
        &:nth-child(2) {
          transform: translateX(calc(1rem + 35px)) translateY(-12px);
          opacity: 0;
        }
        &:nth-child(3) {
          margin-top: 0;
          transform-origin: bottom center;
          transform: translateY(-100%) rotateZ(-45deg);
        }
      }

      + .nav--main {
        // display: flex;
        transform: translate(0, 0);
      }
    }
  }
}

.nav--main {
  position: fixed;
  display: none;
  z-index: 7000;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  padding-right: 1rem;
  padding-bottom: calc(5rem + 31px);
  width: 100vw;
  gap: 1rem;
  align-items: flex-end;
  transform: translate(90%, 0%);
  transition: all 0.5s ease-in-out;
  display: none;

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100vh;
    transform-origin: bottom right;
    transform: skew(-45deg);
    left: -20vw;
    bottom: 0;
    background-color: $color--secondary;
  }
  @media only screen and (min-width: $breakpoint--tablet) {
    display: flex;
    width: unset;
    left: 1rem;
    top: 1rem;
    right: auto;
    bottom: auto;
    align-items: flex-start;
    gap: 0;
    transform: none;

    &::before {
      display: none;
    }
  }
  a {
    color: $color--primary;
    font-size: 1.3rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    transition: padding-left 0.25s ease-in-out;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: calc(50%);
      transform: translateY(-50%) skew(-12deg);
      width: 50px;
      height: 4px;
      max-width: 0;
      background-color: $color--primary;
      transition: max-width 0.25s ease-in-out;
    }
    &.router-link--active {
      padding-left: calc(50px + 0.5rem);
      &::before {
        width: 50px;
        height: 4px;
        background-color: $color--primary;
        max-width: 50px;
      }
      font-style: italic;
    }
  }
}
</style>
