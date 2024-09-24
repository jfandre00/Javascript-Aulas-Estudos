const estudantes = [
    {nome: "Huguinho", notas: [2, 4, 6], situacao: ""},
    {nome: "Zezinho", notas: [3, 5, 7, 4], situacao: ""},
    {nome: "Luizinho", notas: [4, 6], situacao: ""}
];

function calcularMedia(asNotas) {
    console.log("Notas: " + asNotas);
    const soma = asNotas.reduce((total, nota) => total + nota, 0);
    return soma / asNotas.length;
}

function atualizarSituacao(oEstudante){
    let media = calcularMedia(oEstudante.notas);
    
    oEstudante.situacao = media < 4.5 ? "Recuperação" : "Aprovação";
}

function geracaoRelatorio(){
    console.log("Relatório");

    estudantes.forEach(estudante => {
        let media = calcularMedia(estudante.notas);
        console.log(`[${media.toFixed(2)}] Nome: ${estudante.nome} - (${estudante.situacao})`
            
        );
    });
}

function verificarRecuperacao(osEstudantes, index=0, listaRecuperacao=[]){
    if(index >= osEstudantes.length){
        return listaRecuperacao;
    }
    if (osEstudantes[index].situacao == "Recuperação") {
        listaRecuperacao.push(osEstudantes[index]);
    }
    return verificarRecuperacao(osEstudantes, index+1, listaRecuperacao);
}

estudantes.forEach(atualizarSituacao);

geracaoRelatorio();

const emRecuperacao = verificarRecuperacao(estudantes);

emRecuperacao.forEach(estudante => console.log(estudante.nome));