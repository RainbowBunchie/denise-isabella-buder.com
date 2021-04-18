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

// const aboutMe = document.getElementsByClassName('about-me')[0];
// const aboutMeHeadline = document.getElementsByClassName('about-me__headline')[0];

// new ScrollMagic.Scene({ triggerElement: aboutMeHeadline })
//     .setClassToggle(aboutMe, 'section--animate') // add class toggle
//     .addTo(controller);



// const aboutMe = document.getElementsByClassName('about-me')[0];
// const aboutMeHeadline = document.getElementsByClassName('about-me__headline')[0];

// new ScrollMagic.Scene({ triggerElement: aboutMeHeadline })
//     .setClassToggle(aboutMe, 'section--animate') // add class toggle
//     .addTo(controller);
