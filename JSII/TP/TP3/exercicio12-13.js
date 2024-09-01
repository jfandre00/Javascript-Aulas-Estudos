function adicionarProduto() {
    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let quantidade = document.getElementById("quantidade").value;

    let produto = new Produto(nome, preco, quantidade);
    estoque.push(produto);
    console.log(estoque);
    alert(`Produto ${nome} adicionado com sucesso!`);
}

function atualizarProduto() {
    let nome = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidadeAtualizar").value;

    let produto = estoque.find(produto => produto.nome === nome);
    if (produto) {
        produto.quantidade = quantidade;
        console.log(estoque);
        alert(`Produto ${nome} atualizado com sucesso!`);
    } else {
        alert(`Produto ${nome} não encontrado!`);
    }
    console.log(estoque);
}

function removerProduto() {
    let nome = document.getElementById("produtoRemover").value;

    let index = estoque.findIndex(produto => produto.nome === nome);
    if (index !== -1) {
        estoque.splice(index, 1);
        console.log(estoque);
        alert(`Produto ${nome} removido com sucesso!`);
    } else {
        alert(`Produto ${nome} não encontrado!`);
    }
}

function calcularValorTotal() {
    let total = 0;
    for (let produto of estoque) {
        total += produto.preco * produto.quantidade;
    }
    alert(`O valor total do estoque é R$ ${total.toFixed(2)}`);
}

function relatorioEstoque() {
    let relatorio = "";
    for (let produto of estoque) {
        relatorio += `Produto: ${produto.nome} - Preço: R$ ${produto.preco} - Quantidade: ${produto.quantidade}\n`;
    }
    alert(relatorio);
    //mostre o relatório na tela html
    document.getElementById("relatorio").innerText = relatorio;
    //deixar a div escondida e só aparecer quando clicar para gerar relatório
    document.getElementById("resultado").style.display = "block";


}

let estoque = [];

//criar um objeto produto com método construtor
function Produto(nome, preco, quantidade) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
}

