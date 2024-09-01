const numeros = [2, 4, 6, 8];

// Arrow function para calcular o quadrado de cada número
const quadrado = (numeros) => {
    return numeros.map((numero) => numero * numero)
}

console.log(`Quadrado dos números: ${quadrado(numeros)}`)