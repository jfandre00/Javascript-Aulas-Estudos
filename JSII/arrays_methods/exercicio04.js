const precos = [100, 200, 300];
const imposto = 0.1;

const precosComImposto = precos.map(preco => (preco*(1+imposto)).toFixed(2));

console.log(precosComImposto);