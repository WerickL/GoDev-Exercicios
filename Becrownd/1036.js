var input = `2.0 0.0 0.0`
var lines = input.split(' ');
const A = parseFloat(lines.shift())
const B = parseFloat(lines.shift())
const C = parseFloat(lines.shift())
let delta = (Math.pow(B, 2))-(4*A*C)
if(delta < 0 || A === 0){
  console.log("Impossivel calcular");
}
else{
  let val1 = (-B+Math.sqrt(delta))/(2*A)
  let val2 = (-B-Math.sqrt(delta))/(2*A)
  console.log(`R1 = ${val1.toFixed(5)}`);
  console.log(`R2 = ${val2.toFixed(5)}`);
}