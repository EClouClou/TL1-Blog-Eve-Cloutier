const detailsContainer = document.querySelector('.modal');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

/**
 * @param {Array} Array
 */
document.querySelectorAll('.btn-details').forEach(button => {
    button.addEventListener('click', event => {
        const articleTitle = event.target.getAttribute('data-article');
        const article = articles.find(art => art.title === articleTitle);

        modalContent.innerHTML = '';

        const detailsHtml = article.toHtml();
        modalContent.appendChild(detailsHtml);

        modal.classList.add('open');
    });
});

/**
 * @param {boolean} boolean
 */
modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
});

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.classList.remove('open');
    }
});