input = `30`
var lines = input.split('\n');

let tempoTotal = lines.shift();
let tempoAnos = 0;
let tempoMeses = 0;
let tempoDias = 0;
while (tempoTotal > 0){
  if(Math.floor(tempoTotal/365) >=0){
    tempoAnos = Math.floor(tempoTotal/365)
    tempoTotal %= 365
  }
  if(Math.floor(tempoTotal/30) >=0){
    tempoMeses = Math.floor(tempoTotal/30)
    tempoTotal %= 30
  }
  if(Math.floor(tempoTotal/1) >=0){
    tempoDias = Math.floor(tempoTotal/1)
    tempoTotal %= 1
  }
}
console.log(`${tempoAnos} ano(s)
${tempoMeses} mes(es)
${tempoDias} dia(s)`);
console.log(7%30);