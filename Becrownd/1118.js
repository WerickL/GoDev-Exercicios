var input = `1
10.5
-2.0
-15
7
5
-1
-2
9
1
19
10.0
2
1
2
6.7
8
2
`;
var lines = input.split('\n');


let control = 1;
let notas = 0;
let media = 0;
while (control != 2) {
  let nota = parseFloat(lines.shift())
  if (nota >= 0 && nota <= 10) {
    media += nota
    ++notas;
    if (notas === 2) {
      console.log(`media = ${(media/notas).toFixed(2)}`);
      control=0;
      while (control !== 1 && control !==2) {
        console.log("novo calculo (1-sim 2-nao)");
        control = parseInt(lines.shift())
      }
      notas=0;
      media =0;
    }
  }
  else{
    console.log("nota invalida");
  }
}
