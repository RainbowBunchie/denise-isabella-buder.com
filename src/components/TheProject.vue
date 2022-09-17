<script setup lang="ts">
import { computed } from 'vue';
import TheHashtag from './TheHashtag.vue';

interface Props {
  title: string;
  description: string;
  imagePosition: string;
  technologies?: string[];
  people: { name: string; link?: string }[];
}

const props = defineProps<Props>();
console.log(props.technologies);

const flexDirection = computed(() =>
  props.imagePosition == 'right' ? 'row-reverse' : 'row'
);
</script>

<template>
  <div class="project">
    <div class="project__img img">
      <img class="img__image" src="../assets/images/iphine.png" />
    </div>
    <div class="project__info info">
      <h3>{{ props.title }}</h3>
      <p>
        {{ props.description }}
      </p>
      <p>links go here</p>
      <h4 class="info__subline">Technologies used</h4>
      <div class="info__technologies technologies">
        <TheHashtag
          :key="technology"
          v-for="technology in props.technologies"
          :text="technology"
        />
      </div>
      <h4 class="info__subline">People I worked with</h4>
      <div class="info__people-tags people-tags">
        <TheHashtag
          :key="person.name"
          v-for="person in people"
          :text="person.name"
          :link="person.link"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.project {
  margin-top: 7.5rem;
  display: flex;
  gap: 10rem;
  flex-direction: v-bind(flexDirection);
  &:nth-child(3) {
    margin-top: 7.5rem;
  }
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
    .people-tags {
      margin-top: 0.5rem;
      display: flex;
      gap: 0.5rem;
    }

    .people-tags,
    .technologies {
      margin-top: 0.25rem;
      display: flex;
      gap: 0.5rem;
    }
  }
  .info__subline {
    font-weight: bold;
    margin-top: 1.5rem;
    font-size: 1.125rem;
  }
}
</style>
