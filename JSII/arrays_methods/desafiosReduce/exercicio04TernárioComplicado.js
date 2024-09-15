/* [04 ANDRE] Contar Ocorrências de Valores
Dado um array de letras, use o reduce para contar quantas vezes cada letra aparece no array.
Array de exemplo: ["a", "b", "a", "c", "b", "a"]
Resultado esperado: { a: 3, b: 2, c: 1 }
*/

const letras = ["a", "b", "a", "c", "b", "a"];

const contadorDeLetras = (vetorDeLetras) =>
    vetorDeLetras.reduce((contador, letra) => {
        contador[letra] = (contador[letra] || 0) + 1;
        return contador;
    }, {});

console.log(contadorDeLetras(letras));