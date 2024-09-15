//Somar Valores de um Array

const exemplo = [1, 2, 3, 4, 5];

const soma = exemplo.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(soma);
