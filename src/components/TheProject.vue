<script setup lang="ts"></script>

<template>
  <div class="project">
    <div class="project__img img">
      <img class="img__image" src="../assets/images/iphine.png" />
    </div>
    <div class="project__info info">
      <h3 class="">Turtlet</h3>
      <p>
        slow media messaging web and app that counters the fast moving zeitgeist
        of our digital society by giving more emotional value and individualism
        to its messages (so called ”Turtlets”)
      </p>
      <p>links go here</p>
      <h4>Technologies used</h4>
      <p>Tags go here</p>
      <h4>People I worked with</h4>
      <p>perople go here</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.project {
  display: flex;
  gap: 10rem;
  &__img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -3rem;
      background-color: $color--secondary;
      width: 430px;
      height: 430px;
      border-radius: 100%;
    }
    .img__image {
      height: 480px;
      width: auto;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
