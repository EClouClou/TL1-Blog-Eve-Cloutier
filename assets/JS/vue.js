const articlesContainer = document.querySelectorAll('.article-container');
const articlesList = document.querySelectorAll('.article-list');
const textsContainer = document.querySelectorAll('.text-container');
const btnVue = document.querySelector('.grid-vue');
const articlesImg = document.querySelectorAll('.article-img');

/**
 * @param {boolean} boolean
 */
    btnVue.addEventListener('click', () => {

        articlesContainer.forEach((articleContainer) => {
            articleContainer.classList.toggle('list-vue');
            articleContainer.classList.toggle('article-container');
        });

        articlesList.forEach((articleList) => {
            articleList.classList.toggle('article-vue');
            articleList.classList.toggle('article-list');
        });

        textsContainer.forEach((textContainer) => {
            textContainer.classList.toggle('vue');
            textContainer.classList.toggle('text-container');
        });

        articlesImg.forEach((articleImg) => {
            articleImg.classList.toggle('vue-img');
            articleImg.classList.toggle('article-img');
        });
})
