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