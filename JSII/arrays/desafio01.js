let animaisDomesticos = ["Cavalo", "Porco", "Galinha", "Camelo", "Cachorro", "Gato", "Coelho"];

let animaisSelvagens = ["Leão", "Tigre", "Leopardo", "Jacaré", "Elefante", "Urso", "Hipopótamo"];

let todosAnimais = animaisDomesticos.concat(animaisSelvagens);
document.getElementById("num1").innerHTML = todosAnimais;

let stringAnimais = todosAnimais.toString();
document.getElementById("num2").innerHTML = stringAnimais;

let indiceElefante = todosAnimais.indexOf("Elefante");
document.getElementById("num3").innerHTML = `Elefante se encontra na ${indiceElefante}ª posição da lista todosAnimais.`;

todosAnimais.splice(2, 0, "Papagaio"); //0 significa que não queremos deletar nenhum item da lista.
document.getElementById("num4").innerHTML = todosAnimais;

todosAnimais.splice(todosAnimais.indexOf("Gato"), 2, "Hamster"); //iremos deletar gato e seu vizinho da lista (por isso o 2) e adicionar hamster no local.
document.getElementById("num5").innerHTML = todosAnimais;

