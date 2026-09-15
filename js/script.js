import './nav.js';
const menuFixo = document.querySelector('#menu_Fixo');

function atualizarMenu() {
    menuFixo.classList.toggle('menu--compacto', window.scrollY > 0);
}

window.addEventListener('scroll', atualizarMenu, { passive: true });
window.addEventListener('resize', atualizarMenu);
atualizarMenu();