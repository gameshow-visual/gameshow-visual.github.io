// BETA - 03/06/26

// CARTAS - (VIRAR UM / FRENTE / ATRÁS - GERAR)

let ccmax = 0;

function carta(opcao, valor, num) {
    if (opcao == 'virar') {
        if (valor == 'abrir') {
            for (let i = 1; i <= ccmax; i++) {
                setTimeout(() => {
                    var vcarta = document.getElementById("c" + i).style
                    if (vcarta.transform !== "rotateY(180deg)") {
                        vcarta.transform = "rotateY(210deg)"
                        setTimeout(function () {
                            vcarta.transform = "rotateY(180deg)"
                        }, 500)
                    }
                }, 50 * i);
            }
        }
        else if (valor == 'fechar') {
            for (let i = 1; i <= ccmax; i++) {
                setTimeout(() => {
                    var vcarta = document.getElementById("c" + i).style
                    if (vcarta.transform == "rotateY(180deg)") {
                        vcarta.transform = "rotateY(-30deg)"
                        setTimeout(function () {
                            vcarta.transform = "rotateY(0deg)"
                        }, 500)
                    }
                }, 50 * i);
            }
        } else {
            var vcarta = document.getElementById("c" + valor).style
            if (vcarta.transform == "rotateY(180deg)") {
                vcarta.transform = "rotateY(-30deg)"
                setTimeout(function () {
                    vcarta.transform = "rotateY(0deg)"
                }, 500)
            } else {
                vcarta.transform = "rotateY(210deg)"
                setTimeout(function () {
                    vcarta.transform = "rotateY(180deg)"
                }, 500)
            }
        }
    }
    else if (opcao == 'gerar') {
        ccmax = num;
        for (let i = 1; i <= num; i++) {
            var div = document.createElement("div");
            div.setAttribute('pcarta', '')
            div.id = 'cn' + i;
            div.setAttribute('posicao', i)
            div.innerHTML = `<div carta id="c${i}" onclick="carta('virar', ${i});"><div frente ${valor}><div fundo></div><div info id="cfi${i}">${i}</div></div><div atras id="ca${i}" corfundodecarta><div info id="cai${i}"></div></div></div>`
            document.querySelector('[basecartas]').appendChild(div);
        }
    }
}

// ICARTAS (VIRAR UM / FRENTE / ATRÁS - GERAR) - TEMPORARIAMENTE

let icmax = 0;

function icarta(opcao, valor, num) {
    if (opcao == 'virar') {
        if (valor == 'abrir') {
            for (let i = 1; i <= icmax; i++) {
                setTimeout(() => {
                    var vcarta = document.getElementById("ic" + i).style
                    if (vcarta.transform !== "rotateY(180deg)") {
                        vcarta.transform = "rotateY(210deg)"
                        setTimeout(function () {
                            vcarta.transform = "rotateY(180deg)"
                            vcarta.cursor = "no-drop";
                        }, 500)
                    }
                }, 35 * i);
            }
        }
        else if (valor == 'fechar') {
            for (let i = 1; i <= icmax; i++) {
                setTimeout(() => {
                    var vcarta = document.getElementById("ic" + i).style
                    if (vcarta.transform == "rotateY(180deg)") {
                        vcarta.transform = "rotateY(-30deg)"
                        setTimeout(function () {
                            vcarta.transform = "rotateY(0deg)"
                        }, 500)
                    }
                }, 35 * i);
            }
        } else {
            var vcarta = document.getElementById("ic" + valor).style
            if (vcarta.transform == "rotateY(180deg)") {
                vcarta.cursor = "no-drop";
            } else {
                vcarta.transform = "rotateY(210deg)"
                setTimeout(function () {
                    vcarta.transform = "rotateY(180deg)"
                    vcarta.cursor = "no-drop";
                }, 500)
            }
        }
    }
    else if (opcao == 'gerar') {
        icmax = valor;
        for (let i = 1; i <= valor; i++) {
            var div = document.createElement("div");
            div.setAttribute('pcartai', '')
            div.innerHTML = `<div cartai id="ic${i}" onclick="icarta('virar', ${i});"><div capeq frentei="${i}"><div>${i}</div></div><div atrasi="${i}" id="resp${i}"></div>`;
            document.querySelector('[baseicartas]').appendChild(div);
        }
    }
}

// GIRAR A TELA

function girar() {
    const el = document.getElementById('firestick');
    const cartao = document.querySelector('[cartao]');

    if (el.getAttribute('firestick') === 'retrato') {
        el.setAttribute('firestick', '');
        cartao.style.transform = "rotateX(103.9deg)";
    } else {
        el.setAttribute('firestick', 'retrato');
        cartao.style.transform = "rotateX(113deg)";
    }
}

// COR FUNDO
function corfundo(cor = 'preto') {
    let div = document.querySelector('[corfundo]')
    div.style.display = "inline";
    setTimeout(() => {
        if (div.style.opacity == 0) {
            div.setAttribute(cor, '')
            div.style.visibility = "visible"
            div.style.opacity = "0.7"
        } else if (div.style.opacity == 0.7) {
            div.style.visibility = "hidden"
            div.style.opacity = "0"
            setTimeout(() => {
                div.removeAttribute(cor);
                div.style.display = "none";
            }, 500);
        }
    }, 0);
}