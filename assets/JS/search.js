/** Tu t'ais compliqué la vie. Seule la classe du container parent peu te permettre de modifier l'affichage de te ton mode.  */
const inputSearch = document.querySelector('.search');
const articleList = document.querySelectorAll('.article-list');
const listVue = document.querySelectorAll('.list-vue');
const articleVue = document.querySelectorAll('.article-vue');

const cards = [
    ...articleList,
    ...listVue,
    ...articleVue,
]

/**
 * @param {boolean} boolean
 */
inputSearch.addEventListener('input', (e) => {
    let matchingCardsCount = 0;

    cards.forEach(card => {

        let searchString = card.getAttribute('data-search').toLowerCase();
    
        if (searchString.includes(inputSearch.value.toLowerCase())){
            card.classList.remove('hidden');
            matchingCardsCount++;
        } else {
            card.classList.add('hidden');
        }
    
        /** Petite erreur d'indentation */
    document.querySelector('.result-count').textContent = matchingCardsCount;
    });
});