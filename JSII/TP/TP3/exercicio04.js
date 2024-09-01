function somarLista(lista) {
    return lista.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

function multiplicarLista(lista) {
    return lista.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
}

const lista = [10, 20, 30, 40];

console.log(`Soma dos elementos da lista: ${somarLista(lista)}\nMultiplicação dos elementos da lista: ${multiplicarLista(lista)}`);






