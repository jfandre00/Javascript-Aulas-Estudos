//Loops - Continue e Break

let i = 0;
while (i < 10) {
    if(i===4) break;
    console.log(i);
    i++;
}


i = 0;
while (i < 10) {
    i++;
    if(i===4) continue; //ignorou o 4
    console.log(i);
}

const doces = ["alfajor", "bolo", "cocada", "pirulito"];

i = 0;
while (i < doces.length) {
    if(doces[i] === 'cocada') break; //interrompe a execução do loop ao encontrar cocada
    console.log(i + " - " + doces[i]);
    i++;
}

i = -1;
while (i < doces.length-1) {
    i++;
    if(doces[i] === 'cocada') continue; //ignora a cocada
    console.log(i + " - " + doces[i]);
}


console.log('---------------------------------');

const doces2 = ["alfajor", "bolo", "cocada", "nutella", "pirulito"];
const docesAleatorios = [];

i = 0;
while (i < doces2.length+1) {
    let nAleatorio = Math.random() * 5;
    let index = Math.floor(nAleatorio);

    //if(docesAleatorios.indexOf(doces2[index]) !== -1) continue;
    docesAleatorios.push(doces2[index]);
    i++;
}

console.log(docesAleatorios);

i = 0;
let j = i;
while (i < 6) {
    j++;
    let saquinhodeFesta = docesAleatorios.slice(i, i + 2);
    console.log("Saquinho de festas " + j + " é composto por " + saquinhodeFesta);
    i = i + 2;
};



