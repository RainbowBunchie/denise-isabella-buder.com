import ScrollMagic from 'scrollmagic';

var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onEnter',
    },
});

const revealElements = document.getElementsByClassName('section--work')[0];
const bottomNav = document.getElementsByClassName('navigation--bottom')[0];

new ScrollMagic.Scene({ triggerElement: revealElements })
    .setClassToggle(bottomNav, 'navigation--visible') // add class toggle
    .addTo(controller);
