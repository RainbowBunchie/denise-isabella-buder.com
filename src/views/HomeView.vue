<script setup lang="ts">
import Header from '@/sections/TheHeader.vue';
import About from '@/sections/TheAbout.vue';
import Skillset from '@/sections/TheSkillset.vue';
import Work from '@/sections/TheWork.vue';
import TheExperience from '@/sections/TheExperience.vue';
import Contact from '@/sections/TheContact.vue';
import Navigation from '../layout/TheNavigation.vue';
import Footer from '../layout/TheFooter.vue';

import { onMounted } from 'vue';

let sectionObserver: any = null;

function observeSections() {
  try {
    sectionObserver?.disconnect();
  } catch (error) {
    //nothing
  }

  const options = {
    rootMargin: '-50% 0px',
    threshold: 0,
  };
  sectionObserver = new IntersectionObserver(sectionObserverHandler, options);
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}
function sectionObserverHandler(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const [currActive] = document.getElementsByClassName(
        'router-link--active'
      );
      currActive?.classList.remove('router-link--active');
      const sectionId = entry.target.id.length > 0 ? `#${entry.target.id}` : '';
      const [newActive] = document.querySelectorAll(`a[href='/${sectionId}']`);
      newActive?.classList.add('router-link--active');
    } else if (entry.target.classList.contains('about')) {
      // special case due to header being fixed and not intersecting
      const [currActive] = document.getElementsByClassName(
        'router-link--active'
      );
      currActive?.classList.remove('router-link--active');
    }
  }
}

onMounted(() => {
  observeSections();
});
</script>

<template>
  <header>
    <Navigation />
  </header>
  <main>
    <Header />
    <About />
    <Skillset />
    <TheExperience />
    <Work />
    <Contact />
  </main>
  <Footer padded />
</template>

<style scoped>
main {
  width: 100%;
}
</style>
