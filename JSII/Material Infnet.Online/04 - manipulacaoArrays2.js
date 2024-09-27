//União de listas com concat
//Juntar elementos da lista em um texto único com join
//"cortar/fatiar" a lista com slice
//Adicionar elementos e "cortar" a lista com splice

const docesCaseiros = ["bolo", "brigadeiro", "cocada"];
const docesFabricados = ["nutella", "chocolate"];
const docesFabricados2 = ["pirulito"]

const docesGerais = docesCaseiros.concat(docesFabricados, docesFabricados2); //podemos adicionar quantos arrays quisermos, é só separar por vírgula

console.log(docesGerais);

const doces = ["bolo", "brigadeiro", "cocada", "pirulito"];

const docesTexto = doces.join(" - "); //junta os elementos do array em um texto único, separando por um traço

console.log(docesTexto);


const docesToString = doces.toString(); //transforma o array em uma string sempre separando os elementos por vírgula - Serve para transformar o objeto array em uma string.

console.log(docesToString);


//Quero cortar esse array em um array menor
//O slice cria um novo array a partir do array original

const docesSlice = doces.slice(1,3); //corta o array a partir do index 1 até o index 3 (não inclui o index 3)

console.log(docesSlice);

//Adicionar elementos e "cortar" a lista com splice. Altera o array original

console.log(doces);
const docesSplice = doces.splice(1,2, "nutella", "chocolate"); //a partir do index 1, remove 2 elementos e adiciona "nutella" e "chocolate" no array original

console.log(doces);
console.log(docesSplice); //retorna os elementos removidos