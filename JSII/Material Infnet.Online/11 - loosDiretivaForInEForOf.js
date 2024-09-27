// For in e For of precisam de uma lista.

const dinamico = [true, "andre", 8];

for (let item of dinamico) {
    console.log(item);
}

for (let index in dinamico) {
    console.log(index); //retorna o índice
}

// Como faríamos o for classico?

for (let i = 0; i < dinamico.length; i++) {
    console.log(dinamico[i]);
}

for (let i=0; i < dinamico.length; i++) {
    console.log(i);
}

const doces = ["nutella", "chocolate"];
doces[6] = "bolo";

for (let doce of doces) {
    console.log(doce);
}

for (let doce in doces) {
    console.log(doce);
} //retornou somente os itens da lista que foram definidos.

const floatAleatorio = Math.random() * 10;
const indexAleatorio = Math.floor(floatAleatorio);
console.log("O index aleatório é igual a : " + indexAleatorio);

doces[indexAleatorio] = "brigadeiro";

for (let doce of doces) {
    console.log(doce);
}

for (let index in doces) {
    console.log(index + " - " + doces[index]);
}

const dinamico2 = ["nutella", undefined, "chocolate"];

for (let item of dinamico2) {
    //console.log(item.toUpperCase()); //erro pois undefined não tem toUpperCase
    if (typeof item === "string") {
        console.log(item.toUpperCase());
    }
}

dinamico2[1] = "brigadeiro";
dinamico2[6] = "bolo";

for (let index in dinamico2) {
    console.log(dinamico2[index].toUpperCase());
}