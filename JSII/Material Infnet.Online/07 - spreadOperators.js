//Operadores de Espalhamento

const array1 = [3, 2, 6];
const array2 = [5, array1];
const array = [5];

console.log(array2); // [5, [3, 2, 6]]

console.log(array2.length); // 2

const array3 = array.concat(array1);

console.log(array3); // [5, 3, 2, 6]

//Spread operator

const array4 = [5, ...array1]; //está espalhando os elementos de array1 dentro de array4

console.log(array4); // [5, 3, 2, 6]

const array5 = [5, ...array1, 7, 8, 9]; //está espalhando os elementos de array1 dentro de array5
console.log(array5); // [5, 3, 2, 6, 7, 8, 9]

const array6 = [5, ...array1, ...array, 7, 8, 9]; //está espalhando os elementos de array1 dentro de array6
console.log(array6); // [5, 3, 2, 6, 5, 7, 8, 9]

Math.max(...array6); // 9

const saquinhoDeFesta1 = ["alfajor", "cocada"];
const saquinhoDeFesta2 = ["bolo", "nutella"];
const saquinhoDeFesta3 = ["pirulito", "bala"];

const doces = [...saquinhoDeFesta1, ...saquinhoDeFesta2, ...saquinhoDeFesta3];

console.log(doces); // ["alfajor", "cocada", "bolo", "nutella", "pirulito", "bala"]

const doces2 = [];
doces2.push(...saquinhoDeFesta1, ...saquinhoDeFesta2, ...saquinhoDeFesta3);
console.log(doces2); // ["alfajor", "cocada", "bolo", "nutella", "pirulito", "bala"]
