<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

interface Props {
  padded?: boolean;
}

const props = defineProps<Props>();
const paddingClass = computed(() => (props.padded ? 'footer--padded' : ''));
</script>
<template>
  <nav class="nav nav--footer footer" :class="paddingClass">
    <div class="footer__links">
      <div class="links__socials socials">
        <a
          class="socials__link"
          href="https://github.com/RainbowBunchie"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/denise-buder-5ab783122/"
          target="_blank"
          class="socials__link"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
        </a>
      </div>
      <RouterLink class="links__link link" to="/data-policy"
        >Datenschutz</RouterLink
      >
      <RouterLink class="links__link link" to="/imprint">Impressum</RouterLink>
    </div>
    <div class="footer__copyright">© 2022 Denise Buder</div>
  </nav>
</template>
<style scoped lang="scss">
@import '../assets/variables.scss';

.footer {
  width: 100vw;
  &__links {
    background-color: $color--primary;
    padding: 7.5rem 0 7.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .link {
      font-family: $font--heading;
      font-size: 1.5rem;
      font-weight: 900;
      text-decoration: none;
      text-transform: uppercase;
      color: $color--secondary;
      transition: all 0.25s ease;
      &:hover {
        color: $color--accent;
      }
    }

    .socials {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1rem;
      &__link {
        transition: all 0.35s ease;

        color: $color--secondary;
        height: 40px;
        &:hover {
          transform: rotate(-45deg);
          color: $color--accent;
        }
        .icon {
          height: 40px;
          width: 40px;
        }
      }
    }
  }
  &__copyright {
    padding: 2rem;
    background-color: $color--secondary;
    text-align: center;
    color: $color--primary;
    font-weight: 900;
  }

  &--padded {
    .footer__links {
      padding: 15rem 0 7.5rem;

      @media only screen and (min-width: $breakpoint--tablet) {
        padding: 14rem 0 7.5rem;
      }

      @media only screen and (min-width: $breakpoint--desktop) {
        padding: 20rem 0 7.5rem;
      }
    }
  }
}
</style>
