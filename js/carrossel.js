const carrossel = document.querySelector('.carrossel_Projetos_Section');

const itens = document.querySelectorAll('.carrossel_Projetos_Item');

const botaoEsquerda = document.querySelector(
    '#carrossel_Projetos_Section_Navegador_Esquerda'
);

const botaoDireita = document.querySelector(
    '#carrossel_Projetos_Section_Navegador_Direita'
);

const estilo = getComputedStyle(carrossel);
const gap = parseFloat(estilo.gap);

const passo = itens[0].offsetWidth + gap +50;


botaoEsquerda.addEventListener('click', () => {
    carrossel.scrollBy({
        left: -passo,
        behavior: 'smooth'
    });
});

botaoDireita.addEventListener('click', () => {
    carrossel.scrollBy({
        left: passo,
        behavior: 'smooth'
    });
});