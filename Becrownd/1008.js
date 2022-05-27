input = `25
100
5.50`
var lines = input.split('\n');

let funcionario = parseInt(lines.shift())
let horasTrabalhadas = parseInt(lines.shift())
let salarioPorHora = parseFloat(lines.shift())
let salario = horasTrabalhadas * salarioPorHora

console.log(`NUMBER = ${funcionario}
SALARY = U$ ${salario.toFixed(2)}`)