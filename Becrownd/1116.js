var input = `3
3 -2
-8 0
0 8`;
var lines = input.split('\n');
const qtdPares = parseInt(lines.shift())
for (let i = 0; i < qtdPares; i++) {
  let pares = lines[i].split(" ");
  if (parseFloat(pares[1]) === 0.0) {
    console.log("divisao impossivel");
  }else{
    let divisao = parseFloat(pares[0])/parseFloat(pares[1])
    console.log(divisao.toFixed(1));
  }
}