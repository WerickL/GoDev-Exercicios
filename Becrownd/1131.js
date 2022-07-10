var input = `3 3
2
`;
var lines = input.split('\n');

let control = 0;
let newGrenal = 1;
let qtdGrenais = 0;
let winInter = 0;
let winGremio = 0;
let empates = 0;
while (control === 0) {
  switch (newGrenal) {
    case 1:
      qtdGrenais++;
      let gols = lines.shift().split(" ")
      let golsInter = parseInt(gols.shift())
      let golsGremio = parseInt(gols.shift())
      if (golsInter<golsGremio) {
        winGremio++;
      } else if(golsInter>golsGremio){
        winInter++
      }else{
        empates++;
      }
      console.log("Novo grenal (1-sim 2-nao)");
      newGrenal = parseInt(lines.shift())
      break;
    case 2:
      control=1;
      break;
    }
}
function venceu_mais(time1,nomeTime1, time2, nomeTime2) {
  if (time1>time2) {
    return nomeTime1 + " venceu mais"
  }else if(time2 > time1){
    return nomeTime2 + " venceu mais"
  }else{
    return "Nao houve vencedor";
  }
}
console.log(`${qtdGrenais} grenais
Inter:${winInter}
Gremio:${winGremio}
Empates:${empates}
${venceu_mais(winGremio, "Gremio", winInter, "Inter")}`);