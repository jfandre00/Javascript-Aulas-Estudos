// Funções ajudam a encapsular código e reutilizá-lo em diferentes partes do programa. 

function gerarLog(numeroDaEtapa) {
    console.log("Etapa realizada com sucesso. Etapa " + numeroDaEtapa);
}

gerarLog(1);
const x = 2;

gerarLog(2);
const y = 4;

gerarLog(3);
const z = 2 + 4;

console.log("O resultado de z é " + z);

function soma(x, y = 10) { // O valor padrão de y é 10, caso nenhum valor seja passado.
    console.log("A soma de x e y é " + (x + y));
}	

soma(2,4);

soma(10);

const lado = 15.774;
const altura = 20.12;

function calcularAreaDoRetangulo(lado, altura) {
    const valorArea = lado * altura;
    const valorArredondado = Math.round(valorArea);
    console.log("A área do retângulo é " + valorArredondado);
};

calcularAreaDoRetangulo(lado, altura);