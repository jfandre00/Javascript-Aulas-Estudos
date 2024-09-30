let codigoPedido = 0;
let indexCarro = 0;

let concessionarias = [
    "João MultiMarcas",
    "Maria Veículos",
    "José Automóveis",
    "Ana Carros",
    "Pedro AutoCenter",
    "Mariana Motors",
    "Carlos Veículos",
    "Luciana Carros",
    "Fernando Auto",
    "Patrícia Motors",
];

function gerarEmail(concessionaria) {
    //remover os espaços (se existirem) no meio da string

  return `${concessionaria.toLowerCase().replace(/\s+/g, ".")}@concessionaria.com`;
}

let carros = [
  { codigo: 101, modelo: "Corolla", preco: 85000 },
  { codigo: 102, modelo: "Civic", preco: 90000 },
  { codigo: 103, modelo: "Mustang", preco: 250000 },
  { codigo: 104, modelo: "Cruze", preco: 80000 },
  { codigo: 105, modelo: "A3", preco: 180000 },
  { codigo: 106, modelo: "Jetta", preco: 130000 },
  { codigo: 107, modelo: "S-Class", preco: 450000 },
  { codigo: 108, modelo: "Tucson", preco: 110000 },
  { codigo: 109, modelo: "Sportage", preco: 120000 },
  { codigo: 110, modelo: "Altima", preco: 95000 },
  { codigo: 111, modelo: "Fusca", preco: 50000 },
  { codigo: 112, modelo: "Gol", preco: 60000 },
  { codigo: 113, modelo: "Palio", preco: 40000 },
  { codigo: 114, modelo: "Uno", preco: 30000 },
  { codigo: 115, modelo: "Onix", preco: 70000 },
  { codigo: 116, modelo: "HB20", preco: 65000 },
  { codigo: 117, modelo: "Creta", preco: 75000 },
  { codigo: 118, modelo: "Compass", preco: 85000 },
  { codigo: 119, modelo: "Renegade", preco: 95000 },
  { codigo: 120, modelo: "T-Cross", preco: 80000 },
];

//---------- MASSA DE DADOS ----------

const pedidos = [];

class Carro {
  constructor(codigo, modelo, preco) {
    this.codigo = codigo;
    this.modelo = modelo;
    this.preco = preco;
  }

  toString() {
    // Formatando o preço com a API de formatação de número
    const precoFormatado = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.preco);
    
    return `${this.codigo} - ${this.modelo} - ${precoFormatado}`;
  }
}

class Concessionaria {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  toString() {
    return `${this.nome} - ${this.email}`;
  }
}

class Pedido {
  constructor(codigo, concessionaria) {
    this.codigo = codigo;
    this.concessionaria = concessionaria;
    this.carros = [];
    this.status = "Inicial";
  }

  toString() {
    let listaCarros = this.carros.map(carro => carro.toString()).join("\n");

    return `[${this.status}] Pedido ${this.codigo} - Concessionaria ${this.concessionaria.toString()}\n Carros:\n ${listaCarros}`;
  }

  incluir() {
    pedidos.push(this);
  }

  alterarStatus(novoStatus) {
    this.status = novoStatus;
  }

  addCarro(carro) {
    this.carros.push(carro);
  }

  removeCarro(codigoCarro) {
    const index = this.carros.findIndex(
      (carro) => carro.codigo == codigoCarro
    );

    if (index != -1) {
      this.carros.splice(index, 1);
    } else {
      console.log("Carro não identificado");
    }
  }
}

function exibirPedidos() {
  let txt = "";

  pedidos.forEach((pedido) => {
    txt += pedido.toString() + "\n\n";
  });

  console.log(txt);
}

function coletarDadosPedido() {
  const nome = prompt("Nome da concessionaria:", concessionarias[codigoPedido]);
  const email = prompt("E-mail da concessionaria:", gerarEmail(nome));
  const codigo = prompt("Código do pedido:", ++codigoPedido);

  const concessionaria = new Concessionaria(nome, email);

  const pedido = new Pedido(codigo, concessionaria);

  coletarDadosCarro(pedido);
}

function coletarDadosCarro(oPedido) {
  do {
    const codigo = prompt("Código do carro:", carros[indexCarro].codigo);
    const modelo = prompt("Modelo do carro:", carros[indexCarro].modelo);
    const preco = parseFloat(
      prompt("Preço do carro:", carros[indexCarro].preco)
    );

    indexCarro++;

    const carro = new Carro(codigo, modelo, preco);

    oPedido.addCarro(carro);
  } while (confirm("Deseja incluir um novo carro?"));

  oPedido.incluir();

  if (confirm("Deseja incluir um novo pedido?")) {
    coletarDadosPedido();
  } else {
    exibirPedidos();
  }
}

function buscarPedidoPorCodigo(codigoPedido) {
  const pedido = pedidos.find((pedido) => pedido.codigo === codigoPedido);
  if (!pedido) {
    console.log("Pedido não encontrada.");
    return null;
  }
  return pedido;
}

function excluirCarro() {
  const pedidoParaExcluirCarro = buscarPedidoPorCodigo(
    prompt("Código do pedido para exclusão do carro:")
  );

  console.log(pedidoParaExcluirCarro);

  pedidoParaExcluirCarro.removeCarro(
    prompt("Código do carro para exclusão:")
  );

  exibirPedidos();
}

function alterarStatusPedido() {
    const pedidoParaAlterarStatus = buscarPedidoPorCodigo(
      prompt("Código do pedido para alteração do status:")
    );

    console.log(pedidoParaAlterarStatus);

    pedidoParaAlterarStatus.alterarStatus(
      "Em Andamento");

    exibirPedidos();
}

const calcularTotalizadores = (osPedidos) => {
    return osPedidos.map(pedido => {

        const qtdeCarros = pedido.carros.length;
        const valorTotal = pedido.carros.reduce((total, carro) => total + carro.preco, 0);

        // Formatando o valor total com Intl.NumberFormat
    const valorTotalFormatado = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valorTotal);

    return {
      codigoPedido: pedido.codigo,
      qtdeCarros,
      valorTotal: valorTotalFormatado,  
        };
    });
}

function exibirTotalizadores() {

    const colecaoTotais = calcularTotalizadores(pedidos);

    console.log("Totalizadores: " + JSON.stringify(colecaoTotais, null, 2));
  
}

const obterPedidosComCarros = (osPedidos, qtde) => {
    return osPedidos.filter(pedido => pedido.carros.length >= qtde);
}


function exibirFiltro() {
    const pedidosComCarros = obterPedidosComCarros(pedidos, 2);

    console.log("Filtro - Pedidos 2 ou mais carros: " + JSON.stringify(pedidosComCarros, null, 2));

}

const existePedidoSemCarro = (osPedidos) => {
    return osPedidos.some(pedido => pedido.carros.length === 0);
};

function exibirInconsistencia() {

    const temInconsistencia = existePedidoSemCarro(pedidos);

    console.log(temInconsistencia ? "Existem pedidos sem carros adicionados a ele" : "Não há inconsistência nos pedidos. Todos os pedidos possuem carros.");
}

alert("Bem Vindo ao sistema de pedidos de carros para concessionárias!\nAqui você consegue encomendar carros para vender na sua concessionária!");	

coletarDadosPedido();

alterarStatusPedido();

excluirCarro();

exibirTotalizadores();

exibirFiltro();

exibirInconsistencia();
