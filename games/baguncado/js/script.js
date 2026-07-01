

let max = 0;
let img = [];
let pasta = [];
let mem = [];
let sSel = [{ imagem: false, posicao: false }];
let vSel = [{ imagem: [], posicao: [] }];

// const pbaseX = ['', -63, 63];
// const pbaseY = ['', -189, -63, 63, 189];

// const pbaseX = ['', -63, 63];
// const pbaseY = ['', -169, -43, 83, 209];

// const pselX = ['', -662, -537, -412, -287];
// const pselY = ['', -50, 215];

const pbaseX = ['', -63, 63];
const pbaseY = ['', -189, -63, 63, 189];

const pselX = ['', -662, -537, -412, -287];
const pselY = ['', -70, 195];

const coordX = ['', 1, 2, 3, 4, 1, 2, 3, 4];
const coordY = ['', 1, 1, 1, 1, 2, 2, 2, 2];

const coord2X = ['', 1, 2, 1, 2, 1, 2, 1, 2];
const coord2Y = ['', 1, 1, 2, 2, 3, 3, 4, 4];

let selnum = true;

let sValores = ['', { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }]
let cola = false;
let fValores = ['', false, false, false, false, false, false, false, false];
let ncola = [1, 2, 3, 4, 5, 6, 7, 8];
let imagens = [1, 2, 3, 4, 5, 6, 7, 8];
let xcola = [];

let acertos = 0;

let galeria = [];

function iniciar() {
    var hash = location.hash
    switch (hash) {
        case '#normal':
            baguncado('config', 'galeria', 'normal');
            break
        case '#uy-esporte':
            baguncado('config', 'galeria', 'esporte');
            break
        case '#uy-lugar':
            baguncado('config', 'galeria', 'lugar');
            break
        case '#uy-rotina':
            baguncado('config', 'galeria', 'rotina');
            break
        case '#uy-roupa':
            baguncado('config', 'galeria', 'roupa');
            break
        case '#uy-trabalho':
            baguncado('config', 'galeria', 'trabalho');
            break
        default:
            baguncado('config', 'galeria', 'normal');
            break
    }
}

function baguncado(modo, opcao, valor) {
    if (modo == 'cartas') {
        for (let i = 1; i <= 8; i++) {
            setTimeout(() => {
                var vcarta = document.getElementById("c" + i).style
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
            }, 50 * i);
        }
    }
    else if (modo == 'gerar') {
        sValores = ['', { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }, { img: [], mem: [] }]
        fValores = ['', false, false, false, false, false, false, false, false];
        xcola = [];
        imagens = [1, 2, 3, 4, 5, 6, 7, 8];
        ncola = [1, 2, 3, 4, 5, 6, 7, 8];
        acertos = 0;
        pasta = Math.floor(Math.random() * 59) + 1;
        mem = [];
        misturar(img);
        for (let i = 0; i <= 7; i++) {
            mem.push(img[i]);
            document.getElementById('cim' + [i + 1]).src = "../../lib/img/galeria/" + pasta + "/" + mem[i] + ".png"
            document.getElementById('imgcx' + [i + 1]).src = "../../lib/img/galeria/" + pasta + "/" + mem[i] + ".png"
        }
    }
    else if (modo == 'iniciar') {
        baguncado('cartas');
        aparecer('protimg');
        document.getElementById("modo").disabled = true;
        document.getElementById("botacao").disabled = true;
        document.getElementById("botacao").textContent = "REINICIAR";
        document.getElementById("botacao").removeAttribute('verde');
        document.getElementById("botacao").onclick = function () { baguncado('reiniciar') }
        setTimeout(() => {
            for (let i = 1; i <= 8; i++) {
                document.getElementById("cxselimg" + i).style.transform = "translate(" + pselX[coordX[i]] + "px, " + pselY[coordY[i]] + "px)"
            }
        }, 500);
        setTimeout(() => {
            for (let i = 1; i <= 8; i++) {
                aparecer('cxselimg' + i);
            }
        }, 1000);
        setTimeout(() => {
            tempo(5);
        }, 1250);
        setTimeout(() => {
            baguncado('cartas');
        }, 6500);
        setTimeout(() => {
            for (let i = 1; i <= 8; i++) {
                setTimeout(() => {
                    document.getElementById("cxselimg" + i).style.transform = "translate(" + pbaseX[coord2X[i]] + "px, " + pbaseY[coord2Y[i]] + "px)"
                }, i * 30);
            }
        }, 7000);
        setTimeout(() => {
            baguncado('misturar');
        }, 7500);
        setTimeout(() => {
            for (let i = 1; i <= 8; i++) {
                document.getElementById('cxselimg' + i).style.cursor = "pointer";
                document.getElementById('sel' + i).setAttribute('cxsel', 'selecionar');
                document.getElementById('sel' + i).onclick = function () { baguncado('selecionar', 'box', i) }
            }
        }, 8000);
        setTimeout(() => {
            for (let i = 1; i <= 8; i++) {
                sumir('cxp' + i);
            }
            sumir('protimg');
        }, 12500);
    }
    else if (modo == 'organizar') {
        for (let i = 1; i <= 8; i++) {
            setTimeout(() => {
                document.getElementById("cxselimg" + i).style.transform = "translate(" + pbaseX[coordX[i]] + "px, " + pbaseY[coordY[i]] + "px)"
            }, i * 30);
        }
    }
    else if (modo == 'colar') {
        enviar('controle', `botao('desativar', 'botcolar')`);
        misturar(ncola);
        xcola = Math.floor(Math.random() * 1) + 1;
        // console.log(xcola);
        for (let i = 0; i <= xcola; i++) {
            setTimeout(() => {
                document.getElementById("c" + ncola[i]).style.transform = "rotateY(210deg)"
                setTimeout(() => {
                    document.getElementById("c" + ncola[i]).style.transform = "rotateY(180deg)"
                }, 500)
            }, 750 * i);
        }
    }
    else if (modo == 'selecionar') {
        if (opcao == 'box') {
            for (let i = 1; i <= 8; i++) {
                if (valor != i) {
                    document.getElementById('sel' + i).setAttribute('cxsel', 'selecionar');
                    document.getElementById('sel' + i).onclick = function () { baguncado('selecionar', 'box', i) }
                }
                document.getElementById('sel' + valor).setAttribute('cxsel', 'selecionado');
                document.getElementById('sel' + valor).onclick = function () { }
            }
            sSel[0].posicao = true;
            vSel[0].posicao = valor;
        }
        if (opcao == 'img') {
            for (let i = 1; i <= 8; i++) {
                if (valor != i) {
                    document.getElementById('cxselimg' + i).setAttribute('cxselimg', 'selecionar');
                    document.getElementById('cxselimg' + i).onclick = function () { baguncado('selecionar', 'img', i) }
                }
                document.getElementById('cxselimg' + valor).setAttribute('cxselimg', 'selecionado');
                document.getElementById('cxselimg' + valor).onclick = function () { }
            }
            sSel[0].imagem = true;
            vSel[0].imagem = valor;
            fValores[vSel[0].imagem] = true;
        }
        if (sSel[0].posicao == true && sSel[0].imagem == true) {
            aparecer('protimg');
            document.getElementById("cxselimg" + vSel[0].imagem).style.transform = "translate(" + pselX[coordX[vSel[0].posicao]] + "px, " + pselY[coordY[vSel[0].posicao]] + "px)"
            document.getElementById('cxselimg' + vSel[0].imagem).style.cursor = "no-drop";
            document.getElementById('cxselimg' + vSel[0].imagem).onclick = function () { }
            document.getElementById('cxselimg' + vSel[0].imagem).setAttribute('cxselimg', '');
            setTimeout(() => {
                document.getElementById('cxselimg' + vSel[0].imagem).style.backgroundColor = "transparent";
            }, 500);

            document.getElementById('sel' + vSel[0].posicao).setAttribute('cxsel', '');
            document.getElementById('sel' + vSel[0].posicao).onclick = function () { };
            sumir('txt' + vSel[0].posicao);
            aparecer('cxp' + vSel[0].posicao);

            sValores[vSel[0].posicao].img = mem[vSel[0].imagem - 1];
            sValores[vSel[0].posicao].mem = mem[vSel[0].posicao - 1];

            setTimeout(() => {
                sSel[0].posicao = false;
                vSel[0].posicao = [];
                sSel[0].imagem = false;
                vSel[0].imagem = [];
                if (fValores[1] == true && fValores[2] == true && fValores[3] == true && fValores[4] == true && fValores[5] == true && fValores[6] == true && fValores[7] == true && fValores[8] == true) {
                    setTimeout(() => {
                        baguncado('checar');
                        aparecer('carregar');
                    }, 150);
                }
                sumir('protimg');
            }, 1000);
        }
    }
    else if (modo == 'misturar') {
        for (let m = 1; m <= 8; m++) {
            setTimeout(() => {
                misturar(imagens);
                for (let i = 1; i <= 8; i++) {
                    document.getElementById("cxselimg" + i).style.transform = "translate(" + pbaseX[coord2X[imagens[i - 1]]] + "px, " + pbaseY[coord2Y[imagens[i - 1]]] + "px)"
                }
            }, m * 500);
        }
        setTimeout(() => {
            for (let i = 1; i <= 8; i++) {
                setTimeout(() => {
                    aparecer('txt' + i);
                }, i * 30);
            }
        }, 4500);
        setTimeout(() => {
            for (let i = 1; i <= 8; i++) {
                document.getElementById('cxselimg' + i).setAttribute('cxselimg', 'selecionar');
                document.getElementById('sel' + i).setAttribute('cxsel', 'selecionar');

                document.getElementById('cxselimg' + i).onclick = function () { baguncado('selecionar', 'img', i) }
                document.getElementById('sel' + i).onclick = function () { baguncado('selecionar', 'box', i) }
            }
        }, 5000);
    }
    else if (modo == 'checar') {
        aparecer('protimg');
        document.getElementById("acertos").style.display = "flex";
        for (let i = 1; i <= 8; i++) {
            document.getElementById('cxselimg' + i).style.cursor = "no-drop";
            document.getElementById('cxselimg' + i).onclick = function () { }
            document.getElementById('cxselimg' + i).setAttribute('cxselimg', '');
            if (document.getElementById("c" + i).style.transform == "rotateY(180deg)") {
                setTimeout(() => {
                    if (sValores[i].img == sValores[i].mem) {
                        document.getElementById('sel' + i).setAttribute('verde', '');
                        document.getElementById('carta' + i).setAttribute('verde', '');
                        baguncado('acertou');

                    } else {
                        document.getElementById('sel' + i).setAttribute('vermelho', '');
                        document.getElementById('carta' + i).setAttribute('vermelho', '');
                    }
                }, i * 750);
            }
            else {
                setTimeout(() => {
                    document.getElementById("c" + i).style.transform = "rotateY(210deg)"
                    setTimeout(() => {
                        document.getElementById("c" + i).style.transform = "rotateY(180deg)"
                    }, 500)
                    setTimeout(() => {
                        if (sValores[i].img == sValores[i].mem) {
                            document.getElementById('sel' + i).setAttribute('verde', '');
                            document.getElementById('carta' + i).setAttribute('verde', '');
                            baguncado('acertou');

                        } else {
                            document.getElementById('sel' + i).setAttribute('vermelho', '');
                            document.getElementById('carta' + i).setAttribute('vermelho', '');
                        }
                    }, 750);
                }, i * 750);
            }
        }
        setTimeout(() => {
            document.getElementById("modo").disabled = false;
            document.getElementById("botacao").disabled = false;
            document.getElementById("botacao").textContent = "REINICIAR";
            document.getElementById("botacao").setAttribute('laranja', '');
            sumir('carregar');
            sumir('protimg');
        }, 7000);
    }
    else if (modo == 'reiniciar') {
        document.getElementById("botacao").textContent = "INICIAR";
        document.getElementById("botacao").removeAttribute('laranja');
        document.getElementById("botacao").setAttribute('verde', '');
        document.getElementById("botacao").onclick = function () { baguncado('iniciar') }
        document.getElementById("acertos").style.display = "none";
        for (let i = 1; i <= 8; i++) {
            document.getElementById('cxselimg' + i).style.backgroundColor = "rgba(255, 255, 255, 0.25)";
            document.getElementById('cxselimg' + i).style.cursor = "default";
            sumir('cxselimg' + i);
            document.getElementById('sel' + i).removeAttribute('verde');
            document.getElementById('carta' + i).removeAttribute('verde');
            document.getElementById('sel' + i).removeAttribute('vermelho');
            document.getElementById('carta' + i).removeAttribute('vermelho');
            document.getElementById('sel' + i).setAttribute('cordecarta', '');
            document.getElementById('carta' + i).setAttribute('cordecarta', '');
            setTimeout(() => {
                var vcarta = document.getElementById("c" + i).style
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
            }, 50 * i);
        }
        setTimeout(() => {
            for (let i = 1; i <= 8; i++) {
                document.getElementById('cxselimg' + i).style.cursor = "pointer";
                document.getElementById('sel' + i).setAttribute('cxsel', 'selecionar');
                document.getElementById('sel' + i).onclick = function () { baguncado('selecionar', 'box', i) }
            }
        }, 500);
        setTimeout(() => {
            baguncado('gerar');
        }, 750);
    }
    else if (modo == "acertou") {
        const el = document.getElementById("acertos");
        acertos++;
        el.textContent = acertos;

        el.setAttribute('pontos', '');
        void el.offsetWidth;
        el.setAttribute('pontos', 'boom');
    }

    else if (modo == "config") {
        if (opcao == "botao") {
            if (valor == "letras") {
                for (let i = 1; i <= 8; i++) {
                    document.getElementById('txt' + i).textContent = cxabc[i];
                }
            } else if (valor == "numeros") {
                for (let i = 1; i <= 8; i++) {
                    document.getElementById('txt' + i).textContent = cxnum[i];
                }
            }
        } else if (opcao == "galeria") {
            if (valor == "normal") {
                galeria = ['normal'];
                max = 50;
                img = [];
            } else if (valor == "esporte") {
                galeria = ['esporte'];
                max = 28;
                img = [];
            } else if (valor == "lugar") {
                galeria = ['lugar'];
                max = 51;
                img = [];
            } else if (valor == "rotina") {
                galeria = ['rotina'];
                max = 19;
                img = [];
            } else if (valor == "roupa") {
                galeria = ['roupa'];
                max = 34;
                img = [];
            } else if (valor == "trabalho") {
                galeria = ['trabalho'];
                max = 35;
                img = [];
            }
            setTimeout(() => {
                for (let i = 1; i <= max; i++) {
                    img.push(i);
                }
                // console.log(img);
                document.getElementById("acertos").style.display = "none";
                for (let i = 1; i <= 8; i++) {
                    document.getElementById('cxselimg' + i).style.backgroundColor = "rgba(255, 255, 255, 0.25)";
                    document.getElementById('cxselimg' + i).style.cursor = "default";
                    sumir('cxselimg' + i);
                    sumir('txt' + i);
                    document.getElementById('sel' + i).removeAttribute('verde');
                    document.getElementById('carta' + i).removeAttribute('verde');
                    document.getElementById('sel' + i).removeAttribute('vermelho');
                    document.getElementById('carta' + i).removeAttribute('vermelho');
                    document.getElementById('sel' + i).setAttribute('cordecarta', '');
                    document.getElementById('carta' + i).setAttribute('cordecarta', '');
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
            }, 500);
            setTimeout(() => {
                for (let i = 1; i <= 8; i++) {
                    document.getElementById('cxselimg' + i).style.cursor = "pointer";
                    document.getElementById('sel' + i).setAttribute('cxsel', 'selecionar');
                    document.getElementById('sel' + i).onclick = function () { baguncado('selecionar', 'box', i) }
                }
            }, 1000);
            setTimeout(() => {
                baguncado('gerar');
            }, 1500);
        }
    }
    else if (modo == 'click') {
        switch (opcao) {
            case 'numero':
                document.getElementById('sel' + valor).click();
                break;
            case 'imagem':
                document.getElementById('cxselimg' + valor).click();
                break;
        }
    }
    else if (modo == 'trocar') {
        if (selnum) {
            baguncado('config', 'botao', 'letras')
        } else {
            baguncado('config', 'botao', 'numeros')
        }
        selnum = !selnum;
    }
}