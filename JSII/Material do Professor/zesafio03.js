/* Desafio 3: Esportes
1 - Crie um array chamado esportes, já populado com pelo menos cinco nomes de esportes. Em seguida, execute as seguintes operações:
2 - Remova o último esporte da lista e armazene o resultado em ultimoEsporteRemovido (Popping).
3 - Adicione um novo esporte ao final da lista (Pushing).
4 - Remova o primeiro esporte da lista e armazene o resultado em primeiroEsporteRemovido (Shifting).
5 - Adicione um novo esporte ao início da lista (Unshifting).
6 - Crie uma nova lista com os três primeiros esportes da lista original e armazene o resultado em tresPrimeirosEsportes (Slicing).
7 - Remova dois esportes da lista original a partir do segundo índice e adicione dois novos esportes no lugar deles (Splicing). Exiba a lista resultante. */

let esportes = ["Corrida", "Futebol", "Basquete", "Musculação", "Vôlei"];

const ultimoEsporteRemovido = esportes.pop(-1);
esportes.push("Surf");

const primeiroEsporteRemovido = esportes.shift();

esportes.unshift("Running");

const tresPrimeirosEsportes = esportes.slice(0,3);


console.log(esportes);

esportes.splice(2,2,"Skate","Tiro");

console.log(esportes);