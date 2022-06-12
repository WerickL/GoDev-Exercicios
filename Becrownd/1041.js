input = `-123.7 0`
var lines = input.split(' ');
let X = parseFloat(lines.shift())
let Y = parseFloat(lines.shift())
if (X > 0) {
  if (Y>0) {
    console.log("Q1\n");
  }
  else if(Y<0){
    console.log("Q4\n");
  }
  else {console.log("Eixo X\n");}
}else if(X < 0){
  if (Y>0) {
    console.log("Q2\n");
  }
  else if(Y<0){
    console.log("Q3\n");
  }
  else {console.log("Eixo X\n");}
}else{
  if (Y>0) {
    console.log("Eixo Y\n");
  }
  else if(Y<0){
    console.log("Eixo Y\n");
  }
  else console.log("Origem\n");
}