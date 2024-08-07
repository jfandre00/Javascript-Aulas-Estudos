/*  Desafio 4: Filmes
1 - Crie um array chamado filmes, já populado com pelo menos cinco nomes de filmes. Em seguida, execute as seguintes operações:
2 - Remova o último filme da lista e armazene o resultado em ultimoFilmeRemovido (Popping).
3 - Adicione um novo filme ao final da lista (Pushing).
4 - Remova o primeiro filme da lista e armazene o resultado em primeiroFilmeRemovido (Shifting).
5 - Adicione um novo filme ao início da lista (Unshifting).
6 - Crie uma nova lista com os três primeiros filmes da lista original e armazene o resultado em tresPrimeirosFilmes (Slicing).
7 - Remova dois filmes da lista original a partir do segundo índice e adicione dois novos filmes no lugar deles (Splicing). Exiba a lista resultante. */

let filmes = ["Simpsons", "Lost", "24 Horas", "Family Guy", "South Park"];
const ultimoFilmeRemovido = filmes.pop();
filmes.push("Prison Break");
const primeiroFilmeRemovido = filmes.shift();
filmes.unshift("American Dad");

const tresPrimeirosFilmes =filmes.slice(0,3);
console.log(tresPrimeirosFilmes);

console.log(filmes);
filmes.splice(2,2,"Sopranos", "Back to the Future");

console.log(filmes);

