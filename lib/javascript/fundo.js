const lista = document.querySelector('[fundo]');

const logo = 'lib/img/logo/logo.svg';
const quantidade = 18;

function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

function criarLogo() {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.src = logo;
    img.alt = '';

    li.appendChild(img);
    lista.appendChild(li);

    animarLogo(li);
}

function animarLogo(li) {

    // Valores aleatórios a cada subida
    const tamanho = aleatorio(25, 150);
    const duracao = aleatorio(8, 30);
    const rotacao = aleatorio(180, 1440)
        * (Math.random() < 0.5 ? -1 : 1);

    const opacidade = aleatorio(0.2, 0.2);
    const posicao = aleatorio(0, 100);
    const deslocamento = aleatorio(-250, 250);
    const inclinacao = aleatorio(-30, 30);

    // Configura o tamanho e a posição
    li.style.width = `${tamanho}px`;
    li.style.height = `${tamanho}px`;
    li.style.left = `${posicao}%`;
    li.style.bottom = `${-tamanho}px`;

    li.style.setProperty('--duracao', `${duracao}s`);
    li.style.setProperty('--opacidade', opacidade);

    // Remove a animação anterior
    li.style.animation = 'none';

    // Define um novo movimento aleatório
    li.style.setProperty(
        '--x-inicial',
        `${inclinacao}px`
    );

    li.style.setProperty(
        '--x-final',
        `${deslocamento}px`
    );

    li.style.setProperty(
        '--rotacao',
        `${rotacao}deg`
    );

    // Reinicia a animação
    void li.offsetWidth;

    li.style.animation =
        `flutuar ${duracao}s linear 0s 1 both`;

    // Quando terminar, sorteia tudo novamente
    li.onanimationend = () => {
        animarLogo(li);
    };
}

// Cria as logos iniciais
for (let i = 0; i < quantidade; i++) {
    criarLogo();
}