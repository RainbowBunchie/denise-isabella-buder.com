<script setup lang="ts"></script>

<template>
  <section class="section section--contact contact">
    <div class="container">
      If you have any questions or just want to say hello, feel free to contact
      me via my socials below or send me an email! I’ll be happy to hear from
      you. For further information about me you can also download my CV here.
      Download CV
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.contact {
  min-height: 0;
  padding: 0;
  position: relative;
  margin-top: 200px;
  .container {
    position: absolute;
    min-height: 0;
    background-color: $color--accent;
    padding: 4rem 2rem;
    height: 350px;
    border-top-right-radius: 350px;
    border-bottom-right-radius: 350px;
    width: 100%;
    z-index: 50;
  }
}
</style>
