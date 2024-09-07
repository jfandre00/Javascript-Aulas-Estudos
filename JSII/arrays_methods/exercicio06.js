const datasAnoPrimeiro = ["2024-09-06", "2023-05-12"];

const datasFormatoPadrao = datasAnoPrimeiro.map((data) => {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
});

console.log(datasFormatoPadrao);

//outra forma 

const brDates = datasFormatoPadrao.map(data => data.split("-").reverse().join("/"));

console.log(brDates);

