/* Desafio 4: Filmes
1 - Crie dois arrays chamados filmesAcao e filmesComedia, já populados com pelo menos três nomes de filmes cada um. Em seguida, execute as seguintes operações:
2 - Combine as duas listas em uma só e armazene o resultado em todosFilmes.
3- Converta a lista de todos os filmes em uma string separada por barras e armazene o resultado em stringFilmes.
4 - Encontre o índice de "Batman" na lista e armazene o resultado em indiceBatman.
5 - Remova "Homem de Ferro" da lista e adicione "Capitão América" no mesmo lugar utilizando splice. Exiba a lista resultante.
6 - Crie uma nova lista com os três últimos filmes da lista e armazene o resultado em ultimosFilmes. */

let filmesAcao = ["Lost", "Batman", "Homem de Ferro"];
let filmesComedia = ["DebiLoide", "Simpsons", "SouthPark"];

let todosFilmes = filmesAcao.concat(filmesComedia);

const stringFilmes = todosFilmes.join(" / ");
console.log(stringFilmes)
const indiceBatman = todosFilmes.indexOf("Batman");

todosFilmes.splice(2,1,"Capitão América");
console.log(todosFilmes);

const ultimosFilmes = todosFilmes.slice(3, 6);

console.log(todosFilmes);
console.log(ultimosFilmes);

