let i = 0;
while (i < 10) {
    //comandos do loop
    i++;
};

for (let j = 0; j < 10; j++) {
    //comandos do loop
}; //a variável j só existe dentro do bloco do for

//for em ordem descrecente

for (let i = 10; i > 0; i--) {
    console.log(i);
}

for (let i = 0; i < 100; i = i +5) {
    console.log(i);
}

for (let i = 1000; i >10; i /= 5) {
    console.log(i);
}


for (let i = 2; i < 1000; i = Math.pow(i, 2)) {
    console.log(i); 
}

for (let comida = 1; comida < 100; comida += 5) {
    console.log("A comida é " + comida);
}

for (let pop =1; pop < 100; pop *= 5) {
    console.log("A população é " + pop);
}


const doces = ["alfajor", "bolo", "cocada", "pirulito", "bala"];;
for (let i = 0; i < doces.length; i++) {
    console.log("O meu doce é " + doces[i]);
}

//Iteração cocm condicionais
console.log("Iteração com condicionais\n\n");

for (let i=0; i  < doces.length; i++) {
    if (doces[i].charAt(0) === "b") {
        console.log("O meu doce é " + doces[i]);
    }
}