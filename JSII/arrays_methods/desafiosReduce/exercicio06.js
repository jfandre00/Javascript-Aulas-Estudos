// Calcular o fatorial de um Número

const numeros = [1, 2, 3, 4, 5];

const fatorial = numeros.reduce((acumulador, numeroAtual) => acumulador * numeroAtual, 1);

console.log(fatorial);