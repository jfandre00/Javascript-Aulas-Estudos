//While e Do While

let i = 0;
while (i<10) {
    console.log(i);
    i++;
}

const doces = ["alfajor", "bolo", "cocada", "pirulito"];

i = 0;
while (i < doces.length) {
    console.log(i + " - " + doces[i]);
    i++;
};

//Diferença entre while e do while

i = 0;

do {
    console.log(i +   " - " + doces[i]);
    i++;
} while (i < doces.length);


i = 0;
do {
    if(i % 2 == 0) {
        console.log(i);
    }
    i = i + 1;
} while (i <= 30);


//Erros comuns
//1 - Esquecer de incrementar a variável de controle
//2 - a variável de controle está sempre multiplicando ou dividindo por 0
