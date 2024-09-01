function multiplicarArray(vetor){
    let resultados = [];
    for (let i = 0; i < vetor.length; i++){
        resultados.push(vetor[i] * 3);
    }
    return resultados;
}


const resultado = multiplicarArray([1, 2, 3, 4, 5]);
console.log(resultado);