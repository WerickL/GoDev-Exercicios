const input = `1 0`
let lines = input.split(" ");
 const horaInicio = parseInt(lines.shift());
 const horaFim = parseInt(lines.shift());
 let tempo = 0;
for (let i = horaInicio; i != horaFim; ) {
  if (i === 24) {
  i = 0;
}else{
  i++
  ++tempo
} 
}
if (tempo === 0) {
  tempo = 24;
}
 console.log(`O JOGO DUROU ${tempo} HORA(S)`);