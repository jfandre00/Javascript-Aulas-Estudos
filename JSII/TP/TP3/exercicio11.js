function areaRetangulo(base, altura) {
  return base * altura;
}

const areaRetanguloArrow = (base, altura) => base * altura;

const base = 5; 
const altura = 8;

console.log(`Área do retângulo usando função tradicional: ${areaRetangulo(base, altura)}`);
console.log(`Área do retângulo usando arrow function: ${areaRetanguloArrow(base, altura)}`);