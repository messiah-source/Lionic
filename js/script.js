// Burger menu

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.header__item-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__menu--active');
    menu.style.transition = 'visibility .3s ease-in-out, transform .3s ease-in-out';
    document.body.classList.toggle('stop-scroll');
})

menu.addEventListener('transitionend', function() {
    if (!menu.classList.contains('header__menu--active')) {
        menu.removeAttribute('style');
    }
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', () => {
        burger.classList.remove('header__burger--active');
        menu.classList.remove('header__menu--active');
        document.body.remove('stop-scroll');
    })
})

// Button more articles

let btnMore = document.querySelector('.articles__block-more');
let articlesItem = document.querySelectorAll('.articles__article');

btnMore.addEventListener('click', () => {
    articlesItem.forEach(el => { el.classList.add('articles__article--visible') });
    btnMore.closest('.articles__block-more').classList.add('articles__block-more--hidden');
})
