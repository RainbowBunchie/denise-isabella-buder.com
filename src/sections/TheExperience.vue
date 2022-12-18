<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheAccordion from '../components/TheAccordion.vue';
import TheSubline from '../components/TheSubline.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.section--experience',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
    .fromTo(
      '.section--experience .headline__text',
      { top: 100 },
      { top: -100 },
      0
    )
    .fromTo(
      '.section--experience .headline__backdrop',
      { top: '25%' },
      { top: '75%' },
      0
    )
    .fromTo('.section--experience .container', { top: 50 }, { top: -50 }, 0);
});
const work = [
  {
    title: 'Web-Entwicklerin',
    subtitle: '@Nolimits Digital Business GmbH',
    labelInfo: '2021-now',
    content:
      '<b>Fullstack-Entwicklerin mit Fokus auf Frontend</b> <br>Umsetzung und Betreuung von neuen und bestehenden Projekten mit Schwerpunkt E-Commerce, Server-Infrastruktur, Erstellung von Entwicklungsumgebungen, CI/CD , Durchführen von Code Reviews, Aushilfe bei Design-Aufgaben',
  },
  {
    title: 'Frontend-Entwicklerin',
    subtitle: '@MMCAgenturfür digitale Kommunikation GmbH',
    labelInfo: '2018-2018',
    content:
      '<b>6-monatiges Praktikum</b> <br> Umsetzung und Betreuung des Frontends von bestehenden und neuen Kundenprojekten',
  },
  {
    title: 'Grafik- und Webdesignerin',
    subtitle: '@Raiffeisenbank Salzburg',
    labelInfo: '2015-2015',
    content:
      '<b>4-wöchiges Praktikum</b> <br> Grafische Gestaltung von diversen Printprodukten wie Flyer, Plakate und Booklets, Verwaltung des internen CMS für diverse interne Websites',
  },
  {
    title: 'Grafikdesignerin',
    subtitle: '@nmc Salzburg',
    labelInfo: '2014-2014',
    content:
      '<b>4-wöchiges Praktikum</b> <br> Grafische Gestaltung von diversen Printprodukten wie Flyer, Plakate und Sticker',
  },
];
const education = [
  {
    title: 'Master of Science in Engineering',
    subtitle: '@Fachhochschule Salzburg',
    labelInfo: '2019-2021',
    content: `<b>Studiengang:</b>  MultiMediaTechnology mit Spezialisierung in Web Engineering<br>
              <b>Masterarbeit:</b> “Emotionen in E-Learning-Applikationen: Die Auswirkungen von emotionalem Design auf das Lernerlebnis von Volksschulkindern” <br>
              <b>Abschluss:</b> guter Erfolg mit Gesamtbeurteilung von 1,75 <br>
              <b>Aussercurriculare Aktivitäten:</b> stellvertretende Jahrgangssprechring, Mitorganisation und Co-Moderation der <a href="https://lude.cat/">LudeCat</a>`,
  },
  {
    title: 'Bachelor of Science in Engineering',
    subtitle: '@Fachhochschule Salzburg',
    labelInfo: '2016-2019',
    content: `<b>Studiengang:</b> MultiMediaTechnology mit Spezialisierung in Web Development <br>
              <b>Bachelorarbeit 1:</b> “Erkennen von Depression mit Hilfe von Social Media Mining” <br>
              <b>Bachelorarbeit 2:</b> "Identifizierung im Web durch Gesichts- und Sprechererkennung" <br>
              <b>Abschluss:</b> guter Erfolg mit einer Gesamtbeurteilung von 1,45`,
  },
  {
    title: 'Matura',
    subtitle: '@HTBLuVA Salzburg',
    labelInfo: '2011-2016',
    content: `<b>Schwerpunkt:</b> Grafik- und Kommunikationsdesign
              <b>Abschluss:</b> ausgezeichneter Erfolg`,
  },
];
</script>

<template>
  <section class="section section--experience experience" id="experience">
    <TheHeadline color="#2a2726" text="Erfahrung" />
    <div class="container">
      <TheSubline text="Beruf" color="dark"></TheSubline>
      <TheAccordion :items="work" />
      <TheSubline text="Ausbildung" color="dark"></TheSubline>
      <TheAccordion :items="education" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.experience {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $color--accent;
  padding-bottom: 2.5rem;

  @media only screen and (min-width: $breakpoint--tablet) {
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: $breakpoint--desktop) {
    padding-bottom: 10rem;
  }

  @media only screen and (min-width: $breakpoint--large-desktop) {
    padding-bottom: 15rem;
  }
}
</style>
