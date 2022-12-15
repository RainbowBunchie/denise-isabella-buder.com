<script setup lang="ts">
import { computed } from 'vue';
import TheHashtag from './TheHashtag.vue';
import ThePhone from './ThePhone.vue';

interface Props {
  title: string;
  description: string;
  imagePosition: string;
  technologies?: string[];
  people: { name: string; link?: string }[];
  links?: { text: string; url?: string }[];
  image: string;
}

const props = defineProps<Props>();
const flexDirection = computed(() =>
  props.imagePosition == 'right' ? 'row-reverse' : 'row'
);
const imgUrl = computed(() =>
  new URL(`../assets/images/${props.image}`, import.meta.url).toString()
);
</script>

<template>
  <div class="project">
    <div class="project__img">
      <ThePhone :uId="props.title" />
    </div>
    <div class="project__info info">
      <h3>{{ props.title }}</h3>
      <p class="info__description description">
        {{ props.description }}
      </p>
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
      <template :key="link.url" v-for="link in links">
        <a target="_blank" class="info__link link" :href="link.url">{{
          link.text
        }}</a>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.project {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media only screen and (min-width: $breakpoint--desktop) {
    margin-top: 7rem;
    gap: 10rem;
    flex-direction: v-bind(flexDirection);
  }

  &:nth-child(2) {
    margin-top: 0;
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
      background-color: $color--accent;
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
      margin-bottom: 1.5rem;
    }

    .link {
      font-size: 1.125rem;
      font-weight: 900;
      text-decoration: none;
      color: $color--primary;
      font-style: italic;
      padding-left: 32px;
      transition: all 0.25s ease-in-out;

      &::before {
        content: '';
        width: 25px;
        height: 4px;
        background-color: $color--primary;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) skew(-12deg);
        transition: all 0.25s ease-in-out;
      }

      &:hover {
        padding-left: 65px;
        &::before {
          width: 55px;
        }
      }
    }

    .people-tags,
    .technologies {
      margin-top: 0.25rem;
      display: flex;
      flex-wrap: wrap;
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
