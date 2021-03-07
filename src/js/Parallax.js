// import * as basicScroll from 'basicscroll';

// const parralaxElements = document.querySelectorAll('.parallax');

// console.log(parralaxElements)

// for (const parralaxElement of parralaxElements) {
//     const from = parralaxElement.getAttribute('data-from') || '0px';
//     const to = parralaxElement.getAttribute('data-to') || '100px';
//     const timing = parralaxElement.getAttribute('data-timing') || 'linear';
//     const instance = basicScroll.create({
//         elem: parralaxElement,
//         from: 'top-middle',
//         to: 'top-top',
//         direct: false,
//         inside: (instance, percentage, props) => {
//             console.log('viewport is inside from and to')
//         },
//         outside: (instance, percentage, props) => {
//             console.log('viewport is outside from and to')
//         },
//         props: {
//             '--ty': {
//                 from,
//                 to,
//                 timing,
//
//             },
//         },
//     });
//     instance.start();
// }
