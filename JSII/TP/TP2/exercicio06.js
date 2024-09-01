function exibirElementosArray(array) {
    for (indice in array) {
        console.log(`Índice ${indice} : valor ${array[indice]}`);
    }
}

const arrayNumeros = [10, 20, 30, 40, 50];
exibirElementosArray(arrayNumeros);

