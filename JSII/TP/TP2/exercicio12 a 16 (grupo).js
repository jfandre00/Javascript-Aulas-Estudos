function calcularTotalDiario(asVendas) {
    for (let i = 0; i < asVendas.length; i++) {
        for (let j = 0; j < asVendas[i].length; j++) {
            // Somar todos os valores dentro de vendas[i] e armazenar em totaisDiarios[i]
            if (totaisDiarios[i] == undefined) {
                totaisDiarios[i] = 0;
            }
            totaisDiarios[i] += asVendas[i][j];
        }
    }
    for (let i = 0; i < totaisDiarios.length; i++) {
        console.log(`Total de vendas para ${diaDaSemana[i]}: ${totaisDiarios[i]}`);
    }
}

function calcularMediaVendas(osTotaisDiarios) {
    let totalGeralVendas = 0;
    let mediaVendas = 0;
    for (let diaDeVendas of osTotaisDiarios) {
        totalGeralVendas += diaDeVendas;
        mediaVendas = totalGeralVendas / 7;
    }
    console.log(`Média de vendas diárias: ${mediaVendas}`);
}

function encontrarMelhorPiorDia(osTotaisDiarios) {
    let melhorDia = 0;
    let piorDia = 0;
    for (let i = 0; i < osTotaisDiarios.length; i++) {
        if (osTotaisDiarios[i] > osTotaisDiarios[melhorDia]) {
            melhorDia = i;
        }
        if (osTotaisDiarios[i] < osTotaisDiarios[piorDia]) {
            piorDia = i;
        }
    }
    console.log(`Melhor dia de vendas: ${diaDaSemana[melhorDia]}`);
    console.log(`Pior dia de vendas: ${diaDaSemana[piorDia]}`);

}

function filtrarVendasAcimaDe(osTotaisDiarios, valorMinimo) {
    let diasVendasSuperiores = [];
    for (let totalDiario in osTotaisDiarios) {
        if (osTotaisDiarios[totalDiario] > valorMinimo) {
            diasVendasSuperiores.push(diaDaSemana[totalDiario]);
           
        }
    }
    return diasVendasSuperiores;
}

let totaisDiarios = [];
let melhoresDias = [];
const minimoDeVendas = 550;
const diaDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];
const vendas = [
    [150, 200, 120], // Segunda-feira
    [180, 230, 140], // Terça-feira
    [160, 210, 130], // Quarta-feira
    [170, 220, 150], // Quinta-feira
    [190, 240, 160], // Sexta-feira
    [200, 250, 170], // Sábado
    [210, 260, 180] // Domingo
];

calcularTotalDiario(vendas);
calcularMediaVendas(totaisDiarios);
encontrarMelhorPiorDia(totaisDiarios);
melhoresDias = filtrarVendasAcimaDe(totaisDiarios, minimoDeVendas);
console.log(`Dias de vendas acima de ${minimoDeVendas}: ${melhoresDias}`); 
