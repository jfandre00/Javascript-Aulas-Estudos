/*  Desafio 3: Esportes
1 - Crie dois arrays chamados esportesIndividuais e esportesColetivos, já populados com pelo menos três nomes de esportes cada um. Em seguida, execute as seguintes operações:
2 - Combine as duas listas em uma só e armazene o resultado em todosEsportes.
3- Converta a lista de todos os esportes em uma string separada por hífen e armazene o resultado em stringEsportes.
4 - Encontre o índice de "Basquete" na lista e armazene o resultado em indiceBasquete.
6 - Remova "Atletismo" da lista e adicione "Ciclismo" no mesmo lugar utilizando splice. Exiba a lista resultante.
5 - Ordene a lista de todos os esportes em ordem alfabética e armazene o resultado em esportesOrdenados. */

let esportesIndividuais = ["Corrida", "Atletismo", "Pilates"];
let esportesColetivos = ["Futebol", "Basquete", "Volei"];

let todosEsportes = esportesIndividuais.concat(esportesColetivos);

const stringEsportes = todosEsportes.join(" - ");
console.log(stringEsportes)

const indiceBasquete = todosEsportes.indexOf("Basquete");
console.log(todosEsportes);
todosEsportes.splice(1,1,"Ciclismo");
console.log(todosEsportes);

const esportesOrdenados = todosEsportes.sort()

console.log(esportesOrdenados);





