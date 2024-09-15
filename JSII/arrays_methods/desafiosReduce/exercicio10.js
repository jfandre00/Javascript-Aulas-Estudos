// Contar Palavras em uma Frase
// Dada uma string, use o reduce para contar quantas palavras ela possui.

const exemplo = "Olá, bem-vindo ao mundo do JavaScript";

const palavras = exemplo.split(" ");

const quantidadeDePalavras = palavras.reduce((acumulador, palavra) => acumulador + 1, 0);

console.log(quantidadeDePalavras);

//Outra forma direta, não precisa criar a variável palavras pois o split já retorna um array e queremos contar as palavras, não importa o que está escrito.

const minhaContagemDePalavras = exemplo.split(" ").reduce((contagem) => contagem + 1, 0);

console.log(minhaContagemDePalavras);





