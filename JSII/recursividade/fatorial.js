function fatorial(oNumero) {
    if (oNumero == 0 || oNumero == 1) {
        return 1;
    }
    return oNumero * fatorial(oNumero - 1);
}

const numero = 5;

console.log("Fatorial de " + numero + " é: " + fatorial(numero));


