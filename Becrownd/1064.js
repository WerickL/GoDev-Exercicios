const input = `0.1
0.1
0.1
0.1
0.1
0.1`
var lines = input.split('\n');

let quantPositivos = 0;
let somaPositivos = 0 ;
let mediaOfPositivos;

for (const valor of lines) {
  if (parseFloat(valor) > 0) {
    ++quantPositivos;
    somaPositivos += parseFloat(valor);
  }
}
mediaOfPositivos = somaPositivos/quantPositivos;
console.log(`${quantPositivos} valores positivos
${mediaOfPositivos.toFixed(1)}`);