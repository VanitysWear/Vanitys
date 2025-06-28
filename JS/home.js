document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar')
    const header = document.querySelector('header')
    const hamburguer = document.querySelector('.menu-hamburguer');

    function onScroll() {
        const headerHeight = header.offsetHeight;
        if (window.scrollY > headerHeight) {
            navbar.classList.add('scrolled'); 
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll)



    // Menu hambúrguer mobile
    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menuMobile = document.querySelector('.menu-mobile');

    botaoMenu.addEventListener('click', function() {
        menuMobile.classList.toggle('ativo');
    });

    // Fecha o menu mobile ao clicar fora dele
    document.addEventListener('click', function(event) {
        const menuMobile = document.querySelector('.menu-mobile');
        const botaoMenu = document.querySelector('.menu-hamburguer');
        if (
            menuMobile.classList.contains('ativo') &&
            !menuMobile.contains(event.target) &&
            !botaoMenu.contains(event.target)
        ) {
            menuMobile.classList.remove('ativo');
        }
    });
});

