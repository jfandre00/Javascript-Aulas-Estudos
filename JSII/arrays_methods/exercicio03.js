//Extrair Nomes de Objetos

//Dado um array de objetos com propriedades nome e idade, utilize o map para criar um array apenas com os nomes.
//Array de exemplo: [{ nome: "João", idade: 25 }, { nome: "Maria", idade: 30 }]
//Resultado esperado: ["João", "Maria"]

const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 }
];

const nomes = pessoas.map(pessoa => pessoa.nome);

console.log(nomes)