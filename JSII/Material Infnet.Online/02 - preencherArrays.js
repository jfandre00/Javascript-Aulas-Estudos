//Instanciar Arrays
const doces = ["brigadeiro", "alfajor", "cocada"];
const doces2 = new Array("brigadeiro", "alfajor", "cocada");

//Atribuir valores pelo index do Array

doces[1] = "bala";
doces[3] = "chocolate";
doces[5] = "pé de moleque";

const arrayDinamico = ["Andre", 1001, true];



console.log(doces);
console.log(doces2);

console.log(arrayDinamico);

console.log("O último elemento da minha lista doces2 é " + doces2[2]);