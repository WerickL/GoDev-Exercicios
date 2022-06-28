const input = `21 10 22 30`
//
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
console.log(horaFim - horaInicio);
if (Math.abs(horaFim - horaInicio) === 0 && minutoFim<minutoInicio) {
    tempoHoras = 23;
}else if (Math.abs(horaFim - horaInicio) === 0 && tempoMinutos === 0) {
  tempoHoras = 24;
}else if ((horaFim - horaInicio === 1 || horaFim - horaInicio === -23) && minutoInicio>minutoFim) {
  tempoHoras = 0;
}
else{
  for (let i = horaInicio; i != horaFim;) {
    if (i === 24) {
      i = 0;
    }else{
      ++i;
      ++tempoHoras;
    } 
  }
  if ((minutoFim - minutoInicio < 0)) {
    --tempoHoras;
  }
}

 console.log(`O JOGO DUROU ${tempoHoras} HORA(S) E ${tempoMinutos} MINUTO(S)`);