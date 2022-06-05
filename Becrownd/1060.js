let input = `7
-5
6
-3.4
4.6
12`
var lines = input.split('\n');
let valor;
let positivos = 0;

for (let i = 1; i <= 6; i++){
  valor = parseFloat(lines.shift());
  (valor > 0 ? ++positivos: "");
}
console.log(`${positivos} valores positivos` );
