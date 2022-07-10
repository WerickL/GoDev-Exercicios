var input = `57
73`;
var lines = input.split('\n');
let inicio = Math.min(parseInt(lines[0]), parseInt(lines[1]))
let fim = Math.max(parseInt(lines[0]), parseInt(lines[1]))
for (let i = inicio+1; i < fim; i++) {
  if (i%5 === 2 || i%5 ===3) {
    console.log(i);
  }  
}
