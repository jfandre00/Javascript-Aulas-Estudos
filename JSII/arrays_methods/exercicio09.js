const exemplo = ["cachorro", "gato", "elefante"];

const primeiraLetra = exemplo.map(animal => animal[0]);

const primLetra = exemplo.map(animal => animal.charAt(0).toUpperCase());

console.log(primeiraLetra);
console.log(primLetra);