  var input = `0.02`
var lines = input.split('\n');
let saque = parseFloat(lines.shift());

let notas100 = 0;
let notas50 = 0;
let notas20 = 0;
let notas10 = 0;
let notas5 = 0;
let notas2 = 0;
let moedas1 = 0;
let moedas50 = 0;
let moedas25 = 0;
let moedas10 = 0;
let moedas5 = 0;
let moedas01 = 0;
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
    notas2 = Math.floor(saque / 2);
    saque %= 2;
  }
  if(Math.floor(saque / 1) >= 0){
    moedas1 = Math.floor(saque / 1);
    saque %= 1;
  }
  if (Math.floor(saque/ 0.5) >= 0){
      moedas50 = Math.floor(saque/ 0.5);
      saque %= 0.5;
  }
  if(Math.floor(saque/ 0.25) >= 0){
      moedas25 = Math.floor(saque/ 0.25);
      saque %= 0.25;
  }
  if(Math.floor(saque/ 0.1) >= 0){
      moedas10 = Math.floor(saque/ 0.1);
      saque %= 0.1;
  }
  if(Math.floor(saque/ 0.05)>= 0){
        moedas5 = Math.floor(saque/ 0.05);
        saque %= 0.05;
  }
  if((saque.toPrecision(1)/0.01) >=0){
      moedas01 = Math.floor(saque.toPrecision(1)/ 0.01);
      saque = (saque.toPrecision(1)) % 0.01;
  }

console.log(`NOTAS:
${notas100} nota(s) de R$ 100.00
${notas50} nota(s) de R$ 50.00
${notas20} nota(s) de R$ 20.00
${notas10} nota(s) de R$ 10.00
${notas5} nota(s) de R$ 5.00
${notas2} nota(s) de R$ 2.00
MOEDAS:
${moedas1} moeda(s) de R$ 1.00
${moedas50} moeda(s) de R$ 0.50
${moedas25} moeda(s) de R$ 0.25
${moedas10} moeda(s) de R$ 0.10
${moedas5} moeda(s) de R$ 0.05
${moedas01} moeda(s) de R$ 0.01`)
console.log(saque)
