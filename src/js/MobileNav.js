const burger = document.getElementsByClassName('navigation--burger')[0];
const nav = document.getElementsByClassName('navigation--mobile')[0];
const body = document.getElementsByTagName('body')[0];

const liElements = nav.getElementsByClassName('navigation__item');


burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('navigation--open');
    body.classList.toggle('body--no-scroll');
});

for (const li of liElements) {
    console.log(li);

    li.addEventListener('click', () => {
        burger.classList.toggle('open');
        nav.classList.toggle('navigation--open');
        body.classList.toggle('body--no-scroll');
    });
}

