<script setup lang="ts">
import TheCharacter from '@/components/TheCharacter.vue';
import { defineComponent, onMounted, onUnmounted } from 'vue';
import type { RouterHistory } from 'vue-router';
import { VueTyped } from 'vue3-typed.js';

defineComponent({
  components: {
    VueTyped,
  },
});

class Cursor {
  cursor?: HTMLSpanElement = undefined;
  prevMousePos = [];
  timeout?: ReturnType<typeof setTimeout>;
  constructor({ cursorClass }: { cursorClass: string }) {
    const cursorEl = document.getElementsByClassName(
      cursorClass
    )[0] as HTMLSpanElement;
    this.cursor = cursorEl !== (null || undefined) ? cursorEl : undefined;
  }

  moveCursor({ y, x }: { y: number; x: number }) {
    if (this.timeout !== undefined) {
      window.clearTimeout(this.timeout);
    }
    if (this.cursor !== undefined) {
      this.cursor.style.top = `${y - 20}px`;
      this.cursor.style.transform = 'scale(0.4)';
      this.cursor.style.left = `${x - 20}px`;
      const cursor = this.cursor;
      this.timeout = window.setTimeout(function () {
        if (cursor !== undefined) {
          cursor.style.transform = 'scale(1)';
        }
      }, 250);
    }
  }
  hideCursor() {
    if (this.cursor !== undefined) {
      this.cursor.style.opacity = '0';
    }
  }
  // add hide cursor
  // add still cursor
}

onMounted(() => {
  const cursor = new Cursor({ cursorClass: 'cursor' });
  const header = document.getElementsByClassName('header')[0] as HTMLDivElement;
  header?.addEventListener('mousemove', (e: MouseEvent) =>
    cursor.moveCursor({ y: e.clientY, x: e.clientX })
  );
});

onUnmounted(() => console.log('unmount'));
</script>

<template>
  <section class="section section--header header">
    <span class="header__cursor cursor"></span>
    <TheCharacter />
    <h1 class="header__headline headline">
      I am&#160;
      <span class="headline__accent">
        <vue-typed
          :startDelay="1000"
          :typeSpeed="50"
          :backSpeed="50"
          :backDelay="2500"
          loop
          smartBackspace
          :strings="['Denise.', 'a web developer.', 'a designer.']"
        >
        </vue-typed>
      </span>
    </h1>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 0;
  &__headline {
    color: $color--primary;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0.5rem 1rem 0;
    text-align: center;
    line-height: 1.2;
  }
  .headline__accent {
    width: 100%;
    color: $color--accent;
    @media only screen and (min-width: $breakpoint--tablet) {
      width: auto;
    }
  }

  .cursor {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background-color: $color--accent;
    border-radius: 100%;
    transform-origin: center center;
    transition: transform 0.15s ease-in-out;
  }
}
</style>
