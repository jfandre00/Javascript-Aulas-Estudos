/* Desafio 2: Comidas
1 - Crie um array chamado comidas, já populado com pelo menos cinco nomes de comidas. Em seguida, execute as seguintes operações:
2 - Remova a última comida da lista e armazene o resultado em ultimaComidaRemovida (Popping).
3 - Adicione uma nova comida ao final da lista (Pushing).
4 - Remova a primeira comida da lista e armazene o resultado em primeiraComidaRemovida (Shifting).
5 - Adicione uma nova comida ao início da lista (Unshifting).
6 - Crie uma nova lista com as três primeiras comidas da lista original e armazene o resultado em tresPrimeirasComidas (Slicing).
7 - Remova duas comidas da lista original a partir do segundo índice e adicione duas novas comidas no lugar delas (Splicing). Exiba a lista resultante. */

let comidas = ["macarronada", "feijoada", "salada", "salpicão", "rocambole"];

const ultimaComidaRemovida = comidas.pop(-1);

comidas.push("churrasco");

const primeiraComidaRemovida = comidas.shift();

comidas.unshift("salada de frutas");

const tresPrimeirasComidas = comidas.slice(0, 3);

console.log(comidas)

comidas.splice(2,2,"bolo", "bacalhoada")

console.log(comidas)
