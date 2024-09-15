//Achatar um array de arrays

const arrayDeArrays = [
    [1,2], [3,4], [5]
];

const arrayAchatada = arrayDeArrays.reduce((elemento, array) => elemento.concat(array), []);

console.log(arrayAchatada);
