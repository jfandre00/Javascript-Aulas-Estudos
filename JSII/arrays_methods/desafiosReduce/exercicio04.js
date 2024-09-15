//Contar ocorrências de valores

const letras = ["a", "b", "a", "c", "b", "a"];

const ocorrencias = letras.reduce((acumulador, letra) => {
    if (acumulador[letra]) {
        acumulador[letra]++;
    } else {
        acumulador[letra] = 1;
    }
    return acumulador;
}, {});

console.log(ocorrencias);