const input = `23 10 0 9`
let lines = input.split(" ");

 const horaInicio = parseInt(lines.shift());
 const minutoInicio = parseInt(lines.shift());
 const horaFim = parseInt(lines.shift());
 const minutoFim = parseInt(lines.shift());
 let tempoHoras = 0;
 let tempoMinutos = 0;

 //Cálculo minutos
for (let i = minutoInicio; i != minutoFim;) {
  if (i === 60) {
    i = 0;
  }else{
    i++;
    ++tempoMinutos;
  } 
  if (tempoMinutos === 60) {
    ++tempoHoras;
    tempoMinutos = 0;
  }
 }
//Cálculo horas
console.log(Math.abs(horaFim - horaInicio));
if (Math.abs(horaFim - horaInicio) === 1 && tempoMinutos != 0) {

}else{
  for (let i = horaInicio; i != horaFim;) {
    if (i === 24) {
      i = 0;
    }else{
      ++i
      ++tempoHoras
    } 
  }
}


 console.log(`O JOGO DUROU ${tempoHoras} HORA(S) E ${tempoMinutos} MINUTO(S)`);