function soma(x, y) {
    const resultado = x + y;
    return resultado;
};

const z = soma(2,4);

console.log(z);

const dividendo = 43;
const divisor = 5;

function dividir(dividendo, divisor) {
    resultado = dividendo / divisor;
    return resultado;
};

const valorDaDivisao = dividir(dividendo, divisor);
console.log(valorDaDivisao);

function dividirEArredondar(x, y) {
    const valorCru = dividir(x, y);
    return Math.round(valorCru);
}

const valorArredondado = dividirEArredondar(43, 5);
console.log(valorArredondado);

const idadeUsuario = 19;
const alistamento = true;


if (idadeUsuario > 18 && alistamento) {
    console.log("O usuário é apto ao trabalho.");
} else {
    console.log("O usuário não é apto ao trabalho.");
};

//Como a função me ajuda com o problema, se as condições forem aumentando?

function verificarAptidao(idade, alistamento) {
    const maiorIdade = idade > 18;
    return maiorIdade && alistamento;
}

if(verificarAptidao(idadeUsuario, alistamento)) {
    console.log("O usuário é apto ao trabalho.");
} else {
    console.log("O usuário não é apto ao trabalho.");
};

// Mais de um retorno na função

function calcularAreaGenerico(lado, altura, nomeDaArea) {
    switch(nomeDaArea) {
        case 'quadrado':
            return lado * lado;
        case 'triangulo':
            return (lado * altura)/2;
        default:
            return 'Área não identificada';
    };
}

const areaQuadrado = calcularAreaGenerico(5, 5, 'quadrado');
console.log(areaQuadrado);
const areaTriangulo = calcularAreaGenerico(5, 5, 'triangulo');
console.log(areaTriangulo);

function calcularAreaRetangulo(lado, altura) {
    return lado * altura;
}

function calcularAreaTriangulo(lado, altura) {
    return (lado * altura)/2;
}

//Função que recebe as funções como parâmetro

function calcularArea(lado, altura, funcaoDeArea) {
    return funcaoDeArea(lado, altura);
}

const resultado2 = calcularArea(5, 5, calcularAreaRetangulo); //O nome da função é passado sem os parênteses

console.log(resultado2);

