const input = `12.0 20.0 16.0`;
let lines = input.split(' ');

lines = lines.sort((a, b) => b - a)
const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());
if (A >= (B+C)) {
    console.log("NAO FORMA TRIANGULO");
}
else{
  if (Math.pow(A,2) === (Math.pow(B, 2)+ Math.pow(C, 2))) {
    console.log("TRIANGULO RETANGULO");
  }
  if (Math.pow(A,2) > (Math.pow(B, 2)+ Math.pow(C, 2))) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (Math.pow(A,2) < (Math.pow(B, 2)+ Math.pow(C, 2))) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (A === B && B === C) {
    console.log("TRIANGULO EQUILATERO");
  }
  else if(A==B || A==C || B==C){
    console.log("TRIANGULO ISOSCELES");
  } 
}