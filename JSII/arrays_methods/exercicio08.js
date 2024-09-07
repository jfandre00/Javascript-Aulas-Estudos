//Adicionar Prefixo a Nomes
//Dado um array de nomes, use o map para adicionar o prefixo "Sr(a). " a cada nome.
//Array de exemplo: ["Carlos", "Ana", "Pedro"]
//Resultado esperado: ["Sr(a). Carlos", "Sr(a). Ana", "Sr(a). Pedro"]

// Array de exemplo
const nomes = ["Carlos", "Ana", "Pedro"];

const nomesComPrefixo = nomes.map(nome => `Sr(a). ${nome}`);

console.log(nomesComPrefixo); 
