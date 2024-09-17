// #### FILTER ####

// ######### FÁCIL

const valoresA = [10, 15, 20, 25, 30];
const valoresB = [1, 5, 2, 7, 8];
const valoresC = [100, 150, 200, 250, 300];

const filtrarValoresPares = (osValores) => osValores.filter(valor => valor % 2 === 0);

console.log(filtrarValoresPares(valoresA)); // [10, 20, 30]
console.log(filtrarValoresPares(valoresB)); // [2, 8]
console.log(filtrarValoresPares(valoresC)); // [100, 200, 300]

// ######### INTERMEDIÁRIO

const programadores = [
    { nome: 'Arthur', idade: 30 },
    { nome: 'Danilo', idade: 50 },
    { nome: 'Larissa', idade: 20 },
    { nome: 'Matheus', idade: 40 }
];

const filtrarProgramadoresVelhos = (devs) => devs.filter(dev => dev.idade > 25);

console.log(filtrarProgramadoresVelhos(programadores)); // [ { nome: 'Arthur', idade: 30 }, { nome: 'Danilo', idade: 50 }, { nome: 'Matheus', idade: 40 } ]

console.log("FILTER - INTERMEDIÁRIO: " + filtrarProgramadoresVelhos(programadores));

console.table(filtrarProgramadoresVelhos(programadores));

console.log(JSON.stringify(filtrarProgramadoresVelhos(programadores), null, 2));


// ######### DIFÍCIL

const disciplinas = [
    "JavaScript básico",
    "O intermediário do JavaScript",
    "Python para doidos",
    "Java para Mateus",
    "Outras disciplinas"
];

const filtrarJavascript = (textos) => textos.filter(texto => texto.includes("Java"));

console.log("FILTER - AVANÇADO: " + filtrarJavascript(disciplinas)); 

// ########## INCLUDES ##########

// ######### FÁCIL

const posicoes = ["goleiro", "lateral", "zagueiro", "atacante"];

const existePosicao = (asPosicoes, posicao) => asPosicoes.includes(posicao);

console.log("INCLUDES - FÁCIL: " + existePosicao(posicoes, "goleiro"));
console.log("INCLUDES - FÁCIL: " + existePosicao(posicoes, "meia"));


// ######### INTERMEDIÁRIO

const filtrarPorLetra = (minhasPosicoes, letra) => minhasPosicoes.filter(posicao => posicao.includes(letra));


console.log("INCLUDES - INTERMEDIÁRIO: " + filtrarPorLetra(posicoes, "g"));

console.log("INCLUDES - INTERMEDIÁRIO: " + filtrarPorLetra(posicoes, "e"));

// ######### DIFÍCIL

// o some é um método que verifica se pelo menos um elemento do array atende a condição
// se pelo menos um atender, ele retorna true, senão, false

const verificarExistencia = (todasDisciplinas, textoDisciplina) => todasDisciplinas.some(disciplina => disciplina.includes(textoDisciplina)); 

console.log("INCLUDES - DIFÍCIL: " + verificarExistencia(disciplinas, "JavaScript"));

console.log("INCLUDES - DIFÍCIL: " + verificarExistencia(disciplinas, "André"));
