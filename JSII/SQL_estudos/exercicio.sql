#todos os alunos
select ID, NOME from ALUNO;

#o nome do curso e do professor
select C.DESCRICAO, P.NOME from CURSO C inner join PROFESSOR P on C.PROFESSOR_ID = P.ID;

#todos os professores
select ID, CPF, NOME from PROFESSOR;

#o nome dos alunos matriculados, seus respectivos cursos com os professores
select A.NOME, C.DESCRICAO, P.NOME from MATRICULA M inner join ALUNO A on A.ID = M.ALUNO_ID inner join CURSO C on C.ID = M.CURSO_ID inner join PROFESSOR P on P.ID = C_PROFESSOR_ID;

ALUNO
ID NOME
1  Arthur
2  Andre
3  Larissa
4  Francisco
5  Bruno

CURSO
ID DESCRICAO    PROFESSOR_ID
1  Computação   1
2  Engenharia   2
3  Direito      3

PROFESSOR
ID   CPF         NOME
1    123456789   Hugo da Silva Sauro
2    987654321   Jose da Silva Sauro Jr
3    456789123   Letícia Ferreira
4    654321987   Breno Amaral

MATRICULA
ALUNO_ID CURSO_ID
1        1
2        2
3        2

