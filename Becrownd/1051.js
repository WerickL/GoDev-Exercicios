var input = `10000`;
var lines = input.split('\n');
const salario = parseFloat(lines.shift())
let imposto = 0;
if (salario<=2000.00) {
  console.log("Isento");
} 
else if (salario <= 3000.00) {
  let aplicavel = salario-2000
  imposto += calculaPorcetagem(aplicavel, 8)
  console.log("R$",imposto.toFixed(2));
}
else if (salario <= 4500.00) {
  let aplicavel = salario-3000
  imposto += calculaPorcetagem(aplicavel, 18)
  aplicavel = 1000;
  imposto += calculaPorcetagem(aplicavel, 8)
  console.log("R$",imposto.toFixed(2));
}
else {
  let aplicavel = salario-4500
  imposto += calculaPorcetagem(aplicavel, 28)
  aplicavel = 1500;
  imposto += calculaPorcetagem(aplicavel, 18)
  aplicavel = 1000
  imposto += calculaPorcetagem(aplicavel, 8)
  console.log("R$",imposto.toFixed(2));
} 

function calculaPorcetagem(valor, porcetagem) {
  return (valor/100)*porcetagem;
}

