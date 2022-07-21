var input = `9`;
var lines = input.split('\n');

for (let i = 0, x = parseInt(lines.shift( )); i < 6; x++) {
  if (x%2 != 0) {
    ++i
    console.log(x);
  }   
}