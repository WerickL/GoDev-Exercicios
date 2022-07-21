var input = `4
14
123
10
-25`;
var lines = input.split('\n');

const qntVal = parseInt(lines.shift());
let howMuchIn = 0
let howMuchout = 0;
for (let i = 0; i < qntVal; i++) {
  let valor = parseInt(lines.shift())
  if (valor<=20 && valor>=10) {
    ++howMuchIn;
  } else {
    ++howMuchout;
  }    
}
console.log(`${howMuchIn} in
${howMuchout} out`);