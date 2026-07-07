let mostrarpinos = false;

const cores = ['amarelo', 'azul', 'verde', 'vermelho', 'rosa', 'laranja', 'ciano', 'marrom', 'cinza', 'roxo'];

let max = 4;
let rmax = 0;
let repetir = true;
let seq = [];
let sSel = [{ cor: false, box: false }];
let sValor = [{ cor: [], box: [] }];
let vbox = 0;
let altord = 1;

let sValores = [{ cor: [], box: [], final: false, acerto: false }, { cor: [], box: [], final: false, acerto: false }, { cor: [], box: [], final: false, acerto: false }, { cor: [], box: [], final: false, acerto: false }]

let modo = 'normal';

function senhas(modo, opcao, valor) {
    if (modo == 'verificar') {

        if (sSel[0].box && sSel[0].cor) {
            aparecer('protecao');

            sValores[sValor[0].box - 1].box = sValor[0].cor

            document.getElementById("acor" + sValor[0].box).setAttribute(cores[sValor[0].cor - 1], '');

            document.getElementById("lc" + sValor[0].box).style.transform = "rotateY(210deg)";
            setTimeout(function () {
                document.getElementById("lc" + sValor[0].box).style.transform = "rotateY(180deg)";
            }, 500)

            for (let i = 1; i <= 4; i++) {
                document.getElementById('flc' + i).setAttribute('frente', 'selecionar');
                document.getElementById('lc' + i).onclick = function () { senhas('selecionar', 'carta', i) };
            }
            for (let i = 1; i <= max; i++) {
                document.getElementById('cor' + i).setAttribute('relevo', 'selecionar');
                document.getElementById('cor' + i).onclick = function () { senhas('selecionar', 'cor', i) };
            }

            sSel[0].box = false;
            sSel[0].cor = false;

            setTimeout(() => {
                sumir('protecao');
                sValor[0].box = [];
                sValor[0].cor = [];
                if (sValores[0].final && sValores[1].final && sValores[2].final && sValores[3].final) {
                    senhas('checar', 'ativar');
                }
            }, 500);
        }
        return;
    }
    else if (modo == 'organizar') {
        cores.forEach((cor, i) => {
            document.getElementById("cor" + (i + 1)).setAttribute(cor, '');
        });
        for (let c = 1; c <= 10; c++) {
            document.getElementById('cor' + c).style.display = "none";
        }
        for (let a = 1; a <= max; a++) {
            document.getElementById('cor' + a).style.display = "flex";
        }
        senhas('gerar');
        return;
    }
    switch (modo) {
        case 'acertou':
            document.getElementById('seta' + opcao).style.opacity = "1";
            document.getElementById('seta' + opcao).style.transform = "translateY(40px)";
            setTimeout(() => {
                document.getElementById('seta' + opcao).style.animation = "subiu 0.5s ease-in-out";
            }, 200);

            setTimeout(() => {
                document.getElementById('seta' + opcao).style.transform = "translateY(-40px)";
                document.getElementById("c" + opcao).style.transform = "rotateY(210deg)"
                setTimeout(() => {
                    document.getElementById("c" + opcao).style.transform = "rotateY(180deg)"
                }, 500);
            }, 700);
            setTimeout(() => {
                document.getElementById('seta' + opcao).style.animation = "";
                document.getElementById('seta' + opcao).style.opacity = "0";
            }, 1000);
            break;
        case 'gerar':
            if (repetir) {
                for (let i = 1; i <= 4; i++) { seq.push(Math.floor(Math.random() * max) + 1) }
            } else {
                let num = []
                for (let i = 1; i <= max; i++) { num.push(i) }
                misturar(num);
                for (let i = 0; i <= 3; i++) { seq.push(num[i]) }
            }

            seq.forEach((cor, i) => {
                document.getElementById('carta' + (i + 1))
                    .setAttribute(cores[cor - 1], '');

                sValores[i].cor = cor;
            });

            break;
        case 'checar':
            switch (opcao) {
                case 'ativar':
                    aparecer('checar');
                    break;
                case 'desativar':
                    sumir('checar');
                    break;
                case 'iniciar':
                    aparecer('protecao');
                    switch (vbox) {
                        case 0: case 1: case 2: case 3:
                            if (sValores[vbox].acerto == false) {
                                if (sValores[vbox].final) {
                                    if (sValores[vbox].box == sValores[vbox].cor) {
                                        sValores[vbox].final = true
                                        sValores[vbox].acerto = true
                                        document.getElementById('lc' + [vbox + 1]).onclick = function () { };

                                        setTimeout(() => {
                                            senhas('acertou', [vbox + 1]);
                                        }, 300);

                                        setTimeout(() => {
                                            sumir('resp' + [vbox + 1]);
                                        }, 750);

                                        setTimeout(() => {
                                            document.getElementById("lc" + [vbox + 1]).style.transform = "rotateY(0deg)"
                                            vbox++;
                                            senhas('checar', 'iniciar');
                                        }, 1000);

                                    } else {
                                        sValores[vbox].final = false;
                                        document.getElementById("lc" + [vbox + 1]).style.transform = "rotateY(-30deg)";
                                        setTimeout(function () {
                                            document.getElementById("lc" + [vbox + 1]).style.transform = "rotateY(0deg)";
                                            const elm3 = document.querySelector("#acor" + [vbox + 1]);
                                            [...elm3.attributes].forEach(attr => {
                                                if (attr.name !== "id" && attr.name !== "atras") {
                                                    elm3.removeAttribute(attr.name);
                                                }
                                            });
                                        }, 500)

                                        setTimeout(() => {
                                            vbox++;
                                            senhas('checar', 'iniciar');
                                        }, 600);

                                    }
                                }
                            } else {
                                vbox++;
                                senhas('checar', 'iniciar');
                            }
                            break
                        case 4:
                            if (sValores[0].acerto && sValores[1].acerto && sValores[2].acerto && sValores[3].acerto) {
                                confeites(1);
                                setTimeout(() => {
                                    senhas('final');
                                }, 5000);
                            }
                            vbox = 0;
                            sumir('protecao');
                            break
                    }
                    sumir('checar');
                    break;
            }
            break;
        case 'cartas':
            for (let i = 1; i <= 4; i++) {
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
            break;
        case 'selecionar':
            switch (opcao) {
                case 'carta':
                    var v1carta = document.getElementById("lc" + valor).style
                    if (v1carta.transform == "rotateY(180deg)") {
                        v1carta.transform = "rotateY(-30deg)"
                        setTimeout(function () {
                            v1carta.transform = "rotateY(0deg)"
                        }, 500)
                        const elm4 = document.querySelector("#acor" + valor);
                        [...elm4.attributes].forEach(attr => {
                            if (attr.name !== "id" && attr.name !== "atras") {
                                elm4.removeAttribute(attr.name);
                            }
                        });
                        sValores[valor - 1].final = false;
                        senhas('checar', 'desativar');
                    } else {
                        for (let i = 1; i <= 4; i++) {
                            if (valor != i) {
                                document.getElementById('flc' + i).setAttribute('frente', 'selecionar');
                                document.getElementById('lc' + i).onclick = function () { senhas('selecionar', 'carta', i) };
                            }
                            document.getElementById('flc' + valor).setAttribute('frente', 'selecionado');
                            document.getElementById('lc' + valor).onclick = function () { }
                        }
                        sSel[0].box = true;
                        sValor[0].box = valor;
                        sValores[sValor[0].box - 1].final = true;
                        senhas('verificar');
                    }
                    break;
                case 'cor':
                    for (let i = 1; i <= max; i++) {
                        if (valor != i) {
                            document.getElementById('cor' + i).setAttribute('relevo', 'selecionar');
                            document.getElementById('cor' + i).onclick = function () { senhas('selecionar', 'cor', i) };
                        }
                        document.getElementById('cor' + valor).setAttribute('relevo', 'selecionado');
                        document.getElementById('cor' + valor).onclick = function () { }
                    }
                    sSel[0].cor = true;
                    sValor[0].cor = valor;
                    senhas('verificar');
                    break;
            }
            break;
        case 'config':
            switch (opcao) {
                case 'repetir':
                    if (repetir) {
                        repetir = !repetir;
                        senhas('reiniciar');
                    } else {
                        repetir = !repetir;
                        senhas('reiniciar');
                    }
                    break;
                case 'cores':
                    max = valor;
                    for (let c = 1; c <= 10; c++) {
                        document.getElementById('cor' + c).style.display = "none";
                    }
                    for (let a = 1; a <= max; a++) {
                        document.getElementById('cor' + a).style.display = "flex";
                    }
                    senhas('reiniciar');
                    break;
            }
            break;
        case 'reiniciar':
            sumir('checar');
            setTimeout(() => {
                document.getElementById('imgchecar').src = "../../lib/img/util/scanner.png"
                document.getElementById('checar').onclick = function () { senhas('checar', 'iniciar'); };
            }, 500);


            sValores = [{ cor: [], box: [], final: false, acerto: false }, { cor: [], box: [], final: false, acerto: false }, { cor: [], box: [], final: false, acerto: false }, { cor: [], box: [], final: false, acerto: false }];
            seq = [];

            for (let i = 1; i <= 4; i++) {

                document.getElementById('seta' + i).style.transform = "translateY(40px)";

                setTimeout(() => {
                    aparecer('resp' + i);
                    document.getElementById('lc' + i).onclick = function () { senhas('selecionar', 'carta', i) };
                    if (document.getElementById("c" + i).style.transform == "rotateY(180deg)") {
                        document.getElementById("c" + i).style.transform = "rotateY(-30deg)"
                        setTimeout(function () {
                            document.getElementById("c" + i).style.transform = "rotateY(0deg)"
                        }, 500)
                    }
                }, 50 * i);
            }

            setTimeout(() => {

                for (let i = 1; i <= 4; i++) {
                    const elm1 = document.querySelector("#acor" + i);
                    [...elm1.attributes].forEach(attr => {
                        if (attr.name !== "id" && attr.name !== "atras") {
                            elm1.removeAttribute(attr.name);
                        }
                    });
                    const elm2 = document.querySelector("#carta" + i);
                    [...elm2.attributes].forEach(attr => {
                        if (attr.name !== "id" && attr.name !== "atras") {
                            elm2.removeAttribute(attr.name);
                        }
                    });
                }
                senhas('gerar');
            }, 500);

            break;
        case 'final':
            aparecer('checar');
            document.getElementById('imgchecar').src = "../../lib/img/util/reload.png"
            document.getElementById('checar').onclick = function () { senhas('reiniciar'); };
            break;
    }
}