export function initShowMenu() {
    const btnShowMenu = document.querySelector('.header__btnMenu');
    const menuSidebar = document.querySelector('.header__list');

    function abrirMenu(event) {

        // TIRAR OS PADRÕES 
        if (event.type === "touchstart") event.preventDefault();

        menuSidebar.classList.toggle('ativado');

        btnShowMenu.classList.toggle('ativado');

        // TRUE E FALSE
        const ativado = btnShowMenu.classList.contains('ativado');

        event.currentTarget.setAttribute('aria-expanded', ativado);

        if (ativado) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }

    }

    btnShowMenu.addEventListener('click', abrirMenu);
    btnShowMenu.addEventListener('touchstart', abrirMenu);
    window.addEventListener('resize', () => {
        menuSidebar.classList.remove('ativado');
        btnShowMenu.classList.remove('ativado');
    });
}