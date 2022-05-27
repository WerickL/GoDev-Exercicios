input = `JOAO
500.00
1230.30`
var lines = input.split('\n');

let nomeVendedor = lines.shift()
let salarioFixo = parseFloat(lines.shift())
let totalVendas = parseFloat(lines.shift())
let comissao = totalVendas/100 * 15
let pagamentoTotal = salarioFixo + comissao
console.log("TOTAL = R$ "+pagamentoTotal.toFixed(2))