document.addEventListener("DOMContentLoaded", () => {
    // Captura dos elementos do HTML
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    const html = document.documentElement;

    // 1. CARREGAR PREFERÊNCIAS SALVAS (AO ABRIR A PÁGINA)
    const contrasteSalvo = localStorage.getItem("altoContraste");
    const fonteSalva = localStorage.getItem("tamanhoFonte");

    // Aplica o contraste salvo (se existir)
    if (contrasteSalvo === "true") {
        document.body.classList.add("alto-contraste");
        if (btnContraste) btnContraste.setAttribute("aria-pressed", "true");
    }

    // Aplica o tamanho de fonte salvo (se existir)
    let tamanhoAtualFonte = fonteSalva ? parseInt(fonteSalva) : 100;
    html.style.fontSize = `${tamanhoAtualFonte}%`;

    // 2. FUNÇÕES DE INTERAÇÃO E SALVAMENTO

    // Alternar Alto Contraste
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            document.body.classList.toggle("alto-contraste");

            const ativo = document.body.classList.contains("alto-contraste");
            btnContraste.setAttribute("aria-pressed", ativo);

            // Salva no localStorage (true ou false)
            localStorage.setItem("altoContraste", ativo);
        });
    }

    // Aumentar o Texto
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualFonte < 150) {
                tamanhoAtualFonte += 10;
                html.style.fontSize = `${tamanhoAtualFonte}%`;

                // Salva o novo tamanho no localStorage
                localStorage.setItem("tamanhoFonte", tamanhoAtualFonte);
            }
        });
    }

    // Diminuir o Texto
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualFonte > 90) {
                tamanhoAtualFonte -= 10;
                html.style.fontSize = `${tamanhoAtualFonte}%`;

                // Salva o novo tamanho no localStorage
                localStorage.setItem("tamanhoFonte", tamanhoAtualFonte);
            }
        });
    }
});