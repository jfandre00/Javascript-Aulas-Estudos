//criar um objeto e devolver o retorno de uma unica vez
//tratar o erro de tamanho de array
//não é bom usar length pois os vetores podem ter tamanhos diferentes

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
    
    console.log(`Soma: ${somaResultado} - Diferença: ${diferencaResultado} - Produto: ${produtoResultado}`);
}

