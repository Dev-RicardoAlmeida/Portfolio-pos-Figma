import './nav.js';
import './carrossel.js';

const menuFixo = document.querySelector('#menu_Fixo');

function atualizarMenu() {
    menuFixo.classList.toggle('menu--compacto', window.scrollY > 0);
}

window.addEventListener('scroll', atualizarMenu, { passive: true });
window.addEventListener('resize', atualizarMenu);
atualizarMenu();

//função da seta topo
const setaTopo = document.getElementById("seta_Topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 72) {
        setaTopo.classList.add("visivel");
    } else {
        setaTopo.classList.remove("visivel");
    }
});

setaTopo.addEventListener("click", (event) => {
    event.preventDefault();

    // Esconde a seta imediatamente
    setaTopo.classList.remove("visivel");

    // Volta suavemente para o topo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});