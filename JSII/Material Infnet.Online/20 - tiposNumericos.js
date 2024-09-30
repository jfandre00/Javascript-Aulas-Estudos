//Tipos numéricos em JS

const inteiro = 15680;
const pontoFlutuante = 15.68;

console.log(typeof inteiro);
console.log(typeof pontoFlutuante);

//As duas variáveis são do tipo number, o JS não diferencia inteiros de ponto flutuante.

//isNan e isInteger

console.log(isNaN(inteiro)); //false pois é um número
console.log(isNaN(pontoFlutuante)); //false pois é um número    

console.log(typeof pontoFlutuante === 'number'); //true


//O método isInteger verifica se o número é inteiro

console.log(Number.isInteger(inteiro)); //true
console.log(Number.isInteger(pontoFlutuante)); //false


//Resultado entre a soma de um inteiro e um ponto flutuante

const resultado = inteiro + pontoFlutuante;
console.log(resultado); //15695.68
console.log(typeof resultado); //number
console.log(Number.isInteger(resultado)); //false


//O método toFixed() arredonda o número para a quantidade de casas decimais que você desejar

const dinheiroNaConta = pontoFlutuante.toFixed(2);
console.log("R$" + dinheiroNaConta); //15.68

// NaN - Not a Number

const contaDivisao = 1 / "andre";
console.log(contaDivisao); //NaN


console.log("O isNaN " + isNaN(contaDivisao)); //true
console.log("O Number.isNaN " + Number.isNaN(contaDivisao)); //true 

//O método isNaN() é mais antigo e mais confiável que o Number.isNaN() pois o último não converte o valor para um número antes de verificar se é NaN.

//Exemplo de cálculo de áreas verificando tipos

function somar(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return "Não é possível somar letras";
    }
    return a + b;
}

console.log(somar(2,3)); //5

console.log(somar(2,"5"));  //Não é possível somar letras

