let arrastando = false;
let ultimoX = 0;
let ultimoY = 0;

const book = document.querySelector(".book");

let zoom = 1;
let posX = 0;
let posY = 0;

const ZOOM_MIN = 1;
const ZOOM_MAX = 2;
const PASSO = 1;

function atualizarTransform() {
    book.style.transform =
        `translate(${posX}px, ${posY}px) scale(${zoom})`;
}

window.addEventListener("wheel", function (e) {

    e.preventDefault();

    if (e.deltaY < 0 && zoom >= ZOOM_MAX) return;
    if (e.deltaY > 0 && zoom <= ZOOM_MIN) return;

    const rect = book.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    book.style.transformOrigin = `${x}px ${y}px`;

    if (e.deltaY < 0) {
        zoom = Math.min(zoom + PASSO, ZOOM_MAX);
    } else {
        zoom = Math.max(zoom - PASSO, ZOOM_MIN);
    }

    if (zoom > 1) {

        $(".book").turn("disable", true);

        book.style.cursor = "grab";

    } else {

        posX = 0;
        posY = 0;

        book.style.cursor = "default";

        $(".book").turn("disable", false);

    }

    atualizarTransform();

}, { passive: false });

book.addEventListener("mousedown", function (e) {

    if (zoom == 1) return;

    e.preventDefault();

    arrastando = true;

    ultimoX = e.clientX;
    ultimoY = e.clientY;

    book.style.cursor = "grabbing";

});

window.addEventListener("mousemove", function (e) {

    if (!arrastando) return;

    posX += e.clientX - ultimoX;
    posY += e.clientY - ultimoY;

    ultimoX = e.clientX;
    ultimoY = e.clientY;

    atualizarTransform();

});

window.addEventListener("mouseup", function () {

    arrastando = false;

    book.style.cursor = zoom > 1 ? "grab" : "default";

});
