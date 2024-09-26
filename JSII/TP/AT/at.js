let codigoVenda = 0;
let indexCarro = 0;

let vendedores = [
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

function gerarEmail(vendedor) {
    //remover o espaço no meio da string

  return `${vendedor.toLowerCase().replace(" ", ".")}@concessionaria.com`;
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
];

//^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//////// MASSA DE DADOS////////
///////////////////////////////

const vendas = [];

class Carro {
  constructor(codigo, modelo, preco) {
    this.codigo = codigo;
    this.modelo = modelo;
    this.preco = preco;
  }

  toString() {
    return `${this.codigo} - ${this.modelo} - R$${this.preco.toFixed(2)}`;
  }
}

class Vendedor {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  toString() {
    return `${this.nome} - ${this.email}`;
  }
}

class Venda {
  constructor(codigo, vendedor) {
    this.codigo = codigo;
    this.vendedor = vendedor;
    this.carros = [];
    this.status = "Inicial";
  }

  toString() {
    let listaCarros = this.carros.map(carro => carro.toString()).join("\n");

    return `[${this.status}] Venda ${this.codigo} - Vendedor ${this.vendedor.toString()}\n Carros:\n ${listaCarros}`;
  }

  incluir() {
    vendas.push(this);
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

function exibirVendas() {
  let txt = "";

  vendas.forEach((venda) => {
    txt += venda.toString() + "\n\n";
  });

  console.log(txt);
}

function coletarDadosVenda() {
  const nome = prompt("Nome do vendedor:", vendedores[codigoVenda]);
  const email = prompt("E-mail do vendedor:", gerarEmail(nome));
  const codigo = prompt("Código da venda:", ++codigoVenda);

  const vendedor = new Vendedor(nome, email);

  const venda = new Venda(codigo, vendedor);

  coletarDadosCarro(venda);
}

function coletarDadosCarro(oVenda) {
  do {
    const codigo = prompt("Código do carro:", carros[indexCarro].codigo);
    const modelo = prompt("Modelo do carro:", carros[indexCarro].modelo);
    const preco = parseFloat(
      prompt("Preço do carro:", carros[indexCarro].preco)
    );

    indexCarro++;

    const carro = new Carro(codigo, modelo, preco);

    oVenda.addCarro(carro);
  } while (confirm("Deseja incluir um novo carro?"));

  oVenda.incluir();

  if (confirm("Deseja incluir uma nova venda?")) {
    coletarDadosVenda();
  } else {
    exibirVendas();
  }
}

function buscarVendaPorCodigo(codigoVenda) {
  return vendas.find((venda) => venda.codigo === codigoVenda);
}

function excluirCarro() {
  const vendaParaExcluirCarro = buscarVendaPorCodigo(
    prompt("Código da venda para exclusão do carro:")
  );

  console.log(vendaParaExcluirCarro);

  vendaParaExcluirCarro.removeCarro(
    prompt("Código do carro para exclusão:")
  );

  exibirVendas();
}

function alterarStatusVenda() {
    const vendaParaAlterarStatus = buscarVendaPorCodigo(
      prompt("Código da venda para alteração do status:")
    );

    console.log(vendaParaAlterarStatus);

    vendaParaAlterarStatus.alterarStatus(
      "Em Andamento");

    exibirVendas();
}

const calcularTotalizadores = (asVendas) => {
    return asVendas.map(venda => {

        const qtdeCarros = venda.carros.length;
        const valorTotal = venda.carros.reduce((total, carro) => total + carro.preco, 0);

        return {
            codigoVenda: venda.codigo,
            qtdeCarros,
            valorTotal: valorTotal.toFixed(2)
        };
    });
}

function exibirTotalizadores() {

    const colecaoTotais = calcularTotalizadores(vendas);

    console.log("Totalizadores: " + JSON.stringify(colecaoTotais, null, 2));
  
}

const obterVendasComCarros = (asVendas, qtde) => {
    return asVendas.filter(venda => venda.carros.length >= qtde);
}


function exibirFiltro() {
    const vendasComCarros = obterVendasComCarros(vendas, 2);

    console.log("Filtro - Vendas com mais de 2 carros: " + JSON.stringify(vendasComCarros, null, 2));

}

const existeVendaSemCarro = (asVendas) => {
    return asVendas.some(venda => venda.carros.length === 0);
};

function exibirInconsistencia() {

    const temInconsistencia = existeVendaSemCarro(vendas);

    console.log(temInconsistencia ? "Tem inconsistência" : "Não há inconsistência nas vendas");
}

coletarDadosVenda();

alterarStatusVenda();

excluirCarro();

exibirTotalizadores();

exibirFiltro();

exibirInconsistencia();
