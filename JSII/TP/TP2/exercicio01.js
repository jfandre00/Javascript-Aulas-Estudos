let pares = [];

function contarPares() {
    for (let i=1; i<=20; i++) {
        if (i%2 == 0) {
            pares.push(i);
        }
    }
}

contarPares();
console.log(`Os números pares de 1 a 20 são: ${pares}`);