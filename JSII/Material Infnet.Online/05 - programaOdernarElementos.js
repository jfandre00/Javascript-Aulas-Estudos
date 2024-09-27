const doces = ["cocada", "alfajor", "brigadeiro", "bolo", "alfajor"];

const indexDoAlfajor = doces.indexOf("alfajor"); // 1 - Busca o primeiro elemento que ele encontrar.

const ultimoIndexDoAlfajor = doces.lastIndexOf("alfajor"); // 4 - Busca o último elemento que ele encontrar.

const indexDoPirulito = doces.indexOf("pirulito"); // -1 - Retorna -1 quando não encontra o elemento.

console.log(indexDoAlfajor);    
console.log(ultimoIndexDoAlfajor);

const doces2 = ["cocada", "alfajor", "brigadeiro", "bolo"];

doces2.sort(); // Ordena o array em ordem alfabética.
const indexNovoDoAlfajor = doces2.indexOf("alfajor"); // 0 - O array foi ordenado, então o alfajor agora está na primeira posição.

console.log(doces2)
console.log(indexNovoDoAlfajor);

doces2.reverse(); // Inverte a ordem dos elementos do array.

console.log(doces2);

const numeros = [    1001,    201,    50,    8];

numeros.sort(); // Ordena o array em ordem alfabética.
console.log(numeros); // [ 1001, 201, 50, 8 ] - O método sort ordena os números como se fossem strings. 





