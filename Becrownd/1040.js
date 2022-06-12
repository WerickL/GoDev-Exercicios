let input = `10.0 10.0 0.0 0.0
5.0`
let lines = input.split(' ');
const N1 = parseFloat(lines.shift())
const N2 = parseFloat(lines.shift())
const N3 = parseFloat(lines.shift())
const N4 = parseFloat(lines.shift())
let mediaPonderada = ((N1*2 + N2*3 + N3*4 + N4*1)/10)
let mediaFinal = mediaPonderada;

function isAprovado(mediaAluno) {
  if (mediaAluno >= 7.0) {
    console.log("Aluno aprovado.");
  }
  else if((mediaAluno>=5.0)&&(mediaAluno<6.9)){
    console.log("Aluno em exame.");
    lines = input.split('\n');
    lines.shift()
    let notaExame = parseFloat(lines.shift());
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
    if (recovered(mediaAluno, notaExame)) {
      console.log("Aluno aprovado.");
    } else {
      console.log("Aluno reprovado");
    }
    console.log(`Media final: ${mediaFinal.toFixed(1)}`);
  }
  else if(mediaAluno<5.0){
    console.log("Aluno reprovado.");
  }
}
function recovered(mediaParcial, notaExame) {
  mediaFinal = ((mediaParcial + notaExame)/2)
  if (mediaFinal>=5.0) {
    return true;
  }
  else{
    return false;
  }
}

console.log(`Media: ${mediaPonderada.toFixed(1)}`);
isAprovado(mediaPonderada)
console.log();
