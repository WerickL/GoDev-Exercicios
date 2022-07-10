var input = `2 3
5 1
4 -2`;
var lines = input.split('\n');
let soma = 0
let contagem = "";
while (true) {
  let valores = lines.shift().split(" ")
  let inicio = Math.min(parseInt(valores[0]), parseInt(valores[1]))
  let fim = Math.max(parseInt(valores[0]), parseInt(valores[1]))
  soma = 0;
  contagem = ""
  if (inicio <=0 || fim<=0) {
    break;
  } else {
    for (let i = inicio; i <= fim; i++) {
      soma+=i;
      contagem = contagem + " " + String(i);
    }
    console.log(`${contagem.trim()} Sum=${soma}`);
  }
 
}