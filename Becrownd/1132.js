var input = `100
200`;
var lines = input.split('\n');
let inicio = Math.min(lines[0], lines[1])
let fim = Math.max(lines[0], lines[1])

let soma = 0

for (let i = inicio; i <= fim ; i++) {
  if (i%13 !== 0) {
    soma+=i;
  }   
}
console.log(soma);