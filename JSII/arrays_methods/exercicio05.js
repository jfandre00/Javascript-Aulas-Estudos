const temperaturas_c = [0, 20, 30];

const temperaturas_f = temperaturas_c.map(celcius => (celcius*9/5+32).toFixed(2));

console.log(temperaturas_f);