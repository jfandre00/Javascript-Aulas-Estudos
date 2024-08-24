class Aluno {
    constructor(nome, email, nota, idade, mensalidade) {
        this.nome = nome;
        this.email = email;
        this.nota = nota;
        this.idade = idade;
        this.mensalidade = mensalidade;
    }

    toString() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
    imprimir() {
        alert("Inclusão realizada com sucesso \n" + this.toString() + "\n" + 
        this.calcularMensalidade()
    );
    }
    calcularMensalidade() {
        if(this.nota > 7){
            return this.mensalidade * 0.8;
        }
        return this.mensalidade;
    }   
}

class Disciplina {
    constructor(descricao, curso, cargaHoraria) {
        this.descricao = descricao;
        this.curso = curso;
        this.cargaHoraria = cargaHoraria;
    }

    toString() {
        return `O curso ${this.curso} serve para ${this.descricao}`;
    }
    imprimir() {
        alert(this.toString() + "\n" + "Carga Horária:" + this.cargaHoraria
    );
    }
}

class Curso {
    constructor(nome, coordenador, qteDisciplina) {
        this.nome = nome;
        this.coordenador = coordenador;
        this.qteDisciplina = qteDisciplina;
    }

    toString() {
        return `O curso se chama ${this.nome} e o coordenador é ${this.coordenador}`;
    }

    imprimir() {
        alert(this.toString() + "\n" + "Quantidade Disciplina:" + this.qteDisciplina
    );
    }
}

class Professor {
    constructor(nome, salario, anoAdmissao) {
        this.nome = nome;
        this.salario = salario;
        this.anoAdmissao = anoAdmissao;
    }

    toString() {
        return `O professor ${this.nome} tem o salário de R$ ${this.salario}`;
    }
    imprimir() {
        alert(this.toString() + "\n" + "Ano de Admissão:" + this.anoAdmissao
    );
    }
}

let alunos = [];
let disciplinas = [];
let professores = [];
let cursos = [];

//Colocar os objetos abaixo dentro da array

/* const aluno1 = new Aluno("André", "andre@andre.com", 9, 43, 1000); 
aluno1.imprimir();

const aluno2 = new Aluno("Maria", "maria@andre.com", 10, 22, 2000); 
aluno2.imprimir();

alunos.push(aluno1, aluno2); */

alunos.push(new Aluno("André", "andre@andre.com", 9, 43, 1000));
alunos.push(new Aluno("Maria", "maria@andre.com", 10, 22, 2000));

for (let i = 0; i < alunos.length; i++) {
    alunos[i].imprimir();
}


/* const disciplina1 = new Disciplina("Aprender a calcular lajes", "Concreto Armado", 200);

alert(disciplina1);

disciplina1.imprimir();

disciplinas.push(disciplina1); */

disciplinas.push(new Disciplina("Aprender a calcular lajes", "Concreto Armado", 200));
disciplinas.push(new Disciplina("Aprender kkk", "Risadas", 150))

for (let i = 0; i < disciplinas.length; i++) {
    disciplinas[i].imprimir();
}


/* const curso1 = new Curso("JavaScript", "Elberth", 500);

alert(curso1);

curso1.imprimir();

cursos.push(curso1) */


cursos.push(new Curso("JavaScript", "Elberth", 500));
cursos.push(new Curso("HTML", "João", 400))
for (let i = 0; i < cursos.length; i++) {
    cursos[i].imprimir();
}


/* const professor1 = new Professor("Elberth", 2500, 1950);

alert(professor1);

professor1.imprimir();

professores.push(professor1); */

professores.push(new Professor("Elberth", 2500, 1950));
professores.push(new Professor("Joza", 3000, 2010));

/* for (let i=0; i < professores.length; i++) {
    professores[i].imprimir();
} */

professores.forEach(prof => prof.imprimir());