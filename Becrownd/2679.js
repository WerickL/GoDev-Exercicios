input = `1`
var lines = input.split('\n');
let valor = parseInt(lines.shift());
let par = 0;
let cont = valor + 1;
while(true){
  if(cont % 2 === 0){
    par = cont;
    break
  }
  else{
    ++cont;
    continue;
  }
}
console.log(par);
