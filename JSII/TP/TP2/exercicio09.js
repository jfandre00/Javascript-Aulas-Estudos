function somarArray(lista) {
    let soma = 0;
    for (let numero of lista) {
        soma += numero;
    }
    console.log(`A soma dos elementos do array é ${soma}.`);
}

const numerosArray = [5, 10, 15, 20];
somarArray(numerosArray); 