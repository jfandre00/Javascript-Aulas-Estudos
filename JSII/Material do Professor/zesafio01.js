/* 
Desafio 1: Animais
1 - Crie um array chamado animais, já populado com pelo menos cinco nomes de animais. Em seguida, execute as seguintes operações:
2 - Remova o último animal da lista e armazene o resultado em ultimoAnimalRemovido (Popping).
3 - Adicione um novo animal ao final da lista (Pushing).
4 - Remova o primeiro animal da lista e armazene o resultado em primeiroAnimalRemovido (Shifting).
5 - Adicione um novo animal ao início da lista (Unshifting).
6 - Crie uma nova lista com os três primeiros animais da lista original e armazene o resultado em tresPrimeirosAnimais (Slicing).
7 - Remova dois animais da lista original a partir do segundo índice e adicione dois novos animais no lugar deles (Splicing). Exiba a lista resultante. 
*/

let animais = ["Cachorro", "Gato", "Cavalo", "Elefante", "Pombo"];

const ultimoAnimalRemovido = animais.pop(-1);

animais.push("Macaco");

const primeiroAnimalRemovido = animais.shift();

animais.unshift("Gavião");

const tresPrimeirosAnimais = animais.slice(0, 3);

console.log(animais)

animais.splice(2, 2, "Avestruz", "Baleia")

console.log(animais)



