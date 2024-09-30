//Repetições com forEach

//O forEach é um método que percorre um array e executa uma função para cada elemento do array. Ele é uma forma mais simples de percorrer um array do que o for.

let doces = ["alfajor", "bolo", "cocada"];
doces[5] = "pudim";
doces[7] = "torta";

for (doce of doces) {
    console.log(doce);
};

doces.forEach((doce, index) => {
    const doceAlterado = doce + " - posição: " + index;
    console.log(doceAlterado);
});

console.log(doces);
//conseguimos pegar o index do array e o array completo

doces.forEach((doce) => {
    console.log(doce.toLocaleUpperCase());
});

console.log(doces);


const frase = "fui ao shopping";    

frase.split(" ").forEach((palavra) => {
    console.log(palavra);
});

doces.forEach((doce) => {
    doce = "bala";
    console.log(doce);
});

console.log(doces); //não altera o array original

//Como alterar o array original com forEach

doces = ["alfajor", "bolo", "cocada"];

doces.forEach((doce, index, array) => {
    console.log(array);
    console.log(doce);
    array[index] = index;
});

console.log(doces);

