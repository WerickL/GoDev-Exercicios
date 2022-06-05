input = `765`
var lines = input.split('\n');

let tempoTotal = lines.shift();
let tempoHoras = 0;
let tempoMinutos = 0;
let tempoSegundos = 0;
while (tempoTotal > 0){
  if(Math.floor(tempoTotal/3600) >=0){
    tempoHoras = Math.floor(tempoTotal/3600)
    tempoTotal %= 3600
  }
  if(Math.floor(tempoTotal/60) >=0){
    tempoMinutos = Math.floor(tempoTotal/60)
    tempoTotal %= 60
  }
  if(Math.floor(tempoTotal/1) >=0){
    tempoSegundos = Math.floor(tempoTotal/1)
    tempoTotal %= 1
  }
}
console.log(`${tempoHoras}:${tempoMinutos}:${tempoSegundos}`);