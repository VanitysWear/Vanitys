document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar'); // Seleciona a navbar
    const header = document.querySelector('header');  // Seleciona o header

    function onScroll() {
        const headerHeight = header.offsetHeight; // Pega a altura do header
        // Se a rolagem passou da altura do header
        if (window.scrollY > headerHeight) {
            navbar.classList.add('scrolled'); // Adiciona a classe preta
        } else {
            navbar.classList.remove('scrolled'); // Remove, volta a transparente
        }
    }

    window.addEventListener('scroll', onScroll); // Executa ao rolar a página
});