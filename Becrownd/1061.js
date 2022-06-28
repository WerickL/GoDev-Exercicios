var input = `Dia 5
08 : 12 : 23
Dia 5
09 : 13 : 25`
let lines = input.split("\n")


let dias = lines[0].split(" ")
const diaInicio = dias[1]
dias = lines[2].split(" ")
const diaFim = dias[1];
let tempoInicio = lines[1].split(":")
let tempoFim = lines[3].split(":")


const horaInicio = parseInt(tempoInicio.shift());
const minutoInicio = parseInt(tempoInicio.shift());
const segundoInicio = parseInt(tempoInicio.shift());
const horaFim = parseInt(tempoFim.shift());
const minutoFim = parseInt(tempoFim.shift());
const segundoFim = parseInt(tempoFim.shift());
//
let duaracaoDias = 0
let duracaoHoras = 0;
let duracaoMinutos = 0;
let duracaoSegundos = 0;

duaracaoDias = calculaDias(diaInicio, diaFim, horaInicio, horaFim, minutoInicio, minutoFim, segundoInicio, segundoFim)
duracaoHoras = calculaHoras(horaInicio, horaFim, minutoInicio, minutoFim,segundoInicio, segundoFim)
duracaoMinutos = calculaMinutos(minutoInicio, minutoFim, segundoInicio, segundoFim)
duracaoSegundos = calculaSegundos(segundoInicio, segundoFim)

function calculaDias(diaInicio, diaFinal, horaInicio, horaFim, minutoInicio, minutoFim, segundoInicio, segundoFim) {
  if (diaFinal - diaInicio === 0) {
    return 0;
  } else if (horaFim<horaInicio) {
    return diaFinal - diaInicio - 1;
  }else if(horaFim === horaInicio){
    if (minutoInicio>minutoFim) {
      return diaFinal - diaInicio - 1;
    }else if(minutoFim===minutoInicio){
      if (segundoInicio>segundoFim) {
        return diaFinal - diaInicio - 1;
      } else {
        return diaFinal - diaInicio;
      }
    }else{ return diaFinal - diaInicio;}
  }else{ return diaFinal - diaInicio;}
}

 //Cálculo minutos/segundos
 function calculaSegundos(inicio, final) {
  let tempo = 0;
  for (let i = inicio; i != final;) {
    if (i === 60) {
      i = 0;
    }else{
      i++;
      ++tempo;
    } 
  }
  return tempo;
 }
 function calculaMinutos(minutoInicio, minutoFim, segundoInicio, segundoFim) {
  let tempo = 0;
  if (Math.abs(minutoFim - minutoInicio) === 0 && segundoFim<segundoInicio) {
    tempo = 59;
  }else if ((minutoFim - minutoInicio === 1 || horaFim - horaInicio === -23) && minutoInicio>minutoFim) {
    tempo = 0;
  }
  else{
    for (let i = minutoInicio; i != minutoFim;) {
      if (i === 60) {
        i = 0;
      }else{
        i++;
        ++tempo;
      } 
    }
    if (segundoInicio > segundoFim) {
      --tempo;
    } 
  }
  return tempo;
 }

//Cálculo horas
function calculaHoras(horaInicio, horaFim, minutoInicio, minutoFim,segundoInicio, segundoFim) {
  let tempo = 0;
  if (Math.abs(horaFim - horaInicio) === 0 && minutoFim<minutoInicio) {
    tempo = 23;
  }else if ((horaFim - horaInicio === 1 || horaFim - horaInicio === -23) && minutoInicio>minutoFim) {
    tempo = 0;
  }else if (Math.abs(horaFim - horaInicio) === 0 && duracaoMinutos === 0) {
    tempo = 0;
  }
  else{
    for (let i = horaInicio; i != horaFim;) {
      if (i === 24) {
        i = 0;
      }else{
        ++i;
        ++tempo;
      } 
    }
    if (minutoInicio>minutoFim) {
      --tempo;
    }else if(minutoFim===minutoInicio){
      if (segundoInicio>segundoFim) {
        --tempo;
      } 
    }
  }
  return tempo;
}

console.log(`${duaracaoDias} dia(s)
${duracaoHoras} hora(s)
${duracaoMinutos} minuto(s)
${duracaoSegundos} segundo(s)`);
