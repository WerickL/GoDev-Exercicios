var input = `6`;
var lines = input.split('\n');
const limite = parseInt(lines.shift())
for (let i = 1; i <= limite; i++) {
  if (i%2 === 0) {
    console.log(`${i}^2 = ${Math.pow(i, 2)}`);
  }
}