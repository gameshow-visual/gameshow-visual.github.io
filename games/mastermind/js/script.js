const cores = ['amarelo', 'azul', 'verde', 'vermelho', 'rosa', 'laranja', 'ciano', 'marrom', 'cinza', 'roxo'];

let max = 6;
let repetir = true;

let seq = [];
let sel = [];

let sSel = [{ cor: false, box: false }];
let sValor = [{ cor: [], box: [] }];

let vFinal = [false, false, false, false];
let vbox = 0;
let altord = 1;

let preto = 0;
let branco = 0;

let resp = [];
let jog = [];

let checkresp = [];
let checkseq = [];

let pinos = [];

let linha = 1;

const LIMITE_VISIVEL = 6;
const LIMITE_TOTAL = 12;

const container = document.querySelector("[cores]");
const div = document.createElement("div");

let contador = 1;

function senhas(modo, opcao, valor) {
    if (modo == 'verificar') {
        if (sSel[0].box && sSel[0].cor) {
            aparecer('protecao');

            sel[sValor[0].box - 1] = sValor[0].cor;

            document.getElementById("ac" + sValor[0].box).setAttribute(cores[sValor[0].cor - 1], '');

            document.getElementById("lc" + sValor[0].box).style.transform = "rotateY(210deg)";
            setTimeout(function () {
                document.getElementById("lc" + sValor[0].box).style.transform = "rotateY(180deg)";
            }, 500)

            for (let i = 1; i <= 4; i++) {
                document.getElementById('fc' + i).setAttribute('frente', 'selecionar');
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
                if (vFinal[0] && vFinal[1] && vFinal[2] && vFinal[3]) {
                    senhas('checar', 'ativar');

                    for (let i = 0; i <= 3; i++) {
                        checkresp.push(cores[sel[i] - 1]);
                        checkseq.push(cores[seq[i] - 1]);
                    }
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
    else if (modo == 'adicionar') {
        const container = document.querySelector("[cores]");
        const div = document.createElement("div");

        if (contador > LIMITE_TOTAL) {
            senhas('acabou');
            return;
        }

        div.setAttribute("linha", "");
        div.innerHTML = `<div fila>${contador++}</div>
                    <div cartas>
                        <div pcarta>
                            <div carta id="lc1" onclick="senhas('selecionar','carta', 1)">
                                <div id="fc1" frente="selecionar" preto>
                                    <div fundo></div>
                                    A
                                </div>
                                <div atras relevo id="ac1">
                                    <div id="fintxt1">A</div>
                                </div>
                            </div>
                        </div>
                        <div pcarta>
                            <div carta id="lc2" onclick="senhas('selecionar','carta', 2)">
                                <div id="fc2" frente="selecionar" preto>
                                    <div fundo></div>
                                    B
                                </div>
                                <div atras relevo id="ac2">
                                    <div id="fintxt2">B</div>
                                </div>
                            </div>
                        </div>
                        <div pcarta>
                            <div carta id="lc3" onclick="senhas('selecionar','carta', 3)">
                                <div id="fc3" frente="selecionar" preto>
                                    <div fundo></div>
                                    C
                                </div>
                                <div atras relevo id="ac3">
                                    <div id="fintxt3">C</div>
                                </div>
                            </div>
                        </div>
                        <div pcarta>
                            <div carta id="lc4" onclick="senhas('selecionar','carta', 4)">
                                <div id="fc4" frente="selecionar" preto>
                                    <div fundo></div>
                                    D
                                </div>
                                <div atras relevo id="ac4">
                                    <div id="fintxt4">D</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div pinos>
                        <div id="checar" relevo onclick="senhas('checar','iniciar')"><img
                                id="imgchecar" src="../../lib/img/util/scanner.png"></div>
                    </div>`
        // Coloca no topo
        container.prepend(div);

        // Mantém apenas 6 divs visíveis
        if (container.childElementCount > LIMITE_VISIVEL) {
            container.lastElementChild.remove();
        }
    }

    switch (modo) {
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
            });
            contador = 1;
            senhas('adicionar');
            console.log(seq);

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
                    resp = [...checkseq];
                    jog = [...checkresp];

                    for (let i = 0; i < 4; i++) {
                        if (jog[i] === resp[i]) {
                            pinos.push('preto');
                            resp[i] = null;
                            jog[i] = null;
                        }
                    }

                    for (let i = 0; i < 4; i++) {
                        if (jog[i] === null) continue;
                        let indice = resp.indexOf(jog[i]);
                        if (indice !== -1) {
                            pinos.push('branco');
                            resp[indice] = null;
                        }
                    }

                    if (pinos.length === 4 && pinos.every(p => p === 'preto')) {
                        senhas('acertou');
                    } else {
                        sumir('checar');

                        setTimeout(() => {
                            senhas('arrumar');
                        }, 500);

                        setTimeout(() => {
                            for (let i = 0; i <= 3; i++) {
                                document.getElementById('l' + linha + 'p' + [i + 1]).setAttribute(pinos[i], '');
                            }
                        }, 750);

                        setTimeout(() => {
                            // adicionar();
                            senhas('adicionar');
                            sel = [];
                            vFinal = [false, false, false, false];
                            resp = [];
                            jog = [];
                            checkresp = [];
                            checkseq = [];
                            pinos = [];
                            ++linha;
                        }, 1000);
                    }
                    break;
            }
            break;
        case 'arrumar':
            const container = document.querySelector("[cores]");

            const linhas = container.querySelectorAll("[linha]");
            let linhaAntiga = null;

            for (const l of linhas) {
                const fila = l.querySelector("[fila]");

                if (fila && Number(fila.textContent) === linha) {
                    linhaAntiga = l;
                    break;
                }
            }

            const div = document.createElement("div");
            div.setAttribute("linha", "");
            div.innerHTML = `<div fila>${linha}</div>
                    <div cartas>
                        <div scor relevo id="l${linha}c1"></div>
                        <div scor relevo id="l${linha}c2"></div>
                        <div scor relevo id="l${linha}c3"></div>
                        <div scor relevo id="l${linha}c4"></div>
                    </div>
                    <div pinos>
                        <div id="l${linha}p1" pino></div>
                        <div id="l${linha}p2" pino></div>
                        <div id="l${linha}p3" pino></div>
                        <div id="l${linha}p4" pino></div>
                    </div>`;

            if (linhaAntiga) {
                linhaAntiga.replaceWith(div);
            }
            for (let c = 1; c <= 4; c++) {
                document.getElementById('l' + linha + 'c' + c).setAttribute(checkresp[0], '');
                checkresp.shift()
            }
            break;
        case 'reiniciar':
            document.querySelector("[cores]").innerHTML = "";
            contador = 1;

            seq = [];
            sel = [];
            vFinal = [false, false, false, false];
            resp = [];
            jog = [];
            checkresp = [];
            checkseq = [];
            pinos = [];
            linha = 1;

            for (let i = 1; i <= 4; i++) {
                setTimeout(() => {
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
        case 'acertou':
            document.getElementById('imgchecar').src = "../../lib/img/util/reload.png"
            document.getElementById('checar').onclick = function () { senhas('reiniciar'); };
            senhas('cartas');
            resposta('certa');
            setTimeout(() => {
                resposta('certa');
            }, 1000);
            confeites(1);
            break;
        case 'acabou':
            // alert('BORA! RENOVAR!!!!');
            resposta('errada');
            setTimeout(() => {
                resposta('errada');
            }, 2000);
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
                        vFinal[valor - 1] = false;
                        const elm4 = document.querySelector("#ac" + valor);
                        [...elm4.attributes].forEach(attr => {
                            if (attr.name !== "id" && attr.name !== "atras") {
                                elm4.removeAttribute(attr.name);
                            }
                        });
                        senhas('checar', 'desativar');
                    } else {
                        for (let i = 1; i <= 4; i++) {
                            if (valor != i) {
                                document.getElementById('fc' + i).setAttribute('frente', 'selecionar');
                                document.getElementById('lc' + i).onclick = function () { senhas('selecionar', 'carta', i) };
                            }
                            document.getElementById('fc' + valor).setAttribute('frente', 'selecionado');
                            document.getElementById('lc' + valor).onclick = function () { }
                        }
                        sSel[0].box = true;
                        sValor[0].box = valor;
                        vFinal[sValor[0].box - 1] = true;
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
    }
}