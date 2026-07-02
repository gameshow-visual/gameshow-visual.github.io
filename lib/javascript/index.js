// CARTÃO AMARELO E VERMELHO

let cartaoAberto = false;

function cartao(cor) {
    document.getElementById('cartao').src = "lib/img/util/cartao-" + cor + ".png";

    corfundo(cor);

    const elCartao = document.querySelector('[cartao]');
    const firestick = document.getElementById('firestick');

    if (!cartaoAberto) {

        elCartao.style.display = "flex";
        elCartao.style.visibility = "visible";

        if (firestick.getAttribute('firestick') === 'retrato') {
            elCartao.style.transform = "rotateX(113deg)";
        } else {
            elCartao.style.transform = "rotateX(103.9deg)";
        }

        void elCartao.offsetWidth;

        elCartao.style.opacity = "1";

        setTimeout(() => {
            elCartao.style.transform = "rotateX(0deg)";
        }, 20);

        cartaoAberto = true;

    } else {

        if (firestick.getAttribute('firestick') === 'retrato') {
            elCartao.style.transform = "rotateX(113deg)";
        } else {
            elCartao.style.transform = "rotateX(103.9deg)";
        }

        elCartao.style.opacity = "0";

        setTimeout(() => {
            elCartao.style.visibility = "hidden";
            elCartao.style.display = "none";
        }, 400);

        cartaoAberto = false;
    }
}

// 3 - 2 - 1 - JÁ

    function contagem() {
        corfundo();
        document.getElementById('bcont').disabled = true; // ARRUMAR PARA CONTROLE
        const ccont = document.querySelector('[contagem]');
        const firestick = document.getElementById('firestick');

        if (ccont.style.transform !== "rotateX(0deg)") {
            ccont.style.opacity = "1";
            ccont.style.visibility = "visible";
            ccont.style.display = "flex";
            requestAnimationFrame(() => {
                ccont.style.transform = "rotateX(0deg)";
                document.getElementById('contmao').src = "../lib/img/util/m-3.png";
            });
            setTimeout(() => {
                document.getElementById('contmao').src = "../lib/img/util/m-2.png";
            }, 1000);
            setTimeout(() => {
                document.getElementById('contmao').src = "../lib/img/util/m-1.png";
            }, 2000);
            setTimeout(() => {
                document.getElementById('contmao').style.transform = "scale(0.5)";
                document.getElementById('contmao').src = "../lib/img/util/agora.png";
            }, 3000);
            setTimeout(() => {
                document.getElementById('contmao').style.transition = "all 0.5s ease-in-out";
                document.getElementById('contmao').style.transform = "scale(1)";
                document.getElementById('contmao').style.filter = "drop-shadow(0 0 2px #ffff00) drop-shadow(0 0 3px orange)"
            }, 3050);
            setTimeout(() => {
                ccont.style.opacity = "0";
                ccont.style.visibility = "hidden";
                document.getElementById('bcont').disabled = false; // ARRUMAR PARA CONTROLE
                corfundo();
            }, 5000);
            setTimeout(() => {
                ccont.style.display = "none";
                if (firestick.getAttribute('firestick') === 'retrato') {
                    ccont.style.transform = "rotateX(103.8deg)";
                } else {
                    ccont.style.transform = "rotateX(101.7deg)";
                }
                document.getElementById('contmao').src = "../lib/img/util/m-3.png";
                document.getElementById('contmao').style.transition = "none";
                document.getElementById('contmao').style.filter = "none"
            }, 6000);
        }
    }