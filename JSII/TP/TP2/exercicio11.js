function gerarPadraoAsteriscos() {
    for (let i = 1; i <= 5; i++) {
        let linha = '';
        for (let j = 1; j <= i; j++) {
            linha += '*';
        }
        console.log(`${linha}\n`);
        
    }
}

gerarPadraoAsteriscos();