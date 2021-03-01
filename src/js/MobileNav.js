const burger = document.getElementsByClassName('navigation--burger')[0];
const nav = document.getElementsByClassName('navigation--mobile')[0];

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('navigation--open');
});
