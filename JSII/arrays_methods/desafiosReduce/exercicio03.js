//Encontrar o maior númerio de um array
const numeros = [10, 40, 5, 30];

const maior = numeros.reduce((maiorNumero, numeroAtual) => {
    if (numeroAtual > maiorNumero) {
        return numeroAtual;
    }
    return maiorNumero;
}, 0);

console.log(maior);