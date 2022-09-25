<script setup lang="ts">
import Header from '@/sections/TheHeader.vue';
import About from '@/sections/TheAbout.vue';
import Skillset from '@/sections/TheSkillset.vue';
import Work from '@/sections/TheWork.vue';
import TheExperience from '../sections/TheExperience.vue';
import { useRouter, useRoute } from 'vue-router';

import { onMounted } from 'vue';

let sectionObserver: any = null;
const router = useRouter();
const route = useRoute();

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
      const sectionId = entry.target.id.length > 0 ? `#${entry.target.id}` : '';
      if (route.name !== null) {
        router.push({
          name: route.name,
          hash: `${sectionId}`,
          params: { savePosition: 'true' },
        });
      }
    }
  }
}

onMounted(() => {
  observeSections();
});
</script>

<template>
  <main>
    <Header />
    <About />
    <Skillset />
    <TheExperience />
    <Work />
  </main>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
