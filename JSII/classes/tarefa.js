document.getElementById('insercao').addEventListener('input', function () {
    const container = document.getElementById('tarefas-container');
    container.innerHTML = ''; // Limpa os campos anteriores

    const quantidade = parseInt(this.value);

    for (let i = 0; i < quantidade; i++) {
        const p = document.createElement('p');
        p.innerHTML = `Digite a descrição da ${tarefas.length + (i + 1)}ª tarefa a adicionar à lista: <input type="text" id="tarefa${i + 1}">`;
        container.appendChild(p);
    }
});


let tarefas = []; //lista de tarefas

function descricao() {
    const quantidade = document.getElementById('insercao').value;
    for (let i = 0; i < quantidade; i++) {
        let descricao = document.getElementById(`tarefa${i + 1}`).value;
        tarefas.push({ descricao: descricao, concluida: false });
    }
    document.getElementById('tarefas-container').innerHTML = '';

    // Limpa a caixa de inserção
    document.getElementById('insercao').value = '';

    // Adiciona a mensagem de sucesso
    const mensagemContainer = document.getElementById('mensagem-container');
    const mensagem = document.createElement('p');
    mensagem.className = 'mensagem-sucesso';
    mensagem.textContent = 'Descrições Adicionadas com Sucesso!';
    mensagemContainer.appendChild(mensagem);

    // Remove a mensagem após 2 segundos
    setTimeout(() => {
        mensagemContainer.removeChild(mensagem);
    }, 2000);
}

function exibir() {
    document.getElementById('exibir-tarefas').innerHTML = '';
    for (let i = 0; i < tarefas.length; i++) {
        let status = tarefas[i].concluida ? "Concluída" : "Pendente";

        const exibirTarefas = document.getElementById('exibir-tarefas');
        const mensagem = document.createElement('p');
        mensagem.className = 'exibir-sucesso';
        mensagem.innerHTML = `Tarefa ${i + 1}: ${tarefas[i].descricao} - Status: ${status} <input type="checkbox" id="meuCheckbox${i + 1}" class="checkbox" ${tarefas[i].concluida ? 'checked' : ''}>`;
        exibirTarefas.appendChild(mensagem);
    }

    // Adiciona o evento a cada checkbox
    const checkboxes = document.getElementsByClassName('checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function () {
            // Alterna o status da tarefa correspondente
            tarefas[i].concluida = this.checked;
            // Atualiza a exibição do status
            exibir();
        });
    }
}


