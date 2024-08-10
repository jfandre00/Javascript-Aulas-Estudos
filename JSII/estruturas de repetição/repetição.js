// for
for (let i=1; i < 6; i++) {
    console.log(`FOR ${i}`)
}

// while - checa a validação antes de executar o primeiro loop
let i = 0;
while (i < 5) {
    console.log(`WHILE ${i+1}`);
    i++;
}

// dowhile - faz o primeiro loop depois checa a validação
i = 0;
do {
    console.log(`DO WHILE ${i+1}`);
    i++;
} while (i < 5)

//receber 10 salários e mostrar a soma

let soma = 0
let salario = 0
for (let i=0; i < 10; i++) {
    //salario = parseFloat(prompt("Informe o salário: "));
    salario = 100;

    soma = soma + salario;
    
    console.log(i+1);  
}
console.log(soma);


//chinês:
//soma = 0, 100
//salario = 0,100
//i = 0, 1

//receber as notas dos alunos até que a soma das notas seja maior que 100


