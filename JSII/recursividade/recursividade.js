// valor inicial = 1000
// valor extra = 50
// periodo de atraso = 3 meses
// total = 1000 + 50 * 3 = 1150

function definirSaldo(oValorInicial, oValorExtra, oPeriodo) {
    //O valor inicial vai estar sempre sendo atualizado a cada 1 período.
    if(oPeriodo == 0) { //Ponto de saída da recursão
        return oValorInicial;
    }

    let novoValorInicial = oValorInicial + oValorExtra;
    
    return definirSaldo(novoValorInicial, oValorExtra, oPeriodo-1); //Chamada recursiva
}


const valorInicial = 1000;
const valorExtra = 50;
const periodo = 3;

const saldoFinal = definirSaldo(valorInicial, valorExtra, periodo);

console.log("Saldo Final: " + saldoFinal);


// funcao recursiva fibonacci
function fibonacci(n) {
    if(n == 0) {
        return 0;
    }
    if(n == 1) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

//funcao recursiva fatorial
function fatorial(n) {
    if(n == 0) {
        return 1;
    }
    return n * fatorial(n-1);
}
