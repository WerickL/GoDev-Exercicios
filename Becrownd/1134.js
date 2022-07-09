var input = `8
1
7
2
2
4`;
var lines = input.split('\n');

let alc = 0
let gas = 0
let diesel = 0 

let control = 0
while (control === 0) {
  switch (parseInt(lines.shift())) {
    case 1:
      ++alc;
      break;
    case 2:
      ++gas;
      break;
    case 3:
      ++diesel;
      break;
    case 4:
      control = 1;
      break;
    default: 
      continue;
  }
}
console.log(`MUITO OBRIGADO
Alcool: ${alc}
Gasolina: ${gas}
Diesel: ${diesel}`);