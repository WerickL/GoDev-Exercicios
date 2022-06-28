var input = `400.00`;
var lines = input.split('\n');

let salarioAtual = parseFloat(lines.shift());
let reajuste = 0;
let acrescimo = 0;
let salarioAjustado = 0;
if (salarioAtual<=400.00) {
  reajuste = 15;
  acrescimo = (salarioAtual/100)*reajuste;
  salarioAjustado = salarioAtual + acrescimo;
} else if (salarioAtual <= 800.00) {
  reajuste = 12;
  acrescimo = (salarioAtual/100)*reajuste;
  salarioAjustado = salarioAtual + acrescimo;
} else if (salarioAtual <= 1200.00) {
  reajuste = 10;
  acrescimo = (salarioAtual/100)*reajuste;
  salarioAjustado = salarioAtual + acrescimo;
} else if (salarioAtual <= 2000.00) {
  reajuste = 7;
  acrescimo = (salarioAtual/100)*reajuste;
  salarioAjustado = salarioAtual + acrescimo;
} 
else {
  reajuste = 4;
  acrescimo = (salarioAtual/100)*reajuste;
  salarioAjustado = salarioAtual + acrescimo;
}
console.log(`Novo salario: ${salarioAjustado.toFixed(2)}
Reajuste ganho: ${acrescimo.toFixed(2)}
Em percentual: ${reajuste} %`);