
let seq = []

let ttvz = 0;
let vz = 0;
let vvz = 0;
let jvz = 0;

let pontos = 0;

function genius(modo, opcao) {
    switch (modo) {
        case 'iniciar':
            document.getElementById('cxiniciar').disabled = true;

            document.getElementById("pontos").style.color = "white";
            document.getElementById("pontos").textContent = pontos;

            seq.push(prox = Math.floor(Math.random() * (4 - 0) + 1));

            for (let i = 1; i <= 4; i++) {
                document.getElementById("cor" + i).onclick = function () { genius('botao', i) };
            }

            setTimeout(() => {
                genius('emitir');
            }, 500);
            break;

        case 'emitir':
            for (let i = 1; i <= 4; i++) {
                document.querySelector('[corsimon="' + i + '"]').onclick = function () { };
            }
            document.querySelector('[corsimon="' + seq[vvz] + '"]').setAttribute('luz', '')
            setTimeout(() => {
                document.querySelector('[corsimon="' + seq[vvz] + '"]').removeAttribute('luz')
            }, 400);

            setTimeout(() => {
                if (ttvz == vvz) {
                    for (let i = 1; i <= 4; i++) {
                        document.querySelector('[corsimon="' + i + '"]').onclick = function () { genius('botao', i) };
                    }
                }
                else {
                    vvz++
                    genius('emitir');
                }
            }, 600);
            break;

        case 'botao':
            for (let i = 1; i <= 4; i++) {
                document.getElementById("cor" + i).onclick = function () { };
            }
            document.querySelector('[corsimon="' + opcao + '"]').setAttribute('luz', '')

            setTimeout(() => {
                document.querySelector('[corsimon="' + opcao + '"]').removeAttribute('luz');
            }, 400);

            if (opcao == seq[jvz]) {

                if (jvz == vz) {
                    genius('acertou'); // continua desativado
                } else {
                    jvz++;

                    setTimeout(() => {
                        for (let i = 1; i <= 4; i++) {
                            document.getElementById("cor" + i).onclick = function () {
                                genius('botao', i);
                            };
                        }
                    }, 400);
                }

            } else {
                genius('errou');
            }
            break;
        case 'proximo':
            jvz = 0;
            vvz = 0;
            seq.push(prox = Math.floor(Math.random() * (4 - 0) + 1));
            genius('emitir');
            break;
        case 'errou':
            document.getElementById("pontos").style.color = "red";
            for (let j = 0; j < 6; j++) {
                setTimeout(() => {
                    for (let i = 1; i <= 4; i++) {
                        document.querySelector('[corsimon="' + i + '"]').setAttribute('luz', '');
                        document.querySelector('[corsimon="' + i + '"]').disabled = true;
                    }
                }, j * 500);

                setTimeout(() => {
                    for (let i = 1; i <= 4; i++) {
                        document.querySelector('[corsimon="' + i + '"]').removeAttribute('luz');
                    }
                }, j * 500 + 250);
            }
            setTimeout(() => {
                document.getElementById('cxiniciar').disabled = false;
            }, 3500);

            seq = []
            ttvz = 0;
            vz = 0;
            vvz = 0;
            jvz = 0;
            pontos = 0;

            break;
        case 'acertou':
            for (let i = 1; i <= 4; i++) {
                document.getElementById("cor" + i).onclick = function () { };
            }
            pontos++;
            const el = document.getElementById("pontos");
            el.textContent = pontos;

            // Reinicia a animação
            el.classList.remove("ganhou");
            void el.offsetWidth;
            el.classList.add("ganhou");

            console.log('ACERTOU')

            ttvz++;
            vz++;

            setTimeout(() => {
                genius('proximo');
            }, 2000);
            break;
    }
}
