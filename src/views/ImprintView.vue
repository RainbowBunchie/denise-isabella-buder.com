<script setup lang="ts">
import Navigation from '../layout/TheSmallNavigation.vue';
import TheHeadline from '../components/TheHeadline.vue';
import Footer from '../layout/TheFooter.vue';
</script>

<template>
  <header>
    <Navigation />
  </header>
  <main>
    <div class="container">
      <TheHeadline text="Impressum" color="rgb(188, 19, 48)"></TheHeadline>
      <div class="text">
        <h2>Betreiberin und Verantwortliche für diese Website</h2>
        <p>
          Denise Buder<br />
          Auer-von-Welsbach-Straße 12<br />
          5020 Salzburg<br />
          Österreich<br />
        </p>
        <br />
        <h2>Kontakt-Information</h2>
        <p>
          E-Mail:
          <a
            href="mailto:d.buder@sbg.at?subject=Denise Buder Portfolio"
            target="_blank"
            >d.buder@sbg.at</a
          ><br />
        </p>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.container {
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
