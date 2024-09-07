//Reduce

//Fácil

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

//q: qual a necessidade do ,0 no final?
//r: O segundo argumento do método reduce é o valor inicial do acumulador. Se não for passado, o valor inicial é o primeiro elemento do array.

console.log(soma);

//Intermediário

const osProdutosVendidos = [
    {nome: 'Mouse', preco: 30},
    {nome: 'Teclado', preco: 50},
    {nome: 'Monitor', preco: 100},
];

// usar o reduce de forma normal:
const valorTotal = osProdutosVendidos.reduce((total, produto) => total + produto.preco, 0);
console.log(valorTotal);

const osProdutosComprados = [
    {nome: 'Bola', preco: 10},
    {nome: 'Mala', preco: 50},
    {nome: 'Chuteira', preco: 100}
];

//Podemos fazer uma chamada como se fosse uma função

const calcularValorTotal = (vetorDeProduto) => vetorDeProduto.reduce((total, produto) => total + produto.preco, 0);

console.log(calcularValorTotal(osProdutosVendidos));
console.log(calcularValorTotal(osProdutosComprados));

//Difícil


