var input = `3
8
51
7`;
var lines = input.split('\n');

const testes = parseInt(lines.shift())
for (let i = 0; i < testes; i++) {
  let valor = parseInt(lines.shift())
  if (isPrimo(valor)) {
    console.log(`${valor} eh primo`);
  } else {
    console.log(`${valor} nao eh primo`);
  }
}
function isPrimo(valor) {
  for (let j = 2; j < valor; j++) {
    if (valor%j === 0) {
      return false
    }   
  }
  return true;
}