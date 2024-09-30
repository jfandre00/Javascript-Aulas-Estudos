// Tipo resultante de Math.random

const numeroAleatorio = Math.random() * 10; //Número aleatório entre 0 e 10

console.log(numeroAleatorio); 
console.log(Number.isInteger(numeroAleatorio)); //false 
console.log(typeof numeroAleatorio); //number

const numeroInteiro = Math.floor(numeroAleatorio); //Arredonda para baixo
console.log(numeroInteiro);
console.log(Number.isInteger(numeroInteiro)); //true    
console.log(typeof numeroInteiro); //number

const numeroString = "012579";
const numeroConvertido = parseInt(numeroString); //Converte para número inteiro
console.log(numeroString);
console.log(numeroConvertido);

const numeroString2 = "012579.5678";
const numeroConvertido2 = parseFloat(numeroString2); //Converte para número decimal. Se usar parseInt, ele vai ignorar o .5678

console.log(numeroString2);
console.log(numeroConvertido2);

if (isNaN(numeroString2)) {
    console.log("Não faça nada");
} else {
    const convertido = parseFloat(numeroString2); //poderia usar também +numeroString2, mas é menos legível. Melhor usar o parseFloat.
    console.log(100 + convertido);
} //conseguimos garantir que haverá uma soma entre números


// Erro "baNaNa"

const resultado = "b" + "a" + + "a" + "a";
console.log(resultado); //baNaNa, tem um NaN no meio, mas o JS não dá erro, ele entende que é uma string

//Converter booleano para número

const bool = true;
console.log(+bool); //1

//Uma string vazia é convertida para 0

const bool2 = false;
console.log(+bool2); //0


console.log(bool === 1); //false - comparação estrita
console.log(bool == 1); //true

console.log(typeof bool); //boolean
console.log(typeof +bool); //number

console.log(parseInt(bool) === 0); 
console.log(parseInt(bool)); //NaN
console.log(typeof parseInt(bool)); //number


