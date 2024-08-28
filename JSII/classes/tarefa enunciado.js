/* Enunciado: temos um cadastro de tarefas
recuperando 2 tarefas, usando o exibindo tarefas para exibir todo mundo.
muito trecho de codigo está duplicado
a proposta é transformar em funções e alem disso 
conseguir evoluir para tentar cadastrar as tarefas usando classes. AI depois apresentar uma opcao de menu para optar entre cadastrar exibir e concluido
para ter estrutura de repeticao, exibir, receber para incluir 
ele vem como não concluido mas como colocar a tarefa como conluida? */ 


// Lista de tarefas
let tarefas = [];

// Adicionando uma tarefa (nome da funcionalidade adicionar)
let descricao1 = prompt("Digite a descrição da tarefa:");
tarefas.push({ descricao: descricao1, concluida: false });

// Adicionando outra tarefa
let descricao2 = prompt("Digite a descrição da tarefa:");
tarefas.push({ descricao: descricao2, concluida: false });

// Exibindo as tarefas (nome da funcionalidade exibir)
console.log("Lista de Tarefas:");
for (let i = 0; i < tarefas.length; i++) {
  let status = tarefas[i].concluida ? "Concluída" : "Pendente";
  alert(`${i + 1}. ${tarefas[i].descricao} [${status}]`);
}

// Marcando uma tarefa como concluída (nome da funcionalidade marcar)
let indiceParaConcluir = parseInt(prompt("Digite o número da tarefa que deseja marcar como concluída:")) - 1;
tarefas[indiceParaConcluir].concluida = true;



// Exibindo novamente as tarefas
alert("Lista de Tarefas Atualizada:");
for (let i = 0; i < tarefas.length; i++) {
  let status = tarefas[i].concluida ? "Concluída" : "Pendente";
  alert(`${i + 1}. ${tarefas[i].descricao} [${status}]`);
}
