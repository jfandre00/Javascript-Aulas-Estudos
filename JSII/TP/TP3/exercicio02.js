function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}   

function divisao(a, b) {
    if (b == 0) {
        return "Divisão por zero não é permitida";
    } else {
        return a / b;
    }
}

function calcularTudo(a, b) {
    let objetoCalculado = {};
    objetoCalculado.soma = soma(a, b);
    objetoCalculado.subtracao = subtracao(a, b);
    objetoCalculado.multiplicacao = multiplicacao(a, b);
    objetoCalculado.divisao = divisao(a, b);
    return objetoCalculado;

}


console.log(divisao(10, 2));
console.log(calcularTudo(10,2));

//como mostar esse objeto no alert?
//alert(calcularTudo(10,2)); // não funciona
//alert(JSON.stringify(calcularTudo(10,2))); // funciona
