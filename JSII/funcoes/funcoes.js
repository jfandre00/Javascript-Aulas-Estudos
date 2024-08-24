function entradaNotas() {
    const quantidadeNotas = 3
    let todasNotas = [];
    for (let i = 0; i < quantidadeNotas; i++) {
        const nota = parseFloat(prompt(`Digite a ${i+1}ª nota`));
        todasNotas.push(nota);
    }
    return todasNotas;
}

function calcularMedia(asNotas) {
    let somaNotas = 0;
    for(let i=0; i < asNotas.length; i++) {
        somaNotas += asNotas[i];
    }
    return somaNotas/asNotas.length;
}

function situacaoAluno(aMedia) {
    if (aMedia >= 7) {
        return "Aprovado com média " + aMedia.toFixed(2);
      } else if (aMedia >= 5) {
        return "Recuperação com média " + aMedia.toFixed(2);
      } else {
        return "Reprovado com média " + aMedia.toFixed(2);
      } 
}

let notas = entradaNotas();
let media = calcularMedia(notas);
alert(situacaoAluno(media));






