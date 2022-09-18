<script setup lang="ts">
import TheHeadline from '../components/TheHeadline.vue';
import TheProject from '../components/TheProject.vue';
// interface Project {
//   title: string;
//   description: string;
//   people: { name: string; link?: string }[];
//   imagePosition: string;
// }

const projects = [
  {
    title: 'Turtlet',
    image: '/src/assets/images/iphine.png',
    description:
      'slow media messaging web and app that counters the fast moving zeitgeist of our digital society by giving more emotional value and individualism to its messages (so called ”Turtlets”)',
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
    image: '/src/assets/images/iphone2.png',
    description:
      'a local multiplayer game that runs in the browser with the help of AirConsole and Phaser. The players have a shared screen in the browser window and use their smartphones as gamepads. In Soul Collectors the players play against each other! When a player gets eliminated a soul appears over the dead body of the player. Now the other players goal is to collect that soul and bring it back to their own base. But watch out, if the player gets eliminated while carrying a soul the soul disappears! If a player manages to collect a soul of every enemy player then he wins the round.',
    technologies: ['JavaScript', 'AirConsole', 'Phaser'],
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
    image: '/src/assets/images/iphine.png',
    description:
      'Help(U)Help is a tool designed to help social workers organize different tasks and assign these tasks to specific helpers. Admins can create tasks which will be shown to the registered social workers. These social workers now have the possibility to view tasks and apply for a certain task. After the application an admin has to assign the task to one of the applicants. Then the task will be shown on "Assigned Tasks" for the assigned social worker.',
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
    image: '/src/assets/images/iphone2.png',
    description:
      'Cat Curling is a web game where you do curling in the living room with cats! The player only has a certain amount of shots to get the cat into the goal and get the best score possible. The game consists of five levels with increasing difficulty.',
    technologies: ['JavaScript', 'Phaser'],
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
      <TheHeadline color="#2a2726" text="Projects" />
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
  background-color: $color--accent;
  &::before {
    content: '';
    width: 450vw;
    height: 450vw;
    background-color: $color--accent;
    position: absolute;
    border-radius: 100%;
    top: -7.5vw;
  }
  .container {
    margin-top: -2.5vw;
  }
}
</style>
