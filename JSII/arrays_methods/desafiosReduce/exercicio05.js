//Calcular a Média dos números de um array

const numeros = [10, 20, 30, 40, 50];

const media = numeros.reduce((somaTotal, numeroAtual) => somaTotal + numeroAtual, 0) / numeros.length;

console.log(media);

