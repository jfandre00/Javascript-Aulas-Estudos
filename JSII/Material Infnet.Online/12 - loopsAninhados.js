//O que são arrays multidimensionais?
//Arrays multidimensionais são arrays que contêm outros arrays. Eles são usados para representar dados em várias dimensões, como matrizes, tabelas, etc. Em JavaScript, você pode criar arrays multidimensionais usando arrays aninhados.

//Exemplo de um array multidimensional em JavaScript:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let n = 0;
for(let i = 0; i < 3; i++) {
    const linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(n);
        n++;
    }
    console.log(linha);
}

n = 0;
let i = 0;
while (i < 3) {
    let j = 0;
    const linha2 = [];
    while (j < 3) {
        linha2.push(n);
        n++;
        j++;
    }
    console.log(linha2);
    i++;
}

const tiposComidas = [["Arroz", "Feijão"], ["Bala", "Cocada"]];

for(let comidas of tiposComidas) {
    for (let comida of comidas) {
        console.log(comida);
    }
}


