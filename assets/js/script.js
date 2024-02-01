const aba1 = document.querySelector(".painel-aba-1");
const aba2 = document.querySelector(".painel-aba-2");
const painelAbas = document.querySelectorAll(".painel-aba");

function trocaAba() {
    painelAbas.forEach((el) => {
        el.addEventListener("click", (evt) => {
            const elementoClicado = evt.currentTarget;
            if (elementoClicado.classList.contains("painel-aba-1")) {
                aba1.classList.add("aba-selecionada");
                aba2.classList.remove("aba-selecionada");
            } else if (elementoClicado.classList.contains("painel-aba-2")) {
                aba1.classList.remove("aba-selecionada");
                aba2.classList.add("aba-selecionada");
            }
        });
    });
}

trocaAba();
