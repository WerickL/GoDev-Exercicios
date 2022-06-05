
let notas100 = 0;
let notas50 = 0;
let notas20 = 0;
let notas10 = 0;
let notas5 = 0;
let notas2 = 0;
let notas1 = 0;


input = `576`
var lines = input.split('\n');
let saque = parseInt(lines.shift())
while (saque !== 0){
  //Divisão inteira
  if(Math.floor(saque / 100) >= 0){
    notas100 = Math.floor(saque / 100)
    saque %= 100;
  }
  if(Math.floor(saque / 50) >= 0){
    notas50 = Math.floor(saque / 50)
    saque %= 50;
  }
 if(Math.floor(saque / 20) >= 0){
    notas20 = Math.floor(saque / 20)
    saque %=20;
  }
  if(Math.floor(saque / 10) >= 0){
    notas10 = Math.floor(saque / 10)
    saque %= 10;
  }
  if(Math.floor(saque / 5) >= 0){
    notas5 = Math.floor(saque / 5)
    saque %= 5;
  }
  if(Math.floor(saque / 2) >= 0){
    notas2 = Math.floor(saque / 2)
    saque %= 2;
  }
  if(Math.floor(saque / 1) >= 0){
    notas1 = Math.floor(saque / 1)
    saque %= 1;
  }
}
console.log(`${notas100} nota(s) de R$ 100,00
${notas50} nota(s) de R$ 50,00
${notas20} nota(s) de R$ 20,00
${notas10} nota(s) de R$ 10,00
${notas5} nota(s) de R$ 5,00
${notas2} nota(s) de R$ 2,00
${notas1} nota(s) de R$ 1,00`)

