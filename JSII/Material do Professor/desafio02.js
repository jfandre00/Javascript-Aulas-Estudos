/*  Desafio 2: Comidas
1 - Crie dois arrays chamados comidasSalgadas e comidasDoces, já populados com pelo menos três nomes de comidas cada um. Em seguida, execute as seguintes operações:
2 - Combine as duas listas em uma só e armazene o resultado em todasComidas.
3 - Ordene a lista de todas as comidas em ordem alfabética e armazene o resultado em comidasOrdenadas.
4 - Encontre o último índice de "Chocolate" na lista e armazene o resultado em ultimoIndiceChocolate.
5 - Converta a lista ordenada em uma string separada por ponto e vírgula e armazene o resultado em stringComidasOrdenadas.
6 - Crie uma nova lista com apenas as três primeiras comidas da lista ordenada e armazene o resultado em primeirasComidas. */

let comidasSalgadas = ["Pipoca", "Hamburger", "Hot-Dog"];
let comidasDoces = ["Chocolate", "Sorvete", "Açai"];

let todasComidas = comidasSalgadas.concat(comidasDoces);

let comidasOrdenadas = todasComidas.sort();

const ultimoIndiceChocolate = todasComidas.lastIndexOf("Chocolate");

const stringComidasOrdenadas = comidasOrdenadas.join(" ; ");

const primeirasComidas = comidasOrdenadas.slice(0, 3);
console.log(comidasOrdenadas);
console.log(primeirasComidas);


