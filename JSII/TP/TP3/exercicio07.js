function fatorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

function fatorialLista(lista) {
    return lista.map((valor) => fatorial(valor));
}


const valores = [3, 4, 5];
console.log(`Fatoriais dos elementos: ${fatorialLista(valores)}`);

