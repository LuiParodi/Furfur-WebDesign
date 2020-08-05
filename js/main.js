/**Menu desplegable <720 < 520 */
document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-lol', {delay: 250});
ScrollReveal().reveal('.lol-banner-one', {delay: 250});
ScrollReveal().reveal('.lol-banner-two', {delay: 250});
