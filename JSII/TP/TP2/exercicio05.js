function contarPropriedades(objeto) {
    let contador = 0;
    for (let propriedade in objeto) {
        contador++;
    }
    console.log(`O objeto tem ${contador} propriedades.`);
}

const pessoa = {
    nome: 'André',
    idade: 43,
    profissão: 'Engenheiro Civil'
};

contarPropriedades(pessoa); 