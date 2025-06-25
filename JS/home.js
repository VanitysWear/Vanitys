document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar')
    const header = document.querySelector('header')

    function onScroll() {
        const headerHeight = header.offsetHeight;
        if (window.scrollY > headerHeight) {
            navbar.classList.add('scrolled'); 
        } else {
            navbar.classList.remove('scrolled')
        }
    }

    window.addEventListener('scroll', onScroll)

    // Menu hambúrguer mobile
    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menuMobile = document.querySelector('.menu-mobile');

    botaoMenu.addEventListener('click', function() {
        menuMobile.classList.toggle('ativo');
    });
});

