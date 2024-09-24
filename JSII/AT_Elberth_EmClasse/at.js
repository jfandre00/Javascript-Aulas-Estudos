const pedidos = [];

class Produto {
    constructor(codigo, nome, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
}

class Solicitante {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class Pedido {
    constructor(codigo, solicitante) {
        this.codigo = codigo;
        this.solicitante = solicitante;
        this.produtos = [];
    }

    incluir(){
        pedidos.push(this);
    }

    addProduto(produto){
        this.produtos.push(produto);
    }

    removeProduto(codigoProduto) {
        const index = this.produtos.findIndex(produto => produto.codigo == codigoProduto);

        if (index != -1) {
            this.produtos.splice(index, 1);
        } else {
            console.log('Produto não identificado');
        }
    }
}

function exibirPedidos(){
    let txt = "";

    pedidos.forEach((pedido, i) => {
        txt += `Pedido ${i+1} - Código: ${pedido.codigo} - ${pedido.solicitante.nome}\n`;
        pedido.produtos.forEach((prod, j) => {
            txt += `   Produto ${j+1} - ${prod.codigo} - ${prod.nome.toUpperCase()} - R$ ${prod.preco.toFixed(2)}\n`;
        });
    });

    console.log(txt);
}

function coletarDadosPedido() {
    const codigo = prompt('Informe o código do pedido');
    const nomeSolicitante = prompt('Informe o nome do solicitante');
    const emailSolicitante = prompt('Informe o email do solicitante');

    const solicitante = new Solicitante(nomeSolicitante, emailSolicitante);

    const pedido = new Pedido(codigo, solicitante);

    coletarDadosProduto(pedido);

}

function coletarDadosProduto(oPedido){
    do {
        const codigo = prompt('Informe o código do produto');
        const nome = prompt('Informe o nome do produto');
        const preco = parseFloat(prompt('Informe o preço do produto'));

        const produto = new Produto(codigo, nome, preco);

        oPedido.addProduto(produto);
    } while(confirm("Deseja incluir mais um produto?"));

    oPedido.incluir();

    if(confirm("Deseja incluir um novo pedido?")) {
        coletarDadosPedido();
    } else {
        exibirPedidos();
    }
}

//produtos
const p1 = new Produto('Camisa', 50);
const p2 = new Produto('Calça', 100);
const p3 = new Produto('Tênis', 200);


//solicitante
const s1 = new Solicitante('Elberth', 'elberth@elb.com');

//pedido
const pedido = new Pedido(123, s1);
pedido.addProduto(p1);
pedido.addProduto(p2);
pedido.incluir();

const pedido1 = new Pedido(124, s1);
pedido1.addProduto(p3);
pedido1.incluir();

coletarDadosPedido();



