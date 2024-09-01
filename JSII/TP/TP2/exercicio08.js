function contarCarateres(frase) {
    let totalCaracteres = 0;
    for (letra of frase) {
        totalCaracteres++;
    }
    return totalCaracteres;
}

const mensagem = "Olá, mundo!";
console.log(`A mensagem tem ${contarCarateres(mensagem)} caracteres.`);



