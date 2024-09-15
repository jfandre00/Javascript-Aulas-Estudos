//Calcular o produto de um array

const numeros = [2, 3, 4];

const produto = numeros.reduce((acumulador, numeroAtual) => acumulador * numeroAtual, 1);

console.log(produto);
