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
    image: 'iphine.png',
    description:
      '… is a slow media messaging web and app that counters the fast moving zeitgeist of our digital society by giving more emotional value and individualism to its messages (so called ”Turtlets”). Similar to a letter or postcard, Turtlets can only be sent to one person at a time and take a certain amount of time to reach the recipient. ',
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
    image: 'iphone2.png',
    description:
      '…is a local browser multiplayer game. The players have a shared screen in the browser window and use their smartphones as gamepads. In Soul Collectors the players play against each other! When a player gets eliminated a soul appears over the dead body of the player. Now the other players goal is to collect that soul and bring it back to their own base. If a player manages to collect a soul of every enemy player then he wins the round.',
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
    image: 'iphine.png',
    description:
      '…is a tool designed to help social workers organize different tasks for volunteers. Admins can create tasks which will be shown to the registered social workers. These social workers now have the possibility to view these tasks and apply for them. After the application an admin has choose one one of the wokers. This project has a webpage and an Android app.',
    technologies: ['Ruby on rails', 'Java'],
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
    image: 'iphone2.png',
    description:
      '…is a web game where you do curling in the living room with cats! The player only has a certain amount of shots to get the cat into the goal and get the best score possible. The game consists of five levels with increasing difficulty.',
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
      <TheHeadline color="rgb(188, 19, 48)" text="Projects" />
      <TheProject
        v-for="(project, index) in projects"
        :title="project.title"
        :description="project.description"
        :key="project.title"
        :technologies="project.technologies"
        :imagePosition="(index + 1) % 2 === 0 ? 'left' : 'right'"
        :people="project.people"
        :links="project.links"
        :image="project.image"
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
