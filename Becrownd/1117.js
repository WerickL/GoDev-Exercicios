var input = `-3.5
3.5
11.0
10.0`;
var lines = input.split('\n');

let control = 0
let media = 0;
while (control < 2) {
  let nota = parseFloat(lines.shift())
  if (nota >= 0 && nota <= 10) {
    ++control
    media += nota
  }
  else{
    console.log("nota invalida");
  }
}
console.log(`media = ${(media/2).toFixed(2)}`);