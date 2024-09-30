// O que são funções anônimas?
// São funções que não possuem nome, são criadas diretamente no local onde são utilizadas.
function receberArrowFunction(funcaoAnonima) {
    funcaoAnonima();
}

receberArrowFunction((a,b) => {
    console.log("função criada");
});

// Usos comuns de funções anônimas
const notas = [1, 9, 3, 5, 7];
const notasPassaram = notas.filter(nota => nota >= 7);
console.log(notasPassaram);


//Ordenar um array de números

const asNotas = [100, 20, 45, 76, 1, 6];
const ordenados = asNotas.sort();
console.log(ordenados); // [1, 100, 20, 45, 6, 76] o JavaScript ordena considerando uma string. 

//Como melhorar isso?

const ordenadosMelhor = asNotas.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
})

console.log(ordenadosMelhor); // [1, 6, 20, 45, 76, 100]

const funcaoAnonima = () => {
    console.log("função anônima em constante");
}

function funcaoAnonima2 () {
    console.log("função anônima normal");
}

funcaoAnonima();
funcaoAnonima2();   

//-----------------

const aFuncaoAnonima = valor => valor*3; // Se eu tenho apenas uma linha de código, eu posso omitir o return e as chaves

const valor = aFuncaoAnonima(150);
console.log(valor);