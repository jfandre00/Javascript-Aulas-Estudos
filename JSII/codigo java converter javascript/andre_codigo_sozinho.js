let alunos = [];
let notas = [];
let quantidadeAlunos = 0;  
const qtdeMaximaPedida = 5; //Se decidirmos trabalhar com mais alunos é só mudar aqui.
let opcao = null;

do {
    opcao = parseInt(prompt("Menu: \n1. Cadastrar nome de aluno \n2. Cadastrar nota de aluno \n3. Exibir lista de alunos e suas notas \n4. Sair"));

    switch (opcao) {
        case 1:
            if (quantidadeAlunos == qtdeMaximaPedida) {
                alert("Quantidade Máxima de Alunos Atingida!");
                break;
            }
            while (quantidadeAlunos < qtdeMaximaPedida) {
                alunos[quantidadeAlunos] = prompt("Digite o nome do aluno " + (quantidadeAlunos + 1) + ": ");
                quantidadeAlunos++;
                let resposta = prompt("Deseja cadastrar outro aluno? (s/n): ");
                if (resposta.toLowerCase() === 's' && quantidadeAlunos == qtdeMaximaPedida) {
                    alert("Quantidade Máxima de Alunos Atingida!");
                }
                if (resposta.toLowerCase() === 'n') {
                        break;
                    }
            }
            if (quantidadeAlunos > qtdeMaximaPedida) {
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
            const n = 1;
            for (let i = 0; i < quantidadeAlunos; i++) {
                lista_exibir.push("Aluno " + (i+n) + ": " + alunos[i] + " - Nota: " + notas[i]);
            }
            alert("Lista de alunos e suas notas:\n" + lista_exibir.join("\n"));
            break;

        case 4:
            alert("Saindo do programa...");
            break;

        default:
            alert("Opção inválida!");
    }
} while (opcao != 4);

