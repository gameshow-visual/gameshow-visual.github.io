    function toggleMenu() {
        const menu = document.getElementById("menuItems");
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
        if (menu.style.display === "flex") {
            document.getElementById("setamenu").src = "../lib/img/util/abaixo.png";
        } else {
            document.getElementById("setamenu").src = "../lib/img/util/cima.png";

        }
    }

    function abrirmenu(arquivo) {
        toggleMenu();
        document.getElementById("index").src = arquivo;
    }