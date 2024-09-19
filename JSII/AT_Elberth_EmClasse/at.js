const pedidos = [];

class Produto {
    constructor(nome, preco) {
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
}

function exibirPedidos(){
    let txt = "";

    pedidos.forEach((pedido, i) => {
        txt += `Pedido ${i+1} - Código: ${pedido.codigo} - ${pedido.solicitante.nome}\n`;
        pedido.produtos.forEach((prod, j) => {
            txt += `   Produto ${j+1} - ${prod.nome.toUpperCase()} - R$ ${prod.preco.toFixed(2)}\n`;
        });
    });

    console.log(txt);
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



exibirPedidos();
//console.log(pedidos);



