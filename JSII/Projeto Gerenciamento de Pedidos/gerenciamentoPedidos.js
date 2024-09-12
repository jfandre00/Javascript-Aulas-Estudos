//motivo da palavra this: para referenciar o objeto que está sendo criado, ou seja, o objeto que está sendo instanciado.

class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

class Pedido {
    constructor(cliente) {
        this.cliente = cliente;
        this.produtos = [];
        this.status = "Em aberto";
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    };

    calcularTotal() {
        const novoVetor = this.produtos.map(produto => produto.preco * produto.quantidade);

        return novoVetor.reduce((total, valor) => total + valor, 0);
    };

    imprimir() {
        console.log(`Total do pedido de ${this.cliente.nome}: R$ ${this.calcularTotal().toFixed(2)}`);
    }
    


}


const clienteJoao = new Cliente("João", "joao@uol.com");
const clienteMaria = new Cliente("Maria", "maria@uol.com");
const clientePaulo = new Cliente("Paulo", "paulo@uol.com");


const p1 = new Produto("Camiseta", 50, 2);
const p2 = new Produto("Moletom", 100, 1);
const p3 = new Produto("Jaqueta", 150, 3);
const p4 = new Produto("Bermuda", 80, 4);

const pedidoJoao = new Pedido(clienteJoao);
pedidoJoao.adicionarProduto(p1);
pedidoJoao.adicionarProduto(p2);
pedidoJoao.imprimir();


const pedidoMaria = new Pedido(clienteMaria);
pedidoMaria.adicionarProduto(p1);
pedidoMaria.adicionarProduto(p3);
pedidoMaria.imprimir();

const pedidoPaulo = new Pedido(clientePaulo);
pedidoPaulo.adicionarProduto(p4);
pedidoPaulo.adicionarProduto(p3);
pedidoPaulo.adicionarProduto(p2);
pedidoPaulo.adicionarProduto(p1);
pedidoPaulo.imprimir();


/* console.log(pedidoJoao);
console.log(pedidoMaria);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(pedidoJoao);
console.log(pedidoMaria);
console.log(pedidoSemProduto); */
