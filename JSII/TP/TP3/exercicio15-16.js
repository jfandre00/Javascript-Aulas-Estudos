//crie uma estrutura de dados chamada tarefas, que é um array de objetos. Cada tarefa deve conter as propriedades id, descricao, concluida (boolean) e prioridade (baixa, média ou alta).

let tarefas = [
    {
        id: 1,
        descricao: "Estudar JS",
        concluida: false,
        prioridade: "alta"
    },
    {
        id: 2,
        descricao: "Estudar HTML",
        concluida: false,
        prioridade: "média"
    },
    {
        id: 3,
        descricao: "Estudar CSS",
        concluida: false,
        prioridade: "baixa"
    },
    {
        id: 4,
        descricao: "Estudar React",
        concluida: false,
        prioridade: "alta"
    },
    {
        id: 5,
        descricao: "Estudar Node",
        concluida: false,
        prioridade: "baixa"
    },
    {
        id: 6,
        descricao: "Estudar Angular",
        concluida: false,
        prioridade: "alta"
    }
];

//método construtor para criarmos o objeto tarefa
function Tarefa(id, descricao, concluida, prioridade) {
    this.id = id;
    this.descricao = descricao;
    this.concluida = concluida;
    this.prioridade = prioridade;
}

//Crie uma função adicionarTarefa que permita adicionar uma nova tarefa ao array tarefas, utilizando arrow function.
//q:poderia alterar a função para adicionar o id automaticamente?



const adicionarTarefa = (descricao, concluida, prioridade) => {
    let id = tarefas.length + 1;
    tarefas.push(new Tarefa(id, descricao, concluida, prioridade));
};

//Crie uma função editarTarefa que permita editar a descrição e prioridade de uma tarefa específica, identificada pelo id, utilizando arrow function.
const editarTarefa = (id, descricao, prioridade) => {
    let tarefa = tarefas.find(tarefa => tarefa.id == id);
    tarefa.descricao = descricao;
    tarefa.prioridade = prioridade;
    console.log("Tarefa editada com sucesso!");
}

//Crie uma função removerTarefa que permita remover uma tarefa específica, identificada pelo id, utilizando arrow function.
const removerTarefa = (id) => {
    let index = tarefas.findIndex(tarefa => tarefa.id == id);
    tarefas.splice(index, 1);
    console.log("Tarefa removida com sucesso!");
}

//Exercicio 16
//Crie uma função marcarConcluida que marque uma tarefa como concluida com base no id
const marcarConcluida = (id) => {
    let tarefa = tarefas.find(tarefa => tarefa.id == id);
    tarefa.concluida = true;
    console.log("Tarefa concluída com sucesso!");
}

//Utilize arrow functions para filtrar e listar tarefas de acordo com sua prioridade, usando o método filter
const listarTarefasPorPrioridade = (prioridade) => {
    return tarefas.filter(tarefa => tarefa.prioridade == prioridade);
}


//Crie uma função gerarRelatorio que exiba todas as tarefas com seu status (concluídas ou não), usando arrow functions para formatar as informações
const gerarRelatorio = () => {
    tarefas.forEach(tarefa => {
        console.log(`Tarefa: ${tarefa.descricao} - ${tarefa.concluida ? "Concluída" : "Pendente"}`);
    });
}

//Crie uma função resumoTarefas que retorne o total de tarefas, quantas estão concluídas e quantas estão pendentes, utilizando métodos como reduce e arrow functions
const resumoTarefas = () => {
    let total = tarefas.length;
    let concluidas = tarefas.reduce((total, tarefa) => tarefa.concluida ? total + 1 : total, 0);
    let pendentes = tarefas.reduce((total, tarefa) => !tarefa.concluida ? total + 1 : total, 0);
   
    console.log(`Total de tarefas: ${total}`);
    console.log(`Tarefas concluídas: ${concluidas}`);
    console.log(`Tarefas pendentes: ${pendentes}`);

}


/* console.log(tarefas);

adicionarTarefa("Estudar Vue", false, "alta");
console.log(tarefas);

editarTarefa(7, "Estudar Vue.js", "média");
editarTarefa(1, "Estudar JavaScript", "média");
console.log(tarefas);

removerTarefa(7);
removerTarefa(1);
removerTarefa(2);
removerTarefa(6);

console.log(tarefas);
 */

marcarConcluida(3);
marcarConcluida(1);
console.log(tarefas);
console.log("--------------------------")
console.log("Abaixo a lista por Prioridade Alta")
console.log(listarTarefasPorPrioridade("alta"));

console.log("--------------------------")
gerarRelatorio();

console.log("--------------------------")
resumoTarefas();