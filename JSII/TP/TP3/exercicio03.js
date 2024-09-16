function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}
function produto(a, b) {
    return a * b;
}   


const numeros1 = [1, 2, 3, 4];
const numeros2 = [5, 6, 7, 8];

for (let i=0; i < numeros1.length; i++) {
    const somaResultado = soma(numeros1[i], numeros2[i]);
    const diferencaResultado = subtracao(numeros1[i], numeros2[i]);
    const produtoResultado = produto(numeros1[i], numeros2[i]);
    
    console.log(`Soma: ${somaResultado} -> Diferença: ${diferencaResultado} -> Produto: ${produtoResultado}`);
}

// Forma utilizando objetos e tratando erro de tamanho de array

/* function calcularTudo(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return "Os arrays devem ter o mesmo comprimento.";
    }

    let resultados = {
        soma: [],
        subtracao: [],
        produto: []
    };

    for (let i = 0; i < arr1.length; i++) {
        resultados.soma.push(soma(arr1[i], arr2[i]));
        resultados.subtracao.push(subtracao(arr1[i], arr2[i]));
        resultados.produto.push(produto(arr1[i], arr2[i]));
    }

    return resultados;
}

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function produto(a, b) {
    return a * b;
}

const numeros1 = [1, 2, 3, 4];
const numeros2 = [5, 6, 7, 8];

const resultados = calcularTudo(numeros1, numeros2);
console.log(resultados); */
