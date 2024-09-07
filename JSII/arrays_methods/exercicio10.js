const exemplo = [true, false, true];

const resultado = exemplo.map(boleano => boleano ? "Sim" : "Não");

console.log(resultado); 

const outroResultado = exemplo.map(boleano => {
    if (boleano) {
        return "Sim";
    } else {
        return "Não";
    }
});

console.log(outroResultado);