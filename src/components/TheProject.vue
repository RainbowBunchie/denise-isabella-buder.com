<script setup lang="ts">
import { computed } from 'vue';
import TheHashtag from './TheHashtag.vue';

interface Props {
  title: string;
  description: string;
  imagePosition: string;
  technologies?: string[];
  people: { name: string; link?: string }[];
  links?: { text: string; url?: string }[];
  video: string;
  isPhone: boolean;
}

const props = defineProps<Props>();
const flexDirection = computed(() =>
  props.imagePosition == 'right' ? 'row-reverse' : 'row'
);
const videoUrl = computed(() =>
  new URL(`../assets/videos/${props.video}`, import.meta.url).toString()
);
const videoClass = computed(() =>
  props.isPhone == true ? 'project--phone' : 'project--tablet'
);
</script>

<template>
  <div class="project" :class="videoClass">
    <div class="project__video video" :class="videoClass">
      <video autoplay loop muted playsinline>
        <source :src="videoUrl" type="video/webm" />
        Dein Browser unterstützt keine Videos.
      </video>
    </div>
    <div class="project__info info">
      <h3>{{ props.title }}</h3>
      <p class="info__description description">
        {{ props.description }}
      </p>
      <h4 class="info__subline">Verwendete Technologien</h4>
      <div class="info__technologies technologies">
        <TheHashtag
          :key="technology"
          v-for="technology in props.technologies"
          :text="technology"
        />
      </div>
      <h4 class="info__subline">Mitwirkende</h4>
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
  gap: 3rem;
  margin-top: 8rem;
  width: 100%;

  @media only screen and (min-width: $breakpoint--tablet) {
    gap: 4rem;
  }
  @media only screen and (min-width: $breakpoint--desktop) {
    margin-top: 7rem;
    flex-direction: v-bind(flexDirection);
  }

  @media only screen and (min-width: $breakpoint--large-desktop) {
    gap: 10rem;
  }

  &:nth-child(2) {
    margin-top: 0;
  }
  .video {
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;

    @media only screen and (min-width: $breakpoint--desktop) {
      width: 35%;
    }

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: $color--accent;
      width: 70vw;
      height: 70vw;
      border-radius: 100%;

      @media only screen and (min-width: $breakpoint--tablet) {
        width: 50vw;
        height: 50vw;
      }

      @media only screen and (min-width: $breakpoint--desktop) {
        width: 430px;
        height: 430px;
      }

      @media only screen and (min-width: $breakpoint--large-desktop) {
        width: 470px;
        height: 470px;
      }
    }
    .img__image {
      height: 480px;
      width: auto;
    }
  }

  video {
    object-fit: contain;
    min-width: 100%;
    min-height: 60%;
  }

  &--phone {
    @media only screen and (min-width: $breakpoint--tablet) {
      gap: 5rem;
    }

    @media only screen and (min-width: $breakpoint--desktop) {
      gap: 4rem;
    }

    @media only screen and (min-width: $breakpoint--large-desktop) {
      gap: 5rem;
    }
    .video {
      width: 50vw;
      @media only screen and (min-width: $breakpoint--tablet) {
        width: 30vw;
      }
      @media only screen and (min-width: $breakpoint--desktop) {
        width: 25%;
      }
    }

    video {
      min-width: 70%;
    }
  }
  &--tablet {
    video {
      min-width: 80vw;
      @media only screen and (min-width: $breakpoint--tablet) {
        min-width: 150%;
      }
      @media only screen and (min-width: $breakpoint--desktop) {
        min-width: 110%;
      }

      @media only screen and (min-width: $breakpoint--large-desktop) {
        min-width: 150%;
      }
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
