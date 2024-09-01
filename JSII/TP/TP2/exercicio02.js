let somaImpares = 0;

function somarImpares() {
    for (let i=1; i<=15; i++) {
        if (i%2 != 0) {
            somaImpares += i;
        }
    }
}

somarImpares();
console.log(`A soma dos números ímpares de 1 a 15 é: ${somaImpares}`);
