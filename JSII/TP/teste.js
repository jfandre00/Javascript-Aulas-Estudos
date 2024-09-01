lista = [10, 20, 30, 40];

somar = lista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(somar);

multiplicar = lista.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
console.log(multiplicar);