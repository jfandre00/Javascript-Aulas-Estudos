//fácil -  utilizando o map

const valores = [1, 2, 3, 4, 5, 6];

const dobro = valores.map((valor) => valor * 2);

console.log(dobro); // [2, 4, 6, 8, 10, 12]


//intermediário

const produtos = [
    { nome: 'Mouse', preco: 30 },
    { nome: 'Teclado', preco: 50 },
    { nome: 'Monitor', preco: 450 },
    { nome: 'Gabinete', preco: 250 },
    { nome: 'Headset', preco: 100 }
];

const aplicacaoDezPorcento = produtos.map((p) => {
    return {
        nome: p.nome,
        preco: p.preco * 0.9
    };
});

console.log(aplicacaoDezPorcento);

//difícil

const alunos = ['João Joza', 'Juliana Brau', 'Caio Pio', 'Ana Maria'];

// ['JJ', 'JB', 'CP', 'AM']
// split, join, toUpperCase

const iniciaisLetras = alunos.map((aluno) => {
    const [primeiroNome, segundoNome] = aluno.split(' ');
    return primeiroNome[0].toUpperCase() + segundoNome[0].toUpperCase();
});

console.log(iniciaisLetras);

const nomes = ["Mayara Araujo", "Carlo Antonio", "Pedro Matias"];

const iniciais = nomes.map((nome) =>
  nome
    .split(" ") 
    .map((palavra) => palavra.charAt(0).toUpperCase()) 
    .join("")
);

console.log(iniciais);

