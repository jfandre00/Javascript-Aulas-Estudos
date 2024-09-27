const doces = ["alfajor", "bolo", "cocada", "nutella", "pirulito"];

console.log(Math.random()) // Gera um número aleatório entre 0 e 1.

//Se eu quiser um número aleatório entre 0 e 10, eu posso multiplicar o resultado de Math.random() por 10.

let nAleatorio = Math.random() * 5;
let indexAleatorio = Math.floor(nAleatorio); // Arredonda para baixo.


console.log(indexAleatorio);
console.log(doces[indexAleatorio]);

const docesAleatorios = [];

docesAleatorios.push(doces[indexAleatorio]);

nAleatorio = Math.random() * 5;
indexAleatorio = Math.floor(nAleatorio);
docesAleatorios.push(doces[indexAleatorio]);

nAleatorio = Math.random() * 5;
indexAleatorio = Math.floor(nAleatorio);
docesAleatorios.push(doces[indexAleatorio]);

nAleatorio = Math.random() * 5;
indexAleatorio = Math.floor(nAleatorio);
docesAleatorios.push(doces[indexAleatorio]);

nAleatorio = Math.random() * 5;
indexAleatorio = Math.floor(nAleatorio);
docesAleatorios.push(doces[indexAleatorio]);

nAleatorio = Math.random() * 5;
indexAleatorio = Math.floor(nAleatorio);
docesAleatorios.push(doces[indexAleatorio]);

console.log(docesAleatorios);

const saquinhoDeFesta1 = docesAleatorios.slice(0, 2);
console.log("Saquinho de festa 1: ", saquinhoDeFesta1); 

const saquinhoDeFesta2 = docesAleatorios.slice(2, 4);
const saquinhoDeFesta3 = docesAleatorios.slice(4, 6);

console.log("Saquinho de festa 2: ", saquinhoDeFesta2);
console.log("Saquinho de festa 3: ", saquinhoDeFesta3);
