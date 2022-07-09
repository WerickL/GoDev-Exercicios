let input = `5`
let lines = input.split("\n")
for (let i = 1; i <= parseInt(lines[0]); i++) {
  console.log(`${i} ${Math.pow(i,2)} ${Math.pow(i, 3)}`);
}