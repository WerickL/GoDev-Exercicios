var input = `25.00001`
var lines = input.split('');
let valor = parseFloat(lines.shift())
if(valor>=0.0 && valor <=25.0){
  console.log("Intervalo [0,25]");
}else if(valor>25.0 && valor <=50.0){
  console.log("Intervalo (25,50]");
}else if (valor>50.0 && valor <=75.0){
  console.log("Intervalo (50,75]");
}else if(valor>75.0 && valor <=100.0){
  console.log("Intervalo (75,100]");
}else{
  console.log("Fora de intervalo");
}