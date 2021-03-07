import '../scss/app.scss';

import './SmoothScroll.js';

import './Lightbox.js';

import './MobileNav.js';

import './Parallax.js';

window.addEventListener('load', () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('preload');
});
