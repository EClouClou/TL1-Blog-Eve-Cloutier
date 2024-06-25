/** Je ne crois pas que ce code ait une impacte sur ton programme. */

const burgerOpen = document.querySelector('.overlay--close');

/** le js doc n'est pas exact la fonction n'a aucun param voici un exemple de ce qui etait attendu */

/**
 * @function openBurgerNav
 * @returns {void}
 */
function openBurgerNav() {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burgerOpen.classList.add('overlay--active');
        /** Il te manque un ; */
    })
}

/** Meme chose ici */

/**
 * @param {boolean} boolean
 */
function closeBurgerNav(){
    const bntCloseBurger = document.querySelector('.burger-nav__btn--close');
    bntCloseBurger.addEventListener('click', () => {
        burgerOpen.classList.remove('overlay--active');
        /** Il te manque un ; */
    })
}

openBurgerNav(); 
closeBurgerNav();