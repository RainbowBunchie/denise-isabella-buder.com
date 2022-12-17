<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheProject from '../components/TheProject.vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.section--work',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
    .fromTo('.section--work .headline__text', { top: 100 }, { top: -100 }, 0)
    .fromTo(
      '.section--work .headline__backdrop',
      { top: '25%' },
      { top: '75%' },
      0
    )
    .fromTo('.section--work .container', { top: 100 }, { top: -100 }, 0);
});

const projects = [
  {
    title: 'Turtlet',
    video: 'helpuhelp.webm',
    description: `... ist ein entschleunigender Messaging-Dienst für Web und Smartphones, der dem schnelllebigen Zeitgeist unserer digitalen Gesellschaft entgegenwirkt, indem die gesendeten Nachrichten (so genannten "Turtlets") mehr emotionalen Wert und Individualität verliehen wird. Ähnlich wie bei einem Brief oder einer Postkarte können Turtlets jeweils nur an eine Person gesendet werden und benötigen eine gewisse Zeit, um den Empfänger zu erreichen.`,
    technologies: ['React Native', 'JavaScript', 'Redux'],
    links: [
      {
        text: 'app (registration/login takes a while)',
        url: 'https://turtlet.netlify.app/',
      },
      {
        text: 'more information',
        url: 'https://portfolio.fh-salzburg.ac.at/projects/2020-turtlet',
      },
    ],
    people: [
      {
        name: 'Lukas Seiwald',
        link: 'https://www.linkedin.com/in/lukas-seiwald-969139146/',
      },
      {
        name: 'Sandra Zecha',
        link: 'http://www.sandrazecha.com/',
      },
      {
        name: 'Alexander Tischhart',
      },
    ],
  },
  {
    title: 'SOUL COLLECTORS',
    video: 'helpuhelp.webm',
    description: `...ist ein lokales FFA-Browser-Multiplayer-Spiel, in welchem das eigene Smartphone als Gamepad genutzt wird. 
    Wenn ein Spieler eliminiert wird, erscheint eine Seele über dem toten Körper des Spielers. Das Ziel der anderen Spieler ist 
    es nun, diese Seele einzusammeln und zu ihrer eigenen Basis zurückzubringen. Wenn es einem Spieler gelingt, die Seelen aller 
    gegnerischen Spieler einzusammeln, gewinnt er die Runde.`,
    technologies: ['JavaScript', 'AirConsole', 'Phaser.js'],
    links: [
      {
        text: 'view code',
        url: 'https://github.com/lukasseiwald/MMP3_Buder_Seiwald_Tischhart',
      },
      {
        text: 'more information',
        url: 'https://portfolio.fh-salzburg.ac.at/projects/2019-soul-collectors',
      },
    ],
    people: [
      {
        name: 'Lukas Seiwald',
        link: 'https://www.linkedin.com/in/lukas-seiwald-969139146/',
      },
      {
        name: 'Alexander Tischhart',
      },
    ],
  },
  {
    title: 'Help(u)help',
    video: 'helpuhelp.webm',
    description: `...ist ein Tool, welches Sozialarbeitern dabei hilft, verschiedene Aufgaben für Freiwillige zu organisieren. 
    Administratoren können Aufgaben erstellen, die den registrierten Freiwilligen angezeigt werden. 
    Diese haben nun die Möglichkeit, diese Aufgaben einzusehen und sich für sie zu bewerben. 
    Nach der Bewerbung wählt der Administrator einen der Freiwilligen aus und weist die Aufgabe zu.
   `,
    technologies: ['Web', 'Android App', 'Ruby on rails', 'Java'],
    links: [
      {
        text: 'view code',
        url: 'https://github.com/RainbowBunchie/helpUhelp',
      },
    ],
    people: [
      {
        name: 'Christoph Mayr',
      },
      {
        name: 'Alexander Tischhart',
      },
    ],
  },
  {
    title: 'Cat Curling',
    video: 'helpuhelp.webm',
    description: `...ist ein Browser-Spiel, bei dem man in einem Wohnzimmer mit Katzen Curling spielt! 
    Der Spieler hat nur eine bestimmte Anzahl von Schüssen, um die Katze ins Ziel zu bringen und die bestmögliche Punktzahl zu erreichen. 
    Das Spiel besteht aus fünf Levels mit steigendem Schwierigkeitsgraden.
   `,
    technologies: ['JavaScript', 'Phaser.js', 'Firebase'],
    links: [
      {
        text: 'view website',
        url: 'https://cat-curling.netlify.app/',
      },
      {
        text: 'view code',
        url: 'https://github.com/RainbowBunchie/CatCurling',
      },
    ],
    people: [
      {
        name: 'Alexander Tischhart',
      },
      {
        name: 'Selina Brunner',
      },
    ],
  },
];
</script>

<template>
  <section class="section section--work work" id="work">
    <div class="container">
      <TheHeadline color="rgb(188, 19, 48)" text="Projekte" />
      <TheProject
        v-for="(project, index) in projects"
        :title="project.title"
        :description="project.description"
        :key="project.title"
        :technologies="project.technologies"
        :imagePosition="(index + 1) % 2 === 0 ? 'left' : 'right'"
        :people="project.people"
        :links="project.links"
        :video="project.video"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/variables.scss';

.work {
  padding-top: 7.5rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $color--secondary;
  padding-bottom: 25vh;

  @media only screen and (min-width: $breakpoint--tablet) {
    padding-bottom: 10rem;
  }

  &::before {
    content: '';
    width: 450vw;
    height: 450vw;
    background-color: $color--secondary;
    position: absolute;
    border-radius: 100%;
    top: -7.5vw;
  }
  .container {
    margin-top: -2.5vw;
  }
}
</style>
