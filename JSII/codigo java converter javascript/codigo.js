const alunos = new Array(5);
const notas = new Array(5);
let quantidadeAlunos = 0;
let opcao = null;

//console.log(alunos)
//console.log(notas)

do {
    opcao = parseInt(prompt("Menu: \n1. Cadastrar nome de aluno \n2. Cadastrar nota de aluno \n3. Exibir lista de alunos e suas notas \n4. Sair"));

    switch (opcao) {
        case 1:
            while (quantidadeAlunos < alunos.length) {
                alunos[quantidadeAlunos] = prompt("Digite o nome do aluno " + (quantidadeAlunos + 1) + ": ");
                quantidadeAlunos++;
                if (quantidadeAlunos < alunos.length) {
                    let resposta = prompt("Deseja cadastrar outro aluno? (s/n): ");
                    if (resposta.toLocaleLowerCase() === 'n') {
                        break;
                    }
                }
            }
            if (quantidadeAlunos == alunos.length) {
                alert("Capacidade máxima de alunos atingida!");
            }
            break;
        case 2:
            for (let i = 0; i < quantidadeAlunos; i++) {
                    notas[i] = parseFloat(prompt("Digite a nota do aluno " + alunos[i] + ": "));
            }
            break;
        case 3:
            alert("Lista de alunos e suas notas:");
            for (let i = 0; i < quantidadeAlunos; i++) {
                console.log("Aluno: " + alunos[i] + " - Nota: " + notas[i]);
            }
            alert('Abra o console para ver as notas!')
            break;
        case 4:
            alert("Saindo do programa...");
            break;
        default:
            alert("Opção inválida!");
    }



} while (opcao != 4)