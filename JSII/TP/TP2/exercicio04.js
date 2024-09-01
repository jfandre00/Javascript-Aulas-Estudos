function exibirCarro() {
    const carro = {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2020
    }
    for (caracteristica in carro) {
        console.log(caracteristica + ': ' + carro[caracteristica]);
    }
}

exibirCarro();