let codigoVenda = 0;
let carrosAdicionados = []; // Armazena os carros que serão adicionados à venda atual

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
    let listaCarros = this.carros.map(carro => carro.toString()).join(", ");
    return `[${this.status}] Venda ${this.codigo} - Vendedor: ${this.vendedor.nome}, Carros: ${listaCarros}`;
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
    const index = this.carros.findIndex((carro) => carro.codigo == codigoCarro);
    if (index != -1) {
      this.carros.splice(index, 1);
    }
  }
}

function exibirVendas() {
    const tabela = document.getElementById("vendasTabela").querySelector("tbody");
    tabela.innerHTML = "";  // Limpa a tabela antes de adicionar novos dados
  
    vendas.forEach((venda) => {
      const row = tabela.insertRow();
  
      const cellCodigo = row.insertCell();
      cellCodigo.textContent = venda.codigo;
  
      const cellVendedor = row.insertCell();
      cellVendedor.textContent = venda.vendedor.nome;
  
      const cellEmail = row.insertCell();
      cellEmail.textContent = venda.vendedor.email;
  
      const cellStatus = row.insertCell();
      cellStatus.textContent = venda.status;
  
      const cellCarros = row.insertCell();
      const carros = venda.carros.map(carro => `${carro.codigo} - ${carro.modelo} (R$${carro.preco.toFixed(2)})`).join(", ");
      cellCarros.textContent = carros;
  
      const cellTotal = row.insertCell();
      const valorTotal = venda.carros.reduce((total, carro) => total + carro.preco, 0);
      cellTotal.textContent = `R$${valorTotal.toFixed(2)}`;
    });
  }

  function coletarDadosVenda() {
    const vendedorSelect = document.getElementById("selecionarVendedor");
    const vendedorNome = vendedorSelect.options[vendedorSelect.selectedIndex].text;
    const vendedorEmail = gerarEmail(vendedorNome);
    const codigo = ++codigoVenda;
  
    const vendedor = new Vendedor(vendedorNome, vendedorEmail);
    const venda = new Venda(codigo, vendedor);
  
    // Exibe o formulário para adicionar carros
    carrosAdicionados = [];
    exibirFormularioAdicionarCarros(venda);
  }
  
  function preencherSelectVendedores() {
    const vendedorSelect = document.getElementById("selecionarVendedor");
    vendedores.forEach(vendedor => {
      const option = document.createElement("option");
      option.value = vendedor;
      option.textContent = vendedor;
      vendedorSelect.appendChild(option);
    });
  }
  
  // Chame esta função quando a página carregar para preencher o select de vendedores
  document.addEventListener("DOMContentLoaded", preencherSelectVendedores);
  

function exibirFormularioAdicionarCarros(oVenda) {
  const form = document.getElementById("formAdicionarCarro");
  form.style.display = "block";

  // Preenche o select de carros
  const selectCarro = document.getElementById("selecionarCarro");
  selectCarro.innerHTML = ""; // Limpa o select

  carros.forEach(carro => {
    const option = document.createElement("option");
    option.value = carro.codigo;
    option.textContent = `${carro.modelo} (R$${carro.preco.toFixed(2)})`;
    selectCarro.appendChild(option);
  });

  // Atualiza a lista de carros adicionados
  const listaCarros = document.getElementById("listaCarros");
  listaCarros.innerHTML = "";

  // Quando finalizar a venda
  window.finalizarVenda = function() {
    carrosAdicionados.forEach(carro => oVenda.addCarro(carro));
    oVenda.incluir();
    form.style.display = "none";
    exibirVendas();
  };
}

function adicionarCarro() {
  const selectCarro = document.getElementById("selecionarCarro");
  const carroSelecionado = carros.find(carro => carro.codigo == selectCarro.value);

  if (carroSelecionado) {
    carrosAdicionados.push(carroSelecionado);

    const listaCarros = document.getElementById("listaCarros");
    const li = document.createElement("li");
    li.textContent = `${carroSelecionado.modelo} (R$${carroSelecionado.preco.toFixed(2)})`;
    listaCarros.appendChild(li);
  }
}


function buscarVendaPorCodigo(codigoVenda) {
  return vendas.find((venda) => venda.codigo == codigoVenda);
}

function alterarStatusVenda() {
  const vendaParaAlterarStatus = buscarVendaPorCodigo(prompt("Código da venda para alteração do status:"));
  if (vendaParaAlterarStatus) {
    vendaParaAlterarStatus.alterarStatus("Em Andamento");
    exibirVendas();
  }
}

function excluirCarro() {
  const vendaParaExcluirCarro = buscarVendaPorCodigo(prompt("Código da venda para exclusão do carro:"));
  if (vendaParaExcluirCarro) {
    vendaParaExcluirCarro.removeCarro(prompt("Código do carro para exclusão:"));
    exibirVendas();
  }
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
};

function exibirTotalizadores() {
  const colecaoTotais = calcularTotalizadores(vendas);
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "<h2>Totalizadores</h2><pre>" + JSON.stringify(colecaoTotais, null, 2) + "</pre>";
}

const obterVendasComCarros = (asVendas, qtde) => {
  return asVendas.filter(venda => venda.carros.length >= qtde);
};

function exibirFiltro() {
  const vendasComCarros = obterVendasComCarros(vendas, 2);
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "<h2>Filtro - Vendas com mais de 2 carros</h2><pre>" + JSON.stringify(vendasComCarros, null, 2) + "</pre>";
}

const existeVendaSemCarro = (asVendas) => {
  return asVendas.some(venda => venda.carros.length === 0);
};

function exibirInconsistencia() {
  const haInconsistencia = existeVendaSemCarro(vendas);
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "<h2>Inconsistências</h2>" + (haInconsistencia ? "Há vendas sem carro." : "Todas as vendas estão com pelo menos 1 carro.");
}
