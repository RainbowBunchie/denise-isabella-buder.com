<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <nav class="nav nav--footer footer">
    <div class="footer__links">
      <RouterLink to="/data-policy">Data Policy</RouterLink>
      <RouterLink to="/imprint">Imprint</RouterLink>

      <font-awesome-icon :icon="['fab', 'github']" class="icon" />
      <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
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
    height: 400px;
  }
  &__copyright {
    padding: 2rem;
    background-color: $color--secondary;
    text-align: center;
    color: $color--primary;
    font-weight: 900;
  }
}
</style>
