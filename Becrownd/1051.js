var input = `1701.12`;
var lines = input.split('\n');
const salario = parseFloat(lines.shift())
let imposto = 0;
if (salario<=2000.00) {
  console.log("Isento");
} 
else if (salario <= 3000.00) {
  let aplicavel = salario%2000
  imposto += calculaPorcetagem(aplicavel, 8)
}
else if (salario <= 4500.00) {
  let aplicavel = salario%3000
  imposto += calculaPorcetagem(aplicavel, 8)
}
else {
  let aplicavel = salario%2000
  imposto += calculaPorcetagem(aplicavel, 8)
} 

function calculaPorcetagem(valor, porcetagem) {
  return (valor/100)*porcetagem;
}