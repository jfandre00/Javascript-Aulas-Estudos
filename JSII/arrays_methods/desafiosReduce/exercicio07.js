// Somar valores de um array de objetos

const objetos = [
    {valor: 10},
    {valor: 20},
    {valor: 30}
];

const somaDoObjeto = objetos.reduce((somaTotal, objetoAtual) => somaTotal + objetoAtual.valor, 0);

console.log(somaDoObjeto);
