//Concatenar todas as strings de um array

const exemplo = ["Hello", "world", "!"];

const concatenar = exemplo.reduce((fraseInteira, palavra) => fraseInteira + " " + palavra, "");

console.log(concatenar.trim());
