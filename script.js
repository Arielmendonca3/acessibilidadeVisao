<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Acessível com Preferências Salvas</title>
    
    <!-- CSS mínimo para demonstração -->
    <style>
        :root {
            font-size: 100%;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            color: #333333;
            margin: 0;
            padding: 20px;
            transition: background-color 0.3s, color 0.3s;
        }

        /* Estilo para Alto Contraste */
        body.alto-contraste {
            background-color: #000000;
            color: #ffff00; /* Amarelo em fundo preto */
        }

        .barra-acessibilidade {
            margin-bottom: 20px;
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }

        button {
            padding: 8px 12px;
            font-size: 1rem;
            cursor: pointer;
            margin-right: 5px;
        }

        body.alto-contraste button {
            background-color: #000;
            color: #ffff00;
            border: 2px solid #ffff00;
        }
    </style>
</head>
<body>

    <!-- BARRA DE ACESSIBILIDADE COM OS IDs CORRESPONDENTES AO SEU SCRIPT -->
    <nav class="barra-acessibilidade" aria-label="Controles de acessibilidade">
        <button id="btn-diminuir-texto" aria-label="Diminuir tamanho do texto">A-</button>
        <button id="btn-aumentar-texto" aria-label="Aumentar tamanho do texto">A+</button>
        <button id="btn-contraste" aria-label="Alternar modo de alto contraste" aria-pressed="false">Alto Contraste</button>
    </nav>

    <main>
        <h1>Título da Página</h1>
        <p>Este texto se adapta ao tamanho escolhido e guarda as preferências no navegador mesmo ao atualizar a página.</p>
    </main>

    <!-- INCLUSÃO DO SEU SCRIPT JAVASCRIPT -->
    <script src="script.js"></script>
</body>
</html>