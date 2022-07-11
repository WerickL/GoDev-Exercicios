var input = `4
3 C
5 R
10 S
5 C`;
var lines = input.split('\n');

var testes = parseInt(lines.shift())
let sapos = 0;
let coelhos = 0;
let ratos = 0;
let cobaias = 0
for (let i = 0; i < testes ; i++) {
  let experimento = lines[0].split(" ")
  lines.shift()
  switch (experimento[1]) {
    case "R":
      ratos+=parseInt(experimento[0])
      cobaias+=parseInt(experimento[0])
      break;
    case "C":
      coelhos+=parseInt(experimento[0])
      cobaias+=parseInt(experimento[0])
      break;
    case "S":
      sapos+=parseInt(experimento[0])
      cobaias+=parseInt(experimento[0])
      break;
  }
}
console.log(`Total: ${cobaias} cobaias
Total de coelhos: ${coelhos}
Total de ratos: ${ratos}
Total de sapos: ${sapos}
Percentual de coelhos: ${(100/(cobaias/coelhos)).toFixed(2)} %
Percentual de ratos: ${(100/(cobaias/ratos)).toFixed(2)} %
Percentual de sapos: ${(100/(cobaias/sapos)).toFixed(2)} %`)