function recursiva(vez) {
    if (vez === 11) {
        return;
    }
    console.log("Esta função foi chamada " + vez + " vezes");
    const proximaVez = ++vez;
    recursiva(proximaVez);

}

recursiva(1);

let vez = 0;
while(true){
    console.log("o while foi executado pela vez: " + vez);
    vez++;
    if(vez > 10){
        break;
    }
};

// Cálculo de fatorial  

function calcularFatorial(numero) {
    if (numero === 1) return 1;
    return numero * calcularFatorial(numero -1);
};

console.log(calcularFatorial(5));