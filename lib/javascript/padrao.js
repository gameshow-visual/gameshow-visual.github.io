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

function fundo(cor = 'preto', modo = 'alternar') {
    const cores = ['amarelo', 'amarela', 'azul', 'verde', 'vermelho', 'vermelha', 'laranja', 'roxo', 'roxa', 'rosa', 'marrom', 'preto', 'preta', 'ciano', 'cinza'];
    const div = document.querySelector('[corfundo]');

    if (modo === 'alternar') {
        modo = getComputedStyle(div).display === 'none'
            ? 'ativar'
            : 'desativar';
    }

    if (modo === 'ativar') {

        cores.forEach(c => div.removeAttribute(c));
        div.setAttribute(cor, '');

        div.style.display = "block";
        div.style.opacity = "0";

        requestAnimationFrame(() => {
            div.style.opacity = "0.3";
        });

    } else if (modo === 'desativar') {

        div.style.opacity = "0";

        setTimeout(() => {
            cores.forEach(c => div.removeAttribute(c));
            div.style.display = "none";
        }, 300);
    }
}

// MISTURAR
const misturar = function (o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


// SUMIR | APARECER | ALTERAR
function sumir(nome) {
    const sumir = document.getElementById(nome).style
    sumir.visibility = 'hidden'
    sumir.opacity = '0'
}

function aparecer(nome) {
    const aparecer = document.getElementById(nome).style
    aparecer.visibility = 'visible'
    aparecer.opacity = '1'
}

function alternar(nome) {
    let div = document.getElementById(nome).style
    if (div.visibility == 'visible') sumir(nome)
    else if (div.visibility == 'hidden') aparecer(nome)
}

// RESPOSTA CERTA OU ERRADA

function resposta(modo) {
    const divresp = document.querySelector('[finalresposta]');
    divresp.setAttribute('finalresposta', modo);
    if (divresp.style.display !== 'flex') {
        divresp.style.display = 'flex';
        if (modo == "certa") {
            divresp.innerHTML = `<div id="certa1"></div><div id="certa2"></div>`;
            fundo('verde');
            const r1 = document.getElementById("certa1");
            const r2 = document.getElementById("certa2");
            requestAnimationFrame(() => {
                r1.classList.add("ativar");
                setTimeout(() => { r2.classList.add("ativar"); }, 150);
            })
        } else if (modo == "errada") {
            divresp.innerHTML = `<div id="errada1"></div><div id="errada2"></div>`;
            fundo('vermelho');
            const r1 = document.getElementById("errada1");
            const r2 = document.getElementById("errada2");
            requestAnimationFrame(() => {
                r1.classList.add("ativar");
                setTimeout(() => { r2.classList.add("ativar"); }, 150);
            })
        }
    } else {
        fundo();
        divresp.style.display = 'none';
        divresp.setAttribute('finalresposta', '');
        divresp.innerHTML = "";
    }
}

// TEMPORIZADOR
let btempint;
let vbtempo;

function tempo(valor) {

    if (document.querySelector('[btempo]').style.transform == 'scale(1)') {
        clearInterval(btempint);
        document.querySelector('[btempo]').style.transform = "scale(0)";
        setTimeout(() => {
            document.querySelector('[btbarra]').remove();
        }, 500);
    } else {
        vbtempo = valor;
        document.querySelector('[btempo]').style.transform = "scale(1)";
        const div = document.createElement('div');
        div.setAttribute("btbarra", "");
        div.setAttribute("style", "--tempo: " + valor + "");
        document.querySelector('[btempo]').appendChild(div);
        document.querySelector('[btempcont]').innerHTML = vbtempo;
        btempint = setInterval(function () {
            --vbtempo;
            document.querySelector('[btempcont]').innerHTML = vbtempo;
            if (vbtempo == 0) {
                document.querySelector('[btbarra]').remove();
                document.querySelector('[btempo]').style.transform = "scale(0)";
                clearInterval(btempint);
            }
        }, 1000);
    }
}

// TEMPORIZADOR VERTICAL
let bvtempint;
let vbvtempo;

function vtempo(valor) {

    if (document.querySelector('[bvtempo]').style.transform == 'scale(1)') {
        clearInterval(bvtempint);
        document.querySelector('[bvtempo]').style.transform = "scale(0)";
        setTimeout(() => {
            document.querySelector('[bvtbarra]').remove();
        }, 500);
    } else {
        v = valor;
        document.querySelector('[bvtempo]').style.transform = "scale(1)";
        const div = document.createElement('div');
        div.setAttribute("bvtbarra", "");
        div.setAttribute("style", "--tempo: " + valor + "");
        document.querySelector('[bvtempo]').appendChild(div);
        document.querySelector('[bvtempcont]').innerHTML = v;
        bvtempint = setInterval(function () {
            --v;
            document.querySelector('[bvtempcont]').innerHTML = v;
            if (v == 0) {
                document.querySelector('[bvtbarra]').remove();
                document.querySelector('[bvtempo]').style.transform = "scale(0)";
                clearInterval(bvtempint);
            }
        }, 1000);
    }
}