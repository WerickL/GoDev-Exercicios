var input = `3
8
51
7`;
/*var lines = input.split('\n');

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
}*/
let lines = input.split('\n').map(item=>parseInt(item));

for(let i =1; i<lines.length; i++){
  let contador = 1
  for(let j = 1;j<lines[i];j++){
    if(lines[i]%j!==0){
      contador++
    }
  }
  if (contador===lines[i]-1) {
    console.log(`${lines[i]} eh primo`);
  } else {
    console.log(`${lines[i]} nao eh primo`);
  }
}