<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { initializePhoneScene } from './phone/initializePhoneScene';
import { animatePhoneScene } from './phone/animatePhoneScene';

interface Props {
  uId: string;
}

const props = defineProps<Props>();

const uId = computed(
  () => `${props.uId.toLowerCase().replace(' ', '')}-three-container`
);

onMounted(() => {
  async function initializeScenes() {
    return initializePhoneScene({ containerClass: uId.value });
  }

  initializeScenes().then((phoneScene) => animatePhoneScene(phoneScene));
});
</script>

<template>
  <div :class="uId"></div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';
</style>
