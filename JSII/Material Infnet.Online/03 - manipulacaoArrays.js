
//index           0          1            2       3
const doces = ["cocada", "brigadeiro", "alfajor", "bala"];

const valorRemovido = doces.shift(); //remove o primeiro elemento do array

doces.unshift("bala"); //adiciona um elemento no inicio do array

const ultimoElemento = doces.pop(); //remove o último elemento do array

doces.push("chocolate"); //adiciona um elemento no final do array

console.log(doces);

const comprimento = doces.length;

console.log("O elemento removido é " + valorRemovido);

console.log("O último elemento da minha lista doces é " + doces[comprimento-1]);

console.log("O último elemento da minha lista doces é " + ultimoElemento);