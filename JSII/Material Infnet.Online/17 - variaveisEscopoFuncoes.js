//1. Revisão de variáveis locais com let e const
if (true) {
    var i = "sem inicialização";
}
console.log(i); // Se for criada como var ela será acessível, se for let ou const não será acessível. Você consegue recriar a variável i com let ou const e atribuir um valor a ela. Isso não é muito seguro, pois você pode recriar a variável sem querer.

//2. Ver os diferentes escopos dentro de funções
function imprimeFor() {
    const doce = "chocolate";
    if(true) {
        //const doce = "chocolate";
        console.log(doce); 

    }
    for(let i = 0; i < 3; i++) {
        console.log(doce); // Se você tentar acessar a variável doce, ela não será acessível, pois ela está dentro de um bloco if e não dentro do bloco for.
    }
}
imprimeFor();

function calculoVolumeParalelepipedo() {
    const largura = 10;
    const altura = 10;
    const comprimento = 20;
    const area = calculoAreaRetangulo(largura, comprimento);    
    console.log(area * altura); 
}

function calculoAreaRetangulo(largura, comprimento) {
    return largura * comprimento
}

//Se você não colocar const ou let na frente da variável, ela será considerada global e poderá ser acessada em qualquer lugar do código, mesmo estando dentro de uma função. Isso não é recomendado, pois pode causar problemas no código.

calculoVolumeParalelepipedo();

function loopExterno() {
    for(let i = 0; i < 3; i++) {
        console.log("loop externo i = " + i);
        loopInterno();
    }
}

function loopInterno() {
    for(let i = 0; i < 3; i++) {
        console.log("loop interno i = " + i);
    }
}

loopExterno();

//3. Revisão de variáveis globais

const global = "global";

function funcaoNormal() {
    console.log(global);
    if(true) {
        console.log(global);
    }
}

for (let i = 0; i < 3; i++) {
    console.log(global);
}

funcaoNormal();
