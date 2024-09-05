//crie uma estrutura de dados chamada tarefas, que é um array de objetos. Cada tarefa deve conter as propriedades id, descricao, concluida (boolean) e prioridade (baixa, média ou alta).

let tarefas = [];
prioridade = ["baixa", "média", "alta"];


//método construtor para criarmos o objeto tarefa
function Tarefa(id, descricao, concluida, prioridade) {
    this.id = id;
    this.descricao = descricao;
    this.concluida = concluida;
    this.prioridade = prioridade;
}

//método para adicionar tarefas ao array tarefas
function adicionarTarefa() {
    let id = document.getElementById("ident").value;
    let descricao = document.getElementById("descricao").value;
    let concluidaCod = document.getElementById("concluida").value;
    let concluida;
    if (concluidaCod == 1) {
        concluida = true;
    } else {
        concluida = false;
    }
    let prioridade;
    let prioridadeCod = document.getElementById("prioridade").value
    switch (prioridadeCod) {
        case "0":
            prioridade = "baixa";
            break;
        case "1":
            prioridade = "média";
            break;
        case "2":
            prioridade = "alta";
            break;
    }
    // Uso da arrow function
    const adicionarTarefa = (id, descricao, concluida, prioridade) => {
        tarefas.push(new Tarefa(id, descricao, concluida, prioridade));
    };
    
    adicionarTarefa(id, descricao, concluida, prioridade);
    alert("Tarefa adicionada com sucesso!");
}

//Crie uma função editarTarefa que permita editar a descrição e prioridade de uma tarefa específica, identificada pelo id, utilizando arrow function.
const editarTarefa = () => {
    let ident = document.getElementById("identEdit").value;
    let tarefa = tarefas.find(tarefa => tarefa.ident == ident);
    let novaDescricao = document.getElementById("descricaoEdit").value;
    let novaPrioridade = document.getElementById("prioridadeEdit").value;
    //adicionar a nova descrição e prioridade
    tarefas[ident][descricao] = novaDescricao;
    tarefas[ident][prioridade] = novaPrioridade;
    alert("Tarefa editada com sucesso!");
    
}

function listarTarefas() {
    //mostar na div id tarefas
    let divTarefas = document.getElementById("tarefas");
    divTarefas.innerHTML = "";
    tarefas.forEach(tarefa => {
        divTarefas.innerHTML += `<p>${tarefa.id} - ${tarefa.descricao} - ${tarefa.concluida} - ${tarefa.prioridade}</p>`;
    });


}


console.log(tarefas);