function resposta(opcao) {
    if (document.querySelector('[certa]')) {
        // document.querySelector('[certa]').disabled = true;
        // document.querySelector('[errada]').disabled = true;
        // document.querySelector('[certa]').setAttribute('certa', 'desativada');
        // document.querySelector('[errada]').setAttribute('errada', 'desativada');
    }

    var img = document.createElement("img");
    img.id = 'respimg';
    if (opcao == 'certa') { img.src = '../../lib/img/util/certa.png'; }
    else if (opcao == 'errada') { img.src = '../../lib/img/util/errada.png'; }
    document.querySelector('[resposta]').appendChild(img);


    setTimeout(() => {
        if (opcao == 'certa') { corfundo('verde'); }
        else if (opcao == 'errada') { corfundo('vermelho'); }
    }, 0);

    setTimeout(() => {
        document.getElementById('respimg').style.transform = "scale(1.3)";        
    }, 300);

    setTimeout(() => {
        if (opcao == 'certa') {
            explosao(1);
        }        
        document.getElementById('respimg').style.transform = "scale(1)";
    }, 1000);

    setTimeout(() => {
        if (opcao == 'errada') {
            document.getElementById('respimg').style.transform = "scale(0)";
        }
    }, 1500);

    setTimeout(() => {
        if (opcao == 'certa') {
            document.getElementById('respimg').style.transform = "scale(0)";
        }
    }, 1750);

    setTimeout(() => {
        if (opcao == 'errada') { corfundo(); }
    }, 2000);

    setTimeout(() => {
        if (opcao == 'certa') { corfundo(); }
        else if (opcao == 'errada') {
            document.getElementById('respimg').remove();
            if (document.querySelector('[certa]')) {
                // document.querySelector('[certa]').disabled = false;
                // document.querySelector('[errada]').disabled = false;
                // document.querySelector('[certa]').setAttribute('certa', '');
                // document.querySelector('[errada]').setAttribute('errada', '');
            }
        }
    }, 2250);

    setTimeout(() => {
        if (opcao == 'certa') {
            document.getElementById('respimg').remove();
            if (document.querySelector('[errada]')) {
                // document.querySelector('[certa]').disabled = false;
                // document.querySelector('[errada]').disabled = false;
                // document.querySelector('[certa]').setAttribute('certa', '');
                // document.querySelector('[errada]').setAttribute('errada', '');
            }
        }
    }, 2500);
}