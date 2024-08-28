// Live Coding 4 - Sessão B - Andre Loureiro Montini Ferreira

// 1. Criar um array vazio chamado numeros
let numeros = [];

// 2. Entrada de núm int positivo e add ao array e pergunte depois se quer continuar até o usuário não querer mais inserir números.

let adicionarMais = true;

while (adicionarMais) {
  let numero = parseInt(prompt("Digite por favor um número inteiro e positivo:"));

  if (numero > 0) {
    numeros.push(numero);
  } else {
    alert("Erro! Por favor, entre novamente com um número inteiro e positivo.");
    continue;
  }

  adicionarMais = confirm("Deseja adicionar outro número?")
}

// 3. Percorrer todo o array e obter os dados solicitados:
// 3.1 Soma dos números existentes
// 3.2 Obter a soma de nums que são multiplos de 5
// 3.3 Obter o maior num múltiplo de 5
// 3.3 Obter o menor número de todo o array
// 3.4 Obter o menor número ímpar de todo o array

let somaTotal = 0;
let somaMultiplosCinco = 0;
let maiorMultiploCinco = null;
let menorNumero = null;
let ultimoImpar = null;

for (let i=0; i < numeros.length; i++) {
  let num = numeros[i];
  somaTotal += num;

  if (num % 5 === 0) {
    somaMultiplosCinco += num;

    if (maiorMultiploCinco === null || num > maiorMultiploCinco) {
      maiorMultiploCinco = num;
    }
  }

  if (menorNumero === null || num < menorNumero) {
    menorNumero = num;
  }

  if (num % 2 !== 0) {
    ultimoImpar = num;
  }

  
}




console.log(`A soma dos números existentes é ${somaTotal}`);
console.log(`A soma dos múltiplos de 5 é ${somaMultiplosCinco}`);
if (maiorMultiploCinco !== null) {
  console.log(`O maior múltiplo de 5 é ${maiorMultiploCinco}`);
} else {
  console.log(`Não foram inseridos múltiplos de 5 no array.`);
}
console.log(`O menor número do array é ${menorNumero}`);
if (ultimoImpar !== null) {
  console.log(`O último número ímpar for ${ultimoImpar}`);
} else {
  console.log(`Não há números ímpares no array.`);
}