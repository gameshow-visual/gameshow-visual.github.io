const max = 50;
let cartas = 16;
let modoJogo = "pares";   //'pares' ou 'seguir'

let img = [];
let mem = [];
let crep = 0;
let npares = 0;
let cartasel = [{ c1: 0, v1: 0, c2: 0, v2: 0 }];
let ftempo = [];

let pasta = Math.floor(Math.random() * 59) + 1;   /* Selecionar pasta aleatório */

function iniciar() {
    var hash = location.hash
    memoria('gerar', 'cartas');
    switch (hash) {
        case '#pares':
            memoria('alterar', 'normal', 'pares');
            break
        case '#seguir':
            memoria('alterar', 'normal', 'seguir');
            break
        default:
            memoria('alterar', 'normal', 'pares');
            break
    }
}

const baseX = ['', -192, -64, 64, 192];
const basenY = ['', -192, -64, 64, 192];
const basedY = ['', -128, 0, 128];

function memoria(modo, opcao, valor) {
    if (modo == 'gerar') {
        if (opcao == 'cartas') {
            for (let c = 1; c <= 16; c++) {
                var div = document.createElement("div");
                div.setAttribute('pcarta', '')
                div.id = "m" + c;
                div.innerHTML = '<div carta id="c' + c + '"><div frente preto><div fundo></div><div info id="cinfo' + c + '">' + c + '</div></div><div atras cordecarta><div boxfundo></div><img id="jgimg' + c + '"></div></div>'
                document.getElementById("basecarta").appendChild(div);

                requestAnimationFrame(() => {
                    document.getElementById("m" + c).style.zIndex = [cartas - c];
                    document.getElementById('c' + c).onclick = function () { memoria('carta', c) };
                    document.getElementById("m" + c).style.boxShadow = "-5px 10px 20px 0px rgba(0, 0, 0, 0.1)";
                    aparecer('m' + c);
                });
            }

            for (let c = 1; c <= cartas; c++) {
                const carta = document.getElementById("m" + c);
                const vcarta = document.getElementById("c" + c);
                carta.style.zIndex = [cartas - c];
                setTimeout(() => {
                    if (cartas == 16) {
                        carta.style.transform = "translate(" + [-370 - [[c - 8] * 1]] + "px, " + [[c - 8] * 2.5] + "px)";
                    } else if (cartas == 12) {
                        carta.style.transform = "translate(" + [-370 - [[c - 8] * 1]] + "px, " + [[c - 6] * 2.5] + "px)";
                    }
                    vcarta.style.boxShadow = "-5px 10px 20px 0px rgba(0, 0, 0, 0.1)";
                }, 30 * c);
            }

            requestAnimationFrame(() => {
                memoria('gerar', 'imagens');
                memoria('distribuir');
            });
        }

        if (opcao == 'imagens') {
            mem = [];
            crep = 0;
            npares = 0;
            cartasel = [{ c1: 0, v1: 0, c2: 0, v2: 0 }];
            pasta = Math.floor(Math.random() * 59) + 1;
            for (let i = 1; i <= max; i++) { img.push(i); }
            misturar(img);
            for (let i = 1; i <= [cartas / 2]; i++) {
                mem.push(img[crep]);
                mem.push(img[crep]);
                crep++;
            }

            misturar(mem);
            npares = cartas / 2;
            for (let i = 1; i <= cartas; i++) {
                document.getElementById("jgimg" + i + "").src = "../../lib/img/galeria/" + pasta + "/" + mem[i - 1] + ".png";
            }
        }
    }
    else if (modo == 'cartas') {
        if (opcao == 'abrir') {
            for (let i = 1; i <= 16; i++) {
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
            aparecer('protetor');
        } else if (opcao == 'fechar') {
            for (let i = 1; i <= 16; i++) {
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
            setTimeout(() => {
                sumir('protetor');
            }, 1000);
        }
    }
    else if (modo == 'carta') {
        if (modoJogo == 'pares') {
            if (cartasel[0].v1 == 0) {
                cartasel[0].v1 = mem[opcao - 1];
                cartasel[0].c1 = opcao;
                document.getElementById("c" + opcao).style.transform = "rotateY(210deg)"
                setTimeout(() => {
                    document.getElementById("c" + opcao).style.transform = "rotateY(180deg)"
                }, 500)
                // saicont('sel=' + opcao);
            }
            else if (cartasel[0].v2 == 0) {
                if (opcao != cartasel[0].c1) {
                    cartasel[0].v2 = mem[opcao - 1];
                    cartasel[0].c2 = opcao;
                    document.getElementById("c" + opcao).style.transform = "rotateY(210deg)"
                    setTimeout(() => {
                        document.getElementById("c" + opcao).style.transform = "rotateY(180deg)"
                    }, 500)
                    // saicont('sel=' + opcao);
                    memoria('verificar');
                }
            }
        }
        if (modoJogo == 'seguir') {
            if (cartasel[0].v1 == 0) {
                cartasel[0].v1 = mem[opcao - 1];
                cartasel[0].c1 = opcao;
                document.getElementById("c" + opcao).style.transform = "rotateY(210deg)"
                setTimeout(() => {
                    document.getElementById("c" + opcao).style.transform = "rotateY(180deg)"
                }, 500)
                memoria('verificar', opcao);
                // saicont('sel=' + opcao);
            }
            else if (cartasel[0].v2 == 0) {
                if (opcao == cartasel[0].c1) { }
                else {
                    cartasel[0].v2 = mem[opcao - 1];
                    cartasel[0].c2 = opcao;
                    document.getElementById("c" + opcao).style.transform = "rotateY(210deg)"
                    setTimeout(() => {
                        document.getElementById("c" + opcao).style.transform = "rotateY(180deg)"
                    }, 500)
                    memoria('verificar', opcao);
                    // saicont('sel=' + opcao);
                }
            }
        }
    }
    else if (modo == 'verificar') {
        if (modoJogo == 'pares') {
            aparecer('protetor');
            setTimeout(() => {
                // saicont('protegido=on');
            }, 500);
            if (cartasel[0].v1 == cartasel[0].v2) {
                // saicont('botoff=' + cartasel[0].c1);
                setTimeout(() => {
                    // saicont('botoff=' + cartasel[0].c2);
                }, 300);
                setTimeout(() => {
                    document.getElementById("c" + cartasel[0].c1).style.transform = "rotateY(180deg) scale(0)";
                    document.getElementById("c" + cartasel[0].c2).style.transform = "rotateY(180deg) scale(0)";
                }, 1000);
                setTimeout(() => {
                    sumir('protetor');
                }, 1200);
                cartasel[0].v1 = 0;
                cartasel[0].v2 = 0;
                npares--;
                setTimeout(() => {
                    confeites(5);
                }, 500);
                if (npares == 0) {
                    setTimeout(() => {
                        confeites(1);
                        document.getElementById('botacao').disabled = false;
                    }, 2000);
                }
            } else {
                let vc1 = cartasel[0].c1
                let vc2 = cartasel[0].c2
                setTimeout(() => {
                    document.getElementById("c" + vc1).style.transform = "rotateY(-30deg)";
                    document.getElementById("c" + vc2).style.transform = "rotateY(-30deg)";
                    setTimeout(() => {
                        document.getElementById("c" + vc1).style.transform = "rotateY(0deg)";
                        document.getElementById("c" + vc2).style.transform = "rotateY(0deg)";
                    }, 500)
                }, 1500);
                setTimeout(() => {
                    sumir('protetor');
                    // saicont('protegido=off');
                }, 2000);
                cartasel[0].v1 = 0;
                cartasel[0].v2 = 0;
            }
        }
        if (modoJogo == 'seguir') {
            if (cartasel[0].v2 != 0) {
                aparecer('protetor');
                if (cartasel[0].v1 == cartasel[0].v2) {
                    setTimeout(() => {
                        document.getElementById("c" + cartasel[0].c1).style.transform = "rotateY(180deg) scale(0)";
                        document.getElementById("c" + cartasel[0].c2).style.transform = "rotateY(180deg) scale(0)";
                    }, 1000);
                    setTimeout(() => {
                        sumir('protetor');
                    }, 1500);
                    cartasel[0].v1 = 0;
                    cartasel[0].v2 = 0;
                    npares--;
                    setTimeout(() => {
                        confeites(5);
                    }, 500);
                    if (npares == 0) {
                        setTimeout(() => {
                            confeites(1);
                            document.getElementById('botacao').disabled = false;
                        }, 2000);
                    }
                } else {
                    cartasel[0].c2 = cartasel[0].c1;
                    cartasel[0].c1 = opcao;
                    cartasel[0].v2 = cartasel[0].v1;
                    cartasel[0].v1 = mem[opcao - 1];
                    let vc = cartasel[0].c2
                    setTimeout(() => {
                        document.getElementById("c" + vc).style.transform = "rotateY(-30deg)";
                        setTimeout(() => {
                            document.getElementById("c" + vc).style.transform = "rotateY(0deg)";
                        }, 500)
                    }, 1000);
                    setTimeout(() => {
                        cartasel[0].c2 = [];
                        cartasel[0].v2 = 0;
                        sumir('protetor');
                    }, 1100);
                }
            }
        }
    }
    else if (modo == 'reiniciar') {
        aparecer('protetor');
        for (let i = 1; i <= cartas; i++) {
            sumir("cinfo" + i);
        }
        setTimeout(() => {
            for (let c = 1; c <= cartas; c++) {
                const carta = document.getElementById("m" + c);
                const vcarta = document.getElementById("c" + c);
                carta.style.zIndex = [cartas - c];
                setTimeout(() => {
                    if (cartas == 16) {
                        carta.style.transform = "translate(" + [-370 - [[c - 8] * 1]] + "px, " + [[c - 8] * 2.5] + "px)";
                    } else if (cartas == 12) {
                        carta.style.transform = "translate(" + [-370 - [[c - 8] * 1]] + "px, " + [[c - 6] * 2.5] + "px)";
                    }
                    vcarta.style.boxShadow = "-5px 10px 20px 0px rgba(0, 0, 0, 0.1)";

                }, 30 * c);
            }
        }, 500);

        setTimeout(() => {
            for (let i = 1; i <= cartas; i++) {
                const carta = document.getElementById("c" + i);
                if (carta.style.transform === "rotateY(180deg) scale(0)") {
                    carta.style.transform = "rotateY(-30deg) scale(0)";
                    setTimeout(() => {
                        carta.style.transform = "rotateY(0deg) scale(0)";
                    }, 500);
                    setTimeout(() => {
                        carta.style.transform = "rotateY(0deg) scale(1)";
                        carta.style.boxShadow = "-5px 10px 20px 0px rgba(0, 0, 0, 0.1)";
                    }, 600);
                } else if (carta.style.transform === "rotateY(180deg)") {
                    carta.style.transform = "rotateY(-30deg) scale(1)";
                    setTimeout(() => {
                        carta.style.transform = "rotateY(0deg) scale(1)";
                        carta.style.boxShadow = "-5px 10px 20px 0px rgba(0, 0, 0, 0.1)";
                    }, 500);
                }
            }
        }, 1000);

        setTimeout(() => {
            memoria('gerar', 'imagens');
            memoria('distribuir');
        }, 1500);
    }
    else if (modo == 'alterar') {
        if (opcao == 'normal') {
            if (cartas != 16) {
                for (let c = 1; c <= 16; c++) {
                    setTimeout(() => {
                        sumir('m' + c);
                        sumir("cinfo" + c);
                    }, 30 * c);
                }
                cartas = 16;
                setTimeout(() => {
                    memoria('gerar', 'imagens');
                    for (let c = 1; c <= cartas; c++) {
                        const carta = document.getElementById("m" + c);
                        const vcarta = document.getElementById("c" + c);
                        carta.style.zIndex = [cartas - c];
                        setTimeout(() => {
                            if (window.matchMedia("(orientation: landscape)").matches) {
                                carta.style.transform = "translate(" + [-370 - [[c - 8] * 1]] + "px, " + [[c - 8] * 2.5] + "px)";
                            } else {
                                carta.style.transform = "translate(" + [[c - 8] * -1] + "px, " + [-370 - [c - 8] * -2.5] + "px)";
                            }
                            vcarta.style.boxShadow = "-5px 10px 20px 0px rgba(0, 0, 0, 0.1)";
                        }, 30 * c);
                    }
                    document.querySelectorAll('[frente]').forEach(carta => {
                        if (carta.hasAttribute('cordefic')) {
                            carta.removeAttribute('cordefic');
                            carta.setAttribute('preto', '');
                        }
                    });
                    for (let c = 13; c <= 16; c++) {
                        setTimeout(() => {
                            // saicont('boton=' + c);
                        }, 200 * [c - 12]);
                    }
                    setTimeout(() => {
                        for (let c = 1; c <= 16; c++) {
                            setTimeout(() => {
                                aparecer('m' + c);
                            }, 30 * c);
                        }
                    }, 500);
                }, 1500);
            }
            if (modoJogo != valor) {
                modoJogo = valor;
                memoria('reiniciar');
            }
        }
        if (opcao == 'defic') {
            if (cartas != 12) {
                for (let c = 1; c <= 16; c++) {
                    setTimeout(() => {
                        sumir('m' + c);
                        sumir("cinfo" + c);
                    }, 30 * c);
                }
                cartas = 12;
                setTimeout(() => {
                    memoria('gerar', 'imagens');
                    for (let c = 1; c <= cartas; c++) {
                        const carta = document.getElementById("m" + c);
                        const vcarta = document.getElementById("c" + c);
                        carta.style.zIndex = [cartas - c];
                        setTimeout(() => {
                            if (window.matchMedia("(orientation: landscape)").matches) {
                                carta.style.transform = "translate(" + [-370 - [[c - 8] * 1]] + "px, " + [[c - 8] * 2.5] + "px)";
                            } else {
                                carta.style.transform = "translate(" + [[c - 8] * -1] + "px, " + [-370 - [c - 8] * -2.5] + "px)";
                            }
                            vcarta.style.boxShadow = "-5px 10px 20px 0px rgba(0, 0, 0, 0.1)";
                        }, 30 * c);
                    }
                    document.querySelectorAll('[frente]').forEach(carta => {
                        if (carta.hasAttribute('preto')) {
                            carta.removeAttribute('preto');
                            carta.setAttribute('cordefic', '');
                        }
                    });
                    for (let c = 13; c <= 16; c++) {
                        setTimeout(() => {
                            // saicont('boton=' + c)
                            // ;
                        }, 200 * [c - 12]);
                    }
                    setTimeout(() => {
                        for (let c = 1; c <= 12; c++) {
                            setTimeout(() => {
                                aparecer('m' + c);
                            }, 30 * c);
                        }
                    }, 500);
                }, 1500);
            }
            if (modoJogo != valor) {
                modoJogo = valor;
                memoria('reiniciar');
            }
        }
    }
    else if (modo == 'distribuir') {
        document.getElementById('botacao').disabled = true;
        setTimeout(() => {
            for (let i = 1; i <= cartas; i++) {
                setTimeout(() => {
                    if (cartas == 16) {
                        if (i >= 1 && i <= 4) {
                            document.getElementById("m" + i).style.transform = "translate(" + baseX[i] + "px, " + basenY[1] + "px)";
                            document.getElementById("m" + i).style.zIndex = 99;
                            document.getElementById("m" + i).style.boxShadow = "";
                        } else if (i >= 5 && i <= 8) {
                            document.getElementById("m" + i).style.transform = "translate(" + baseX[[4 + i] - 8] + "px, " + basenY[2] + "px)"
                            document.getElementById("m" + i).style.zIndex = 99;
                            document.getElementById("m" + i).style.boxShadow = "";
                        } else if (i >= 9 && i <= 12) {
                            document.getElementById("m" + i).style.transform = "translate(" + baseX[[4 + i] - 12] + "px, " + basenY[3] + "px)"
                            document.getElementById("m" + i).style.zIndex = 99;
                            document.getElementById("m" + i).style.boxShadow = "";
                        } else if (i >= 13 && i <= 16) {
                            document.getElementById("m" + i).style.transform = "translate(" + baseX[[4 + i] - 16] + "px, " + basenY[4] + "px)"
                            document.getElementById("m" + i).style.zIndex = 99;
                            document.getElementById("m" + i).style.boxShadow = "";
                            if (i == 16) {
                                // finalizarAnimacao()
                            }
                        }
                    }
                    else if (cartas == 12) {
                        if (i >= 1 && i <= 4) {
                            document.getElementById("m" + i).style.transform = "translate(" + baseX[i] + "px, " + basedY[1] + "px)"
                            document.getElementById("m" + i).style.zIndex = 99;
                            document.getElementById("m" + i).style.boxShadow = "";
                        } else if (i >= 5 && i <= 8) {
                            document.getElementById("m" + i).style.transform = "translate(" + baseX[[4 + i] - 8] + "px, " + basedY[2] + "px)"
                            document.getElementById("m" + i).style.zIndex = 99;
                            document.getElementById("m" + i).style.boxShadow = "";
                        } else if (i >= 9 && i <= 12) {
                            document.getElementById("m" + i).style.transform = "translate(" + baseX[[4 + i - 12]] + "px, " + basedY[3] + "px)"
                            document.getElementById("m" + i).style.zIndex = 99;
                            document.getElementById("m" + i).style.boxShadow = "";
                            if (i == 12) {
                                // finalizarAnimacao()
                            }

                        }
                    }
                    // aparecer("cinfo" + i)
                }, i * 300);
            }
        }, 1000);
        if (cartas == 16) {
            setTimeout(() => {
                for (let c = 1; c <= cartas; c++) {
                    setTimeout(() => {
                        aparecer("cinfo" + c);
                    }, 30 * c);
                }
                sumir('protetor');
            }, 6200);
        } else if (cartas == 12) {
            setTimeout(() => {
                for (let c = 1; c <= cartas; c++) {
                    setTimeout(() => {
                        aparecer("cinfo" + c);
                    }, 30 * c);
                }
                sumir('protetor');
            }, 5200);
        }
    }
}