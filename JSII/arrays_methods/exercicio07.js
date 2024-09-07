const numeros = [4, 9, 16, 25];

const raizQuadrada = numeros.map((numero) => Math.sqrt(numero));

console.log(raizQuadrada); 

const raizQuadrada2 = numeros.map(numero => numero ** 0.5);

console.log(raizQuadrada2);