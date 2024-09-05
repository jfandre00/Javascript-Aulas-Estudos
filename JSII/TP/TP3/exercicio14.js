//Crie uma função chamada calcularMedia que recebe um array de números e retorna a média desses números.
/* function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
} */
function calcularMedia(notas) {
    const soma = notas.map(nota => nota).reduce((acc, curr) => acc + curr, 0);
    return (soma / notas.length).toFixed(2);
}

//Crie uma função chamada atualizarSituacao que, utilizando a média, atualize a situação do estudante para "Aprovado" ou "Recuperação".
function atualizarSituacao(estudante) {
    let media = calcularMedia(estudante.notas);
    if (media >= 7) {
        estudante.situacao = 'Aprovado';
    } else {
        estudante.situacao = 'Recuperação';
    }
}

//Implemente uma função recorrente verificarRecuperacao que receba a lista de estudantes e, de forma recorrente, encontre todos que estão em recuperação, devolvendo uma lista separada
/* function verificarRecuperacao(estudantes) {
    let estudantesRecuperacao = [];
    for (let i = 0; i < estudantes.length; i++) {
        if (estudantes[i].situacao === 'Recuperação') {
            estudantesRecuperacao.push(estudantes[i]);
        }
    }
    return estudantesRecuperacao;
} */
function verificarRecuperacao(estudantes) {
    return estudantes.filter(estudante => estudante.situacao === 'Recuperação');
}

//Crie uma função gerarRelatorio que exiba um relatório final com o nome, notas, média e situação de cada estudante.
function gerarRelatorio(estudantes) {
    for (let i = 0; i < estudantes.length; i++) {
        atualizarSituacao(estudantes[i]);
        console.log(`Nome: ${estudantes[i].nome}`);
        console.log(`Notas: ${estudantes[i].notas}`);
        console.log(`Média: ${calcularMedia(estudantes[i].notas)}`);
        console.log(`Situação: ${estudantes[i].situacao}`);
        console.log('----------------------');
    }
}

//Crie um array chamado estudantes para armazenar os dados dos alunos. Cada estudante deve ser representado como um objeto com as propriedades: nome, notas (um array de números) e situação (inicialmente vazio)

estudantes = [
    {
        nome: 'João',
        notas: [5, 7, 8],
        situacao: ''
    },
    {
        nome: 'Maria',
        notas: [10, 7, 8],
        situacao: ''
    },
    {
        nome: 'José',
        notas: [5, 7, 3],
        situacao: ''
    },
    {
        nome: 'Ana',
        notas: [9, 7, 8],
        situacao: ''
    },
    {
        nome: 'Carlos',
        notas: [5, 7, 8],
        situacao: ''
    }
];

for (let i = 0; i < estudantes.length; i++) {
    calcularMedia(estudantes[i].notas);
    console.log("Média do aluno " + estudantes[i].nome + ": " + calcularMedia(estudantes[i].notas));
}

for (let i = 0; i < estudantes.length; i++) {
    atualizarSituacao(estudantes[i]);
    console.log("Situação do aluno " + estudantes[i].nome + ": " + estudantes[i].situacao);
}

console.log(verificarRecuperacao(estudantes));

gerarRelatorio(estudantes);