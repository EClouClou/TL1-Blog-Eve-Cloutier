const burgerOpen = document.querySelector('.overlay--close');

/**
 * @param {boolean} boolean
 */
function openBurgerNav() {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burgerOpen.classList.add('overlay--active');
    })
}

/**
 * @param {boolean} boolean
 */
function closeBurgerNav(){
    const bntCloseBurger = document.querySelector('.burger-nav__btn--close');
    bntCloseBurger.addEventListener('click', () => {
        burgerOpen.classList.remove('overlay--active');
    })
}

openBurgerNav(); 
closeBurgerNav();