var input = `12
12`;
var lines = input.split('\n');


const inicio = Math.min(parseInt(lines[0]), parseInt(lines[1]))
const fim = Math.max(parseInt(lines[0]), parseInt(lines[1]))
let impares = 0;
for (let i = inicio+1; i < fim; i++) {
  if (i%2 != 0) {
    impares += i;
  }
}
console.log(impares);