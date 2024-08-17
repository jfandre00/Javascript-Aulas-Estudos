let alunos = [];
let notas = [];
let quantidadeAlunos = 0;  
let opcao = null;

do {
    opcao = parseInt(prompt("Menu: \n1. Cadastrar nome de aluno \n2. Cadastrar nota de aluno \n3. Exibir lista de alunos e suas notas \n4. Sair"));

    switch (opcao) {
        case 1:
            if (quantidadeAlunos == 5) {
                alert("Quantidade Máxima de Alunos Atingida!");
                break;
            }
            while (quantidadeAlunos < 5) {
                alunos[quantidadeAlunos] = prompt("Digite o nome do aluno " + (quantidadeAlunos + 1) + ": ");
                quantidadeAlunos++;
                let resposta = prompt("Deseja cadastrar outro aluno? (s/n): ");
                if (resposta.toLowerCase() === 's' && quantidadeAlunos == 5) {
                    alert("Quantidade Máxima de Alunos Atingida!");
                }
                if (resposta.toLowerCase() === 'n') {
                        break;
                    }
            }
            if (quantidadeAlunos > 5) {
                alert("Capacidade máxima de alunos atingida!");
            }
            break;

        case 2:
            for (let i = 0; i < quantidadeAlunos; i++) {
                notas[i] = parseFloat(prompt("Digite a nota do aluno " + alunos[i] + ": "));
            }
            break;

        case 3:
            let lista_exibir = [];
            for (let i = 0; i < quantidadeAlunos; i++) {
                lista_exibir.push("Aluno: " + alunos[i] + " - Nota: " + notas[i] + "\n");
            }
            alert("Lista de alunos e suas notas:\n" + lista_exibir);
            break;

        case 4:
            alert("Saindo do programa...");
            break;

        default:
            alert("Opção inválida!");
    }
} while (opcao != 4);

