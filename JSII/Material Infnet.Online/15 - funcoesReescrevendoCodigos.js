function sortearElementos(elementos) {
    const elementosAleatorios = [];
    //Sorteio de doces
    let i = 0;
    while (i < elementos.length - 2) {
        const nAleatorio = Math.random() * elementos.length;
        const indexAleatorio = Math.floor(nAleatorio);
        const doceAleatorio = elementos[indexAleatorio];
        if(verificarSeElementoExisteNoArray(elementosAleatorios, doceAleatorio)) {
            continue; //Caso o doce já tenha sido sorteado, ele não será adicionado novamente
        }
        elementosAleatorios.push(doceAleatorio);
        i++;    
    }
    console.log(elementosAleatorios);
    return elementosAleatorios;
}

function verificarSeElementoExisteNoArray(listaAleatoria, elementoSorteado) {
    return listaAleatoria.indexOf(elementoSorteado) !== -1
}

function distribuirPorSaquinhos(elementos) {
    //Distribui para os saquinhos
    i = 0;
    let j = i;
    while (i < 2) {
        j++;
        let saquinhoDeFesta1 = elementos.slice(i, i+2);
        console.log("Saquinho de festas " + i + " é composto por: " + saquinhoDeFesta1);
        i = i + 2;
}
}

//Main
const doces = ["alfajor", "bolo", "cocada", "nutella", "brigadeiro"];
const docesAleatorios = sortearElementos(doces);
distribuirPorSaquinhos(docesAleatorios);